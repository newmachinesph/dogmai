import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SampleProjectsSection, {
  type SampleProject,
} from "./SampleProjectsSection";

export const metadata: Metadata = {
  title: "HealthTech Builder Track | DOGM.AI",
  description:
    "Build patient-safe healthtech platforms with AI copilots, compliance-first sprints, and weekly proof built for Philippine hospitals and clinics.",
};

const heroStats = [
  { label: "Next Cohort", value: "March", detail: "100 seats" },
  { label: "Duration", value: "20 weeks", detail: "Part-time, mentor-led & AI-guided" },
  { label: "Proof cadence", value: "Weekly", detail: "Clinical proof packages" },
];

const learnItems = [
  {
    title: "Build full-stack care delivery systems",
    detail: "Patient portals, intake forms, provider consoles, and reporting layers.",
  },
  {
    title: "Integrate AI copilots for clinicians",
    detail: "Summarize visits, surface insights, suggest orders, and trigger alerts.",
  },
  {
    title: "Automate health operations",
    detail: "Scheduling, handoffs, remote monitoring tasks, claims, and follow-ups.",
  },
  {
    title: "Design for compliance and resilience",
    detail: "Privacy, audit trails, offline-first UX, and trustworthy data models.",
  },
  {
    title: "Deliver proof every week",
    detail: "Each sprint ends with clinic-ready modules and documentation.",
  },
];

const whoList = [
  "Full-stack developers joining hospital innovation teams",
  "Engineers inside digital health startups",
  "Freelancers building remote care and telehealth platforms",
  "Clinical informatics specialists modernizing their stack",
  "Public health and NGO tech squads",
  "Operators translating care operations into software",
  "AI engineers focusing on health workflows",
  "Students and founders prototyping care coordination tools",
];

const curriculumPhases = [
  {
    title: "Phase 1 (Weeks 1-4)",
    subtitle: "Core Foundations Sprint",
    description:
      "HTML, CSS, JavaScript, accessibility, and privacy-first practices tuned for regulated health products.",
    itemsTitle: "You will build:",
    items: [
      "Patient education microsite with consent messaging",
      "Responsive provider dashboard shell",
      "Interactive intake and triage forms",
      "JavaScript helpers for validations and metrics capture",
      "Accessibility-first UI components",
    ],
    artifactsTitle: "Artifacts:",
    artifacts: [
      "Patient journey microsite",
      "Clinical component library",
      "Accessibility and privacy checklist",
    ],
  },
  {
    title: "Phase 2 (Weeks 5-10)",
    subtitle: "Frontend Health Platform Sprint",
    description: "React, Next.js, Tailwind, and pattern libraries for care delivery experiences.",
    itemsTitle: "Weekly focus:",
    items: [
      "Week 5 - Intake-to-triage flows: multi-step forms, escalation rules, validations",
      "Week 6 - Provider workspace UI: charts, med orders, task queues, notifications",
      "Week 7 - Next.js architecture for multi-tenant clinics and partners",
      "Week 8 - Tailwind systems tuned to clinical density and readability",
      "Week 9 - Patient timeline and record viewers with contextual insights",
      "Week 10 - Performance and accessibility sprint for clinical reliability",
    ],
    artifactsTitle: "Artifacts:",
    artifacts: [
      "React care delivery mini-app",
      "Next.js provider and patient portal",
      "Clinical UI kit",
      "Accessibility and latency playbook",
    ],
  },
  {
    title: "Phase 3 (Weeks 11-14)",
    subtitle: "Backend and Clinical Data Sprint",
    description: "APIs, data models, auth, and admin dashboards powering clinical systems.",
    itemsTitle: "Weekly focus:",
    items: [
      "Week 11 - Patient registry and FHIR resource modeling with CRUD APIs",
      "Week 12 - Care plan and orders engine with workflow statuses and vitals",
      "Week 13 - Auth, role-based access, consent, and audit logging",
      "Week 14 - Clinical admin panel with analytics, alerts, and queue controls",
    ],
    artifactsTitle: "Artifacts:",
    artifacts: [
      "Patient data service",
      "Care orchestration engine",
      "Consent and auth module",
      "Clinical admin dashboard",
    ],
  },
  {
    title: "Phase 4 (Weeks 15-17)",
    subtitle: "AI Health Assistant Sprint",
    description: "Ship AI copilots that keep clinicians in the loop while automating drudgery.",
    itemsTitle: "Weekly focus:",
    items: [
      "Week 15 - AI intake copilot: summarize symptoms, surface triage suggestions",
      "Week 16 - AI follow-up coach: adherence nudges, patient communication templates",
      "Week 17 - AI operations intelligence: staffing, load balancing, anomaly alerts",
    ],
    artifactsTitle: "Artifacts:",
    artifacts: [
      "AI triage assistant",
      "AI care plan assistant",
      "Operations intelligence board",
    ],
  },
  {
    title: "Phase 5 (Weeks 18-20)",
    subtitle: "Capstone - Connected Care Platform",
    description:
      "Pull everything together and defend a complete care delivery flow from intake to follow-up and reporting.",
    itemsTitle: "Build and ship:",
    items: [
      "Multi-role portal for patients, clinicians, and administrators",
      "Remote monitoring dashboards with alerting and escalation",
      "Claims, billing, or PhilHealth-ready reporting pipelines",
      "Compliance documentation, runbooks, and deployment automation",
    ],
    artifactsTitle: "You will deliver:",
    artifacts: [
      "Launchable healthtech platform",
      "Validation, QA, and safety packet",
      "Architecture rationale and defense",
      "Clinician-ready case study and deployment plan",
    ],
  },
];

