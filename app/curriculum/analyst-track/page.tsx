import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SampleProjectsSection, {
  type SampleProject,
} from "../builder-track/SampleProjectsSection";

export const metadata: Metadata = {
  title: "Mission-Control Analyst Track | DOGM.AI",
  description:
    "Turn civic telemetry into intelligence. Analyst Track curriculum for Philippine mission-control agencies.",
};

const heroStats = [
  { label: "Next Cohort", value: "March", detail: "50 seats" },
  {
    label: "Duration",
    value: "10 weeks",
    detail: "Mission-intelligence sprint",
  },
  {
    label: "Output cadence",
    value: "Weekly",
    detail: "Deployable signal reports",
  },
];

const audience = [
  "Data & BI Analysts",
  "Automation / Ops Engineers",
  "GovTech Analytics Teams",
  "Operations Strategists",
  "Revenue & Program Ops",
  "Digital PMs who own data stacks",
];

const curriculum = [
  {
    title: "Weeks 1-2 · Mission Data Blueprint",
    detail:
      "Audit telemetry sources, AI tooling, and observability needs. Stand up ingestion plans for command centers.",
  },
  {
    title: "Weeks 3-4 · Copilot Analysis & Dashboards",
    detail:
      "Use copilots to explore datasets, surface anomalies, and build responsive dashboards for LGUs and agencies.",
  },
  {
    title: "Weeks 5-6 · Automation & Alerting Systems",
    detail:
      "Design event-driven automations, notification loops, and playbooks that keep teams ahead of the signal.",
  },
  {
    title: "Weeks 7-8 · Predictive Insights & Scenario Planning",
    detail:
      "Build forecasting models, risk heatmaps, and rehearsal packs for public safety, logistics, and finance.",
  },
  {
    title: "Weeks 9-10 · Mastery & Executive Proof",
    detail:
      "Ship multi-agency intelligence reports, stakeholder briefings, and verification-ready datasets.",
  },
];

const capstoneScenarios = [
  "LGU Early-Warning Intelligence",
  "Public Safety Telemetry Hub",
  "Revenue & Procurement Signal Room",
  "Citizen Sentiment Pipeline",
  "Custom Civic Mission",
];

const dataWins = [
  {
    title: "Mission-Control Signal Kits",
    detail:
      "Automated dashboards, alert engines, and copilot-ready prompts agencies can deploy instantly.",
  },
  {
    title: "Playbooks & Runbooks",
    detail: "Documentation that standardizes ingest → insight → action loops.",
  },
  {
    title: "Executive Narratives",
    detail:
      "Metrics and visual summaries that keep directors informed and accountable.",
  },
  {
    title: "Deployment Confidence",
    detail: "You can ship data systems that withstand high-stakes reviews.",
  },
];

const aiAdvantages = [
  {
    title: "Co-Analyze with AI",
    detail:
      "Use copilots to explore, clean, and synthesize faster than manual workflows.",
  },
  {
    title: "Close Feedback Loops",
    detail:
      "Automated QA, metric audits, and stakeholder briefings keep everyone aligned.",
  },
  {
    title: "Increase Leverage",
    detail:
      "Automate grunt work so you focus on strategic insights and coordination.",
  },
];

const proofItems = [
  { label: "85%+", detail: "Ship a multi-agency signal deck" },
  { label: "8-15h", detail: "Weekly AI-supported analysis" },
  { label: "5-7", detail: "Deployable intelligence artifacts" },
  { label: "100%", detail: "Mission-ready skill uplift" },
];

const createProjectImage = (label: string, colorA: string, colorB: string) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360'><defs><linearGradient id='grad-${label}' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='${colorA}' stop-opacity='0.9'/><stop offset='100%' stop-color='${colorB}' stop-opacity='0.9'/></linearGradient></defs><rect width='640' height='360' rx='28' fill='url(#grad-${label})'/><g fill='rgba(255,255,255,0.4)'><rect x='40' y='60' width='360' height='16' rx='8'/><rect x='40' y='100' width='520' height='140' rx='22'/><rect x='40' y='260' width='140' height='60' rx='14'/><rect x='200' y='260' width='140' height='60' rx='14'/><rect x='360' y='260' width='140' height='60' rx='14'/></g><text x='40' y='330' fill='rgba(255,255,255,0.7)' font-family='Arial' font-size='24'>${label}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const sampleProjects: SampleProject[] = [
  {
    title: "Mission Signal Observatory",
    description:
      "A multi-source dashboard aligning incidents, resource levels, and AI risk assessments.",
    images: [
      createProjectImage("Signal Hub", "#14b8a6", "#0ea5e9"),
      createProjectImage("Risk Matrix", "#0ea5e9", "#2563eb"),
    ],
    highlights: [
      "Telemetry ingestion",
      "AI anomaly summaries",
      "Operator-ready alerts",
    ],
    impact: [
      "Cuts incident-response analysis time by 70%",
      "Gives executives live situational awareness",
    ],
  },
  {
    title: "Citizen Intelligence Pipeline",
    description:
      "Transforms complaints, social chatter, and ticketing data into prioritized action lists.",
    images: [
      createProjectImage("Citizen Pipeline", "#f97316", "#fb923c"),
      createProjectImage("Action Loop", "#fb923c", "#fcd34d"),
    ],
    highlights: [
      "Natural-language clustering",
      "Automated routing",
      "Insight-ready metrics",
    ],
    impact: [
      "Keeps LGUs ahead of escalations",
      "Feeds policy and ops with real community signals",
    ],
  },
  {
    title: "Supply Chain Foresight Suite",
    description:
      "Forecast models and automations that keep public logistics and procurement stable.",
    images: [
      createProjectImage("Foresight Suite", "#6366f1", "#a855f7"),
      createProjectImage("Automation Grid", "#a855f7", "#ec4899"),
    ],
    highlights: [
      "Forecast dashboards",
      "Alerting automations",
      "Scenario modeling",
    ],
    impact: [
      "Prevents shortages and budget waste",
      "Gives directors confident decision support",
    ],
  },
];

