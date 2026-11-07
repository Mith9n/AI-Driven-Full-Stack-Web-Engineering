"use client";

import { useState } from "react";
import { authClient } from "@/app/lib/auth-client";

export function ResendVerificationEmail({ email }: { email: string }) {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function resend() {
    setPending(true);
    setError(null);
    setSent(false);

    const { error } = await authClient.sendVerificationEmail({
      email,
      callbackURL: "/verify-email?verified=true",
    });

    setPending(false);
    if (error) {
      setError(error.message ?? "Could not resend the verification email.");
      return;
    }

    setSent(true);
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={resend}
        disabled={pending}
        className="btn btn-outline w-full"
      >
        {pending ? "Sending…" : sent ? "Send another verification email" : "Resend verification email"}
      </button>
      {sent ? (
        <p className="text-sm text-emerald-700 dark:text-emerald-400" role="status">
          Verification email sent. Check your inbox.
        </p>
      ) : null}
      {error ? (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
