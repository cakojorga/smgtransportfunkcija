# SMG Transport

Web stranica [smgtransport.ba](https://smgtransport.ba) - Next.js (App Router) + TypeScript.

## Komande

```bash
npm install
npm run dev     # razvojni server na http://localhost:3000
npm run build   # produkcijski build
npm run start   # pokretanje produkcijskog builda
npm run lint
```

## Struktura

- `src/app` - stranice, metadata (SEO), `robots.ts`, `sitemap.ts`, ikone
- `src/components` - sekcije stranice (CSS moduli uz svaku komponentu)
- `src/lib/site.ts` - podaci firme (telefon, email, adresa, linkovi) i jezik sajta na jednom mjestu
- `src/lib/services.ts` - tekstovi stranica usluga (`/usluge/...`); nova usluga se dodaje kao novi objekat u nizu i automatski dobija stranicu, link u footeru i unos u sitemap
- `public/og-image.jpg` - slika za dijeljenje na društvenim mrežama (1200x630)

Kada se promijeni tekst politike privatnosti, ažurirati `PRIVACY_LAST_UPDATED` u `src/lib/site.ts`.
