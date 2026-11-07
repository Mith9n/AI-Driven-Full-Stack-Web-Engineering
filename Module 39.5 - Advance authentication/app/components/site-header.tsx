"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { data } = authClient.useSession();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--card-border)] bg-[color-mix(in_srgb,var(--background)_75%,transparent)] backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="brand-mark" aria-hidden="true">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6l-8-4Z" />
            </svg>
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Auth<span className="brand-text">Practice</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  active
                    ? "border border-[var(--card-border)] bg-[var(--card)] font-medium text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {data ? (
            <Link
              href="/profile"
              className="flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] py-1 pl-1 pr-3 transition-colors hover:bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)]"
            >
              <Avatar name={data.user.name} image={data.user.image} size="h-7 w-7" />
              <span className="hidden max-w-[9rem] truncate text-sm font-medium sm:block">
                {data.user.name}
              </span>
            </Link>
          ) : (
            <>
              <Link href="/sign-in" className="btn btn-ghost">
                Sign in
              </Link>
              <Link href="/sign-up" className="btn btn-primary hidden sm:inline-flex">
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export function Avatar({
  name,
  image,
  size = "h-12 w-12",
  className = "",
}: {
  name: string;
  image?: string | null;
  size?: string;
  className?: string;
}) {
  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt={name}
        className={`${size} rounded-full object-cover ring-2 ring-[var(--card-border)] ${className}`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`${size} flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] font-semibold text-white ring-2 ring-[var(--card-border)] ${className}`}
    >
      <span className="text-sm">{name.charAt(0).toUpperCase()}</span>
    </span>
  );
}
