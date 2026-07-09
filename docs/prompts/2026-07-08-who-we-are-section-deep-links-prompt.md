# Goal
Upgrade the `who-we-are` experience into an information-rich heritage hub by adding section-level deep-dive pages and linking each primary section to its own standalone explanation page. Make the page more constructive for readers by explaining claims first, then evidence.

# Context
- Existing state:
  - `app/who-we-are/page.tsx` has a stronger section flow but still needs standalone explanation pages per section.
  - Some statements (for example around Qwabi Joka as an anchor line) need explicit explanatory destination pages.
- Missing:
  - Dedicated deep pages for each major `who-we-are` section.
  - In-section `Read more` / `See why` CTAs.
  - Additional sourced context from `docs/moreinfo`, `docs/july updates`, and `docs/newupdates`.

# Scope
- In scope:
  - `app/who-we-are/page.tsx`
  - New deep-dive routes under `app/who-we-are/` (section pages)
  - Copy updates informed by project docs in `docs/`
- Out of scope:
  - DB/schema changes
  - Membership logic changes
  - Unrelated redesign outside `who-we-are` information architecture

# Plan link
- No separate plan doc yet.

# Implementation instructions
1. Audit all relevant markdown research docs under `docs/moreinfo`, `docs/july updates`, and `docs/newupdates` for high-signal facts.
2. Define section slugs for each core `who-we-are` section and create standalone pages under `app/who-we-are/<slug>/page.tsx`.
3. Create one dedicated Qwabi explainer page that answers:
   - Who Qwabi Joka is
   - Why descendants, village links, and naming patterns are currently strong anchors
   - Why this does not collapse all AmaQithi into one line
4. Add `Read more` / `See why` buttons in each corresponding section on `app/who-we-are/page.tsx`.
5. Keep claims calibrated:
   - Distinguish confirmed evidence vs active hypotheses.
   - Preserve unresolved items explicitly.
6. Run lint checks on modified files and resolve any introduced issues.

# Acceptance
- Each main `who-we-are` section has a working linked deep page.
- Qwabi anchor statement links to a standalone explainer page.
- Deep pages include richer context from project docs, written in clear heritage-website language.
- No new lint errors in edited files.
