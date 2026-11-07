import { AuthStatus } from "./components/auth-status";

const FEATURES = [
  {
    icon: "✉️",
    title: "Email & password",
    text: "Create an account, verify your email, and sign in with a password.",
  },
  {
    icon: "🛰️",
    title: "Social login",
    text: "One-click sign in with Google and GitHub via OAuth.",
  },
  {
    icon: "🪪",
    title: "Profile & session",
    text: "A dedicated profile section with your details and a live session.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-5 py-16 sm:py-24">
      <section className="flex flex-col items-center gap-6 text-center">
        <span className="badge">✦ Secured with better-auth</span>

        <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Sign in, done <span className="brand-text">right.</span>
        </h1>

        <p className="max-w-md text-base leading-7 text-[var(--muted)]">
          A minimal auth practice project — sign up with email and password, or
          continue with Google and GitHub.
        </p>

        <AuthStatus />
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {FEATURES.map(({ icon, title, text }) => (
          <div key={title} className="card flex flex-col gap-2 p-6 text-left">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-lg"
              aria-hidden="true"
            >
              {icon}
            </span>
            <h2 className="text-sm font-semibold">{title}</h2>
            <p className="text-sm leading-6 text-[var(--muted)]">{text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
