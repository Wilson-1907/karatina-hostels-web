# Karatina Hostels — Frontend (website)

**This repository is the public marketing frontend** (Vercel).

| Piece | Repo / host |
|--------|-------------|
| Website (this) | **Vercel** |
| Backend API + portals + M-Pesa | [`karatina-hostels`](https://github.com/Wilson-1907/karatina-hostels) on **Render** |
| Database | **Aiven Postgres** (used only by the backend) |

## Setup

```bash
cp .env.example .env.local
# set NEXT_PUBLIC_API_URL to your Render backend URL
npm install
npm run dev
```

## Pages

- Who we are `/about`
- What we do / Services `/product`
- Why us `/why-us`
- Hostels directory `/hostels` (+ `?town=Karatina`)
- Hostel detail `/hostels/[slug]`
- Log in → links to backend `/m` and `/hostels/[slug]/login`

## Deploy on Vercel

1. Import this GitHub repo
2. Set `NEXT_PUBLIC_API_URL=https://YOUR-BACKEND.onrender.com`
3. Deploy (no `DATABASE_URL` on the frontend)
