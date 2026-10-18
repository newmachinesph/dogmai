import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SampleProjectsSection, {
  type SampleProject,
} from "../builder-track/SampleProjectsSection";

export const metadata: Metadata = {
  title: "Mission-Control Designer Track | DOGM.AI",
  description:
    "AI-native civic experience design curriculum for Philippine mission-control operations.",
};

const heroStats = [
  { label: "Next Cohort", value: "March", detail: "50 seats" },
  { label: "Duration", value: "10 weeks", detail: "Mission-control sprint" },
  { label: "Proof cadence", value: "Weekly", detail: "Deployable civic UX" },
];

const audience = [
  "Product & Service Designers",
  "UX Strategists",
  "Design Technologists",
  "Government Innovation Teams",
  "Design Leads",
  "Civic Experience Architects",
];

const curriculum = [
  {
    title: "Weeks 1–2 · Mission Blueprint",
    detail:
      "Map multi-agency journeys, service blueprints, and telemetry-backed design criteria for mission-control.",
  },
  {
    title: "Weeks 3–4 · Copilot Concept Labs",
    detail:
      "Prototype AI-augmented consoles, citizen portals, and field tools with stakeholder walkthroughs.",
  },
  {
    title: "Weeks 5–6 · High-Fidelity Systems",
    detail:
      "Ship UI kits, content models, and accessibility-ready flows that engineering can launch.",
  },
  {
    title: "Weeks 7–8 · DesignOps & Governance",
    detail:
      "Create review cadences, pattern libraries, and automation rituals that keep civic UX on rails.",
  },
  {
    title: "Weeks 9–10 · Mastery & Proof",
    detail:
      "Produce executive-ready case studies, metrics, and video demos tied to real agency missions.",
  },
];

const capstoneScenarios = [
  "Unified Citizen Assist Platform",
  "Agency Operator Console",
  "Public Safety Insight Hub",
  "Service Recovery Control Room",
  "Custom Civic Mission",
];

const designWins = [
  {
    title: "Mission-Control Systems",
    detail:
      "High-fidelity multi-surface UI kits, states, and pattern specs for deployment.",
  },
  {
    title: "Service Blueprints",
    detail: "Evidence-backed journeys that align policy, ops, and engineering.",
  },
  {
    title: "Executive Proof Packs",
    detail: "Narratives, metrics, and demos that convince agency leadership.",
  },
  {
    title: "Deployment Confidence",
    detail: "Rituals and documentation to sustain launches and iteration.",
  },
];

const aiAdvantages = [
  {
    title: "Co-Design Faster",
    detail:
      "Prompt copilots for variants, heuristics checks, and stress-tested flows before reviews.",
  },
  {
    title: "Collapse Feedback",
    detail:
      "Automated accessibility audits, tone checks, and stakeholder-ready summaries each iteration.",
  },
  {
    title: "Increase Leverage",
    detail:
      "Spend time on orchestration while AI handles production polish and documentation.",
  },
];

const proofItems = [
  { label: "90%+", detail: "Ship mission-control case study" },
  { label: "8–15h", detail: "Weekly AI-supported design ops" },
  { label: "5–8", detail: "Systems + journey artifacts" },
  { label: "100%", detail: "Civic design acceleration" },
];

const createProjectImage = (label: string, colorA: string, colorB: string) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'><defs><linearGradient id='grad-${label}' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='${colorA}' stop-opacity='0.9'/><stop offset='100%' stop-color='${colorB}' stop-opacity='0.9'/></linearGradient></defs><rect width='640' height='360' rx='28' fill='url(#grad-${label})'/><g fill='rgba(255,255,255,0.35)' transform='translate(40,60)'><rect width='480' height='12' rx='6'/><rect y='32' width='360' height='12' rx='6'/><rect y='64' width='520' height='140' rx='18'/><rect y='220' width='140' height='60' rx='12'/><rect x='160' y='220' width='140' height='60' rx='12'/><rect x='320' y='220' width='140' height='60' rx='12'/></g><text x='40' y='330' fill='rgba(255,255,255,0.7)' font-family='Arial' font-size='24' letter-spacing='2'>${label}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const sampleProjects: SampleProject[] = [
  {
    title: "Civic Co-Pilot Console",
    description:
      "Adaptive operator interface with AI briefings, escalation states, and multi-channel alerts.",
    images: [
      createProjectImage("CoPilot Console", "#14b8a6", "#0ea5e9"),
      createProjectImage("Escalation Rail", "#0ea5e9", "#6366f1"),
    ],
    highlights: [
      "Multi-panel orchestration",
      "AI insight rail",
      "Workflow triggers",
    ],
    impact: [
      "Keeps command centers in sync in under 3 minutes",
      "Transforms incidents into guided playbooks",
    ],
  },
  {
    title: "Citizen Signal Journey Map",
    description:
      "Complaint-to-resolution blueprint aligning citizens, agents, and supervisors.",
    images: [
      createProjectImage("Signal Map", "#f97316", "#facc15"),
      createProjectImage("Action Views", "#facc15", "#fcd34d"),
    ],
    highlights: [
      "Touchpoint diagnostics",
      "Signal-to-action analytics",
      "AI improvements",
    ],
    impact: [
      "Uncovers friction before escalation",
      "Gives executives narrative proof of service quality",
    ],
  },
  {
    title: "Field Ops Mobile Toolkit",
    description:
      "Offline-first design for inspectors capturing structured data, audio, and photos on site.",
    images: [
      createProjectImage("Field Toolkit", "#a855f7", "#ec4899"),
      createProjectImage("Sync Center", "#ec4899", "#fb7185"),
    ],
    highlights: [
      "Mode-aware UI",
      "Voice→structured notes",
      "Mission-control sync",
    ],
    impact: [
      "Removes paperwork lag",
      "Feeds real-time insights back to headquarters",
    ],
  },
];

