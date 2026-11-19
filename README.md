# Debby Tella Portfolio

Premium multi-page portfolio for **Debby Tella** (graphic designer).

## Run locally

Double-click `START-WEBSITE.bat` or:

```bash
cd debby-portfolio
npm install
npx next build --webpack
npx next start -H 127.0.0.1 -p 3000
```

Open http://127.0.0.1:3000

## Push updates to GitHub

When Debby sends new work or reviews:

1. Add the files into the project
2. Double-click `PUSH-TO-GITHUB.bat`

Repo: https://github.com/Oluwasegun315/Debby-portfolio

## Add new Fiverr buyer reviews

Fiverr does not provide a free public API to auto-pull seller reviews.

Workflow that keeps the site growing:

1. Debby delivers an order
2. Buyer leaves a Fiverr review
3. Open http://127.0.0.1:3000/dashboard
4. Paste the review with passcode `debby-reviews`
5. It appears with existing reviews on Home + Testimonials
6. Run `PUSH-TO-GITHUB.bat` so GitHub stays in sync

Optional: set `REVIEW_SECRET` in `.env.local` to change the passcode.
