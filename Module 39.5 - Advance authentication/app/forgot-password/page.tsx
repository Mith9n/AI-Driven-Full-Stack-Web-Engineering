"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/app/lib/auth-client";

type Status = "idle" | "pending" | "sent";

export default function ForgotPasswordPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus("pending");

    // The response message is identical whether or not the account exists,
    // so we never reveal which emails are registered.
    const { error } = await authClient.requestPasswordReset({
      email,
      redirectTo: "/reset-password",
    });

    if (error) {
      setError(error.message ?? "Could not send the reset link.");
      setStatus("idle");
      return;
    }

    setStatus("sent");
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <div className="card w-full max-w-sm p-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          Forgot password?
        </h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Enter your account email and we&apos;ll send you a reset link.
        </p>

        {status === "sent" ? (
          <div className="mt-6 flex flex-col gap-4">
            <div className="rounded-xl border border-emerald-600/30 bg-emerald-600/10 p-4">
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                Check your inbox
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                If an account exists for that email, a reset link is on its way.
              </p>
            </div>
            <Link href="/sign-in" className="btn btn-outline w-full">
              Back to sign in
            </Link>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            {error ? (
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            ) : null}

            <button
              type="submit"
              disabled={status === "pending"}
              className="btn btn-primary w-full"
            >
              {status === "pending" ? "Sending link…" : "Send reset link"}
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          Remembered it?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-[var(--accent)] underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