const createProjectImage = (label: string, colorA: string, colorB: string) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'><defs><linearGradient id='grad-${label}' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='${colorA}' stop-opacity='0.9'/><stop offset='100%' stop-color='${colorB}' stop-opacity='0.9'/></linearGradient></defs><rect width='640' height='360' rx='28' fill='url(#grad-${label})'/><g fill='rgba(255,255,255,0.35)' transform='translate(40,60)'><rect width='480' height='12' rx='6'/><rect y='32' width='360' height='12' rx='6'/><rect y='64' width='520' height='140' rx='18'/><rect y='220' width='140' height='60' rx='12'/><rect x='160' y='220' width='140' height='60' rx='12'/><rect x='320' y='220' width='140' height='60' rx='12'/></g><text x='40' y='330' fill='rgba(255,255,255,0.7)' font-family='Arial' font-size='24' letter-spacing='2'>${label}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const sampleProjects: SampleProject[] = [
  {
    title: "Connected Care Navigator",
    description:
      "Coordinated patient and provider portal that manages referrals, triage, and follow-ups.",
    images: [
      createProjectImage("Care Navigator", "#14b8a6", "#0ea5e9"),
      createProjectImage("Provider Console", "#0ea5e9", "#6366f1"),
    ],
    highlights: ["Role-based UX", "Intake to triage", "Secure messaging"],
    impact: [
      "Proves you can orchestrate patient journeys end-to-end",
      "Demonstrates collaboration between patients, clinicians, and operations",
    ],
  },
  {
    title: "AI Clinical Co-Pilot",
    description:
      "AI assistant that summarizes encounters, drafts care plans, and flags risk.",
    images: [
      createProjectImage("Clinical Co-Pilot", "#f97316", "#facc15"),
      createProjectImage("Safety Guardrails", "#fb923c", "#fde047"),
    ],
    highlights: ["Structured notes", "Prompt guardrails", "Human-in-loop approvals"],
    impact: [
      "Shows mastery of AI and compliance workflows",
      "Reduces documentation drag for clinicians and operators",
    ],
  },
  {
    title: "Health Operations Command Center",
    description: "Operations OS with census tracking, staffing, logistics, and AI insights.",
    images: [
      createProjectImage("Ops Command", "#6366f1", "#a855f7"),
      createProjectImage("Load Balancing", "#a855f7", "#ec4899"),
    ],
    highlights: ["Live telemetry", "Escalation rules", "Regulatory reporting"],
    impact: [
      "Shows ownership of mission-critical dashboards",
      "Turns noisy clinical data into operator-ready insight",
    ],
  },
];