export default function AnalystTrackPage() {
  return (
    <div className="min-h-screen bg-ebony text-slate-100">
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-intl-orange/15 blur-3xl" />
          <div className="absolute top-16 right-8 h-80 w-80 rounded-full bg-cerulean/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.08),transparent_60%)]" />
        </div>
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 pt-10">
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#05060b] via-slate-950/80 to-black/85 p-10 shadow-[0_35px_95px_rgba(0,0,0,0.65)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="absolute -right-8 top-0 h-44 w-44 rounded-full bg-cerulean/25 blur-3xl" />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-intl-orange/80">
                Mission-Control Analyst Track
              </p>
              <h1 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl">
                AI-Native Mission Intelligence for Deployment
              </h1>
              <p className="mt-4 text-sm text-slate-300">
                Next Cohort: March · 50 Seats
              </p>
              <p className="mt-6 text-base text-slate-200">
                Turn raw telemetry into decisions. Learn how to orchestrate AI
                copilots, automations, and civic data stacks so agencies always
                have the signal they need.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-full bg-intl-orange px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-ebony shadow-[0_0_40px_rgba(250,84,4,0.65)] transition hover:-translate-y-1 hover:bg-orange-500"
                >
                  Apply Now →
                </a>
                <a
                  href="#overview-video"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-intl-orange hover:text-intl-orange"
                >
                  Watch Overview →
                </a>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-black/40 p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-400">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/75 to-black/70 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
              <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-intl-orange/15 blur-3xl" />
            </div>
            <div className="relative z-10 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cerulean">
                  Instrument the nation’s data
                </p>
                <p className="text-sm text-slate-300">
                  Dogm.ai supports agencies with mission-control intelligence
                  for public safety, logistics, and finance. Analysts translate
                  chaotic telemetry into daily clarity.
                </p>
                <p className="text-sm text-slate-300">
                  This track teaches you to architect ingestion, automate
                  insights, and tell stories executives believe.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  You will master:
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {[
                    "Telemetry ingestion and observability",
                    "Copilot-assisted exploration and QA",
                    "Automation and alert architectures",
                    "Executive-ready signal narratives",
                    "Deployment rituals for civic data",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-intl-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-[#05060b] via-black/75 to-slate-950/70 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-intl-orange/80">
                  Who the Track Is For
                </p>
                <p className="text-sm text-slate-300">
                  Designed for professionals turning data into undeniable proof:
                </p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {audience.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-xs text-intl-orange">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300">
                  Graduate ready to answer agency questions with mission-control
                  accuracy.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  Mission-Control Intelligence Chain
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Daily telemetry → Weekly signal drops → Stakeholder proof →
                  Mastery rituals → Civic intelligence
                </p>
                <p className="mt-4 text-sm text-slate-300">
                  Every iteration compounds into faster, clearer decisions.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/75 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cerulean">
              The Curriculum
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              10 Weeks · Mission-Intelligence Focused · Outcome-Driven
            </h2>
            <div className="mt-8 grid gap-6">
              {curriculum.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-black/40 p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Capstone Scenarios
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Build and defend a mission-ready intelligence system:
                </p>
                <ul className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-300">
                  {capstoneScenarios.map((scenario) => (
                    <li
                      key={scenario}
                      className="rounded-full border border-white/15 px-3 py-1"
                    >
                      {scenario}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <SampleProjectsSection projects={sampleProjects} />

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/70 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <h2 className="text-3xl font-bold text-white">
              What Graduates Leave With
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {dataWins.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-black/40 p-6"
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-200">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-[#05060b] via-black/80 to-slate-950/70 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cerulean">
                  The AI Co-Pilot Advantage
                </p>
                <ul className="space-y-3 text-sm text-slate-200">
                  {aiAdvantages.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-black/40 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-intl-orange">
                        {item.title}
                      </p>
                      <p className="mt-2 text-slate-300">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-intl-orange/80">
                  Aligned with Philippine missions
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    "Multi-agency telemetry realities",
                    "Low-bandwidth and offline handling",
                    "Audit trails and policy compliance",
                    "Human-in-the-loop insights",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cerulean" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300">
                  Every artifact is built to deploy, not just to demo.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/75 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <h2 className="text-3xl font-bold text-white">
              Outcomes That Stand Up to Scrutiny
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {proofItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center"
                >
                  <p className="text-3xl font-semibold text-intl-orange">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-950/80 via-black/80 to-[#05060b] p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-intl-orange">
                  Apply to the Analyst Track
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Become the mission intelligence lead agencies rely on.
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {[
                    "✓ 10-week high-intensity cohort",
                    "✓ Daily AI-guided rituals",
                    "✓ Weekly mentor reviews",
                    "✓ 5-7 deployable signal projects",
                    "✓ Mission-control intelligence credential",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <a
                  href="/apply"
                  className="inline-flex w-full items-center justify-center rounded-full bg-intl-orange px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-ebony shadow-[0_0_40px_rgba(250,84,4,0.65)] transition hover:-translate-y-1 hover:bg-orange-500"
                >
                  Start Application →
                </a>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-intl-orange hover:text-intl-orange"
                >
                  Schedule an Intro Call →
                </a>
                <a
                  href="mailto:hello@dogm.ai"
                  className="block rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-center text-sm font-semibold text-slate-200 transition hover:border-intl-orange hover:text-intl-orange"
                >
                  hello@dogm.ai →
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
