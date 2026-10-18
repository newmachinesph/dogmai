"use client";

import { useState, MouseEvent, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const tags = [
  "Project-based",
  "AI-assisted",
  "Mentor-guided",
  "Digital Professional Ready",
];

type JourneyCard = {
  id: string;
  dotClass: string;
  bulletDotClass: string;
  badgeClass: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
};

const journeyCards: JourneyCard[] = [
  {
    id: "01 | Discipline",
    dotClass: "bg-intl-orange",
    bulletDotClass: "bg-intl-orange",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
    badge: "Structure",
    title: "The Foundation",
    subtitle: "Build the habit, then let the habit build you.",
    description:
      "Hype fades. Systems don’t. Daily sprints, AI-assisted workflows, and tight reflection loops forge the consistency elite Digital Professionals rely on—especially when motivation drops.",
    bullets: [
      "Daily learning sprints with clear outputs",
      "Guided task systems & accountability rituals",
      "AI for planning, prioritisation & performance tracking",
    ],
  },
  {
    id: "02 | Outcomes",
    dotClass: "bg-cerulean",
    bulletDotClass: "bg-cerulean",
    badgeClass: "bg-cerulean/10 text-cerulean",
    badge: "Tangibility",
    title: "The Measure",
    subtitle: "Results speak louder than ambition.",
    description:
      "Every cycle ends with something real, shippable, and portfolio‑ready. Outcomes turn effort into evidence—clear, undeniable proof of progress.",
    bullets: [
      "Project-based modules anchored in real briefs",
      "Deployable results at the end of each loop",
      "Portfolio built through stacked micro‑wins",
    ],
  },
  {
    id: "03 | Growth",
    dotClass: "bg-allports",
    bulletDotClass: "bg-allports",
    badgeClass: "bg-allports/10 text-allports",
    badge: "Momentum",
    title: "The Momentum",
    subtitle: "Growth is intentional repetition, refined.",
    description:
      "Feedback converts output into insight. Reflection, critique, and AI‑powered reviews shrink the gap between attempt and improvement—week after week.",
    bullets: [
      "Continuous mentor + AI feedback loops",
      "Deliberate iteration and improvement challenges",
      "Growth dashboards to visualise your trajectory",
    ],
  },
  {
    id: "04 | Mastery",
    dotClass: "bg-intl-orange",
    bulletDotClass: "bg-intl-orange",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
    badge: "Mastery",
    title: "The Transformation",
    subtitle: "Mastery begins when you start writing the playbook.",
    description:
      "Repetition turns into instinct. Mastery means crafting your own system, guiding decisions with confidence, and building patterns others follow.",
    bullets: [
      "Advanced project integrations across domains",
      "AI‑simulated interviews & technical drills",
      "Mentorship for portfolio narrative & personal brand",
    ],
  },
  {
    id: "05 | Acceleration",
    dotClass: "bg-cerulean",
    bulletDotClass: "bg-cerulean",
    badgeClass: "bg-cerulean/10 text-cerulean",
    badge: "Leverage",
    title: "The Multiplier",
    subtitle: "Acceleration is mastery, multiplied.",
    description:
      "With your foundations solid, AI amplifies your output. Busywork shrinks while experimentation, leverage, and high‑impact delivery scale fast.",
    bullets: [
      "Rapid prototyping & testing with AI copilots",
      "Workflow automation & optimisation for speed",
      "Real‑world speed‑to‑deployment drills",
    ],
  },
  {
    id: "06 | Intelligence",
    dotClass: "bg-allports",
    bulletDotClass: "bg-allports",
    badgeClass: "bg-allports/10 text-allports",
    badge: "Evolution",
    title: "The Evolution",
    subtitle: "Intelligence is creativity with precision.",
    description:
      "Human judgment fused with machine reasoning becomes your competitive edge. You co‑create with AI, shape complex ideas, and deliver intelligent systems on command.",
    bullets: [
      "AI co‑creation labs for complex problem‑solving",
      "Cognitive learning analytics & personalisation",
      "Research & innovation challenges with real impact",
    ],
  },
];

const glowColors: Record<string, string> = {
  "01 | Discipline": "rgba(250,84,4,0.5)",
  "02 | Outcomes": "rgba(4,183,236,0.5)",
  "03 | Growth": "rgba(4,113,159,0.45)",
  "04 | Mastery": "rgba(250,84,4,0.45)",
  "05 | Acceleration": "rgba(4,183,236,0.45)",
  "06 | Intelligence": "rgba(4,113,159,0.45)",
};

function JourneyCardView({
  card,
  onHover,
  onLeave,
}: {
  card: JourneyCard;
  onHover: (rect: DOMRect) => void;
  onLeave: () => void;
}) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/70 to-black/80 p-5 shadow-[0_18px_35px_rgba(0,0,0,0.65)]"
      onMouseEnter={(event) => onHover(event.currentTarget.getBoundingClientRect())}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-px rounded-[22px] border border-white/5 opacity-40 transition duration-300 group-hover:opacity-70" />
      <div className="relative z-10 flex flex-1 flex-col gap-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="inline-flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${card.dotClass}`} />
            {card.id}
          </span>
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] ${card.badgeClass}`}
          >
            {card.badge}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-white">{card.title}</h3>
        <p className="text-xs text-slate-300">{card.description}</p>
        <ul className="mt-2 space-y-2 text-xs text-slate-400">
          {card.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3 text-[11px]">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40">
                <span className={`h-2.5 w-2.5 rounded-full ${card.bulletDotClass}`} />
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-auto text-[11px] font-medium text-slate-400">
          {card.subtitle}
        </p>
      </div>
    </article>
  );
}

