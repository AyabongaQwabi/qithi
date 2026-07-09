## Goal

Propagate two research updates across the AmaQithi heritage site: (1) the twins-incorporation oral tradition (Qithi and Cube, commoner mothers, black-cow acceptance rite) and (2) the refined 1879 Mount Moorosi alliance picture (San fighters plus local Bathepu villagers supporting Moorosi, with Basotho establishment and colonial forces against him). Keep claims visibly tiered as Documented, Oral tradition, or Our hypothesis.

## Context

### What already exists

- `app/who-we-are/page.tsx` and `app/who-we-are/sections/[slug]/page.tsx` contain the main identity narrative and deep-dive sections.
- Related historical pages (`/amaqithi`, `/san`, `/families`, `/genealogy`) already discuss Qwabi, Moorosi, and 1879.
- The site voice and reading-level constraints are defined in `WRITING.md`.

### What is missing

- A consistent site-wide explanation of the twins-incorporation tradition as an oral-thembu memory of incorporation.
- Updated 1879 framing that includes local Bathepu night resupply to Moorosi's mountain and clear Basotho-establishment opposition.
- Consistent hypothesis framing for "Qwabi as Bathepu ally" across pages that mention Qwabi and Moorosi.

## Scope

- In scope:
  - `app/who-we-are/page.tsx`
  - `app/who-we-are/sections/[slug]/page.tsx` (especially `lesotho-connection`)
  - `app/amaqithi/page.tsx`
  - `app/san/page.tsx`
  - `app/families/page.tsx` and `app/genealogy/page.tsx` for consistency-level updates only
  - `lib/posts.ts` for Moorosi/Qwabi references in relevant post content
- Out of scope:
  - Supabase forms, admin routes, auth, DB schema, route logic refactors
  - New image generation

## Plan Link

- Related earlier prompt: `docs/prompts/2026-07-08-who-we-are-section-deep-links-prompt.md`

## Implementation Instructions

1. Re-read `WRITING.md` and keep all edits plain-language (Grade 8-10), short paragraphs, and no academic drift.
2. Re-read the July Lesotho research notes, with special focus on:
   - `docs/research/2026-07-lesotho-notes/2026-07-09-abathembu-history-update.md`
   - `docs/research/2026-07-lesotho-notes/2026-07-09-moroosi-war-help.md`
   - `docs/research/2026-07-lesotho-notes/2026-07-09-bathepu.md`
3. Update `who-we-are` main page:
   - Add brief twins-incorporation bridge text.
   - Keep it concise and link readers to the Lesotho section deep dive.
4. Update `/who-we-are/sections/lesotho-connection`:
   - Add documented 1879 alliance details (San fighters, Bathepu night resupply, Moroa password, Basotho auxiliaries against).
   - Add 1829 expedition context as counterweight.
   - Replace old Qwabi hedge with refined Bathepu hypothesis framing while keeping hypothesis language explicit.
5. Update other Moorosi/Qwabi pages where claims are now outdated:
   - Add documented Moorosi maternal San-descent citation line where relevant.
   - Shift Qwabi-from-certainty statements into hypothesis framing where needed.
6. Update `families`/`genealogy` only where existing wording conflicts with the new framing; avoid structural rewrites.
7. Ensure citations are compact and page-appropriate. If citation style is absent in a section, add a short Sources note.
8. Run lint diagnostics on edited files and fix any introduced issues.
9. Report contradictions, downgraded claims, unsupported brief claims, and remaining TODOs (including missing second independent twins-tradition URL).

## Acceptance

- Updated pages clearly separate Documented vs Oral tradition vs Our hypothesis claims.
- `/who-we-are` and `/who-we-are/sections/lesotho-connection` reflect the two new research developments.
- Any outdated flat claims about Qwabi/Moorosi are re-framed to match evidence tier.
- Styling and layout conventions remain consistent with existing site components.
- Edited files pass lint checks (or only pre-existing unrelated diagnostics remain).
