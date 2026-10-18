import AnimatedSection from "./AnimatedSection";

type Transformation = {
  number: string;
  title: string;
  description: string;
};

const transformations: Transformation[] = [
  {
    number: "1",
    title: "Intentional discipline",
    description:
      "You install systems and habits that protect your focus and make high-output work your default—not a lucky day.",
  },
  {
    number: "2",
    title: "Consistent outcomes",
    description:
      "You ship on a weekly cadence—clean, reviewable, public work your team or clients can rely on.",
  },
  {
    number: "3",
    title: "Accelerated growth",
    description:
      "Short feedback loops turn every project into a step-change in skill, not just another task crossed off.",
  },
  {
    number: "4",
    title: "AI-native mastery",
    description:
      "You don’t just “use” AI—you orchestrate it to automate, analyse, design, build, and deliver at modern speed.",
  },
];

export default function MasterySummarySection() {
  return (
    <AnimatedSection id="summary" className="border-b border-white/5 bg-ebony py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col gap-3 pb-10 text-center md:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-intl-orange">
            The Professional Transformation
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Become the Digital Professional Your Team (or Clients) Can&apos;t Replace
          </h2>
          <p className="max-w-3xl text-sm text-slate-300">
            DOGM.AI builds four capacities that define top performers.
          </p>
        </div>

        <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
          {transformations.map((item) => (
            <div
              key={item.number}
              className="group relative flex h-full gap-4 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/70 to-black/80 p-5 text-left shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            >
              <div className="pointer-events-none absolute inset-px rounded-[1.6rem] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
              <div className="relative z-10 flex h-full gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/50 text-lg font-bold text-intl-orange">
                  {item.number}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
