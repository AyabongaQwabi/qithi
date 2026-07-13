# Goal
Correct site-wide historical framing so AmaQithi identity is presented as a San group assimilated into the Thembu nation, remove all Bathepu attribution, and align Quthing/Moorosi naming claims with the new oral-history conclusion.

# Context
## What already exists
- Site has broad San-Thembu matrix framing across core pages.
- Recent July updates added Bathepu-linked interpretations and Quthing=emaQithini language in multiple places.
- `/thesis` already carries dated update sections and evidence-tier language.

## What is missing / incorrect
- Bathepu references now conflict with updated oral-history conclusion.
- Some pages state or imply Quthing is named from AmaQithi/emaQithini; new conclusion says Quthing is linked to Quu.
- Moorosi naming lacks new San-name phrasing (`Qengha`, pronounced `Qenya` in isiXhosa) where relevant.
- New conclusion about Ngqabayi, Madolo groups, and Jumba rainmaker conflict is not yet integrated.

# Scope
## In scope
- `app/who-we-are/page.tsx`
- `app/who-we-are/sections/[slug]/page.tsx`
- `app/amaqithi/page.tsx`
- `app/san/page.tsx`
- `app/thesis/page.tsx`
- `components/SchemaOrg.tsx`
- `components/IdentityTeaser.tsx`
- `app/families/page.tsx`
- `lib/posts.ts`
- `docs/prompts/README.md`

## Out of scope
- Final source-locking from audio files not yet provided.
- New research media processing and transcript extraction.

# Plan link
- N/A (direct corrective pass before audio ingestion).

# Implementation instructions
1. Remove all Bathepu references and any framing that identifies AmaQithi as Bathepu.
2. Update Quthing naming text to reflect oral-history conclusion (linked to Quu, not AmaQithi naming).
3. Add/adjust content to state:
   - AmaQithi of Lady Frere are a San group assimilated into the Thembu nation.
   - Glen Grey San groups around Qwabi were under Ngqabayi, with Madolo groups in same zone.
   - Conflict with Thembu of Jumba tied to rainmaker feud context.
   - Moorosi’s San name: Qengha (pronounced Qenya in isiXhosa).
4. Add a dated correction note on core research/history pages so readers see what changed and why.
5. Keep wording in plain language per `WRITING.md` and clearly label unresolved points as oral-history updates pending audio publication.

# Acceptance
- No Bathepu wording remains in site content.
- Core pages reflect San assimilation framing and updated naming claims.
- Dated correction note is visible.
- Changes are internally consistent across metadata/content/schema where relevant.
