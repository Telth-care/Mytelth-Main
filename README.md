# Telth website

React + TypeScript + Vite + Tailwind. Routing: `HashRouter` (works on any static host).

```bash
npm install
npm run dev      # local
npm run build    # production build in /dist
```

## Structure
- `src/lib/links.ts` – **all** routes, external links, nav/footer/log-in menus. Edit links here only.
- `src/components/` – Navbar (mobile menu), Footer, Logo (SVG), PageHero, CtaBand, `ui.tsx` (Reveal animation, Btn, cards), `forms.tsx`.
- `src/pages/` – one file per page, fully responsive (mobile → desktop).
- `src/assets/` – optimised WebP images; `slots.ts` gives them semantic names. Originals stay in `src/images` (not bundled, safe to delete).

## TODO before launch
- Replace placeholder external links in `links.ts` (Play Store, T-Mart, Natlife, X, LinkedIn).
- Connect forms (`ContactScreen`, `CmApplicationFormScreen`) to a backend / form service.
- Set `DIGILOCKER_URL` in `CmApplicationFormScreen.tsx`.
- Replace the placeholder Legal pages (`/privacy`, `/terms`, `/hipaa`, `/security`) with approved text.
