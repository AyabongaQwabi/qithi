# Goal
Create one high-SEO topical authority page for AmaQithi iziduko/izibongo/clan names, then align all other clan-name sections across the site to the same wording, ordering, and visual emphasis.

# Context
## What already exists
- Clan-name content appears in multiple pages (`/amaqithi`, `/who-we-are`, `/san`, footer, and section deep dives).
- The homepage now auto-lists oral-history audio files from `public/oral-history`.
- There is active oral-history framing that AmaQithi are a San group assimilated into Thembu historical structures.

## What is missing
- No single SEO authority URL dedicated to clan-name intent (`iziduko`, `izibongo`, `clan names`).
- Existing clan-name blocks have inconsistent ordering and mixed typography.
- The newly provided audio file `reason-why-we-use-thembu-clan-names-by-krauseb-runtu.mp3` is not explicitly surfaced as a clan-name context recording.

# Scope
## In scope
- `app/iziduko-izibongo-clan-names/page.tsx` (new authority page)
- `app/amaqithi/page.tsx`
- `app/who-we-are/page.tsx`
- `app/who-we-are/sections/[slug]/page.tsx`
- `app/san/page.tsx`
- `components/Footer.tsx`
- `app/page.tsx`
- `app/sitemap.ts`
- `docs/prompts/README.md`

## Out of scope
- Rewriting all thesis-level historical argumentation.
- Audio transcription or translation of recordings.

# Plan link
- N/A for this direct implementation pass.

# Implementation instructions
1. Add a single authority page at `/iziduko-izibongo-clan-names` with:
   - SEO-focused metadata for iziduko/izibongo/clan-name queries.
   - Full caps, extra-large rendering of the complete clan-name sequence.
   - Grouped display for:
     - Qithi-line linked cluster: Umqithi, Ndinga, Rhadu, Mnono, Nomsobondwana, Umlebe, U nkomo ayizali izala ngoku miselwa.
     - Ntande/Thembu-linked cluster: Sopitsho, Yem Yem, Ngqolomsila, Vela Bambhentsele, Amantande.
   - Closing line: NgamaQithi amahle neenzipho zawo.
2. Update all existing clan-name blocks to use the same caps sequence and visibly larger typography.
3. Add internal links from those blocks to the new authority page.
4. Explicitly surface `reason-why-we-use-thembu-clan-names-by-krauseb-runtu.mp3` in the homepage audio section while keeping the full audio archive list.
5. Add the new page to `app/sitemap.ts`.

# Acceptance
- `/iziduko-izibongo-clan-names` exists and is indexable with strong metadata.
- Clan-name sections across key pages match in naming set and visual style (caps + larger text).
- The new clan-name audio file is visibly listed/surfaced.
- Internal links and sitemap include the new authority page.
