export type CurriculumItem = {
  title: string;
  detail: string;
};

export type BootcampProgram = {
  id: string;
  dotClass: string;
  intro: string;
  badge: string;
  badgeClass: string;
  title: string;
  duration: string;
  description: string;
  buttonText: string;
  buttonClass: string;
  buttonHref?: string;
  tags: string[];
  curriculumLabel: string;
  curriculum: CurriculumItem[];
  stackLabel: string;
  stackItems: string[];
  capstone: string;
};

export const bootcampPrograms: BootcampProgram[] = [
  {
    id: "Builder Track",
    dotClass: "bg-intl-orange",
    intro: "Builder Track - Web & Product Development Bootcamp",
    badge: "Full-Stack Product Builder",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
    title: "Full-Stack Product Builder (8-12 weeks)",
    duration: "8-12 weeks",
    description:
      "Go from zero spec to shipped product. Design, build, and deploy production-grade apps using modern frontends, pragmatic backends, and AI-native workflows.",
    buttonText: "See Curriculum",
    buttonClass: "bg-gradient-to-r from-intl-orange to-cerulean text-ebony",
    buttonHref: "/curriculum/builder-track",
    tags: [
      "Ship real products, not tutorials",
      "AI pair programming & codegen",
      "APIs, auth, data you can trust",
      "Deployment, alerts & monitoring",
      "Portfolio-ready case studies",
    ],
    curriculumLabel: "Curriculum Overview",
    curriculum: [
      {
        title: "Weeks 1-2 · Modern Frontend Foundations",
        detail:
          "Build responsive, production-ready UIs with React, Next.js, and Tailwind. Use AI to scaffold components, refactor code, and speed up iteration.",
      },
      {
        title: "Weeks 3-4 · APIs, Auth & Real Databases",
        detail:
          "Design REST/JSON APIs, wire up auth, and model real-world data with relational databases. Focus on reliability, security, and maintainability.",
      },
      {
        title: "Weeks 5-6 · AI Integrations & Automation",
        detail:
          "Embed copilots, prompt flows, background jobs, and webhooks. Connect your app to AI services and automations that handle real user workflows.",
      },
      {
        title: "Weeks 7-8 · Performance, Polish & Launch",
        detail:
          "Optimize performance, crush bugs, add analytics, and refine UX. Deploy, monitor, and iterate on a real production environment.",
      },
    ],
    stackLabel: "Stack & Tools",
    stackItems: [
      "React / Next.js / Tailwind",
      "API Design / Databases / Auth",
      "AI Copilots / Codegen / Workflow Automation",
    ],
    capstone:
      "Capstone: Ship a live, production-ready product with telemetry, docs, and AI-enabled workflows you can demo to real users.",
  },
  {
    id: "Designer Track",
    dotClass: "bg-cerulean",
    intro: "Designer Track - UI/UX & Product Design Bootcamp",
    badge: "Intelligent Interface Designer",
    badgeClass: "bg-cerulean/10 text-cerulean",
    title: "Intelligent Interface Designer (6-10 weeks)",
    duration: "6-10 weeks",
    description:
      "Design interfaces that feel effortless and intelligent. Combine UX fundamentals, systems thinking, and AI-assisted exploration to create portfolio-ready case studies.",
    buttonText: "View Curriculum",
    buttonClass: "bg-gradient-to-r from-cerulean to-allports text-ebony",
    buttonHref: "/curriculum/designer-track",
    tags: [
      "Research into clear product decisions",
      "Design systems you can scale",
      "AI-powered concept sprints",
      "Clickable prototypes that feel real",
      "Case studies that stand out",
    ],
    curriculumLabel: "Curriculum Overview",
    curriculum: [
      {
        title: "Weeks 1-2 · Research, Flows & User Journeys",
        detail:
          "Talk to users, map their journeys, and identify friction points. Use AI to cluster insights, synthesize themes, and speed up analysis.",
      },
      {
        title: "Weeks 3-4 · Design Systems & Figma Mastery",
        detail:
          "Create reusable components, tokens, and patterns in Figma. Build a design system that keeps complex products consistent and easy to extend.",
      },
      {
        title: "Weeks 5-6 · Prototyping, Testing & Iteration",
        detail:
          "Build interactive prototypes, run lean usability tests, and iterate quickly based on real feedback and behavioral signals.",
      },
      {
        title: "Optional · AI Creative Labs",
        detail:
          "Explore visual directions and motion concepts with AI-generated variations. Use them as sparks, not crutches, for your own design voice.",
      },
    ],
    stackLabel: "Tools",
    stackItems: [
      "Figma / Components / Design Systems",
      "User Flows / Research & Synthesis",
      "AI-Assisted Research, Ideation & Exploration",
    ],
    capstone:
      "Capstone: A polished end-to-end product case study with flows, systems, prototypes, and clear design rationale.",
  },
  {
    id: "Analyst Track",
    dotClass: "bg-allports",
    intro: "Analyst Track - Applied Data & AI Analytics Bootcamp",
    badge: "Data Science for Digital Professionals",
    badgeClass: "bg-allports/10 text-allports",
    title: "Data Science for Digital Professionals (8-12 weeks)",
    duration: "8-12 weeks",
    description:
      "Turn messy, real-world data into decisions. Use Python, analytics, and applied AI to answer business questions and communicate insights leaders trust.",
    buttonText: "Check Curriculum",
    buttonClass: "bg-gradient-to-r from-allports to-cerulean text-ebony",
    buttonHref: "/curriculum/analyst-track",
    tags: [
      "Python-first analytics workflows",
      "AI-assisted EDA & insight discovery",
      "Dashboards execs actually read",
      "Experimentation & A/B test thinking",
      "Narratives that drive decisions",
    ],
    curriculumLabel: "Curriculum Overview",
    curriculum: [
      {
        title: "Weeks 1-2 · Python, Wrangling & Exploration",
        detail:
          "Use Python and Pandas to clean, merge, and explore datasets. Generate visual summaries and surface non-obvious patterns with AI support.",
      },
      {
        title: "Weeks 3-4 · Analytics, Dashboards & Reporting",
        detail:
          "Build dashboards that answer specific business questions. Prioritize clarity, signal over noise, and stakeholder-friendly layouts.",
      },
      {
        title: "Weeks 5-6 · Intro to ML & Experimentation",
        detail:
          "Train baseline models, design simple experiments, and interpret results without hype. Focus on impact, not just accuracy scores.",
      },
      {
        title: "Weeks 7-8 · AI Insights, Storytelling & Narratives",
        detail:
          "Use AI to draft insight summaries, refine your storyline, and tailor your messaging to execs, operators, and clients.",
      },
    ],
    stackLabel: "Tools",
    stackItems: [
      "Python / Pandas / Visualization",
      "BI Dashboards / Data Storytelling",
      "AI-Driven Analysis & Narrative Generation",
    ],
    capstone:
      "Capstone: An end-to-end analytics project with reproducible code, a live dashboard, and an executive-ready narrative deck.",
  },
  {
    id: "Operator Track",
    dotClass: "bg-intl-orange",
    intro: "Operator Track - Digital Operator Bootcamp",
    badge: "AI-Driven Digital Operator",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
    title: "Digital Operator Accelerator (6-10 weeks)",
    duration: "6-10 weeks",
    description:
      "Build the backbone of how work gets executed. Master systems, automations, and delivery loops so teams ship faster with AI as your co-operator.",
    buttonText: "Review Curriculum",
    buttonClass: "bg-gradient-to-r from-intl-orange to-cerulean text-ebony",
    buttonHref: "/curriculum/operator-track",
    tags: [
      "Operator mindset for modern teams",
      "AI-powered workflow execution",
      "No-code & cross-tool automation",
      "Client-ready reports and deliverables",
      "High-leverage systems thinking",
    ],
    curriculumLabel: "Curriculum Overview",
    curriculum: [
      {
        title: "Weeks 1-2 · Systems, OS Setup & AI Workflows",
        detail:
          "Design your personal and team operating system. Use AI to organize tasks, research faster, and keep projects moving without chaos.",
      },
      {
        title: "Weeks 3-4 · Automation & Data-Backed Operations",
        detail:
          "Build automations with tools like Zapier and Make. Clean and structure data in spreadsheets, and ship simple dashboards that track what matters.",
      },
      {
        title: "Weeks 5-6 · Communication, Content & Delivery",
        detail:
          "Draft client updates, briefs, and documentation with AI assistance. Standardize templates, SOPs, and delivery formats teams can reuse.",
      },
      {
        title: "Optional · Intelligent Workflow Labs",
        detail:
          "Prototype multi-step, cross-tool workflows that connect CRM, docs, chat, and reporting into a single smooth pipeline.",
      },
    ],
    stackLabel: "Tools",
    stackItems: [
      "AI Productivity Copilots",
      "Spreadsheets / Dashboards",
      "Automation Apps (Zapier, Make, Notion AI)",
      "Documentation, SOPs & Delivery Systems",
    ],
    capstone:
      "Capstone: Build a complete digital operating system with automations, dashboards, and client-ready assets that run a real process end-to-end.",
  },
  {
    id: "Marketing Track",
    dotClass: "bg-cerulean",
    intro: "Marketing Track - Growth & Revenue Marketing Bootcamp",
    badge: "AI-Driven Growth Marketer",
    badgeClass: "bg-cerulean/10 text-cerulean",
    title: "AI-Driven Growth Marketer (6-10 weeks)",
    duration: "6-10 weeks",
    description:
      "Architect modern acquisition systems, creative engines, and reporting loops. Pair AI copilots with sharp strategy to launch and scale digital campaigns.",
    buttonText: "Explore Curriculum",
    buttonClass: "bg-gradient-to-r from-cerulean to-intl-orange text-ebony",
    buttonHref: "/curriculum/marketing-track",
    tags: [
      "Full-funnel growth playbooks",
      "AI-assisted research & creative",
      "Lifecycle, paid, and partner ops",
      "Attribution, dashboards & insights",
      "Narratives execs can act on",
    ],
    curriculumLabel: "Curriculum Overview",
    curriculum: [
      {
        title: "Weeks 1-2 · Research, ICP & Story",
        detail:
          "Define ICPs, map journeys, and translate insights into positioning. Use AI for rapid desk research, customer synthesis, and message testing.",
      },
      {
        title: "Weeks 3-4 · Channels, Experiments & Creative",
        detail:
          "Design paid, lifecycle, and partner experiments with clear success metrics. Leverage AI copilots to ideate concepts, copy, and creative variations fast.",
      },
      {
        title: "Weeks 5-6 · Systems, Attribution & Insights",
        detail:
          "Instrument analytics, audit funnels, and build dashboards teams trust. Tie qualitative signals with quantitative data for crisp recommendations.",
      },
      {
        title: "Optional · Launch Labs & Revops Alignment",
        detail:
          "Run battle drills for launches, align GTM teams, and codify playbooks that keep sales, product, and marketing rowing in sync.",
      },
    ],
    stackLabel: "Stack & Tools",
    stackItems: [
      "Lifecycle, Paid & Partner Ops",
      "Analytics / Attribution / Dashboarding",
      "AI Research & Creative Copilots",
      "Automation & Campaign Orchestration",
    ],
    capstone:
      "Capstone: Ship a multi-channel growth campaign with creative assets, experiment results, and a metrics narrative ready for leadership review.",
  },
];
