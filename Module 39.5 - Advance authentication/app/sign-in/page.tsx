"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/app/lib/auth-client";
import { OAuthError } from "@/app/components/oauth-error";
import { ResendVerificationEmail } from "@/app/components/resend-verification-email";
import { SocialButtons } from "@/app/components/social-buttons";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email"));
    const { error } = await authClient.signIn.email({
      email,
      password: formData.get("password") as string,
    });

    if (error) {
      const needsVerification = error.status === 403;
      setVerificationEmail(needsVerification ? email : null);
      setError(
        needsVerification
          ? "Please verify your email before signing in."
          : error.message ?? "Invalid email or password.",
      );
      setPending(false);
      return;
    }

    router.push("/");
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <div className="card w-full max-w-sm p-8">
        <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Welcome back. Enter your details below.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <OAuthError />
          <SocialButtons errorCallbackURL="/sign-in" />

          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-[var(--card-border)]" />
            <span className="text-xs uppercase tracking-wide text-[var(--muted)]">
              or
            </span>
            <span className="h-px flex-1 bg-[var(--card-border)]" />
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
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
                autoComplete="current-password"
                placeholder="••••••••"
                className="input"
              />
            </div>

            <div className="-mt-2 flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-[var(--accent)] underline underline-offset-4"
              >
                Forgot password?
              </Link>
            </div>

            {error ? (
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            ) : null}

            {verificationEmail ? (
              <ResendVerificationEmail email={verificationEmail} />
            ) : null}

            <button
              type="submit"
              disabled={pending}
              className="btn btn-primary w-full"
            >
              {pending ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-[var(--accent)] underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
