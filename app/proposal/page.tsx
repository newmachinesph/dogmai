import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

const designPrinciples = [
  "Custom curriculum tailored to Aira Labs platforms, Philippine public-sector workflows, and enterprise use cases.",
  "Role-based mastery for builders, analysts, designers, and digital operators.",
  "Proof-of-work orientation where every week produces validated, deployable artifacts.",
  "Train-the-trainer pathways enabling scalable partner and agency rollouts.",
];

const trainingPhases = [
  {
    weeks: "Weeks 1-2",
    title: "Foundation Sprint",
    items: [
      "Aira mission + national operational context",
      "AI readiness & capability mapping",
      "DOGM.AI discipline: daily structured sprints",
      "Baseline proficiency scorecard",
    ],
  },
  {
    weeks: "Weeks 3-10",
    title: "Outcome Cycles",
    items: [
      "Weekly mission-aligned mini-projects",
      "Real scenarios: LGU response, logistics, citizen analytics",
      "Mentor reviews + AI-guided refinement",
      "Growth dashboards, velocity indicators",
    ],
  },
  {
    weeks: "Weeks 11-12",
    title: "Mastery & Deployment",
    items: [
      "Capstone: end-to-end mission scenario",
      "Role-based skill exams",
      'Certification: "Aira Mission-Control AI Specialist"',
      "Partner training kit for network rollout",
    ],
  },
];

const tracks = [
  {
    name: "Builder",
    focus: "Full-stack prototypes, AI automations, deployment workflows.",
  },
  {
    name: "Designer",
    focus: "Operational UX, AI-native interfaces, user-journey intelligence.",
  },
  {
    name: "Analyst",
    focus: "Insights, models, data pipelines, decision automation.",
  },
  {
    name: "Operator",
    focus: "Execution, workflows, operations, cross-functional AI tasks.",
  },
];

const benefits = [
  "AI-native workforce prepared for mission-critical deployments.",
  "Unified service delivery with consistent weekly shipped outputs.",
  "Scalable partner enablement via certified specialists.",
  "Portfolio-ready deliverables for agencies, clients, and internal use.",
  "A discipline-driven system teams can reuse for any future AI domain.",
];

const nextSteps = [
  "Leadership workshop: learner paths, custom modules, deployment goals.",
  "Pilot cohort: 10-15 participants (12 weeks).",
  "Success metrics: proficiency uplift, deployment-readiness, partner feedback.",
  "Scale into a multi-cohort enterprise program for agencies & nationwide partners.",
];

const heroHighlights = [
  { label: "Program Scope", value: "National mission-control enablement" },
  { label: "Format", value: "12-20 weeks enterprise-grade training" },
  { label: "Region", value: "Philippines / Public Sector" },
];

export const metadata: Metadata = {
  title: "Proposal | DOGM.AI x Aira Labs",
  description:
    "Enterprise Mission-Control AI Training & Capacity-Building Program custom-designed for Aira Labs.",
};

type SectionCardProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

function SectionCard({ eyebrow, title, subtitle, children }: SectionCardProps) {
  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-8 shadow-[0_35px_90px_rgba(15,23,42,0.12)]">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-intl-orange">
          {eyebrow}
        </p>
      )}
      <div className="mt-2 space-y-3">
        <h2 className="font-heading text-2xl font-semibold text-slate-900">
          {title}
        </h2>
        {subtitle && <p className="text-base text-slate-600">{subtitle}</p>}
      </div>
      <div className="mt-6 text-base text-slate-700">{children}</div>
    </section>
  );
}

