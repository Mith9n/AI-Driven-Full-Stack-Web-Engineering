"use client";

import Link from "next/link";
import { authClient } from "@/app/lib/auth-client";
import { Avatar } from "@/app/components/site-header";
import { SignOutButton } from "@/app/components/sign-out-button";

export function AuthStatus() {
  const { data, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="card h-36 w-full max-w-sm animate-pulse" aria-hidden="true" />
    );
  }

  if (!data) {
    return (
      <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link href="/sign-in" className="btn btn-primary w-full sm:w-44">
          Sign in
        </Link>
        <Link href="/sign-up" className="btn btn-outline w-full sm:w-44">
          Create an account
        </Link>
      </div>
    );
  }

  return (
    <div className="card flex w-full max-w-sm flex-col gap-4 p-6">
      <div className="flex items-center gap-3">
        <Avatar name={data.user.name} image={data.user.image} />
        <div className="min-w-0 text-left">
          <p className="truncate text-sm font-semibold">{data.user.name}</p>
          <p className="truncate text-sm text-[var(--muted)]">{data.user.email}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Link href="/profile" className="btn btn-outline flex-1">
          View profile
        </Link>
        <SignOutButton className="btn btn-ghost flex-1" />
      </div>
    </div>
  );
}
