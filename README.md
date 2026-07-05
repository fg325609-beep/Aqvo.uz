# AQVO Landing Page

A pixel-accurate, responsive React + Tailwind CSS recreation of the AQVO
"Tabiiy Mahsulotlar" landing page design.

## Stack

- React 18 (functional components + hooks)
- Tailwind CSS
- react-icons (Game Icons + Heroicons sets)
- Vite

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  App.jsx                 – page composition
  index.css                – Tailwind directives + base styles
  components/
    Header.jsx              – sticky nav bar + mobile menu toggle
    MobileMenu.jsx           – right-side drawer (mobile nav)
    Hero.jsx                 – "TABIIY MAHSULOTLAR" hero section
    ProductsBanner.jsx       – product strip banner
    About.jsx                – "AQVO BRENDI HAQIDA" section w/ dark overlay
    CTASection.jsx           – "SIZNING AQVO BILAN LAHZALARINGIZ" CTA
    Gallery.jsx               – 12-image gallery grid
    OrderForm.jsx            – "AQVO BILAN YANGICHA TA'MNI HIS ETING" order form
    Certificates.jsx         – "BIZNING SERTIFIKATLARIMIZ" section
    Footer.jsx                – footer bar
```

## Notes

- All imagery uses placehold.co / Unsplash placeholder URLs — swap in real
  product photography, gallery shots, and certificate scans by replacing the
  `src` values in `ProductsBanner.jsx`, `Gallery.jsx`, `Certificates.jsx`,
  `About.jsx`, and `OrderForm.jsx`.
- The color palette (deep red `#991B1B`, maroon header `#631419`, near-black
  certificates background `#33090A`, and accent orange `#EC9E59`) was sampled
  directly from the provided design screenshot.
- The order form currently logs/holds state locally (`OrderForm.jsx`,
  `handleSubmit`). Wire it up to your backend, a Telegram Bot API endpoint, or
  any other service as needed.
- Fully keyboard accessible: every interactive element has a visible focus
  ring, descriptive `aria-label`/`title` attributes, and the form uses
  `<label htmlFor>` linked to each field's `id`.
- Heading hierarchy: one `<h1>` (hero), `<h2>` for every major section title,
  matching the requested SEO structure.
# Aqvo.uz
