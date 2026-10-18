import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SampleProjectsSection, {
  type SampleProject,
} from "../builder-track/SampleProjectsSection";

export const metadata: Metadata = {
  title: "Mission-Control Operator Track | DOGM.AI",
  description:
    "Operator Track curriculum for digital professionals who run AI-native operations, automation, and delivery for Philippine missions.",
};

const heroStats = [
  { label: "Next Cohort", value: "March", detail: "50 seats" },
  { label: "Duration", value: "8 weeks", detail: "Operation labs" },
  { label: "Proof cadence", value: "Weekly", detail: "Client-ready drops" },
];

const audience = [
  "Chiefs of Staff & BizOps partners",
  "Digital project / program managers",
  "Strategy & operations generalists",
  "Customer success & delivery leads",
  "Independent operators & consultants",
  "Founders running lean teams",
];

const curriculum = [
  {
    title: "Weeks 1-2 - Systems & Personal Ops Command",
    detail:
      "Audit commitments, map mission objectives, and build an AI-assisted control board that keeps priorities, briefs, and rituals in sync.",
  },
  {
    title: "Weeks 3-4 - Automation & Data Loops",
    detail:
      "Deploy lightweight automations (Zapier, Make, Airtable, Sheets) that collect signals, tag work, and auto-update dashboards.",
  },
  {
    title: "Weeks 5-6 - Communication & Delivery Engines",
    detail:
      "Use copilots to draft updates, run reviews, produce decks, and ship client-ready documents with version tracking.",
  },
  {
    title: "Weeks 7-8 - Mission Proof & Certification",
    detail:
      "Integrate your operating system, publish playbooks, and defend the workflows with evidence, metrics, and QA rituals.",
  },
];

const capstoneScenarios = [
  "Agency System OS",
  "Client Success Mission Console",
  "LGU Service Delivery Command Kit",
  "Growth & Revenue Enablement Pod",
  "Custom Operation Mission",
];

const executionWins = [
  {
    title: "Simulate Operating System",
    detail:
      "A living workspace with briefs, task engines, and review cadences teams can adopt immediately.",
  },
  {
    title: "Automation & Insight Library",
    detail:
      "Reusable automations, spreadsheet models, and AI prompt packs that compress hours of busywork.",
  },
  {
    title: "Stakeholder Communications Vault",
    detail:
      "Templates for weekly updates, issue reviews, and executive narratives tied to metrics.",
  },
  {
    title: "Confidence & Governance Rituals",
    detail:
      "Checklists, SLAs, and verification steps that prove every deliverable is production ready.",
  },
];

const aiAdvantages = [
  {
    title: "Command with Copilots",
    detail:
      "Translate chaos into clear plans, rewrite briefs, and simulate stakeholder questions before you hit send.",
  },
  {
    title: "Automate Clarity",
    detail:
      "Copilots summarize meetings, flag blockers, and push insights into dashboards without manual copy-paste.",
  },
  {
    title: "Increase Throughput",
    detail:
      "AI drafts collateral, cleans data, and prepares templates so you stay focused on judgement calls and coordination.",
  },
];

const proofItems = [
  { label: "90%+", detail: "Operate a complete systems" },
  { label: "6-12h", detail: "Weekly AI-backed sprints" },
  { label: "4-6", detail: "Client-ready artifacts" },
  { label: "100%", detail: "Ops confidence uplift" },
];

