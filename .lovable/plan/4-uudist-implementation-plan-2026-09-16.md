# 4 UUDIST — implementation plan

## Goal
Build the full Estonian, single-page school news presentation at `/`: seven full-screen scroll sections, editorial visuals, accessible animation, and responsive behavior from mobile to desktop.

## Experience
- Create the fixed top reading-progress bar and a side section indicator (`01–07`) that follows scrolling.
- Use Bebas Neue for display text, Inter for body text, and Caveat/JetBrains Mono only where specified.
- Apply the finished visual-polish direction immediately: dark broadcast styling, grain and vignette, boundary color washes, ghost numbers, and distinct accents per story.
- Keep every story’s exact supplied Estonian text and source/date label.

## Sections
1. **Intro:** “4 UUDIST,” outlet chips, presenters, aurora/video-wall treatment, and “KERI ALLA.”
2. **President:** reusable story layout, animated Estonian flag, `71` vote counter, `vaja oli 68`, election timeline, monogram, and restrained ceremonial details.
3. **PISA:** reusable story layout, animated 527/508/499 chart, tricolor edge, `#1 EUROOPAS` badge, and reading-score annotation.
4. **AI:** reusable story layout, code rain, terminal typing sequence, warning styling, deletion bar, and final `9 SEKUNDIT` stamp.
5. **Ronaldo:** reusable story layout plus the signature fall/impact sequence, scoreboard, two-kit crossfade, cursor proximity and tilt on desktop, tap toggle on touch, and preloaded imagery.
6. **Why these stories:** four source-coded cards with staggered 3D entrance and the supplied explanations.
7. **Sources:** clean numbered external-link list, dividers, outlet accents, and closing footer.

## Motion and interaction
- Add GSAP with ScrollTrigger and Lenis, integrated so progress, active section, entrance sequences, counters, and charts stay synchronized.
- Scope and clean up animation instances to avoid duplicate triggers.
- Replace complex effects with simple fades when reduced motion is requested; remove tilt on touch devices.
- Keep the page keyboard-friendly, prevent horizontal overflow, and give controls and imagery accessible labels.

## Assets and metadata
- Generate two coordinated transparent Ronaldo celebration visuals for the yellow and white kits, plus a 1200×630 cover image, because no uploads are currently attached.
- Derive a compact favicon from the presentation identity.
- Add unique page title, description, Open Graph, and Twitter metadata. Use the cover image for social sharing.
- Use the supplied Postimees English backup until an Estonian URL is provided. Keep the missing exact ERR article URL and presenter names as clearly centralized placeholders rather than inventing them.

## Technical details
- Build a reusable `NewsSlide` and small visual components for each story.
- Define all colors, shadows, fonts, and section accents as semantic theme tokens in the global stylesheet.
- Load web fonts through document-head links.
- Install only the requested animation dependencies needed by the implementation.
- Verify the final result in the live preview at desktop and mobile sizes, including scroll activation, kit swapping, tap behavior, reduced-motion behavior, metadata, and current build/runtime diagnostics.
