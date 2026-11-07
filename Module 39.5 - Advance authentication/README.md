# Auth Practice

Email/password and social authentication powered by Better Auth, MongoDB, and Resend.

## Email setup

Set `RESEND_API_KEY` in `.env` to your Resend API key. The app uses
`Auth Practice <onboarding@resend.dev>` as the development sender unless
`RESEND_FROM_EMAIL` is set. Resend's test sender can only deliver to the email
address associated with your Resend account. For other recipients and
production, verify a sending domain in Resend and set `RESEND_FROM_EMAIL` to
that verified sender address.

New email/password accounts receive a verification link and cannot sign in
until verified. Verification links expire after one hour. Users can request a
new link from the sign-in page. Password-reset links are also sent with Resend.

## Run locally

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Configure the Better Auth, MongoDB, and social provider variables already used
by the app in `.env`, then open <http://localhost:3000>.
