"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { AnimatedProgress, Box, Deck, FlexBox, FullScreen, Heading, Slide } from "spectacle";

const deckTheme = {
  colors: {
    primary: "#ffffff",
    secondary: "#94a3b8",
    tertiary: "#fa5404",
    quaternary: "#04b7ec",
    background: "#04040c",
  },
  fonts: {
    header: "var(--font-poppins, 'Poppins', sans-serif)",
    text: "var(--font-roboto, 'Roboto', sans-serif)",
  },
};

const stats = [
  { label: "Cohort Launch", value: "March 16" },
  { label: "Seats", value: "50 selective" },
  { label: "Format", value: "Live & async" },
];

const slideShell =
  "relative flex min-h-screen flex-col overflow-hidden rounded-[32px] border border-white/5 bg-black/60 px-8 py-16 lg:px-10 lg:py-20 shadow-[0_40px_120px_rgba(0,0,0,0.7)]";

type SlideCardProps = {
  children: ReactNode;
  gradient?: string[];
  align?: "left" | "center";
  contentWidth?: string;
};

const BrandMark = () => (
  <Link
    href="/"
    className="flex h-14 w-36 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition hover:border-intl-orange hover:text-intl-orange"
  >
    <span className="font-heading text-lg uppercase tracking-[0.25em] text-white/90">DOGM.AI</span>
  </Link>
);

const SlideTop = ({ label }: { label: string }) => (
  <div className="flex flex-wrap items-center justify-between gap-4">
    <BrandMark />
    <p className="mb-2 text-\[11px\] uppercase tracking-\[0\.35em\] text-slate-400">{label}</p>
  </div>
);

const SectionEyebrow = ({ children }: { children: ReactNode }) => (
  <p className="mb-2 text-\[11px\] uppercase tracking-\[0\.35em\] text-slate-400">{children}</p>
);

