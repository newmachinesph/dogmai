export type StudentProfile = {
  name: string;
  cohort: string;
  role: string;
  focus: string;
  location: string;
  email: string;
  attendance: {
    percent: number;
    streak: string;
    lastAbsent: string;
    sessionsThisWeek: number;
  };
  progress: {
    percent: number;
    module: string;
    nextDeliverable: string;
  };
  notes: string[];
};

export type WeekModule = {
  week: number;
  title: string;
  phase: string;
  summary: string;
  focus: string[];
  deliverable: string;
};

export type TechnologyRoadmapNode = {
  label: string;
  children?: TechnologyRoadmapNode[];
};

export const domainTracks = {
  ecommerce: {
    label: "Full-Stack Commerce Builder",
    tagline: "Build and launch a modern ecommerce app with trustworthy telemetry.",
    specialization: "Full-Stack Product Builder (12 weeks)",
    summary:
      "Start with an empty repo and finish with a production-ready commerce experience that has clean UI, dependable APIs, AI helpers, and clear monitoring.",
    duration: "12 weeks - Day 1",
    promises: [
      "AI pair programming & prompt coaching",
      "Well-documented APIs, auth, and databases",
      "Telemetry, alerts, and recovery drills",
      "Portfolio stories tied to real metrics",
    ],
    focusAreas: [
      "Modern Frontend Foundations",
      "Reliable Systems & Backends",
      "AI Integrations & Automation",
      "Performance, Telemetry & Launch",
    ],
    projects: [
      "Realtime Cart State API",
      "Checkout Experience Audit",
      "Conversion Intelligence Dashboard",
      "Retention & Recovery Automations",
    ],
    curriculum: [
      {
        week: 1,
        title: "Modern Frontend Kickoff",
        phase: "Weeks 1-2 - Modern Frontend Foundations",
        summary:
          "Create the Next.js repo, set up Tailwind tokens, and capture the AI prompts you will reuse for layout scaffolding.",
        focus: ["Repo + env setup", "Tailwind tokens", "Reusable AI prompts"],
        deliverable: "Checkout shell + notes on setup decisions.",
      },
      {
        week: 2,
        title: "UI Systems & States",
        phase: "Weeks 1-2 - Modern Frontend Foundations",
        summary:
          "Build a simple component kit, cover loading/empty/error states, and document how to keep everything accessible.",
        focus: ["Component library", "Stateful flows", "Accessibility basics"],
        deliverable: "Component doc site or Storybook with state notes.",
      },
      {
        week: 3,
        title: "API Contracts & Data Shapes",
        phase: "Weeks 3-4 - APIs, Auth & Real Databases",
        summary: "Design REST endpoints, write contract tests, and align data shapes with what the checkout flow needs.",
        focus: ["Resource modeling", "Contract testing", "Error envelopes"],
        deliverable: "API contract doc + Postman/Newman suite hitting mocked routes.",
      },
      {
        week: 4,
        title: "Auth, Sessions & Databases",
        phase: "Weeks 3-4 - APIs, Auth & Real Databases",
        summary: "Add database migrations, auth flows, and a short note on how you secure user data.",
        focus: ["Auth flows", "Session security", "DB migrations"],
        deliverable: "Working auth + DB migrations and ERD link.",
      },
      {
        week: 5,
        title: "AI Copilots in the Product",
        phase: "Weeks 5-6 - AI Integrations & Automation",
        summary: "Embed AI helpers that summarise receipts or highlight risks, and keep the prompts versioned with guardrails.",
        focus: ["Prompt flows", "Copilot UX", "Guardrails"],
        deliverable: "In-product AI helper demo + prompt registry.",
      },
      {
        week: 6,
        title: "Background Jobs & Automation",
        phase: "Weeks 5-6 - AI Integrations & Automation",
        summary: "Add background jobs, queues, or webhooks with simple health checks so you can show throughput.",
        focus: ["Job orchestration", "Webhooks", "Basic metrics"],
        deliverable: "Automation runbook + job metrics in the dashboard.",
      },
      {
        week: 7,
        title: "Performance & Profiling",
        phase: "Weeks 7-8 - Performance, Polish & Launch",
        summary: "Profile front and backend, remove slow paths, and explain what the telemetry is telling you.",
        focus: ["Lighthouse + Web Vitals", "API profiling", "Tracing"],
        deliverable: "Performance report with before/after charts.",
      },
      {
        week: 8,
        title: "Polish & Launch Readiness",
        phase: "Weeks 7-8 - Performance, Polish & Launch",
        summary: "Final QA, refined UX, deployment scripts, and live launch plan.",
        focus: ["QA checklist", "Deployment scripts", "Launch comms"],
        deliverable: "Launch checklist signed + production deploy.",
      },
      {
        week: 9,
        title: "Telemetry & Alerts",
        phase: "Weeks 9-10 - Operations & Reliability",
        summary: "Create dashboards, simple alerts, and a short recovery plan so others can run the system.",
        focus: ["Metrics contracts", "Alerting", "Incident drills"],
        deliverable: "Telemetry dashboard + alert playbook.",
      },
      {
        week: 10,
        title: "User Feedback & Iteration",
        phase: "Weeks 9-10 - Operations & Reliability",
        summary: "Collect feedback, record a few usability issues, and show how you fixed them.",
        focus: ["Feedback loops", "Usability fixes", "Iteration rituals"],
        deliverable: "User feedback digest + shipped fixes list.",
      },
      {
        week: 11,
        title: "Portfolio & Documentation Sprint",
        phase: "Weeks 11-12 - Capstone & Demo",
        summary: "Write architecture notes, case study beats, and capture short screen recordings.",
        focus: ["Architecture docs", "Case study drafts", "Demo scripts"],
        deliverable: "Case study draft + repo docs update.",
      },
      {
        week: 12,
        title: "Capstone Demo & Handoff",
        phase: "Weeks 11-12 - Capstone & Demo",
        summary: "Run the live demo, capture telemetry screenshots, and package a short handoff kit.",
        focus: ["Telemetry snapshots", "Demo delivery", "Handoff kit"],
        deliverable: "Demo recording + deployment link + documentation bundle.",
      },
    ] as const,
    stack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "API Design",
      "Relational Databases",
      "Auth & Access Control",
      "AI Copilots & Codegen",
      "Workflow Automation",
    ],
    technologyRoadmap: [
      {
        label: "Frontend",
        children: [
          { label: "React primitives" },
          { label: "Next.js routing & data" },
          { label: "Tailwind component library" },
        ],
      },
      {
        label: "Backend",
        children: [
          { label: "REST/JSON APIs" },
          { label: "Auth & session flows" },
          { label: "Relational DB modeling" },
        ],
      },
      {
        label: "AI & Automation",
        children: [
          { label: "Copilot-assisted workflows" },
          { label: "Prompt pipelines" },
          { label: "Background jobs & webhooks" },
        ],
      },
      {
        label: "Ops & Launch",
        children: [
          { label: "Deployment pipelines" },
          { label: "Telemetry & alerts" },
          { label: "Portfolio-ready documentation" },
        ],
      },
    ] as const,
    callToAction: "See Curriculum",
    student: {
      name: "Gia Ramos",
      cohort: "Builder Track - Cohort 01",
      role: "Commerce Builder",
      focus: "Kickstart the checkout shell, set a telemetry goal, and commit proof every day.",
      location: "Quezon City, PH",
      email: "gia.ramos@dogm.ai",
      attendance: {
        percent: 100,
        streak: "Day 1",
        lastAbsent: "N/A",
        sessionsThisWeek: 1,
      },
      progress: {
        percent: 8,
        module: "Module 01 - Modern Frontend Foundations",
        nextDeliverable: "Responsive checkout shell + instrumentation plan recap",
      },
      notes: [
        "Journal daily: what telemetry or UX signal did you add?",
        "Pair with AI tutor on layout heuristics + prompt testing.",
        "Book mentor sync before API contract submission.",
      ],
    },
  },
} as const;

export type DomainKey = keyof typeof domainTracks;

export type DomainTrack = (typeof domainTracks)[DomainKey];

export type DomainInfo = DomainTrack;
