# Debby Tella — Portfolio

Professional multi-page graphic design portfolio for Debby Tella.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Replace content later

- Projects: `data/projects.ts`
- Services: `data/services.ts`
- Testimonials: `data/testimonials.ts`
- Site details (email, stats, socials): `data/site.ts`
- Portrait: add `/public/images/debby-portrait.jpg`
- Project photos: add files under `/public/portfolio/` then set `hasCustomImage: true`

## Inquiries

Forms post to `/api/inquiries`. Set `INQUIRY_WEBHOOK_URL` on the server when you connect Resend, Supabase or another backend. Never put secrets in frontend code.
