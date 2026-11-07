"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/app/lib/auth-client";

type Status = "idle" | "pending" | "done";

export function ResetPasswordForm({ token }: { token: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const newPassword = formData.get("newPassword") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (newPassword !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setStatus("pending");

    const { error } = await authClient.resetPassword({
      newPassword,
      token,
    });

    if (error) {
      setError(error.message ?? "Could not reset the password.");
      setStatus("idle");
      return;
    }

    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="mt-6 flex flex-col gap-4">
        <div className="rounded-xl border border-emerald-600/30 bg-emerald-600/10 p-4">
          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
            Password updated
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Your new password is active. Sign in to continue.
          </p>
        </div>
        <Link href="/sign-in" className="btn btn-primary w-full">
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
      <div>
        <label htmlFor="newPassword" className="label mb-1.5">
          New password
        </label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          placeholder="At least 8 characters"
          className="input"
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="label mb-1.5">
          Confirm password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          placeholder="Repeat the new password"
          className="input"
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
        {status === "pending" ? "Updating password…" : "Reset password"}
      </button>
    </form>
  );
}
