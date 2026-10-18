import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "80%+", label: "Ship a flagship capstone", color: "text-intl-orange" },
  { value: "10-20h", label: "Deep weekly AI reps", color: "text-cerulean" },
  { value: "3-5", label: "Hire-ready artifacts", color: "text-allports" },
];

const leaveWithItems = [
  {
    color: "bg-intl-orange",
    title: "A proof-heavy portfolio",
    description:
      "Apps, case studies, dashboards, and workflows hiring managers can understand in one skim.",
  },
  {
    color: "bg-cerulean",
    title: "AI-native workflows",
    description: "Playbooks you can drop into your current role on Day 1.",
  },
  {
    color: "bg-allports",
    title: "A compelling narrative",
    description: "Proof-of-work stories tied to shipped outcomes, not buzzwords.",
  },
  {
    color: "bg-intl-orange",
    title: "A repeatable system",
    description: "The DOGM.AI Loop you can reuse for every new skill you want to master.",
  },
];

const outcomeTracks = [
  {
    number: "1",
    title: "Career & role shifts",
    description:
      "Move into product, design, data, or Digital Professional leadership with artifacts that show how you think, ship, and collaborate.",
    color: "bg-intl-orange/15 text-intl-orange",
  },
  {
    number: "2",
    title: "Stronger in-role performance",
    description:
      "Become the AI-native pro on your team &mdash; faster, clearer, more reliable, with receipts.",
    color: "bg-cerulean/15 text-cerulean",
  },
  {
    number: "3",
    title: "Founder & side-project leverage",
    description:
      "Prototype faster, validate smarter, and launch more experiments without burning out.",
    color: "bg-allports/15 text-allports",
  },
];

export default function OutcomesSection() {
  return (
    <AnimatedSection
      id="outcomes"
      className="border-b border-white/5 bg-black/90 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-intl-orange">
              Outcomes
            </p>
            <h2 className="mt-1 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Outcomes Recruiters and Clients Actually Trust
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              DOGM.AI is built on shipped evidence, not theory. Digital Professionals
              leave with live work, AI-native workflows, and a narrative they can
              defend in search results, sales calls, and interviews.
            </p>
          </div>
          <div className="w-full max-w-sm md:text-right">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Stats That Matter
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-[11px] text-slate-300">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-slate-900/70 to-black/80 px-3 py-3 shadow-[0_12px_25px_rgba(0,0,0,0.4)]"
                >
                  <div className="pointer-events-none absolute inset-px rounded-[1.25rem] border border-white/5 opacity-30 group-hover:opacity-60" />
                  <div
                    className={`relative font-heading text-lg font-extrabold ${stat.color}`}
                  >
                    {stat.value}
                  </div>
                  <div className="relative mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                What You&apos;ll Leave With
              </p>
              <ul className="mt-3 space-y-3 text-xs text-slate-300">
                {leaveWithItems.map((item) => (
                  <li className="flex items-center gap-3" key={item.title}>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40">
                      <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                    </span>
                    <span>
                      <span className="font-medium text-white">
                        {item.title}
                      </span>{" "}
                      <span>{item.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-slate-900/70 to-black/80 p-4 text-xs text-slate-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
              <div className="pointer-events-none absolute inset-px rounded-[1.5rem] border border-white/5 opacity-30 group-hover:opacity-60" />
              <p className="font-semibold text-white">
                &ldquo;The system replaced overwhelm with a roadmap — and every step produced proof.&rdquo;
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/70 to-black/80 p-5 text-xs text-slate-300 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
            <div className="pointer-events-none absolute inset-px rounded-[2rem] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
            <div className="relative mb-3 flex items-center justify-between text-[11px] text-slate-400">
              <span>Where This Takes You</span>
              <span className="rounded-full bg-black/60 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]">
                Career Outcomes
              </span>
            </div>

            <div className="relative space-y-4">
              {outcomeTracks.map((track) => (
                <div
                  key={track.title}
                  className="flex items-start gap-3 rounded-2xl border border-slate-800/50 bg-black/50 px-3 py-3"
                >
                  <div
                    className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${track.color}`}
                  >
                    {track.number}
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-white">
                      {track.title}
                    </div>
                    <p
                      className="mt-1 text-[11px] text-slate-400"
                      dangerouslySetInnerHTML={{ __html: track.description }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-4 border-t border-white/5 pt-3 text-[11px] text-slate-400">
              <span className="font-semibold uppercase tracking-[0.16em]">
                TL;DR
              </span>
              <p className="mt-2">
                Become the Digital Professional who can learn, ship, and adapt on demand &mdash; with proof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