export default function DesignerTrackPage() {
  return (
    <div className="min-h-screen bg-ebony text-slate-100">
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-intl-orange/15 blur-3xl" />
          <div className="absolute top-16 right-10 h-80 w-80 rounded-full bg-cerulean/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.08),transparent_60%)]" />
        </div>
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 pt-10">
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#05060b] via-slate-950/80 to-black/85 p-10 shadow-[0_35px_95px_rgba(0,0,0,0.65)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-cerulean/25 blur-3xl" />
            </div>
            <div className="relative z-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-intl-orange/80">
                  Mission-Control Designer Track
                </p>
                <h1 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl">
                  AI-Native Civic Experience Design for Deployment
                </h1>
                <p className="mt-4 text-sm text-slate-300">
                  Next Cohort: March · 50 Seats
                </p>
                <p className="mt-6 text-base text-slate-200">
                  Shape public-sector journeys, command consoles, and citizen
                  portals using AI copilots, systems thinking, and weekly proof
                  rituals. Every deliverable is judged by operational impact.
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
                  Design the Nation’s Mission-Control
                </p>
                <p className="text-sm text-slate-300">
                  Dogm.ai powers agencies with mission-control experiences for
                  public safety, logistics, and civic services. Designers turn
                  constraints into systems teams adopt.
                </p>
                <p className="text-sm text-slate-300">
                  You will orchestrate service blueprints, copilot-driven
                  tooling, and stakeholder rituals so every release is
                  defensible and deployable.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  You will master:
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {[
                    "Service blueprints for multi-agency journeys",
                    "Copilot-driven design systems",
                    "High-fidelity interfaces + content models",
                    "DesignOps rituals for weekly proof",
                    "Executive-ready narratives and metrics",
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
                  Designed for teams shipping high-stakes civic experiences:
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
                  Graduate ready to align policy, ops, and tech with irrefutable
                  design proof.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  Mission-Control Design Chain
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Daily DesignOps → Weekly Experience Drops → Stakeholder Proof
                  → Mastery Rituals → Civic Intelligence
                </p>
                <p className="mt-4 text-sm text-slate-300">
                  Every iteration compounds into experiences that agencies adopt
                  and scale.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/75 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cerulean">
              The Curriculum
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              10 Weeks · Mission-Control Focused · Outcome-Driven
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Every sprint produces assets agencies can plug directly into
              deployment pipelines.
            </p>
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
                  Build and defend an end-to-end mission with real stakeholders:
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
                <p className="mt-4 text-sm text-slate-200">
                  Deliver a design system, service blueprint, and executive
                  proof pack ready for deployment.
                </p>
              </div>
            </div>
          </section>

          <SampleProjectsSection projects={sampleProjects} />

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/70 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <h2 className="text-3xl font-bold text-white">
              What Graduates Leave With
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {designWins.map((item) => (
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
                    "Multi-agency workflows and SOPs",
                    "LGU realities + public safety constraints",
                    "Low-bandwidth + offline considerations",
                    "Human-in-the-loop decision structures",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cerulean" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300">
                  Every artifact is designed to be used, not just showcased.
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
                  <p className="text-3xl	font-semibold text-intl-orange">
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
                  Apply to the Designer Track
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Become the civic experience architect mission-control teams
                  rely on.
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {[
                    "✓ 10-week high-intensity cohort",
                    "✓ Daily AI-guided rituals",
                    "✓ Weekly mentor reviews",
                    "✓ 5–8 deployable artifacts",
                    "✓ Mission-control design credential",
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
