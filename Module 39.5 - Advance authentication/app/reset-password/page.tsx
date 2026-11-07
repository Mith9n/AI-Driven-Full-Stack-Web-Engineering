import Link from "next/link";
import { Suspense } from "react";
import { ResetPasswordForm } from "./reset-password-form";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

/**
 * Landing page for the link in the password reset email.
 *
 * better-auth's callback endpoint validates the token and redirects here with
 * `?token=<valid token>`, or with `?error=INVALID_TOKEN` when the link has
 * expired or was already used.
 *
 * The card chrome is a static shell; only the token-dependent part sits behind
 * the Suspense boundary, because `searchParams` is request-time data.
 */
export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <div className="card w-full max-w-sm p-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          Reset password
        </h1>

        <Suspense
          fallback={
            <p className="mt-4 text-sm text-[var(--muted)]">
              Checking your link…
            </p>
          }
        >
          <ResetPasswordContent searchParams={searchParams} />
        </Suspense>

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

async function ResetPasswordContent({ searchParams }: { searchParams: SearchParams }) {
  const { token, error } = await searchParams;
  const validToken = typeof token === "string" && token.length > 0 ? token : null;
  const invalidToken = error === "INVALID_TOKEN" || !validToken;

  if (invalidToken) {
    return (
      <>
        <div className="mt-6 rounded-xl border border-amber-600/30 bg-amber-600/10 p-4">
          <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
            This link isn&apos;t valid
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Reset links expire after an hour and can only be used once. Request
            a fresh one to continue.
          </p>
        </div>
        <Link href="/forgot-password" className="btn btn-primary mt-4 w-full">
          Request a new link
        </Link>
      </>
    );
  }

  return (
    <>
      <p className="mt-1 text-sm text-[var(--muted)]">
        Choose a new password for your account.
      </p>
      <ResetPasswordForm token={validToken} />
    </>
  );
}
