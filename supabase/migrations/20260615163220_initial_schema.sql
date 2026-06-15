-- ────────────────────────────────────────────
-- AmaQithi Clan Portal — Initial Schema
-- ────────────────────────────────────────────

create extension if not exists "pgcrypto";

-- ────────────────────────────────────────────
-- 1. CLAN MEMBERSHIP APPLICATIONS
-- ────────────────────────────────────────────
create table public.membership_applications (
  id                    uuid primary key default gen_random_uuid(),
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now(),

  full_name             text not null,
  surname               text not null,
  email                 text not null,
  phone                 text,
  region                text,
  village               text,

  lineage               text not null,
  voucher_one           text,
  voucher_two           text,
  how_found             text,

  skill_profession      text,
  document_url          text,

  declaration_confirmed boolean not null default false,

  status                text not null default 'pending'
                        check (status in ('pending', 'under_review', 'approved', 'rejected', 'suspended')),
  reviewer_notes        text,
  reviewed_by           text,
  reviewed_at           timestamptz,

  membership_tier       text not null default 'registered'
                        check (membership_tier in ('registered', 'verified', 'dna_verified'))
);

-- ────────────────────────────────────────────
-- 2. HELP REQUESTS
-- ────────────────────────────────────────────
create table public.help_requests (
  id                    uuid primary key default gen_random_uuid(),
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now(),

  full_name             text not null,
  surname               text not null,
  email                 text not null,
  phone                 text,
  membership_number     text,

  request_type          text not null
                        check (request_type in ('business', 'project', 'education', 'emergency')),
  description           text not null,
  what_tried            text,
  specific_ask          text not null,

  document_url          text,

  status                text not null default 'pending'
                        check (status in ('pending', 'under_review', 'approved', 'rejected', 'fulfilled')),
  reviewer_notes        text,
  reviewed_by           text,
  reviewed_at           timestamptz,

  membership_id         uuid references public.membership_applications(id) on delete set null
);

-- ────────────────────────────────────────────
-- 3. GENOMY DNA SIGN-UPS
-- ────────────────────────────────────────────
create table public.genomy_signups (
  id                          uuid primary key default gen_random_uuid(),
  created_at                  timestamptz not null default now(),
  updated_at                  timestamptz not null default now(),

  full_name                   text not null,
  surname                     text not null,
  email                       text not null,
  phone                       text,
  region                      text,

  lineage                     text,

  consent_dna_testing         boolean not null default false,
  consent_anonymised_data     boolean not null default false,
  consent_future_requirement  boolean not null default false,

  kit_status                  text not null default 'not_sent'
                              check (kit_status in ('not_sent', 'kit_sent', 'sample_received', 'processing', 'complete')),
  kit_sent_at                 timestamptz,
  result_received_at          timestamptz,

  dna_results                 jsonb,

  membership_id               uuid references public.membership_applications(id) on delete set null
);

-- ────────────────────────────────────────────
-- 4. ORAL HISTORY ARCHIVE SUBMISSIONS
-- ────────────────────────────────────────────
create table public.oral_history_submissions (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),

  full_name       text not null,
  email           text not null,
  phone           text,

  description     text not null,
  document_url    text,

  family_branch   text,
  region          text,
  time_period     text,

  status          text not null default 'received'
                  check (status in ('received', 'reviewed', 'published', 'archived'))
);

-- ────────────────────────────────────────────
-- 5. DIRECTORY PRE-REGISTRATIONS
-- ────────────────────────────────────────────
create table public.directory_registrations (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),

  full_name       text not null,
  email           text not null,
  phone           text,
  region          text,
  skill           text not null,
  bio             text,

  membership_id   uuid references public.membership_applications(id) on delete set null,

  visible         boolean not null default false
);

-- ────────────────────────────────────────────
-- 6. ADMIN AUDIT LOG
-- ────────────────────────────────────────────
create table public.admin_audit_log (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  action        text not null,
  table_name    text not null,
  record_id     uuid not null,
  performed_by  text not null,
  notes         text
);

-- ────────────────────────────────────────────
-- INDEXES
-- ────────────────────────────────────────────
create index on public.membership_applications (status);
create index on public.membership_applications (created_at desc);
create index on public.membership_applications (surname);
create index on public.help_requests (status);
create index on public.help_requests (request_type);
create index on public.help_requests (created_at desc);
create index on public.genomy_signups (kit_status);
create index on public.genomy_signups (created_at desc);
create index on public.oral_history_submissions (status);
create index on public.directory_registrations (visible);
create index on public.directory_registrations (skill);

-- ────────────────────────────────────────────
-- ROW LEVEL SECURITY
-- ────────────────────────────────────────────
alter table public.membership_applications    enable row level security;
alter table public.help_requests              enable row level security;
alter table public.genomy_signups             enable row level security;
alter table public.oral_history_submissions   enable row level security;
alter table public.directory_registrations    enable row level security;
alter table public.admin_audit_log            enable row level security;

-- Public INSERT only — all reads go through service role on the server
create policy "public can submit membership"
  on public.membership_applications for insert to anon with check (true);

create policy "public can submit help requests"
  on public.help_requests for insert to anon with check (true);

create policy "public can submit genomy signups"
  on public.genomy_signups for insert to anon with check (true);

create policy "public can submit oral history"
  on public.oral_history_submissions for insert to anon with check (true);

create policy "public can submit directory registration"
  on public.directory_registrations for insert to anon with check (true);

-- ────────────────────────────────────────────
-- UPDATED_AT TRIGGER
-- ────────────────────────────────────────────
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_updated_at
  before update on public.membership_applications
  for each row execute function public.handle_updated_at();

create trigger set_updated_at
  before update on public.help_requests
  for each row execute function public.handle_updated_at();

create trigger set_updated_at
  before update on public.genomy_signups
  for each row execute function public.handle_updated_at();
