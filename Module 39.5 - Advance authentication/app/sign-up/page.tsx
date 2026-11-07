"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/app/lib/auth-client";
import { OAuthError } from "@/app/components/oauth-error";
import { ResendVerificationEmail } from "@/app/components/resend-verification-email";
import { SocialButtons } from "@/app/components/social-buttons";

export default function SignUpPage() {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email"));
    const { error } = await authClient.signUp.email({
      name: formData.get("name") as string,
      email,
      password: formData.get("password") as string,
      callbackURL: "/verify-email?verified=true",
    });

    if (error) {
      setError(error.message ?? "Could not create the account.");
      setPending(false);
      return;
    }

    setVerificationEmail(email);
    setPending(false);
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <div className="card w-full max-w-sm p-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Sign up with email or a provider below.
        </p>

        {verificationEmail ? (
          <div className="mt-6 flex flex-col gap-4">
            <div className="rounded-xl border border-emerald-600/30 bg-emerald-600/10 p-4">
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                Check your inbox
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                We sent a verification link to {verificationEmail}. Verify your
                email before signing in.
              </p>
            </div>
            <ResendVerificationEmail email={verificationEmail} />
          </div>
        ) : (
          <div className="mt-6 flex flex-col gap-4">
            <OAuthError />
            <SocialButtons errorCallbackURL="/sign-up" />

            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-[var(--card-border)]" />
              <span className="text-xs uppercase tracking-wide text-[var(--muted)]">
                or
              </span>
              <span className="h-px flex-1 bg-[var(--card-border)]" />
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="label mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="email" className="label mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="password" className="label mb-1.5">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  className="input"
                />
              </div>

              {error ? (
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              ) : null}

              <button
                type="submit"
                disabled={pending}
                className="btn btn-primary w-full"
              >
                {pending ? "Creating account…" : "Create account"}
              </button>
            </form>
          </div>
        )}

        {!verificationEmail ? (
          <p className="mt-6 text-center text-sm text-[var(--muted)]">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-[var(--accent)] underline underline-offset-4"
            >
              Sign in
            </Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}