export default function JourneySection() {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 50, y: 50 });
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const offsetX = ((event.clientX - left) / width - 0.5) * 20;
    const offsetY = ((event.clientY - top) / height - 0.5) * 20;
    setParallaxOffset({ x: offsetX, y: offsetY });
  };

  const handleCardHover = (cardId: string, rect: DOMRect) => {
    const containerRect = overlayRef.current?.getBoundingClientRect();
    if (containerRect) {
      const x =
        ((rect.left + rect.width / 2 - containerRect.left) / containerRect.width) * 100;
      const y =
        ((rect.top + rect.height / 2 - containerRect.top) / containerRect.height) * 100;
      setHoverPosition({ x, y });
    }
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => setHoveredCard(null);

  return (
    <AnimatedSection
      id="journey"
      className="relative overflow-hidden border-b border-white/5 bg-ebony/80 py-16"
      onMouseMove={handleMouseMove}
    >
      <div ref={overlayRef} className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
            transition: "transform 0.1s ease-out",
            backgroundImage: hoveredCard
              ? "radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%), radial-gradient(circle at center, rgba(255,255,255,0.08) 20%, transparent 65%)"
              : "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%), radial-gradient(circle at center, rgba(255,255,255,0.02) 20%, transparent 70%)",
            filter: hoveredCard ? "saturate(1.5)" : "none",
          }}
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
            transition: "transform 0.1s ease-out",
            backgroundImage:
              "repeating-radial-gradient(circle at center, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 36px)",
          }}
        />
        {hoveredCard && (
          <div
            className="absolute h-64 w-64 rounded-full blur-3xl transition-all duration-300"
            style={{
              background: glowColors[hoveredCard] ?? "rgba(255,255,255,0.25)",
              left: `calc(${hoverPosition.x}% - 8rem)`,
              top: `calc(${hoverPosition.y}% - 8rem)`,
            }}
          />
        )}
      </div>
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 pb-10 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-intl-orange">
              Why It Works
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              The DOGM.AI Loop
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              A repeatable system that compounds skill every week: <strong>Discipline
              &rarr; Outcomes &rarr; Growth &rarr; Mastery &rarr; Acceleration
              &rarr; Intelligence.</strong> Each stage builds on the last so practice
              becomes proof and proof becomes leverage.
            </p>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              This loop becomes the backbone of your career &mdash; a system you
              can reuse for any skill, field, or project.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid auto-rows-fr gap-5 md:grid-cols-3">
          {journeyCards.slice(0, 3).map((card) => (
            <JourneyCardView
              key={card.id}
              card={card}
              onHover={(rect) => handleCardHover(card.id, rect)}
              onLeave={handleCardLeave}
            />
          ))}
        </div>
        <div className="mt-6 grid auto-rows-fr gap-5 md:grid-cols-3">
          {journeyCards.slice(3).map((card) => (
            <JourneyCardView
              key={card.id}
              card={card}
              onHover={(rect) => handleCardHover(card.id, rect)}
              onLeave={handleCardLeave}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}


