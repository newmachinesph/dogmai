export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ebony/95 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4">
        <div className="flex flex-col items-center">
          <div className="flex h-14 w-36 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-md">
            <span className="font-heading text-lg uppercase tracking-[0.25em] text-white/90">
              DOGM.AI
            </span>
          </div>
          <div className="mt-2 text-center">
            <div className="whitespace-nowrap font-heading text-xs font-semibold tracking-wide text-slate-200 sm:text-sm">
              Accelerate Mastery. Learn With AI. Build Proof.
            </div>
          </div>
        </div>
        <nav className="flex w-full flex-wrap justify-center gap-6 text-xs text-slate-400">
          {[
            { label: "Core System", href: "/#system" },
            { label: "Bootcamps", href: "/#bootcamp" },
            { label: "Pricing", href: "/#pricing" },
            { label: "Contact", href: "/#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-all duration-200 hover:text-intl-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex w-full flex-col items-center gap-2">
          <div className="text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} DOGM.AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