const createProjectImage = (label: string, colorA: string, colorB: string) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'><defs><linearGradient id='grad-${label}' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='${colorA}' stop-opacity='0.9'/><stop offset='100%' stop-color='${colorB}' stop-opacity='0.9'/></linearGradient></defs><rect width='640' height='360' rx='28' fill='url(#grad-${label})'/><g fill='rgba(255,255,255,0.35)' transform='translate(40,60)'><rect width='440' height='12' rx='6'/><rect y='32' width='360' height='12' rx='6'/><rect y='64' width='520' height='140' rx='18'/><rect y='220' width='140' height='60' rx='12'/><rect x='160' y='220' width='140' height='60' rx='12'/><rect x='320' y='220' width='140' height='60' rx='12'/></g><text x='40' y='330' fill='rgba(255,255,255,0.7)' font-family='Arial' font-size='24' letter-spacing='2'>${label}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const sampleProjects: SampleProject[] = [
  {
    title: "Mission Rhythm Board",
    description:
      "Unified workspace that ties briefs, metrics, automations, and reviews into one weekly sprint loop.",
    images: [
      createProjectImage("Rhythm Board", "#fa5404", "#f59e0b"),
      createProjectImage("Mission Cadence", "#f59e0b", "#0ea5e9"),
    ],
    highlights: [
      "Goal + ritual mapping",
      "Auto-generated weekly reviews",
      "Stakeholder-ready exports",
    ],
    impact: [
      "Keeps multi-team missions aligned in under 10 minutes a day",
      "Eliminates status-chasing and manual notes",
    ],
  },
  {
    title: "Automation Command Center",
    description:
      "Dashboard controlling Zapier/Make scenarios, approvals, and telemetry for live civic operations.",
    images: [
      createProjectImage("Automation Hub", "#0ea5e9", "#6366f1"),
      createProjectImage("Telemetry Rail", "#6366f1", "#14b8a6"),
    ],
    highlights: ["Trigger monitoring", "Exception routing", "Impact analytics"],
    impact: [
      "Cuts repetitive ops work by 50%",
      "Provides audit-friendly logs for agencies and clients",
    ],
  },
  {
    title: "Executive Intelligence Packet",
    description:
      "AI-assisted memo, deck, and data workbook bundles that translate raw telemetry into decisions.",
    images: [
      createProjectImage("Intelligence Pack", "#14b8a6", "#7c3aed"),
      createProjectImage("Decision Brief", "#7c3aed", "#ec4899"),
    ],
    highlights: [
      "Copilot-crafted narratives",
      "Linked spreadsheets + dashboards",
      "Version control + approvals",
    ],
    impact: [
      "Gives directors proof-backed recommendations each week",
      "Up-levels operators into strategic partners",
    ],
  },
];

export default function ExecutionTrackPage() {
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
              <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-intl-orange/25 blur-3xl" />
            </div>
            <div className="relative z-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-intl-orange/80">
                  Mission-Control Operator Track
                </p>
                <h1 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl">
                  AI-Native Systems for Digital System Operators
                </h1>
                <p className="mt-4 text-sm text-slate-300">
                  Next Cohort: March · 50 Seats
                </p>
                <p className="mt-6 text-base text-slate-200">
                  Learn to operate, manage, and optimize AI-powered workflows
                  that agencies rely on. Each week you complete a mission-tested
                  artifact using AI copilots, real data, and mission-control
                  operating rituals.
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
              <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-cerulean/15 blur-3xl" />
            </div>
            <div className="relative z-10 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cerulean">
                  Build Systems That Keep Missions Moving
                </p>
                <p className="text-sm text-slate-300">
                  DOGM.AI System Operators run national programs, client
                  delivery pods, and lean agencies. You will combine AI copilots
                  with disciplined workflows so every action is accountable.
                </p>
                <p className="text-sm text-slate-300">
                  Expect relentless proof: weekly demos, async reviews, and
                  artifacts that stand up to agency scrutiny.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  You will master:
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {[
                    "Mission dashboards + prioritization rituals",
                    "Cross-tool automations with approvals",
                    "AI-authored briefs, updates, and reviews",
                    "Telemetry-backed decisions + reporting",
                    "Executive-ready playbooks and SLAs",
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
                  Designed for professionals who translate strategy into precise
                  operation:
                </p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {audience.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-xs text-intl-orange">
                        *
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300">
                  Graduate with the systems, automation chops, and
                  communications stack clients trust.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  Operation Chain of Custody
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Capture signals -&gt; Automate routing -&gt; Ship proof -&gt;
                  Close the loop.
                </p>
                <p className="mt-4 text-sm text-slate-300">
                  You will prove every stage with telemetry, documentation, and
                  real operators.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/75 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cerulean">
              The Curriculum
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              8 Weeks - Mission-Control Focused - Outcome-Driven
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Every sprint ends with a shippable artifact: automations,
              dashboards, briefs, and operating manuals.
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
                  Choose a mission and prove it end-to-end:
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
                  Deliver automations, dashboards, communications, and a
                  governance kit ready for hand-off.
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
              {executionWins.map((item) => (
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
                    "GovTech and LGU workflows",
                    "Revenue, CX, and citizen delivery SLAs",
                    "Low-bandwidth + offline operations",
                    "Human approvals + audit trails",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cerulean" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300">
                  Every template is pressure-tested by mentors working inside
                  Philippine missions.
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
                  Apply to the Operation Track
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Become the operator every mission needs on speed dial.
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {[
                    "- 8-week high-intensity cohort",
                    "- Daily AI-guided operation reps",
                    "- Weekly mentor reviews",
                    "- 4-6 deployable artifacts",
                    "- Mission-control operation credential",
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
