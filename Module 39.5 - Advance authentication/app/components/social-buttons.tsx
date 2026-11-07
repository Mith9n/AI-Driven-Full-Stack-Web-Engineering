"use client";

import { useState } from "react";
import { authClient } from "@/app/lib/auth-client";

type Provider = "google" | "github" | "discord";

const PROVIDERS: Array<{ id: Provider; label: string }> = [
  { id: "google", label: "Google" },
  { id: "github", label: "GitHub" },
  { id: "discord", label: "Discord" },
];

export function SocialButtons({ errorCallbackURL }: { errorCallbackURL: string }) {
  const [pending, setPending] = useState<Provider | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function signInWith(provider: Provider) {
    setPending(provider);
    setError(null);

    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: "/",
      errorCallbackURL,
    });

    if (error) {
      // On success the client redirects the browser, so we never get here.
      setError(error.message ?? "Something went wrong. Please try again.");
      setPending(null);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {PROVIDERS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => signInWith(id)}
          disabled={pending !== null}
          className="btn btn-outline w-full"
        >
          {pending === id ? "Redirecting…" : `Continue with ${label}`}
        </button>
      ))}
      {error ? (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      ) : null}
    </div>
  );
}