const proofItems = [
  { label: "80%+", detail: "Launch their care platform" },
  { label: "10-15h", detail: "Weekly AI-supported work" },
  { label: "6-10", detail: "Regulated artifacts" },
  { label: "100%", detail: "HealthTech readiness uplift" },
];

const aiAdvantages = [
  {
    title: "Remove Drag",
    detail: "Instant debugging, triage prototyping, clarifications, and system planning.",
  },
  {
    title: "Accelerate Compliance Reviews",
    detail: "Generate documentation, traceability, and mitigations while you ship.",
  },
  {
    title: "Increase Clinical Insight",
    detail: "AI highlights anomalies, risks, and opportunities so you focus on judgment.",
  },
];

const healthcareRealities = [
  "DOH, PhilHealth, and hospital partner integrations",
  "Patchy connectivity and remote clinic deployments",
  "Data privacy, consent, and audit requirements",
  "Device and wearable telemetry noise",
  "Cross-functional clinical teams and handoffs",
  "Procurement and change-management constraints",
];

const graduateBenefits = [
  {
    title: "Deployable HealthTech Artifacts",
    detail: "Portals, automations, remote monitoring, and AI copilots.",
  },
  {
    title: "AI-Native Clinical Playbooks",
    detail: "Reusable prompts, guardrails, and workflows for health teams.",
  },
  {
    title: "Regulatory-Friendly Portfolio",
    detail: "Proof that signals safety, privacy, and operational rigor.",
  },
  {
    title: "Deployment Confidence",
    detail: "You can build systems clinicians can rely on immediately.",
  },
];

const ctaBullets = [
  "20-week part-time cohort",
  "Clinical mentors and advisors",
  "Weekly compliance and safety reviews",
  "6-10 deployable care modules",
  "HealthTech certification",
];

