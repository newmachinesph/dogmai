import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SampleProjectsSection, {
  type SampleProject,
} from "../builder-track/SampleProjectsSection";

export const metadata: Metadata = {
  title: "AI-Driven Marketing Track | DOGM.AI",
  description:
    "Marketing Track curriculum for digital professionals building AI-native growth, lifecycle, and revenue marketing systems.",
};

const heroStats = [
  { label: "Next Cohort", value: "April", detail: "40 seats" },
  { label: "Duration", value: "8 weeks", detail: "Campaign labs" },
  { label: "Proof cadence", value: "Weekly", detail: "Launch-ready drops" },
];

const audience = [
  "Growth & lifecycle marketers",
  "Demand generation managers",
  "Marketing ops & revops partners",
  "Social & community leads",
  "Founders validating GTM motion",
  "Agency strategists & consultants",
];

const curriculum = [
  {
    title: "Weeks 1-2 - Research, ICP & Narrative",
    detail:
      "Define ICPs, map journeys, and translate insights into sharp positioning. Use AI to synthesize interviews, scrape intel, and pressure-test messaging.",
  },
  {
    title: "Weeks 3-4 - Channels, Experiments & Creative",
    detail:
      "Design full-funnel experiments with metrics, guardrails, and rapid iteration. Build AI-assisted creative pipelines for copy, content, and media.",
  },
  {
    title: "Weeks 5-6 - Systems, Attribution & Reporting",
    detail:
      "Instrument analytics, clean CRM data, and create dashboards that justify spend. Automate alerts, QA, and weekly revenue signals.",
  },
  {
    title: "Weeks 7-8 - Launch Labs & Leadership Proof",
    detail:
      "Run launch drills, align GTM, and present exec-ready narratives tying creative, spend, and revenue impact together.",
  },
];

const capstoneScenarios = [
  "Demand Gen War Room",
  "Product-Led Growth Motion",
  "Lifecycle Retention Engine",
  "Partner & Community Flywheel",
  "Campaign Ops Control Center",
];

const marketingWins = [
  {
    title: "Growth Intelligence System",
    detail:
      "Unified research OS that turns AI-scouted signals into ICP dossiers, prompts, and talking points.",
  },
  {
    title: "Creative & Experiment Factory",
    detail:
      "Reusable workflows for brief → concept → assets with QA, prompt packs, and channel-ready files.",
  },
  {
    title: "Revenue Narrative Deck",
    detail:
      "Executive packet linking telemetry, attribution, and recommendations leadership can act on instantly.",
  },
  {
    title: "Launch & RevOps Playbook",
    detail:
      "SOPs, checklists, and automations that keep marketing, sales, and success locked on the same scoreboard.",
  },
];

const aiAdvantages = [
  {
    title: "Faster Signal Mining",
    detail:
      "Copilots scrape data, cluster insights, and produce on-demand briefs so you make sharper calls faster.",
  },
  {
    title: "Creative Throughput",
    detail:
      "Generate and refine copy, content, and variations in minutes with prompt frameworks tuned for each channel.",
  },
  {
    title: "Closed-Loop Reporting",
    detail:
      "AI reconciles metrics, drafts dashboards, and summarizes impact so stakeholders stay aligned daily.",
  },
];

const proofItems = [
  { label: "4+", detail: "Launch-ready campaigns" },
  { label: "3x", detail: "Creative velocity uplift" },
  { label: "6-8h", detail: "Weekly AI-assisted labs" },
  { label: "100%", detail: "Exec-ready reviews" },
];

const createProjectImage = (label: string, colorA: string, colorB: string) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'><defs><linearGradient id='grad-${label}' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='${colorA}' stop-opacity='0.9'/><stop offset='100%' stop-color='${colorB}' stop-opacity='0.9'/></linearGradient></defs><rect width='640' height='360' rx='28' fill='url(#grad-${label})'/><g fill='rgba(255,255,255,0.35)' transform='translate(40,60)'><rect width='440' height='12' rx='6'/><rect y='32' width='360' height='12' rx='6'/><rect y='64' width='520' height='140' rx='18'/><rect y='220' width='140' height='60' rx='12'/><rect x='160' y='220' width='140' height='60' rx='12'/><rect x='320' y='220' width='140' height='60' rx='12'/></g><text x='40' y='330' fill='rgba(255,255,255,0.7)' font-family='Arial' font-size='24' letter-spacing='2'>${label}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const sampleProjects: SampleProject[] = [
  {
    title: "Full-Funnel Flight Deck",
    description:
      "Live dashboard tying research, experiments, and revenue telemetry into one control board for GTM leads.",
    images: [
      createProjectImage("Flight Deck", "#0ea5e9", "#fa5404"),
      createProjectImage("Signal Rail", "#fa5404", "#f472b6"),
    ],
    highlights: [
      "ICPs + persona evidence",
      "Experiment scoreboard",
      "Exec-ready summaries",
    ],
    impact: [
      "Gives marketing/sales daily clarity on spend vs. pipeline",
      "Replaces status decks with self-serve telemetry",
    ],
  },
  {
    title: "Creative Automation Studio",
    description:
      "AI-powered template system for ads, lifecycle flows, and landing pages with QA and approvals baked in.",
    images: [
      createProjectImage("Creative Studio", "#6366f1", "#14b8a6"),
      createProjectImage("Prompt Kit", "#14b8a6", "#0ea5e9"),
    ],
    highlights: [
      "Prompt libraries",
      "Variant tracker",
      "Channel deployment kits",
    ],
    impact: [
      "Cuts asset production time by 60%",
      "Keeps messaging consistent across paid, email, and social",
    ],
  },
  {
    title: "Revenue Narrative Packet",
    description:
      "Memo + deck + dashboard bundle telling the story from campaign inputs to ARR, churn, or pipeline influence.",
    images: [
      createProjectImage("Narrative Pack", "#f59e0b", "#7c3aed"),
      createProjectImage("Leadership Brief", "#7c3aed", "#0ea5e9"),
    ],
    highlights: [
      "Attribution clarity",
      "Next-step recommendations",
      "Executive talking points",
    ],
    impact: [
      "Builds trust with CFOs and founders",
      "Locks budget by showing unquestionable proof of impact",
    ],
  },
];