export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ebony via-black to-ebony px-4 py-10 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
        >
          <span className="text-lg">&larr;</span> Back to DOGM.AI
        </Link>

        <div className="relative mx-auto w-full max-w-[1180px] overflow-hidden rounded-[38px] border border-white/10 bg-white/95 p-6 text-slate-900 shadow-[0_60px_140px_rgba(0,0,0,0.55)] md:p-12">
          <div className="pointer-events-none absolute inset-0 rounded-[38px] border border-white/40" />
          <div className="pointer-events-none absolute inset-x-12 top-0 h-24 rounded-b-full bg-gradient-to-b from-intl-orange/10 to-transparent" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-intl-orange/10 to-transparent" />
            <div className="absolute right-[-220px] top-1/2 flex h-[900px] w-[900px] -translate-y-1/2 items-center justify-center opacity-60">
              <div className="h-full w-full rounded-full border-2 border-orange-300/40" />
              <div className="absolute h-[78%] w-[78%] rounded-full border-2 border-orange-400/25" />
              <div className="absolute h-[56%] w-[56%] rounded-full border-2 border-orange-500/30" />
              <div className="absolute h-[38%] w-[38%] rounded-full border-2 border-orange-500/40" />
            </div>
          </div>
          <div className="relative flex flex-col gap-10">
            <header className="space-y-6 border-b border-slate-200/70 pb-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="font-heading text-sm uppercase tracking-[0.5em] text-intl-orange">
                  Aira Labs x DOGM.AI
                </p>
                <p className="text-sm font-medium text-slate-500">
                  Enterprise Mission-Control Training Proposal
                </p>
              </div>
              <div className="space-y-4">
                <h1 className="font-heading text-4xl font-semibold leading-tight text-slate-900 lg:text-5xl">
                  Enterprise Mission-Control AI Training & Capacity-Building Program
                </h1>
                <p className="text-lg font-medium text-slate-600">
                  Custom-designed by DOGM.AI for national-scale capability enablement in the
                  Philippines.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                  >
                    <p className="text-xl font-semibold text-slate-900">{item.value}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </header>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-8">
                <SectionCard title="Why This Program">
                  <div className="space-y-4">
                    <p>
                      Aira Labs is building mission-critical AI systems for the Philippines, powering
                      public safety, governance, logistics, and enterprise operations. National-scale
                      deployment requires a workforce capable of learning fast, building fast, and
                      delivering consistently.
                    </p>
                    <p>
                      By integrating the DOGM.AI Operating System across Discipline, Outcomes,
                      Growth, Mastery, Acceleration, and Intelligence, this program transforms
                      internal teams and partners into AI-native professionals who can ship
                      verifiable outputs every week and operationalize the Aira mission-control AI in
                      real-world environments.
                    </p>
                  </div>
                </SectionCard>

                <SectionCard
                  eyebrow="Deployment Design"
                  title="Designed for Enterprise & Public-Sector Deployment"
                >
                  <ul className="list-disc space-y-3 pl-5">
                    {designPrinciples.map((principle) => (
                      <li key={principle}>{principle}</li>
                    ))}
                  </ul>
                </SectionCard>
              </div>

              <div className="space-y-8">
                <SectionCard title="Key Benefits for Aira Labs">
                  <ul className="list-disc space-y-3 pl-5">
                    {benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </SectionCard>

                <SectionCard title="Proposed Next Steps">
                  <ul className="list-disc space-y-3 pl-5">
                    {nextSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </SectionCard>
              </div>
            </div>

            <SectionCard
              eyebrow="Program Spine"
              title="12-20 Weeks Training Structure (Enterprise-Grade)"
              subtitle="Every sprint produces verifiable, deployment-ready artifacts."
            >
              <div className="grid gap-6 lg:grid-cols-3">
                {trainingPhases.map((phase) => (
                  <div
                    key={phase.title}
                    className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-inner"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cerulean">
                      {phase.weeks}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">{phase.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-intl-orange" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard
              eyebrow="Role-Based Tracks"
              title="4 Professional Tracks (DOGM.AI-Powered)"
              subtitle="Each track pairs AI copilots, mentor critiques, and weekly proof-of-work inside the Aira mission-control stack."
            >
              <div className="grid gap-5 md:grid-cols-2">
                {tracks.map((track) => (
                  <div
                    key={track.name}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                      Track
                    </p>
                    <h3 className="mt-1 font-heading text-xl text-slate-900">{track.name}</h3>
                    <p className="mt-3 text-sm text-slate-700">{track.focus}</p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <div className="rounded-[28px] border border-slate-200 bg-gradient-to-r from-cerulean/15 to-intl-orange/15 p-8 text-slate-900">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600">
                    Ready to deploy
                  </p>
                  <p className="mt-2 font-heading text-2xl text-slate-900">
                    Align leadership goals, launch pilot cohort, and scale nationwide.
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    DOGM.AI facilitators co-create the governance, scorecards, and partner toolkit
                    so Aira Labs can operationalize the system across agencies.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 text-center md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-4 md:text-right">
                  <a
                    href="mailto:hello@dogm.ai"
                    className="inline-flex items-center justify-center rounded-full bg-intl-orange px-6 py-3 font-semibold text-white shadow-lg shadow-intl-orange/40 transition hover:-translate-y-0.5 hover:bg-orange-500 whitespace-nowrap"
                  >
                    Schedule Alignment Workshop
                  </a>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-600">
                    Contact - hello@dogm.ai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
