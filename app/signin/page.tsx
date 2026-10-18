import type { Metadata } from "next";
import Link from "next/link";

const stats = [
  { label: "Founding builders", value: "48" },
  { label: "Mentor hours logged", value: "600+" },
  { label: "Beta sprints shipped", value: "320" },
];

const commitments = [
  "Daily AI-assisted reps to stay calibrated.",
  "Weekly portfolio drops reviewed by mentors.",
  "Signals that translate into recruiter-ready proof.",
];

const providers = [{ label: "Continue with Google", icon: "G" }];

export const metadata: Metadata = {
  title: "Sign in - DOGM.AI",
  description: "Access your DOGM.AI command center to keep your mastery reps on track.",
};

export default function SignInPage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-ebony text-slate-100"
      style={{
        backgroundImage: "url(/flare-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ebony/30 via-ebony/70 to-ebony" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_-5%,rgba(250,84,4,0.45),transparent_45%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_-10%,rgba(4,183,236,0.45),transparent_45%)]" aria-hidden="true" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-slate-200">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-32 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-base font-semibold tracking-[0.3em] text-white">
              DOGM.AI
            </div>
            <span className="hidden text-[11px] uppercase tracking-[0.4em] text-slate-400 sm:inline">
              Mastery HQ
            </span>
          </Link>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
            <Link
              href="/"
              className="rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              Back home
            </Link>
            <Link
              href="/apply"
              className="rounded-full bg-intl-orange px-4 py-2 font-semibold text-ebony shadow-[0_0_30px_rgba(250,84,4,0.55)] transition hover:-translate-y-0.5 hover:bg-orange-500"
            >
              Apply
            </Link>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 pb-16 pt-4 lg:flex-row lg:items-center">
          <section className="flex-1 space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-intl-orange/80">Welcome back</p>
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Continue the reps that compound your craft.
              </h1>
              <p className="max-w-xl text-base text-slate-200 sm:text-lg">
                DOGM.AI keeps your rituals, mentors, and AI copilots synchronized. Sign in to log today&apos;s
                practice, ship outcomes, and stay accountable to the mastery system.
              </p>
            </div>

            <div className="grid gap-3 text-center text-xs uppercase tracking-[0.3em] text-slate-300 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-black/50 px-4 py-5 shadow-[0_15px_45px_rgba(0,0,0,0.55)]"
                >
                  <p className="text-2xl font-bold tracking-tight text-white">{item.value}</p>
                  <p className="mt-2 text-[10px] text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm text-slate-200">
              {commitments.map((item) => (
                <p key={item} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-intl-orange" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </section>

          <section className="w-full max-w-md rounded-[32px] border border-white/10 bg-black/60 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.65)] backdrop-blur">
            <div className="mb-6 space-y-2">
              <p className="text-xs uppercase tracking-[0.45em] text-cerulean">Command Center</p>
              <h2 className="font-heading text-2xl font-semibold text-white">Sign in to continue</h2>
              <p className="text-sm text-slate-300">Use your email to access the mastery dashboard.</p>
            </div>
            <form className="space-y-5">
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Email address</span>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-intl-orange focus:outline-none focus:ring-2 focus:ring-intl-orange/40"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-slate-200">Password</span>
                <input
                  type="password"
                  placeholder="************"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-intl-orange focus:outline-none focus:ring-2 focus:ring-intl-orange/40"
                />
              </label>
              <div className="flex items-center justify-between text-xs text-slate-300">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/20 bg-black accent-intl-orange"
                    defaultChecked
                  />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-intl-orange hover:text-orange-400">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-intl-orange px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-ebony shadow-[0_0_35px_rgba(250,84,4,0.55)] transition hover:-translate-y-0.5 hover:bg-orange-500"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6 space-y-3">
              {providers.map((provider) => (
                <button
                  key={provider.label}
                  type="button"
                  className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-xs font-semibold tracking-widest text-slate-200">
                    {provider.icon}
                  </span>
                  {provider.label}
                </button>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-slate-400">
              Don&apos;t have an account?{" "}
              <a href="/apply" className="font-semibold text-intl-orange hover:text-orange-400">
                Request an invitation
              </a>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}