function SlideCard({
  children,
  gradient,
  align = "left",
  contentWidth = "max-w-5xl",
}: SlideCardProps) {
  const gradientLayers =
    gradient ??
    [
      "absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(250,84,4,0.18),transparent_55%)]",
      "absolute inset-0 bg-[radial-gradient(circle_at_80%_-5%,rgba(4,183,236,0.2),transparent_45%)]",
    ];

  const alignmentClasses =
    align === "center"
      ? "items-center justify-center text-center"
      : "items-stretch justify-start text-left";

  return (
    <div className={`${slideShell} ${alignmentClasses}`}>
      <div className="pointer-events-none absolute inset-0">
        {gradientLayers.map((layer, index) => (
          <div key={`${layer}-${index}`} className={layer} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/70 to-black/95" />
      </div>

      <div
        className={`relative mx-auto flex w-full flex-col gap-10 ${contentWidth} ${
          align === "center" ? "items-center" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

const pricingTracks = [
  {
    track: "Builder Track",
    price: "Essentials ₱999 · Projects ₱6,990 · Full ₱18,500 · Accelerator ₱27,500",
    description: "Full-stack builders completing live product sprints and capstones.",
  },
  {
    track: "Designer Track",
    price: "Essentials ₱999 · Projects ₱5,500 · Full ₱15,500 · Accelerator ₱22,900",
    description: "UX/UI creatives shipping polished experiences with mentorship.",
  },
  {
    track: "Analyst Track",
    price: "Essentials ₱999 · Projects ₱5,900 · Full ₱17,900 · Accelerator ₱26,500",
    description: "Analysts building dashboards, ML-ready reports, and automated insights.",
  },
  {
    track: "Operator Track",
    price: "Essentials ₱999 · Projects ₱4,900 · Full ₱14,500 · Accelerator ₱21,900",
    description: "Ops leaders automating workflows, templating delivery, and scaling execution.",
  },
];

const DeckTemplate = () => (
  <FlexBox
    justifyContent="space-between"
    alignItems="center"
    position="absolute"
    bottom="1.75rem"
    width={1}
    padding="0 2.5rem"
  >
    <Box padding="0 1em">
      <FullScreen color={deckTheme.colors.primary} />
    </Box>
    <Box padding="0 1em" flex="1" display="flex" justifyContent="center">
      <AnimatedProgress
        size={8}
        color={deckTheme.colors.primary}
        pacmanColor={deckTheme.colors.tertiary}
      />
    </Box>
  </FlexBox>
);

export default function PitchDeckPage() {
  return (
    <div className="min-h-screen bg-ebony text-white">
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-intl-orange/10 blur-3xl" />
          <div className="absolute top-40 -right-20 h-96 w-96 rounded-full bg-cerulean/10 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-ebony/40 via-ebony/80 to-ebony/95" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-12">
          <Deck template={<DeckTemplate />} theme={deckTheme}>
            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard contentWidth="max-w-4xl">
                <SlideTop label="AI-Native Bootcamp" />

                <div className="space-y-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-slate-300">
                    Accelerate Mastery - Learn With AI - Build Proof
                  </p>
                  <Heading
                    fontSize="clamp(3rem, 4.5vw, 4.4rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                  >
                    The AI-Native Bootcamp for Digital Professionals
                  </Heading>
                  <p className="text-lg leading-relaxed text-slate-200">
                    Ship real builds, sharpen decision instincts, and translate momentum into outcomes
                    hiring partners believe.
                  </p>
                </div>

                <div className="grid w-full gap-5 text-slate-200 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center backdrop-blur-xl"
                    >
                      <p className="text-2xl font-bold text-white">{item.value}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-slate-400">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </SlideCard>
            </Slide>

            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_25%_-10%,rgba(250,84,4,0.15),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_70%_-5%,rgba(4,183,236,0.18),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Problem</SectionEyebrow>
                <div className="space-y-3">
                  <Heading
                    fontSize="clamp(2.6rem, 4vw, 3.4rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    AI changed how modern work gets done, but education didn&apos;t.
                  </Heading>
                  <p className="text-lg leading-relaxed text-slate-300">
                    Credentials keep multiplying while proof of work stalls. Professionals are trying to
                    learn AI with playbooks built for pre-AI roles.
                  </p>
                </div>

                <ul className="grid gap-3 text-base text-slate-100 sm:grid-cols-2">
                  {[
                    "Most programs teach theory, not shipped outcomes",
                    "No systems for disciplined practice or accountability",
                    "Portfolios lack proof recruiters can trust",
                    "Professionals struggle to learn AI at the speed work demands",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                    >
                      <span className="text-xl leading-none text-intl-orange">-</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                  <p className="rounded-2xl border border-intl-orange/30 bg-allports/30 px-6 py-4 text-base font-semibold text-white">
                  Modern teams need AI-native builders who ship reliably - not certificate collectors.
                </p>
              </SlideCard>
            </Slide>

            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_25%_-10%,rgba(4,183,236,0.15),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_75%_-5%,rgba(250,84,4,0.2),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Solution</SectionEyebrow>
                <div className="space-y-4">
                  <Heading
                    fontSize="clamp(2.5rem, 3.8vw, 3.2rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    DOGM.AI is the operating system for accelerated mastery.
                  </Heading>
                  <p className="text-lg leading-relaxed text-slate-300">
                    A 12-week, outcomes-driven bootcamp where students use AI daily to plan, build,
                    ship, and measure real work with disciplined systems.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-intl-orange/15 px-6 py-6 text-lg text-white">
                  We don&apos;t teach concepts - we produce Digital Professionals with proof.
                </div>
              </SlideCard>
            </Slide>

            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(250,84,4,0.15),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_80%_-5%,rgba(4,183,236,0.22),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>System Design</SectionEyebrow>
                <div className="space-y-3">
                  <Heading
                    fontSize="clamp(2.4rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    DOGM.AI is a structured performance system, not a course.
                  </Heading>
                  <p className="text-lg leading-relaxed text-slate-300">
                    Every lever reinforces discipline, outcomes, and momentum.
                  </p>
                </div>

                <ul className="grid gap-3 text-base text-slate-100 sm:grid-cols-2">
                  {[
                    "AI-assisted planning, feedback & iteration",
                    "Daily sprints with weekly outcome cycles",
                    "Portfolio artifacts every single week",
                    "Mentor reviews paired with AI copilots",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                    >
                      <span className="text-xl leading-none text-cerulean">-</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 text-slate-100">
                  <p className="rounded-2xl border border-white/10 bg-black/50 px-6 py-3 text-center text-sm font-semibold">
                    A compounding loop: Discipline -&gt; Outcomes -&gt; Growth -&gt; Mastery -&gt; Acceleration -&gt; Intelligence
                  </p>
                  <p className="text-base text-slate-100">This is how Digital Professionals learn in 2026.</p>
                </div>
              </SlideCard>
            </Slide>

            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_25%_-10%,rgba(4,183,236,0.2),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_70%_-5%,rgba(250,84,4,0.2),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Audience</SectionEyebrow>
                <div className="space-y-4">
                  <Heading
                    fontSize="clamp(2.4rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    Every high-output team needs AI-native talent.
                  </Heading>
                  <p className="text-base text-slate-200">DOGM.AI serves:</p>
                </div>

                <div className="grid gap-4 text-base text-slate-200 sm:grid-cols-2">
                  {[
                    "Product builders",
                    "Designers",
                    "Data analysts",
                    "Operators",
                    "Career shifters",
                    "Upskilling professionals",
                    "Teams upgrading their workflows to AI-first",
                  ].map((segment) => (
                    <div
                      key={segment}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm backdrop-blur"
                    >
                      <span className="text-lg leading-none text-intl-orange">-</span>
                      <span>{segment}</span>
                    </div>
                  ))}
                </div>
              </SlideCard>
            </Slide>
            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_25%_-10%,rgba(4,183,236,0.18),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_65%_-5%,rgba(250,84,4,0.15),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Bootcamp Overview</SectionEyebrow>
                <div className="space-y-4">
                  <Heading
                    fontSize="clamp(2.4rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    Engineered for career outcomes.
                  </Heading>
                  <p className="text-lg font-semibold text-white">
                    12-week live cohort | March 16 | 100 seats
                  </p>
                </div>

                <div className="space-y-4 text-slate-100">
                  <p className="text-base text-slate-300">Engineered for career outcomes:</p>
                  <ul className="grid gap-4 text-base text-slate-100 sm:grid-cols-2">
                    {[
                      "4x/week mentor coaching",
                      "3+ portfolio launches",
                      "Guaranteed hiring partner introductions",
                      "Intensive cycles of building - feedback - iteration - shipped proof",
                    ].map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                      >
                        <span className="text-xl leading-none text-cerulean">-</span>
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideCard>
            </Slide>
            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(250,84,4,0.18),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_70%_-5%,rgba(4,183,236,0.2),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Who Thrives Here</SectionEyebrow>
                <div className="space-y-4">
                  <Heading
                    fontSize="clamp(2.4rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    Digital Professionals ready to own AI-native initiatives.
                  </Heading>
                  <p className="text-base text-slate-300">These leaders want to:</p>
                </div>

                <ul className="grid gap-4 text-base text-slate-100 sm:grid-cols-2">
                  {[
                    "Lead AI roadmaps",
                    "Build adaptive, AI-native interfaces",
                    "Turn data into automated systems",
                    "Automate workflows and scale execution",
                    "Develop portfolios hiring managers can trust",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                    >
                      <span className="text-xl leading-none text-intl-orange">-</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </SlideCard>
            </Slide>
            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_30%_-15%,rgba(4,183,236,0.2),transparent_60%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_80%_-5%,rgba(250,84,4,0.18),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Tracks</SectionEyebrow>
                <div className="space-y-4">
                  <Heading
                    fontSize="clamp(2.4rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    Choose a track. Ship real projects.
                  </Heading>
                </div>

                <div className="grid gap-4 text-slate-100 sm:grid-cols-2">
                  {[
                    {
                      title: "Builder Track (8-12 weeks)",
                      desc: "Full-stack product builds, AI integrations, deployable apps",
                    },
                    {
                      title: "Designer Track (6-10 weeks)",
                      desc: "Adaptive UX, prototyping, interface systems",
                    },
                    {
                      title: "Analyst Track (8-12 weeks)",
                      desc: "Automated decision engines, dashboards, AI analysis",
                    },
                    {
                      title: "Operator Track (6-10 weeks)",
                      desc: "Workflow automation, process intelligence, systems ops",
                    },
                  ].map((track) => (
                    <div
                      key={track.title}
                      className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur"
                    >
                      <p className="text-base font-semibold text-white">{track.title}</p>
                      <p className="text-sm text-slate-300">{track.desc}</p>
                    </div>
                  ))}
                </div>
              </SlideCard>
            </Slide>
            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(250,84,4,0.18),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_70%_-5%,rgba(4,183,236,0.25),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Pricing</SectionEyebrow>
                <div className="space-y-3">
                  <Heading
                    fontSize="clamp(2.2rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    2026 Philippines Pricing
                  </Heading>
                  <p className="text-base text-slate-200">
                    Every track ships with AI copilots, mentor reviews, live sprints, and community
                    support crafted for builders, designers, analysts, and operators across the
                    Philippines.
                  </p>
                </div>

                <div className="grid gap-4 text-slate-100 sm:grid-cols-2">
                  {pricingTracks.map((track) => (
                    <div
                      key={track.track}
                      className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                    >
                      <p className="text-base font-semibold text-white">{track.track}</p>
                      <p className="text-sm text-slate-300">{track.price}</p>
                      <p className="text-xs text-slate-400">{track.description}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/50 px-6 py-3 text-center text-sm text-slate-200">
                  Flexible plans and scholarships are available for cohort-ready professionals —
                  reach out to the admissions team for details.
                </div>
              </SlideCard>
            </Slide>
            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_25%_-10%,rgba(4,183,236,0.2),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_70%_-5%,rgba(250,84,4,0.18),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Daily / Weekly / Monthly</SectionEyebrow>
                <div className="space-y-4">
                  <Heading
                    fontSize="clamp(2.4rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    How the system works.
                  </Heading>
                </div>

                <div className="grid gap-6 text-slate-100 sm:grid-cols-3">
                  {[
                    {
                      title: "Daily Discipline",
                      bullets: [
                        "30-45 min learning sprints",
                        "AI-guided planning",
                        "Micro-deliverables",
                        "Optional mentor check-ins",
                      ],
                    },
                    {
                      title: "Weekly Outcomes",
                      bullets: [
                        "Weekly project shipped",
                        "Mentor + AI feedback",
                        "Revisions + portfolio uploads",
                      ],
                    },
                    {
                      title: "Monthly Mastery",
                      bullets: [
                        "Full evaluations",
                        "AI-assisted skill review",
                        "Personalized next steps",
                        "Mastery badges + updated artifacts",
                      ],
                    },
                  ].map((column) => (
                    <div
                      key={column.title}
                      className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur"
                    >
                      <p className="text-base font-semibold text-white">{column.title}</p>
                      <ul className="mt-4 space-y-2 text-sm text-slate-100">
                        {column.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2 text-left">
                            <span className="text-lg leading-none text-cerulean">-</span>
                            <span className="text-[13px] leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </SlideCard>
            </Slide>
            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(250,84,4,0.2),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_70%_-5%,rgba(4,183,236,0.25),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Loop</SectionEyebrow>
                <div className="space-y-4">
                  <Heading
                    fontSize="clamp(2.4rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    The DOGM.AI Loop
                  </Heading>
                  <p className="text-base text-slate-200">
                    A compounding cycle that transforms learners:
                  </p>
                </div>

                <div className="space-y-4 text-slate-100">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: "Discipline", detail: "Structure" },
                      { label: "Outcomes", detail: "Tangible proof" },
                      { label: "Growth", detail: "Feedback & iteration" },
                      { label: "Mastery", detail: "Instinct & pattern recognition" },
                      { label: "Acceleration", detail: "Speed with AI leverage" },
                      { label: "Intelligence", detail: "Human judgment + machine reasoning" },
                    ].map((phase) => (
                      <div
                        key={phase.label}
                        className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                      >
                        <p className="text-base font-semibold text-white">{phase.label}</p>
                        <p className="text-sm text-slate-300">{phase.detail}</p>
                      </div>
                    ))}
                  </div>

                  <p className="rounded-2xl border border-white/10 bg-black/50 px-6 py-4 text-center text-base font-semibold">
                    This loop becomes the backbone of your career.
                  </p>
                </div>
              </SlideCard>
            </Slide>
            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_25%_-10%,rgba(250,84,4,0.2),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_70%_-5%,rgba(4,183,236,0.2),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Transformation</SectionEyebrow>
                <div className="space-y-4">
                  <Heading
                    fontSize="clamp(2.4rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    DOGM.AI graduates become professionals who:
                  </Heading>
                </div>

                <ul className="grid gap-4 text-base text-slate-100 sm:grid-cols-2">
                  {[
                    "Maintain intentional discipline",
                    "Ship consistent outcomes",
                    "Show accelerated growth",
                    "Demonstrate AI-native mastery",
                    "Orchestrate AI instead of just using it",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                    >
                      <span className="text-xl leading-none text-cerulean">-</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </SlideCard>
            </Slide>
            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_25%_-10%,rgba(4,183,236,0.2),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_70%_-5%,rgba(250,84,4,0.18),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Co-Pilot Advantage</SectionEyebrow>
                <div className="space-y-4">
                  <Heading
                    fontSize="clamp(2.4rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    The AI co-pilot is a multiplier.
                  </Heading>
                  <p className="text-base text-slate-200">AI is not a shortcut - it&apos;s leverage.</p>
                </div>

                <div className="space-y-4 text-slate-100">
                  <ul className="grid gap-4 text-base sm:grid-cols-2">
                    {[
                      "Removes drag: clear blockers instantly",
                      "Collapses feedback loops: iterate 5x faster",
                      "Increases leverage: do more with the same hours",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm backdrop-blur"
                      >
                        <span className="text-xl leading-none text-cerulean">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="rounded-2xl border border-white/10 bg-black/50 px-6 py-4 text-center text-base font-semibold">
                    The result: mastery in weeks, not months.
                  </p>
                </div>
              </SlideCard>
            </Slide>
            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(250,84,4,0.2),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_70%_-5%,rgba(4,183,236,0.2),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Outcomes</SectionEyebrow>
                <div className="space-y-4">
                  <Heading
                    fontSize="clamp(2.4rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    Hire-ready proof, not theory.
                  </Heading>
                  <p className="text-base text-slate-200">Concrete signals hiring partners can trust.</p>
                </div>

                <div className="space-y-4 text-slate-100">
                  <div className="grid gap-4 text-sm text-white sm:grid-cols-3">
                    {[
                      "80%+ ship a flagship capstone",
                      "10-20h weekly AI practice",
                      "3-5 verifiable artifacts",
                    ].map((stat) => (
                      <div
                        key={stat}
                        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>

                  <p className="text-base text-slate-200">Graduates leave with:</p>
                  <ul className="grid gap-4 text-base text-slate-100 sm:grid-cols-2">
                    {[
                      "Production-grade projects",
                      "AI-native workflows",
                      "Compelling narratives tied to shipped outcomes",
                      "The DOGM.AI Mastery Loop - a repeatable system",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm backdrop-blur"
                      >
                        <span className="text-xl leading-none text-intl-orange">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideCard>
            </Slide>
            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_30%_-15%,rgba(4,183,236,0.2),transparent_60%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_80%_-5%,rgba(250,84,4,0.2),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Career Impact</SectionEyebrow>
                <div className="space-y-4">
                  <Heading
                    fontSize="clamp(2.4rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    Career & business impact
                  </Heading>
                </div>

                <div className="space-y-4 text-slate-100">
                  {[
                    "Career transitions into product, design, data, and AI-native roles",
                    "In-role acceleration with proof of speed, clarity, and reliability",
                    "Founder/operator leverage for faster prototyping and execution",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm backdrop-blur"
                    >
                      <span className="text-xl leading-none text-cerulean">-</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </SlideCard>
            </Slide>
            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_25%_-10%,rgba(4,183,236,0.2),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_70%_-5%,rgba(250,84,4,0.2),transparent_45%)]",
                ]}
              >
                <SectionEyebrow>Why We Win</SectionEyebrow>
                <div className="space-y-4">
                  <Heading
                    fontSize="clamp(2.4rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    Why we consistently win.
                  </Heading>
                </div>

                <ul className="grid gap-4 text-base text-slate-100 sm:grid-cols-2">
                  {[
                    "AI-native from the ground up",
                    "Systems thinking -> measurable proof",
                    "Portfolio built weekly",
                    "Mentor + AI feedback loops",
                    "High accountability, low confusion",
                    "Hiring partner alignment",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                    >
                      <span className="text-xl leading-none text-intl-orange">-</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="rounded-2xl border border-white/10 bg-black/50 px-6 py-4 text-center text-base font-semibold">
                  DOGM.AI produces the Digital Professionals modern teams actually want.
                </p>
              </SlideCard>
            </Slide>
            <Slide backgroundColor="transparent" padding={0}>
              <SlideCard
                gradient={[
                  "absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(250,84,4,0.2),transparent_55%)]",
                  "absolute inset-0 bg-[radial-gradient(circle_at_70%_-5%,rgba(4,183,236,0.2),transparent_45%)]",
                ]}
              >
                <SlideTop label="Ready to move?" />
                <div className="space-y-4">
                  <Heading
                    fontSize="clamp(2.4rem, 3.6vw, 3rem)"
                    lineHeight={1.15}
                    fontWeight={800}
                    textAlign="left"
                    fontFamily="var(--font-poppins, 'Poppins', sans-serif)"
                    color="white"
                  >
                    Call to action
                  </Heading>
                  <p className="text-base text-slate-200">
                    Become the Digital Professional who can learn, build, and adapt on demand.
                  </p>
                </div>

                <div className="space-y-4 text-lg text-white">
                  <a
                    href="/apply"
                    className="flex items-center justify-between rounded-2xl border border-intl-orange/40 bg-intl-orange/20 px-6 py-4 text-sm font-semibold text-white transition hover:bg-intl-orange/30"
                  >
                    <span>Apply Now</span>
                    <span>&rarr;</span>
                  </a>
                  <a
                    href="https://calendly.com/"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                  >
                    <span>Book a private intake call</span>
                    <span>&rarr;</span>
                  </a>
                  <div className="rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-center text-sm">
                    hello@dogm.ai
                  </div>
                </div>
              </SlideCard>
            </Slide>
          </Deck>
        </div>
      </div>
    </div>
  );
}
