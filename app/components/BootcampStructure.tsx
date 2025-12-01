import AnimatedSection from "./AnimatedSection";

type Tier = {
  label: string;
  labelClass: string;
  dotClass: string;
  title: string;
  body: string;
  bullets: string[];
  footer: string;
};

const tiers: Tier[] = [
  {
    label: "Daily Structure",
    labelClass: "text-intl-orange",
    dotClass: "bg-intl-orange",
    title: "Daily Operating Rhythm",
    body:
      "2-3 hour windows that mix async standups, deep work, and mentor office hours so part-time learners keep momentum without burning out.",
    bullets: [
      "Morning async standup + plan inside the workspace",
      "90-minute focused build sprint (live or async)",
      "AI-guided task breakdown + code reviews",
      "Drop-in mentor office hours for blockers",
      "End-of-day micro deliverable or reflection",
    ],
    footer: "Show up daily, log progress, bank proof.",
  },
  {
    label: "Weekly Structure",
    labelClass: "text-cerulean",
    dotClass: "bg-cerulean",
    title: "Weekly Outcome Cycles",
    body: "Monday planning, mid-week checkpoints, and Friday demos force a shipped asset every week.",
    bullets: [
      "Kickoff call to set sprint scope + success criteria",
      "Structured build templates + research prompts",
      "Wednesday async checkpoint with mentor notes",
      "Friday live demo / Loom walkthrough upload",
      "Weekly red-yellow-green progress dashboard",
    ],
    footer: "You don't just learn - you produce.",
  },
  {
    label: "Monthly Structure",
    labelClass: "text-allports",
    dotClass: "bg-allports",
    title: "Monthly Mastery Milestones",
    body: "Full-stack evaluations with hiring ops so you see exactly where to improve and what to showcase.",
    bullets: [
      "Full project + repo audit with senior mentor",
      "AI-assisted skills assessment and rubric scoring",
      "Portfolio + LinkedIn refresh session",
      "Career strategist call for blockers & goals",
      "Optional advanced brief if you're ahead",
    ],
    footer: "Each month documents a measurable leap.",
  },
];

export default function BootcampStructure() {
  return (
    <AnimatedSection className="border-b border-white/5 bg-black/60 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-intl-orange">
            How the Bootcamp Works
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Daily Discipline. Weekly Outcomes. Monthly Mastery.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/70 to-black/85 p-8 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
            >
              <div className="pointer-events-none absolute inset-px rounded-[2rem] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
              <div className="relative z-10 flex h-full flex-col">
                <span
                  className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider ${tier.labelClass}`}
                >
                  {tier.label}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">
                  {tier.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  {tier.body}
                </p>
                <ul className="mt-5 space-y-3 text-[12px] text-slate-400">
                  {tier.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 text-[12px] text-slate-300"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${tier.dotClass}`}
                        />
                      </span>
                      <span className="text-slate-300">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {tier.footer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-slate-300">
            The DOGM.AI loop is intentionally realistic for working
            professionals—short daily rituals, weekly accountability, and
            monthly career checkpoints tie together into one compounding
            operating system:{" "}
            <span className="font-semibold text-white">
              Discipline &rarr; Outcomes &rarr; Growth &rarr; Mastery &rarr;
              Acceleration &rarr; Intelligence.
            </span>{" "}
            Every cycle ships artifacts, proof, and signals that hiring partners
            can verify.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
