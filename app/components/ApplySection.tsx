import AnimatedSection from "./AnimatedSection";

export default function ApplySection() {
  return (
    <AnimatedSection id="apply" className="relative overflow-hidden bg-ebony py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-12 left-1/4 h-64 w-64 rounded-full bg-intl-orange/15 blur-3xl" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-cerulean/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col justify-between rounded-3xl border border-white/5 bg-black/50 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-intl-orange">
                Apply to DOGM.AI
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl">
                Become the Digital Professional who can learn, build, and adapt on demand.
              </h2>
              <p className="mt-4 text-sm text-slate-300">
                Tell us about your practice, submit a short prompt-based challenge, and complete the AI Readiness assessment. We accept the applicants who crave discipline over shortcuts.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {[
                  "12-20 week cohort with daily copilot support.",
                  "Weekly outcome reviews from mentors + AI.",
                  "3–5 portfolio artifacts tied to a verifiable credential.",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xs font-semibold text-intl-orange">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/apply#apply-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-intl-orange px-8 py-3 text-sm font-semibold text-ebony shadow-[0_0_40px_rgba(250,84,4,0.6)] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-orange-500"
              >
                Start Application <span className="text-lg">&rarr;</span>
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-intl-orange hover:text-intl-orange"
              >
                Review FAQs
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-950/85 to-black/90 p-7 text-sm text-slate-300 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
            <div className="pointer-events-none absolute inset-px rounded-[2rem] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
            <div className="relative space-y-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cerulean">
                  AI Readiness Assessment
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">
                  We evaluate more than motivation.
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Before joining, every applicant completes a short AI systems challenge. We analyze clarity, execution, and how you reason with copilot support to recommend your best track.
                </p>
              </div>
              <ul className="space-y-3 text-xs text-slate-400">
                {[
                  {
                    label: "Diagnostic Sprint",
                    description: "Solve an AI-enhanced scenario with structured prompts + deliverables.",
                  },
                  {
                    label: "Signal Report",
                    description: "Receive a scorecard on focus, craft, and readiness to ship outcomes.",
                  },
                  {
                    label: "Personalized Plan",
                    description: "Get a custom track suggestion and ramp-up resources before day one.",
                  },
                ].map((item) => (
                  <li key={item.label} className="rounded-2xl border border-white/5 bg-black/30 px-4 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                      {item.label}
                    </p>
                    <p className="mt-1">{item.description}</p>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-center text-xs text-slate-300">
                Already confident in your readiness?{" "}
                <a href="#contact" className="font-semibold text-intl-orange hover:text-orange-300">
                  Book a private intake call
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
