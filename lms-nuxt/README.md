# Enterprise LMS (Nuxt 3)

Production-ready Nuxt 3 LMS starter with role-based access control, dynamic theming, and modular architecture.

## Setup

```bash
git clone <repo-url>
cd lms-nuxt
npm install
npm run dev
```

Runs at http://localhost:3000

## Roles
- Super Admin (SA)
- Company Admin (CA)
- Company User (CU)
- Individual User (IU)

Use the login screen to switch roles (mock auth).

## Notes
- The default favicon is an SVG (`/app/public/favicon.svg`) to avoid binary diff issues in PR tooling.