export default function MarketingTrackPage() {
  return (
    <div className="min-h-screen bg-ebony text-slate-100">
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-cerulean/20 blur-3xl" />
          <div className="absolute top-16 right-10 h-80 w-80 rounded-full bg-intl-orange/20 blur-3xl" />
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
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cerulean/80">
                  AI-Driven Marketing Track
                </p>
                <h1 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl">
                  Build Growth Engines Powered by Research & Copilots
                </h1>
                <p className="mt-4 text-sm text-slate-300">
                  Next Cohort: April - 40 Seats
                </p>
                <p className="mt-6 text-base text-slate-200">
                  Architect acquisition, lifecycle, and partner motions with AI
                  copilots as your creative, research, and ops squad. Every week
                  ends with shippable campaigns, dashboards, or executive
                  narratives you can reuse immediately.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/apply"
                    className="inline-flex items-center justify-center rounded-full bg-cerulean px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-ebony shadow-[0_0_40px_rgba(14,165,233,0.65)] transition hover:-translate-y-1 hover:bg-sky-400"
                  >
                    Apply Now {'>>'}
                  </a>
                  <a
                    href="#overview-video"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cerulean hover:text-cerulean"
                  >
                    Watch Overview {'>>'}
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
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-intl-orange">
                  Growth Requires Proof
                </p>
                <p className="text-sm text-slate-300">
                  This track is for marketers who need to show receipts - from
                  insight to creative to revenue impact - not just run ads. Each
                  sprint pairs AI copilots with rigorous ops so nothing is left
                  to chance.
                </p>
                <p className="text-sm text-slate-300">
                  Expect weekly deadlines, async reviews, and coach-led labs
                  that pressure-test your playbooks against real business goals.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  You will master:
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {[
                    "Research OS + ICP dossiers",
                    "AI-assisted creative production",
                    "Experiment design & guardrails",
                    "Attribution + revenue reporting",
                    "RevOps alignment rituals",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cerulean" />
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
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cerulean">
                  Who the Track Is For
                </p>
                <p className="text-sm text-slate-300">
                  Built for GTM professionals asked to deliver measurable
                  pipeline lift with lean teams:
                </p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {audience.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-xs text-cerulean">
                        *
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300">
                  Graduate with systems that make marketing indispensable to
                  leadership conversations.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  Growth Chain of Custody
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Capture signals → Launch experiments → Measure revenue →
                  Ship the story.
                </p>
                <p className="mt-4 text-sm text-slate-300">
                  Every artifact is peer-reviewed and benchmarked against real
                  missions inside Philippine teams.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/75 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-intl-orange">
              The Curriculum
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              8 Weeks - ICP to Revenue Narrative
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Each sprint ends with an asset you can present to execs, clients,
              or teams immediately.
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
                  Choose a growth mission and run it end-to-end:
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
                  Deliver research, creative, experiment data, attribution, and
                  a leadership-ready memo.
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
              {marketingWins.map((item) => (
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
                  Built With Philippine Missions
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    "GTM motions for agencies, LGUs, and emerging SaaS",
                    "Offline + low-bandwidth channel adaptations",
                    "Collaborations across marketing, sales, and CS",
                    "Regulatory, compliance, and localization guardrails",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cerulean" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300">
                  Templates are pressure-tested with mentors building public and
                  private sector campaigns right now.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/75 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <h2 className="text-3xl font-bold text-white">
              Outcomes That Leadership Can Trust
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {proofItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center"
                >
                  <p className="text-3xl font-semibold text-cerulean">
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
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cerulean">
                  Apply to the Marketing Track
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Become the marketer who can prove growth every week.
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {[
                    "- 8-week high-velocity cohort",
                    "- Daily AI-assisted creative + ops reps",
                    "- Weekly mentor reviews & async proof",
                    "- 4+ launch-ready campaigns and packets",
                    "- Marketing systems certification",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <a
                  href="/apply"
                  className="inline-flex w-full items-center justify-center rounded-full bg-cerulean px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-ebony shadow-[0_0_40px_rgba(14,165,233,0.65)] transition hover:-translate-y-1 hover:bg-sky-400"
                >
                  Start Application {'>>'}
                </a>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cerulean hover:text-cerulean"
                >
                  Schedule an Intro Call {'>>'}
                </a>
                <a
                  href="mailto:hello@dogm.ai"
                  className="block rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-center text-sm font-semibold text-slate-200 transition hover:border-cerulean hover:text-cerulean"
                >
                  hello@dogm.ai {'>>'}
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
