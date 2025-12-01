import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SampleProjectsSection, {
  type SampleProject,
} from "./SampleProjectsSection";

export const metadata: Metadata = {
  title: "E-Commerce Builder Track | DOGM.AI",
  description:
    "Build production-grade e-commerce systems with AI copilots, part-time sprints, and weekly proof built for Philippine merchants and brands.",
};

const heroStats = [
  { label: "Next Cohort", value: "March", detail: "100 seats" },
  { label: "Duration", value: "20 weeks", detail: "Part-time, mentor-led & AI-guided" },
  { label: "Proof cadence", value: "Weekly", detail: "Shipped artifacts" },
];

const learnItems = [
  {
    title: "Build full-stack commerce systems",
    detail: "Storefronts, carts, checkouts, catalogs, inventory, admin tools.",
  },
  {
    title: "Integrate AI copilots into workflows",
    detail: "Smart search, product generation, review intelligence, automation.",
  },
  {
    title: "Automate back-office operations",
    detail: "Catalog syncing, order routing, logistics flows, support pipelines.",
  },
  {
    title: "Design for real-world constraints",
    detail: "Low bandwidth, COD, local logistics, messy data, marketplaces.",
  },
  {
    title: "Deliver proof every week",
    detail: "Your artifacts immediately become portfolio-ready proof-of-work.",
  },
];

const whoList = [
  "Full-stack developers",
  "E-commerce developers",
  "Shopify and WooCommerce builders leveling up",
  "Freelancers serving merchants and DTC brands",
  "DTC tech teams",
  "Marketplace sellers learning engineering",
  "Technical operators",
  "Product builders launching commerce tools",
];

const curriculumPhases = [
  {
    title: "Phase 1 (Weeks 1-4)",
    subtitle: "Core Foundations Sprint",
    description:
      "HTML, CSS, JavaScript, and DOM mastery to give you the building blocks modern commerce platforms rely on.",
    itemsTitle: "You will build:",
    items: [
      "Multi-page marketing site",
      "Responsive layouts built for mobile-first markets",
      "Interactive product cards and components",
      "JavaScript-powered mini tools",
      "DOM widgets like cart previews, popups, and banners",
    ],
    artifactsTitle: "Artifacts:",
    artifacts: ["Foundation site", "Component library", "JS micro-interactions pack"],
  },
  {
    title: "Phase 2 (Weeks 5-10)",
    subtitle: "Frontend Commerce Sprint",
    description: "React, Next.js, Tailwind, and component systems for real storefronts.",
    itemsTitle: "Weekly focus:",
    items: [
      "Week 5 - DOM to API commerce widgets: pricing updater, search, filters",
      "Week 6 - React storefront components: cards, variant selectors, cart logic",
      "Week 7 - Next.js storefront architecture: routing, PDPs, multi-page flows",
      "Week 8 - Tailwind commerce design system: navbars, modals, checkout UI",
      "Week 9 - Product catalog plus dynamic routing: categories, PDPs",
      "Week 10 - Storefront performance sprint: SEO, caching, image pipelines",
    ],
    artifactsTitle: "Artifacts:",
    artifacts: [
      "React store mini-app",
      "Full Next.js storefront",
      "Commerce component library",
      "SEO-ready, optimized storefront prototype",
    ],
  },
  {
    title: "Phase 3 (Weeks 11-14)",
    subtitle: "Backend and Store Engine Sprint",
    description: "APIs, databases, auth, and admin dashboards running the store.",
    itemsTitle: "Weekly focus:",
    items: [
      "Week 11 - Product catalog engine with CRUD APIs, variants, categories",
      "Week 12 - Inventory and order system with carts-to-orders flow",
      "Week 13 - Merchant authentication with roles and protected dashboards",
      "Week 14 - Merchant admin panel with analytics and management UI",
    ],
    artifactsTitle: "Artifacts:",
    artifacts: [
      "Product catalog system",
      "Order and inventory engine",
      "Admin auth and dashboard",
      "Store engine ready for AI integrations",
    ],
  },
  {
    title: "Phase 4 (Weeks 15-17)",
    subtitle: "AI Commerce Sprint",
    description: "Ship AI features that give merchants leverage.",
    itemsTitle: "Weekly focus:",
    items: [
      "Week 15 - AI product generation tools: titles, descriptions, tags",
      "Week 16 - AI customer support and review intelligence",
      "Week 17 - AI growth and merchandising intelligence dashboards",
    ],
    artifactsTitle: "Artifacts:",
    artifacts: [
      "AI writer for product pages",
      "AI review classifier and assistant",
      "AI merchant intelligence dashboard",
    ],
  },
  {
    title: "Phase 5 (Weeks 18-20)",
    subtitle: "Capstone - End-to-End Commerce System",
    description:
      "Pull everything together and defend a complete commerce flow from storefront to automations.",
    itemsTitle: "Build and ship:",
    items: [
      "Storefront with catalog and inventory",
      "Checkout simulation",
      "Merchant admin dashboard",
      "AI merchant features and operational automations",
    ],
    artifactsTitle: "You will deliver:",
    artifacts: [
      "Fully deployable e-commerce system",
      "Technical and product documentation",
      "Architecture rationale and defense",
      "AI-assisted merchant tools and a demo-ready portfolio case study",
    ],
  },
];

