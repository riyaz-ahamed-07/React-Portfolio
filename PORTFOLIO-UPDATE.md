# Portfolio rebuild

The single page uses React 19, Vite, plain CSS, and data from `src/data/profile.js`.
The page is composed from `src/components/site/` and keeps its original paper, ink, lime, and serif accents.

## Verification

- `npm run build`: passed, 35 modules transformed.
- `npm run lint`: passed with zero errors and warnings. ESLint now includes JavaScript and JSX.
- Chromium checks at 360, 390, 768, 1024, 1440, and 1920 pixels: no horizontal overflow, one H1, no broken internal anchors, and no text below 12px.
- Axe WCAG 2 A/AA and 2.1 AA checks: zero violations at all six widths.
- Mobile navigation: opening, Escape, focus return, and closing after anchor selection passed.
- Production Lighthouse mobile: Performance 100, Accessibility 100, SEO 100. CLS 0, LCP 0.8 seconds, TBT 0 milliseconds. These are local measurements, not a guarantee of identical hosted scores.
- Prohibited wording, old email, old metrics, and long dash scans: no matches in source or HTML.

Fonts are self-hosted Latin WOFF2 files with licenses in `public/fonts/`. The hero font is preloaded. Optional font display prevents a late fallback replacement from moving content. External links include their visible label in their accessible name. The brand label includes MR so voice control can match its visible text.

## Resume still needs an updated export

Replace `public/Mohamed_Riyaz_Ahamed_Resume.pdf` with a corrected export. Its current content has the old email spelling, CGPA, and pull request count. The website content has been corrected; the PDF has intentionally not been rewritten.

## Assets and cleanup

Unused legacy components and the unused Ranker, Voltify, sales-agent, hero, pfp, React, and Vite images were removed. Git history preserves them. Unused animation, shader, and icon dependencies were removed. Architecture diagrams use HTML/CSS. Social preview SVG source and exported PNG, apple touch icon, favicon, robots, and sitemap are in `public/`.
