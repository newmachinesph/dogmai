import Link from "next/link";

const navLinks = [
  { label: "Core System", href: "/#system" },
  { label: "Bootcamps", href: "/#bootcamp" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ebony/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center py-2">
          <Link
            href="/"
            className="flex h-14 w-36 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-md transition hover:border-intl-orange hover:text-intl-orange"
          >
            <span className="font-heading text-lg uppercase tracking-[0.25em] text-white/90">
              DOGM.AI
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-intl-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/signin"
            className="hidden rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white md:inline-flex"
          >
            Sign in
          </Link>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 rounded-full bg-intl-orange px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ebony shadow-[0_0_30px_rgba(250,84,4,0.45)] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-orange-500"
          >
            Apply Now <span className="text-base">&rarr;</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
