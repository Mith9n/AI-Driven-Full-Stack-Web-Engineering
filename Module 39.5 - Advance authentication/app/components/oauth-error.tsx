"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function OAuthErrorBanner() {
  const searchParams = useSearchParams();
  const description = searchParams.get("error_description");
  const error = searchParams.get("error");

  if (!error && !description) return null;

  return (
    <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
      {description ?? error}
    </p>
  );
}

/** `useSearchParams` requires a Suspense boundary when cacheComponents is enabled. */
export function OAuthError() {
  return (
    <Suspense fallback={null}>
      <OAuthErrorBanner />
    </Suspense>
  );
}
