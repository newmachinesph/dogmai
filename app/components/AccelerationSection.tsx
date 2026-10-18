import AnimatedSection from "./AnimatedSection";

const accelerators = [
  {
    label: "Remove Drag",
    dotClass: "bg-intl-orange",
    title: "No more getting stuck.",
    description:
      "The AI Co-Pilot clears blockers instantly &mdash; debugging, rewriting, researching, analyzing, or clarifying requirements.",
  },
  {
    label: "Collapse Feedback Loops",
    dotClass: "bg-cerulean",
    title: "Improve 5x faster.",
    description:
      "Get critique, structure, and direction the moment you need it so every iteration compounds.",
  },
  {
    label: "Increase Leverage",
    dotClass: "bg-allports",
    title: "Do more with the same hours.",
    description:
      "AI speeds research, drafts, prototypes, and analysis so you can spend time on judgment and iteration.",
  },
];

export default function AccelerationSection() {
  return (
    <AnimatedSection
      id="acceleration"
      className="border-b border-white/5 bg-black/85 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-intl-orange">
            The AI Co-Pilot Advantage
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            AI Isn&apos;t the Shortcut - It&apos;s the Multiplier
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Acceleration isn&apos;t about working faster&mdash;it&apos;s about
            removing drag, tightening feedback loops, and shrinking the gap
            between idea and output. The AI Co-Pilot keeps you learning,
            building, and iterating at a pace that used to take months.
          </p>
        </div>

        <div className="grid auto-rows-fr gap-8 md:grid-cols-3">
          {accelerators.map((item) => (
            <div
              key={item.label}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/70 to-black/80 p-6 shadow-[0_18px_35px_rgba(0,0,0,0.65)]"
            >
              <div className="pointer-events-none absolute inset-px rounded-[1.8rem] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
              <div className="relative z-10 flex flex-col">
                <div className="mb-3 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${item.dotClass}`} />
                  <span className="leading-none text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                    {item.label}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p
                  className="mt-2 text-xs text-slate-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-sm text-slate-300 leading-relaxed">
            AI doesn&apos;t replace the work&mdash;it amplifies your ability to
            do the work that matters as a Digital Professional. The result:
            accelerated mastery in weeks, not months.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