const createProjectImage = (label: string, colorA: string, colorB: string) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'><defs><linearGradient id='grad-${label}' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='${colorA}' stop-opacity='0.9'/><stop offset='100%' stop-color='${colorB}' stop-opacity='0.9'/></linearGradient></defs><rect width='640' height='360' rx='28' fill='url(#grad-${label})'/><g fill='rgba(255,255,255,0.35)' transform='translate(40,60)'><rect width='480' height='12' rx='6'/><rect y='32' width='360' height='12' rx='6'/><rect y='64' width='520' height='140' rx='18'/><rect y='220' width='140' height='60' rx='12'/><rect x='160' y='220' width='140' height='60' rx='12'/><rect x='320' y='220' width='140' height='60' rx='12'/></g><text x='40' y='330' fill='rgba(255,255,255,0.7)' font-family='Arial' font-size='24' letter-spacing='2'>${label}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const sampleProjects: SampleProject[] = [
  {
    title: "Open Storefront Engine",
    description:
      "Dynamic storefront with PDPs, cart logic, and SEO-first architecture.",
    images: [
      createProjectImage("Storefront Engine", "#fa5404", "#facc15"),
      createProjectImage("PDP System", "#f97316", "#fb923c"),
    ],
    highlights: ["Dynamic routing", "Variants and bundling", "Component library"],
    impact: [
      "Proves you can ship production storefronts end-to-end",
      "Shows recruiters a working PDP and cart experience",
    ],
  },
  {
    title: "Open AI Product Studio",
    description:
      "AI engine that generates product titles, descriptions, tags, and attributes.",
    images: [
      createProjectImage("AI Product Studio", "#0ea5e9", "#22d3ee"),
      createProjectImage("Bulk Generation", "#22d3ee", "#2dd4bf"),
    ],
    highlights: ["Prompt flows", "Attribute extraction", "Bulk creation tooling"],
    impact: [
      "Cuts catalog creation time for merchants",
      "Demonstrates AI workflow design and guardrails",
    ],
  },
  {
    title: "Open Merchant Command Center",
    description:
      "Admin operating system with orders, stock, logistics tracking, and AI insights.",
    images: [
      createProjectImage("Command Center", "#6366f1", "#a855f7"),
      createProjectImage("Merchant Ops", "#a855f7", "#ec4899"),
    ],
    highlights: ["Order tracing", "Stock alerts", "AI merchant summaries"],
    impact: [
      "Shows ownership of mission-critical dashboards",
      "Turns raw store data into operator-ready insights",
    ],
  },
];

const proofItems = [
  { label: "80%+", detail: "Ship their capstone" },
  { label: "10-15h", detail: "Weekly AI-supported work" },
  { label: "6-10", detail: "Portfolio artifacts" },
  { label: "100%", detail: "Commerce-ready skill uplift" },
];

const aiAdvantages = [
  {
    title: "Remove Drag",
    detail: "Instant debugging, refactors, clarifications, and system planning.",
  },
  {
    title: "Collapse Feedback Loops",
    detail: "Get critique fast so you iterate 5x faster.",
  },
  {
    title: "Increase Leverage",
    detail: "AI covers boilerplate so you focus on judgment and shipping.",
  },
];

const commerceRealities = [
  "Facebook, Shopify, and Shopee ecosystems",
  "COD culture and local logistics",
  "High-friction merchant operations",
  "Content-heavy workflows",
  "Multi-channel inventory challenges",
  "Low-bandwidth customer environments",
];

const graduateBenefits = [
  {
    title: "6-10 Deployable Commerce Artifacts",
    detail: "Storefronts, automations, admin systems, and AI tools.",
  },
  {
    title: "AI-Native Engineering Playbooks",
    detail: "Reusable patterns for fast e-commerce delivery.",
  },
  {
    title: "Commerce Portfolio",
    detail: "Proof recruiters, brands, and clients trust.",
  },
  {
    title: "Deployment Confidence",
    detail: "You can build systems merchants can use immediately.",
  },
];

const ctaBullets = [
  "20-week part-time cohort",
  "Daily AI-guided sprints",
  "Weekly mentor review cycles",
  "6-10 deployable projects",
  "E-commerce certification",
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
                E-Commerce Builder Track
              </p>
              <h1 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl">
                AI-Native Engineering for Modern Online Commerce
              </h1>
              <p className="mt-4 text-sm text-slate-300">Next Cohort: March - 100 seats</p>
              <p className="mt-6 text-base text-slate-200">
                Build production-grade commerce systems with AI copilots, weekly shipped outcomes,
                and a practical part-time curriculum designed for Philippine merchants, DTC brands,
                and entrepreneurial tech teams.
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
                    Build the Systems Modern Commerce Runs On
                  </p>
                  <p className="text-sm text-slate-300">
                    E-commerce in the Philippines is exploding. Logistics complexity, marketplace
                    saturation, and AI-accelerated competition are rewriting the playbook.
                  </p>
                  <p className="text-sm text-slate-300">
                    The E-Commerce Builder Track prepares you to launch full-stack storefronts,
                    AI-assisted merchant tools, automated operations, and growth intelligence
                    dashboards. Every week ends with proof-of-work you can deploy, demo, or plug into
                    a client stack.
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
                    You do not just learn to code — you build systems merchants can use today.
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
                  Built for digital professionals and future founders shipping real commerce systems:
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
                  You graduate as an AI-native e-commerce engineer ready to automate modern
                  storefronts and merchant operations.
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
              20 Weeks - E-Commerce Focused - Part-Time Friendly - Outcome-Driven
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Every sprint produces merchant-usable, verifiable proof-of-work.
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

          <SampleProjectsSection projects={sampleProjects} />

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
                <p className="text-sm text-slate-300">AI is not the shortcut — it is the multiplier.</p>
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
                  You become the builder who ships at modern e-commerce speed.
                </p>
              </div>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-intl-orange/80">
                  A Track Built for Modern Commerce
                </p>
                <p className="text-sm text-slate-200">Aligned with Filipino e-commerce realities:</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {commerceRealities.map((item) => (
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
                  Become the e-commerce builder your clients, team, or brand cannot replace.
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {ctaBullets.map((item) => (
                    <li key={item}>✓ {item}</li>
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
