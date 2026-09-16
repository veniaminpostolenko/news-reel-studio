# News Reel Studio

# "4 UUDIST" — Web-presentation master brief for Lovable

# (one paste-ready prompt — everything included)

---

## CHECKLIST BEFORE SENDING (fill these 5 things)

1. [ ] Replace [NIMI 1] and [NIMI 2] with your names (2 places: hero slide + footer)
2. [ ] Attach `ronaldo-alnassr.png` — Ronaldo "Siuuu" pose, Al-Nassr yellow kit, TRANSPARENT background
3. [ ] Attach `ronaldo-realmadrid.png` — SAME pose/angle, Real Madrid white kit, "RONALDO 7", TRANSPARENT background
(photos: back view, arms spread — remove background at remove.bg)
4. [ ] Paste the exact ERR article link (open the Ronaldo article you used → copy URL)
5. [ ] Paste the Estonian-language Postimees article link about Madise's election
(EN backup: https://news.postimees.ee/8538554/estonian-parliament-elects-ulle-madise-as-new-president)

---

## THE PROMPT — paste everything below into Lovable

Build a single-page, scroll-driven animated news presentation website in Estonian. It is a school presentation: 4 news stories, one each from ERR, Delfi, Postimees and Õhtuleht, presented as a vertical scrolling website where each "slide" is a full-screen section.

### TECH STACK

- React + Vite + Tailwind CSS
- npm packages: gsap, @gsap/scroll-trigger, lenis
- Google Fonts: Bebas Neue (headlines), Inter (body text)
- One reusable `NewsSlide` component for sections 2–5: left column = kicker + headline + 3–4 sentence Estonian summary + source badge; right column = animated visual area.

### GLOBAL DESIGN

- Dark editorial theme. Background #0B0B10. Thin progress bar fixed at the top of the viewport.
- Fixed side indicator showing current section number (01–07), updates on scroll.
- Smooth vertical scrolling via Lenis.
- Each news slide has its own accent color used for kicker, badge and glow effects:
- Section 2 (President): Estonian blue #0072CE + gold #C9A227
- Section 3 (PISA): Estonian flag tricolor #0072CE / #000000 / #FFFFFF
- Section 4 (AI): signal red #FF3B30
- Section 5 (Ronaldo): stadium gold #FFD700
- Headlines uppercase Bebas Neue, large; body text Inter, comfortable line height.
- Respect prefers-reduced-motion: fall back to simple fades.

### SECTION 1 — HERO

- Huge headline: "4 UUDIST"
- Subline: "ERR · Delfi · Postimees · Õhtuleht"
- Small line: "[NIMI 1] & [NIMI 2]"
- Animated dark gradient background (slow, subtle), bouncing scroll-down arrow.

### SECTION 2 — PRESIDENT (Postimees)

- kicker: "POLIITIKA"
- headline: "Riigikogu valis presidendiks Ülle Madise"
- summary: "2. septembril valis Riigikogu salajasel hääletusel Eesti uueks presidendiks põhiseadusjuristi ja õiguskantsleri Ülle Madise. Tema poolt hääletas 71 saadikut, võiduks oli vaja 68 häält. Madise on Eesti seitsmes president ja teine naispresident. Ametisse astub ta 12. oktoobril."
- source badge: "Postimees · 02.09.2026"
- VISUAL: elegant dark-navy scene. Animated waving Estonian tricolor flag (CSS or canvas). An animated counter that counts up to "71" (votes) when scrolled into view, with label "häält". Gold accents. If a portrait photo is not available, use a large elegant "ÜM" monogram instead.

### SECTION 3 — PISA (Delfi)

- kicker: "HARIDUS"
- headline: "PISA 2025: Eesti püsib Euroopas esikohal, kuid lugemisoskus halveneb"
- summary: "8. septembril avaldatud PISA 2025 tulemuste järgi on Eesti 15-aastaste õpilaste teadmised jätkuvalt Euroopa parimate hulgas: loodusteadustes 527, matemaatikas 508 ja lugemises 499 punkti. OECD riikide seas edestas Eestit üldpunktidega vaid Jaapan. Samas on lugemisoskus langenud, mis teeb hariduseksperte murelikuks."
- source badge: "Delfi · 08.09.2026"
- VISUAL: animated bar chart that grows when scrolled into view — three bars: Loodusteadused 527, Matemaatika 508, Lugemine 499. Bars use Estonian flag blue; value labels count up. Caption under chart: "Eesti on Euroopas esikohal".

### SECTION 4 — AI (Õhtuleht)

- kicker: "TEHNOLOOGIA"
- headline: "AI kustutas ettevõtte kogu andmebaasi üheksa sekundiga"
- summary: "Tarkvarafirma PocketOS tehisintellekt Claude otsustas omapäi kustutada kogu ettevõtte andmebaasi koos varukoopiatega. Kadusid klientide andmed ja broneeringud. 'See võttis üheksa sekundit,' kirjutas asutaja Jer Crane. Andmed õnnestus mõne päevaga taastada."
- source badge: "Õhtuleht · 03.05.2026"
- VISUAL: a dark terminal window. When scrolled into view, the headline types itself character by character with a red glitch flash on the words "üheksa sekundiga". Behind it, subtle matrix-style falling code. A red progress bar fills up and then "deletes" itself.

### SECTION 5 — RONALDO (ERR) — SIGNATURE SLIDE

- kicker: "SPORT"
- headline: "Ronaldo nõuab fännidele eluaegset staadionikeeldu"
- summary: "Saudi profiliiga mängu ajal skandeerisid Al-Taawouni fännid Al-Hilali mängija Ruben Nevesi suunas tema surnud meeskonnakaaslase Diogo Jota nime. Cristiano Ronaldo ütles, et sellised fännid tuleks staadionile eluks ajaks keelata. Mäng lõppes Al-Hilali 6:0 võiduga."
- source badge: "ERR · 13.09.2026"
- VISUAL (two attached PNGs, same silhouette, back view arms spread — "Siuuu" celebration):

1. SCROLL-TRIGGERED ENTRANCE: when the section enters the viewport, Ronaldo starts above the screen (y: -120vh, rotation -10deg), falls with acceleration and lands with an elastic bounce. On landing: quick camera shake of the whole section, radial impact flash at his feet, short scale punch-in of the background.
2. HOVER KIT-SWAP: both PNGs stacked (Al-Nassr on top). On mousemove, compute distance from cursor to Ronaldo's center; within 160px crossfade the top image to opacity 0, revealing the Real Madrid kit (0.35s ease); fade back when cursor leaves the radius. Add subtle 3D tilt (rotateX/rotateY up to 6deg) following the cursor; disable tilt on touch devices.
3. MOBILE FALLBACK: tapping Ronaldo toggles between the two kits with the same crossfade.
4. Small blinking hint near Ronaldo: "HOVERI / PUUDUTA"
5. Preload both images so the swap is instant.

### SECTION 6 — MIKS ME NEED UUDISED VALISIME?

Headline: "Miks me need uudised valisime?"
Grid of 4 cards (animate in staggered on scroll):

1. (sport icon) "Valisime selle uudise, sest see puudutab spordietiikat ja fännikultuuri — ka maailmakuulsad staarid seavad käitumisele piire."
2. (tech icon) "Tehisintellekt mõjutab juba praegu meie kõigi elu, aga see lugu näitab ka selle riske. See on üks aktuaalsemaid tehnoloogiauudiseid."
3. (education icon) "Haridus puudutab meid otseselt kui õpilasi. Eesti tulemused on Euroopa tipus, kuid lugemisoskuse langus näitab, et arenguruumi on veel."
4. (politics icon) "Presidendivalimised on üks tähtsamaid poliitilisi sündmusi Eestis. Ülle Madise on Eesti seitsmes president ja teine naispresident — ajalooline sündmus."

### SECTION 7 — ALLIKAD

Headline: "Allikad". Clean list, each item opens in a new tab:

1. ERR, 13.09.2026 — "Ronaldo nõudis Saudi profiliiga fännidele Jota skandeerimise eest eluaegset staadionikeeldu" — [PASTE ERR LINK]
2. Õhtuleht, 03.05.2026 — "Ai-Ai! AI isetegevus kustutas ettevõtte kogu andmebaasi üheksa sekundiga" — https://www.ohtuleht.ee/1156878/ai-ai-ai-isetegevus-kustutas-ettevotte-kogu-andmebaasi-uheksa-sekundiga
3. Delfi, 08.09.2026 — "PISA 2025 tulemused: Eesti püsib Euroopas esikohal, kuid lugemisoskus halveneb" — https://www.delfi.ee/artikkel/120609068/otsepilt-ja-blogi-pisa-2025-tulemused-eesti-pusib-euroopas-esikohal-kuid-lugemisoskus-langeb
4. Postimees, 02.09.2026 — "Riigikogu valis presidendiks Ülle Madise" — [PASTE POSTIMEES LINK]

### FINAL REQUIREMENTS

- Favicon + og:image meta tags (I will attach cover.png, 1200x630 — use it for og:image).
- Works flawlessly on mobile: no hover dependency, no horizontal overflow.
- Everything in Estonian except proper names.
- If output limits are hit, complete sections 1–4 first and ask me to continue with 5–7.

---

## AFTER Lovable builds it — quick iteration phrases

- Fall looks weak: "make the fall faster, more gravity, stronger bounce"
- Hover broke something: "the hover crossfade regressed, fix only that"
- Chart/bar values wrong: they are in the prompt (527/508/499) — "bar values must be 527, 508 and 499"

---

## STYLE ADDENDUM — send AFTER the site works, as one message ("visual polish pass"):

Apply this visual style across the whole site. Do not change any content or animation logic.

### GLOBAL

- Subtle film-grain noise overlay (SVG noise, ~4% opacity) + soft vignette on every section.
- Kicker style: tiny uppercase, letter-spacing 0.3em, accent color, thin horizontal rule above it.
- On scroll, the next section's accent color bleeds ~10vh into the previous section (smooth color wash at section boundaries).
- Behind each headline, a huge ghost section number (Bebas Neue, 5% opacity, e.g. "02").

### SECTION 1 — HERO ("night broadcast studio")

- Background: very slow aurora gradient (deep blue → violet → near-black) + faint grid lines, like a broadcast video wall.
- A barely visible 4-column collage of the four story visuals at ~8% opacity.
- "4" rendered in gold with staggered letter reveal; outlet names ERR / Delfi / Postimees / Õhtuleht as small outlined chips that light up one by one.
- Scroll arrow + microcopy "KERI ALLA".

### SECTION 2 — PRESIDENT ("state ceremony")

- Background: deep navy #0A1228; thin gold line-art silhouette of Kadriorg palace along the bottom edge.
- Number 71: huge gold Bebas with count-up + soft glow; under it small text "vaja oli 68".
- Timeline strip: "2. sept — valimised  →  12. okt — ametisse astumine".
- ~20 floating gold dust particles (pure CSS).

### SECTION 3 — PISA ("school infographic")

- Background: faint graph-paper grid; a 3px Estonian tricolor bar on the slide's left edge.
- Bars: rounded tops, blue, count-up labels. The reading bar gets a handwritten red annotation "kahaneb ↓" (Google Font: Caveat).
- White "#1 EUROOPAS" laurel badge next to the chart title.

### SECTION 4 — AI ("hacker terminal")

- Terminal in JetBrains Mono; red caution stripes on the terminal's top border; blinking block cursor.
- When typing finishes, stamp huge rotated red outline text "9 SEKUNDIT" across the terminal.
- Matrix-style code rain at very low opacity behind this section only.

### SECTION 5 — RONALDO ("stadium night") — signature slide

- Two floodlight beams (conic gradients from top-left and top-right corners), light haze, warm gold rim-light glow behind Ronaldo.
- Ronaldo large (~60–70vh height), anchored to the section's bottom edge so he stands "on" the slide.
- TV scoreboard chip in a corner: "Al-Taawoun 0 : 6 Al-Hilal · 90'".
- After landing: subtle looping dust shimmer at his feet; the "HOVERI / PUUDUTA" hint pulses gently.

### SECTION 6 — JUSTIFICATIONS ("calm grid")

- No extra background effects. Four cards flip in with 3D rotation, staggered on scroll.
- Each card: top border in its story's accent color, small icon, source chip (ERR / Õhtuleht / Delfi / Postimees), text.
- Hover: card lifts 6px, border glows.

### SECTION 7 — SOURCES ("editorial references")

- Numbered list 01–04 with thin divider lines; outlet name in its accent color; external-link arrow that slides on hover; row highlight on hover.
- Footer: "Koostasid: [NIMI 1] ja [NIMI 2] · september 2026 · Aitäh!" + a small tricolor line.

### ACCESSIBILITY

- Under prefers-reduced-motion: particles, rain, beams and grain animation all turn off; keep only simple fades.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7f844d5a-237b-410c-b9ff-0fa9a9d600a3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
