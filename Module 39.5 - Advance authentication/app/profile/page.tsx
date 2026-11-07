"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/app/lib/auth-client";
import { Avatar } from "@/app/components/site-header";
import { SignOutButton } from "@/app/components/sign-out-button";

function formatDate(value: string | Date | undefined) {
  if (!value) return "—";
  return new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ProfilePage() {
  const { data, isPending, refetch } = authClient.useSession();

  // `null` means "no local edit yet" — fall back to the session name.
  const [nameDraft, setNameDraft] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);

  if (isPending) {
    return (
      <div className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="card h-72 w-full max-w-lg animate-pulse p-8" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
        <div className="card flex w-full max-w-sm flex-col items-center gap-4 p-8 text-center">
          <span className="brand-mark h-12 w-12 rounded-2xl text-xl" aria-hidden="true">
            ?
          </span>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              You&apos;re not signed in
            </h1>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Sign in to view and edit your profile.
            </p>
          </div>
          <Link href="/sign-in" className="btn btn-primary w-full">
            Sign in
          </Link>
        </div>
      </div>
    );
  }

  const { user, session } = data;
  const displayName = nameDraft ?? user.name;

  async function saveName(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = displayName.trim();
    if (!trimmed || trimmed === user.name) return;

    setSaving(true);
    setMessage(null);

    const { error } = await authClient.updateUser({ name: trimmed });

    if (error) {
      setMessage({ kind: "error", text: error.message ?? "Could not update name." });
      setSaving(false);
      return;
    }

    await refetch();
    setNameDraft(null);
    setMessage({ kind: "success", text: "Name updated." });
    setSaving(false);
  }

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-5 py-12">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
        <p className="text-sm text-[var(--muted)]">
          Your account details and session info.
        </p>
      </header>

      <section className="card overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-[var(--accent)] via-[#a855f7] to-[#f59e0b]" />
        <div className="-mt-10 flex flex-col gap-5 px-7 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <Avatar
              name={user.name}
              image={user.image}
              size="h-20 w-20"
              className="bg-[var(--background)] shadow-lg"
            />
            <div className="pb-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-semibold tracking-tight">{user.name}</h2>
                <span className="badge">
                  {user.emailVerified ? "✓ Verified" : "Unverified"}
                </span>
              </div>
              <p className="text-sm text-[var(--muted)]">{user.email}</p>
            </div>
          </div>
          <SignOutButton className="btn btn-outline shrink-0" />
        </div>

        <dl className="grid grid-cols-1 gap-px border-t border-[var(--card-border)] bg-[var(--card-border)] sm:grid-cols-3">
          {[
            { term: "Member since", value: formatDate(user.createdAt) },
            { term: "Signed in", value: formatDate(session.createdAt) },
            { term: "Session expires", value: formatDate(session.expiresAt) },
          ].map(({ term, value }) => (
            <div
              key={term}
              className="bg-[color-mix(in_srgb,var(--card)_92%,transparent)] px-7 py-4"
            >
              <dt className="text-xs uppercase tracking-wide text-[var(--muted)]">
                {term}
              </dt>
              <dd className="mt-1 text-sm font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="card p-7">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
          Edit display name
        </h3>
        <form onSubmit={saveName} className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={displayName}
            onChange={(event) => setNameDraft(event.target.value)}
            required
            maxLength={64}
            placeholder="Your name"
            className="input flex-1"
          />
          <button
            type="submit"
            disabled={saving || displayName.trim() === user.name}
            className="btn btn-primary"
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </form>
        {message ? (
          <p
            className={`mt-3 text-sm ${
              message.kind === "success"
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {message.text}
          </p>
        ) : null}
      </section>

      <section className="card p-7">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
          Account
        </h3>
        <div className="mt-4 flex flex-col gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
              User ID
            </p>
            <p className="mono-id mt-1">{user.id}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
              Email
            </p>
            <p className="mt-1 text-sm">{user.email}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
