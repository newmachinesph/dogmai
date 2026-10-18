import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "Who is DOGM.AI for and what backgrounds thrive?",
    answer:
      "Ambitious builders, designers, analysts, operators, and solo professionals who already create value but want to become the AI-native person on their team. We coach career switchers, upskill in-role talent, and support founders who need high-output systems.",
  },
  {
    question: "Do I need prior experience or a portfolio to join?",
    answer:
      "No formal prerequisite is required. You bring curiosity, discipline, and 6+ hours a week. We supply structured foundations, AI copilots, mentor feedback, and execution templates that match your level whether you're a beginner or already senior.",
  },
  {
    question: "How do the bootcamps actually run week to week?",
    answer:
      "Every week is an outcome loop: daily AI-guided sprints, live or async mentor checkpoints, and a tangible artifact you publish. You plan on Monday, ship by the weekend, and use feedback/analytics to tighten your playbook for the next cycle.",
  },
  {
    question: "What's the realistic time commitment?",
    answer:
      "Expect 6–10 focused hours per week for 12-20 weeks. Most learners spend 45–60 minutes per day on sprints, then stack a longer session for project delivery. Optional advanced challenges, office hours, and partner events can add more time if you choose.",
  },
  {
    question: "Do I receive a certificate or credential when I finish?",
    answer:
      "Yes—you earn a verified DOGM.AI credential tied to your shipped work. More important: you graduate with 3–5 portfolio artifacts, a public mastery narrative recruiters can verify, and continued access to the system for your next skill climb.",
  },
];

const trustHighlights = [
  {
    label: "Daily Support",
    description: "AI copilots + mentors every day.",
    accent: "text-intl-orange",
  },
  {
    label: "Weekly Proof",
    description: "Outcome artifacts recruiters trust.",
    accent: "text-cerulean",
  },
  {
    label: "Verified Mastery",
    description: "Narratives that stand up in interviews.",
    accent: "text-allports",
  },
];

export default function FAQSection() {
  return (
    <AnimatedSection id="faq" className="border-t border-white/10 bg-ebony/95 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="lg:w-[40%] space-y-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-intl-orange">
                FAQ · TRUST SIGNALS
              </p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold text-white sm:text-4xl">
                Everything Candidates Ask Before They Apply
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                The DOGM.AI team responds within 24 hours. These highlights explain how we keep you
                supported, shipping proof, and building a portfolio that stands up to scrutiny.
              </p>
            </div>

            <div className="grid gap-4">
              {trustHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/5 bg-black/30 px-4 py-3 text-sm text-slate-300 shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
                >
                  <p className={`text-[10px] uppercase tracking-[0.25em] ${item.accent}`}>
                    {item.label}
                  </p>
                  <p className="mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-intl-orange px-5 py-2 text-xs font-semibold text-ebony shadow-[0_0_30px_rgba(250,84,4,0.45)] transition hover:-translate-y-0.5 hover:bg-orange-500"
            >
              Talk to the team →
            </a>
          </div>

          <div className="lg:w-[60%]">
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-950/80 to-black/90 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.65)]">
              <div className="pointer-events-none absolute inset-px rounded-[2rem] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
              <div className="relative space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="rounded-2xl border border-white/5 bg-black/40 px-4 py-4 text-left text-slate-300 transition duration-200 open:ring-1 open:ring-intl-orange/40"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-white marker:hidden">
                      <span>{faq.question}</span>
                      <span className="text-lg text-intl-orange transition-transform duration-200 open:-rotate-45">
                        +
                      </span>
                    </summary>
                    <p
                      className="mt-2 text-xs text-slate-400"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
