# DOGM.AI

![License: MIT](https://img.shields.io/badge/license-MIT-green) ![Next.js](https://img.shields.io/badge/Next.js-16-black) ![React](https://img.shields.io/badge/React-19-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8)

Marketing and application site for DOGM.AI, a guided AI bootcamp program. It covers the program and track curriculum pages (builder, analyst, designer, marketing, operator), pricing, an application form that stores submissions in Supabase and sends email through Resend, a builder-track dashboard, a certificate page, and pitch-deck and proposal pages.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start
npm run lint
```

Create a `.env.local` with:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (applications are inserted into the `bootcamp_applications` table) |
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | Optional sender address (defaults to the Resend test sender) |
| `RESEND_TO_EMAIL` | Optional comma-separated recipients (defaults to the Resend test inbox) |

## Structure

- `app/` - Next.js App Router pages: `apply`, `curriculum/*`, `dashboard/builder-track`, `certificate/[id]`, `pitch-deck`, `proposal`, `signin`
- `app/api/` - `applications` (Supabase insert + email) and `send` (contact email) routes
- `app/components/` - landing page sections
- `lib/` - Supabase client, Resend client, bootcamp program data

## License

MIT. See [LICENSE](LICENSE).
