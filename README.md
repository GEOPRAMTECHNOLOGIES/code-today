# Code Today API

A backend API scaffold for authentication, services, payments, and admin management.

## Quick start

1. Copy environment template:
   ```bash
   cp .env.example .env
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run locally:
   ```bash
   npm run dev
   ```

If you prefer to install only the server package:
```bash
cd server
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` and set the values before starting the app.

## API endpoints

### Auth
- `POST /auth/register` - register a new user
- `POST /auth/login` - login and receive JWT

### Services
- `GET /services` - list available services
- `POST /services` - create a service (requires Authorization header)

### Payments
- `POST /payments/stkpush` - request an M-Pesa STK Push payment (requires Authorization header)
- `POST /payments/callback` - MPesa callback endpoint

### MPesa configuration
- `MPESA_SHORTCODE` - your Go Live business shortcode
- `MPESA_TILL_NUMBER` - your till number used as `PartyB`
- `MPESA_PASSKEY` - payment passkey
- `MPESA_CALLBACK_URL` - callback URL

### Admin
- `GET /admin/users` - list users
- `GET /admin/projects` - list projects
- `GET /admin/blog` - list blog posts
- `GET /admin/testimonials` - list testimonials
- `GET /admin/analytics` - activity log analytics
- `GET /admin/notifications` - placeholder notifications endpoint
- `GET /admin/settings` - list settings

## GitHub setup

1. Initialize git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a GitHub repository in your account.
3. Add the remote and push:
   ```bash
   git remote add origin https://github.com/<username>/<repo>.git
   git branch -M main
   git push -u origin main
   ```

## Vercel deployment

This app is an Express API. To deploy on Vercel, use the provided `vercel.json` configuration and set environment variables in your project settings.

1. Install Vercel CLI if needed:
   ```bash
   npm install -g vercel
   ```
2. Link and deploy:
   ```bash
   vercel login
   vercel
   ```
3. When Vercel asks for the root directory, choose the project root.
4. Configure environment variables in Vercel to match `.env`.

If you prefer another host for a Node backend, Railway, Render, or Fly are also good choices.