export default function BuilderTrackPage() {
  return (
    <div className="min-h-screen bg-ebony text-slate-100">
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-20 left-10 h-64 w-64 rounded-full bg-intl-orange/20 blur-3xl" />
          <div className="absolute top-32 right-0 h-96 w-96 rounded-full bg-cerulean/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%)]" />
        </div>
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 pt-10">
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#05060b] via-slate-950/80 to-black/85 p-10 shadow-[0_35px_95px_rgba(0,0,0,0.65)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-intl-orange/20 blur-3xl" />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-intl-orange/80">
                HealthTech Builder Track
              </p>
              <h1 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl">
                AI-Native Engineering for Modern Care Delivery
              </h1>
              <p className="mt-4 text-sm text-slate-300">Next Cohort: March - 100 seats</p>
              <p className="mt-6 text-base text-slate-200">
                Build production-grade healthtech systems with AI copilots, weekly shipped outcomes,
                and a practical part-time curriculum designed for Philippine hospitals, clinics, and
                digital health teams.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-full bg-intl-orange px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-ebony shadow-[0_0_40px_rgba(250,84,4,0.65)] transition hover:-translate-y-1 hover:bg-orange-500"
                >
                  Apply Now -&gt;
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
                    <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-400">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/75 to-black/70 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
              <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-cerulean/20 blur-3xl" />
            </div>
            <div className="relative z-10">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cerulean">
                    Build the Systems Modern Care Runs On
                  </p>
                  <p className="text-sm text-slate-300">
                    HealthTech adoption in the Philippines is accelerating. Compliance pressure,
                    overburdened clinicians, and AI-native expectations are rewriting the playbook.
                  </p>
                  <p className="text-sm text-slate-300">
                    The HealthTech Builder Track prepares you to launch patient and provider portals,
                    AI-assisted clinical tools, automated operations, and insight dashboards. Every
                    week ends with proof-of-work you can deploy, defend, or plug into a clinical
                    stack.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                    You will learn to:
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-200">
                    {learnItems.map((item) => (
                      <li
                        key={item.title}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 p-3"
                      >
                        <span className="mt-1 inline-flex min-h-1.5 min-w-1.5 rounded-full bg-intl-orange" />
                        <span className="text-slate-100">
                          <span className="font-semibold text-white">{item.title}</span> -{" "}
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-intl-orange">
                    You do not just learn to code -- you build systems clinicians can rely on today.
                  </p>
                </div>
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
                  Built for digital professionals and future founders shipping real health systems:
                </p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {whoList.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-xs text-intl-orange">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300">
                  You graduate as an AI-native healthtech engineer ready to modernize clinics,
                  hospitals, and care operations.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  The DOGM.AI Chain for Builders
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  Daily Sprints -&gt; Weekly Outcomes -&gt; Growth Loops -&gt; Mastery -&gt; Acceleration -&gt;
                  Intelligence
                </p>
                <p className="mt-4 text-sm text-slate-300">
                  Every layer compounds. The rituals build discipline; the artifacts build trust with
                  recruiters, brands, and clients.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-950/80 via-black/75 to-[#05060b] p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cerulean">
              The Curriculum
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              20 Weeks - HealthTech Focused - Part-Time Friendly - Outcome-Driven
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Every sprint produces clinic-usable, verifiable proof-of-work.
            </p>
            <div className="mt-8 grid gap-6">
              {curriculumPhases.map((phase) => (
                <div
                  key={phase.title}
                  className="rounded-3xl border border-white/10 bg-black/40 p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {phase.title}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{phase.subtitle}</h3>
                  <p className="mt-2 text-sm text-slate-300">{phase.description}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                    {phase.itemsTitle}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex min-h-1.5 min-w-1.5 rounded-full bg-cerulean" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                    {phase.artifactsTitle}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    {phase.artifacts.map((artifact) => (
                      <li key={artifact} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex min-h-1.5 min-w-1.5 rounded-full bg-intl-orange" />
                        <span>{artifact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* <SampleProjectsSection projects={sampleProjects} /> */}

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/70 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <h2 className="text-3xl font-bold text-white">What Graduates Leave With</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {graduateBenefits.map((item) => (
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

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-950/80 via-black/80 to-slate-950/70 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cerulean">
                  The AI Co-Pilot Advantage
                </p>
                <p className="text-sm text-slate-300">AI is not the shortcut -- it is the multiplier.</p>
                <ul className="space-y-3 text-sm text-slate-200">
                  {aiAdvantages.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-black/40 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-intl-orange">
                        {item.title}
                      </p>
                      <p className="mt-2 text-slate-200">{item.detail}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300">
                  You become the builder who ships at modern healthtech speed.
                </p>
              </div>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-intl-orange/80">
                  A Track Built for Modern HealthTech
                </p>
                <p className="text-sm text-slate-200">Aligned with Filipino healthtech realities:</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {healthcareRealities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex min-h-1.5 min-w-1.5 rounded-full bg-cerulean" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-300">
                  Everything you build is designed to be usable, not just showcased.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/75 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <h2 className="text-3xl font-bold text-white">Outcomes That Stand Up to Scrutiny</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {proofItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center"
                >
                  <p className="text-3xl font-semibold text-intl-orange">{item.label}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-950/80 via-black/70 to-[#05060b] p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-intl-orange">
                  Apply to the Builder Track
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Become the healthtech builder your clinics, team, or partners cannot replace.
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {ctaBullets.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-3">
                  <a
                    href="/apply"
                    className="inline-flex items-center justify-center rounded-full bg-intl-orange px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-ebony shadow-[0_0_40px_rgba(250,84,4,0.65)] transition hover:-translate-y-1 hover:bg-orange-500"
                  >
                    Start Application -&gt;
                  </a>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-intl-orange hover:text-intl-orange"
                  >
                    Schedule an Intro Call -&gt;
                  </a>
                </div>
                <a
                  href="mailto:hello@dogm.ai"
                  className="block rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-center text-sm font-semibold text-slate-200 transition hover:border-intl-orange hover:text-intl-orange"
                >
                  hello@dogm.ai -&gt;
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
