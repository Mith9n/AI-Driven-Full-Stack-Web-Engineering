import Link from "next/link";
import { Suspense } from "react";

type SearchParams = Promise<{
  error?: string | string[];
  verified?: string | string[];
}>;

export default function VerifyEmailPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <div className="card w-full max-w-sm p-8">
        <h1 className="text-2xl font-semibold tracking-tight">Verify email</h1>
        <Suspense
          fallback={
            <p className="mt-2 text-sm text-[var(--muted)]">
              Checking your verification link…
            </p>
          }
        >
          <VerificationStatus searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}

async function VerificationStatus({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const hasError = typeof params.error === "string" && params.error.length > 0;
  const isVerified = params.verified === "true" && !hasError;

  return (
    <>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
        {hasError
          ? "This verification link is invalid or has expired. Sign in to request a new one."
          : isVerified
            ? "Your email is confirmed. Your account is ready to use."
            : "Open the verification link we sent to your email to finish creating your account."}
      </p>
      <Link
        href={isVerified ? "/" : "/sign-in"}
        className="btn btn-primary mt-6 w-full"
      >
        {isVerified ? "Continue" : "Go to sign in"}
      </Link>
      {hasError ? (
        <Link href="/sign-up" className="btn btn-outline mt-3 w-full">
          Create an account
        </Link>
      ) : null}
    </>
  );
}
