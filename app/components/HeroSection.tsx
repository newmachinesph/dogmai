import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function HeroSection() {
  return (
    <AnimatedSection
      trigger="mount"
      variantsOverride={{
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0 },
      }}
      className="relative overflow-hidden border-b border-white/5 bg-ebony"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="relative h-full w-full">
          <Image
            src="/hero-image.webp"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ebony/40 via-ebony/80 to-ebony/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(250,84,4,0.25),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_-5%,rgba(4,183,236,0.18),transparent_40%)]" />
        </div>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-20 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-intl-orange/40 bg-intl-orange/10 px-3 py-1 text-intl-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-intl-orange" />
              DOGM.AI BOOTCAMP
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-200">
              Next cohort: March 16 | 50 seats
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              The AI bootcamp built to get you hired for the work you ship.
            </h1>
            <p className="text-base text-slate-200 sm:text-lg">
              12-20 weeks of shipping live builds, ruthless mentor feedback, and hiring
              ops support that turns your progress into a narrative recruiters believe.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
            {[
              { label: "Live mentor coaching", value: "4x / week" },
              { label: "Portfolio launches", value: "3+" },
              { label: "Hiring partner intros", value: "Guaranteed" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-center shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              >
                <p className="text-lg font-bold text-white">{item.value}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/apply"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-intl-orange px-6 py-3 text-sm font-semibold text-ebony shadow-[0_0_40px_rgba(250,84,4,0.6)] transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-orange-500"
            >
              Apply to the Bootcamp
              <span className="text-lg">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="w-full max-w-sm space-y-4 rounded-3xl border border-white/10 bg-black/50 p-5 text-sm text-slate-200 shadow-[0_25px_55px_rgba(0,0,0,0.55)]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-intl-orange">
              Inside the Bootcamp
            </p>
            <p className="mt-2 text-base font-semibold text-white">
              12-20 weeks live cohort engineered around disciplined shipping and career outcomes.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Daily accountability, coach-led reviews, demo days, and a placement squad translating
              your work into signed offers.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-cerulean">
              Who Thrives Here
            </p>
            <ul className="mt-2 space-y-2 text-xs text-slate-300">
              <li>🛠️ Product builders ready to lead AI roadmaps and win stakeholder trust.</li>
              <li>🎨 Designers shaping adaptive interfaces with live prototypes, not mockups.</li>
              <li>📊 Analysts transforming data stacks into automated decision engines.</li>
              <li>⚙️ Operators obsessed with automating workflows and scaling execution.</li>
              <li>📣 Marketers converting demand pipelines into AI-driven growth loops.</li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
