# Goal
Strengthen `qithi.co.za` technical SEO, on-page SEO, schema quality, and AI-citation readiness so core heritage pages are easier to crawl, index, understand, and cite across Google, Bing/Copilot, ChatGPT, Perplexity, Claude, and Gemini.

# Context
## What already exists
- Strong long-form heritage content across core pages (`/`, `/who-we-are`, `/amaqithi`, `/san`, `/thembu`, `/families`).
- Existing JSON-LD coverage through `components/SchemaOrg.tsx`.
- Dynamic `robots.ts`, `sitemap.ts`, and `llms.txt` already present.
- Section-level deep links under `/who-we-are/sections/[slug]`.

## What is missing / needs correction
- Schema cleanup to avoid unsupported or risky rich-result patterns for this site type.
- Clearer AI crawler directives (not all citation bots explicitly handled).
- Sitemap gaps for deep section pages.
- Metadata keyword sets that are too broad/repetitive on high-value pages.
- Additional trust/authority signals in organization schema.

# Scope
## In scope
- `app/robots.ts`
- `app/sitemap.ts`
- `app/layout.tsx`
- `app/page.tsx`
- `app/amaqithi/page.tsx`
- `components/SchemaOrg.tsx`
- `docs/prompts/README.md`

## Out of scope
- Full content rewrite of all pages.
- New media generation pipeline (OG/hero image production).
- Backlink/off-site authority campaigns.
- Search Console and analytics-side implementation.

# Plan link
- N/A (execution-first SEO remediation pass).

# Implementation instructions
1. Remove `FAQPage` JSON-LD usage from non-eligible pages and keep on-page FAQ content visible for users.
2. Keep JSON-LD server-rendered and expand organization trust signals (`ContactPoint`, `sameAs`).
3. Update `robots.ts` to explicitly allow key AI search/citation bots, and isolate training-only crawler handling.
4. Expand `sitemap.ts` to include `/who-we-are/sections/*` deep pages for index discovery and internal topical coverage.
5. Reduce keyword stuffing patterns in page metadata to focused, high-intent keyword sets.
6. Re-run lint diagnostics on all edited files.
7. Summarize remediation using SEO audit categories (crawl/index, technical, on-page, E-E-A-T/authority, GEO readiness).

# Acceptance
- No `FAQPage` schema remains in site code.
- `robots.ts` includes explicit AI search crawler handling and remains valid.
- Sitemap output includes `who-we-are` section subpages.
- Edited files pass lint diagnostics.
- Core metadata and schema are cleaner, more focused, and better aligned with modern SEO/GEO expectations.
