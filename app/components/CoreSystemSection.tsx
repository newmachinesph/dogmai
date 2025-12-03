'use client';
import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  {
    label: "Timeframe",
    value: "12-20 weeks",
    description: "Designed as an intensive, repeatable learning cycle.",
  },
  {
    label: "Mode",
    value: "Async + live",
    description: "Structured sprints with optional live mentor sessions.",
  },
  {
    label: "Focus",
    value: "Digital Professionals",
    description: "For people shipping real AI-powered work.",
  },
];

const loopFlow = [
  {
    text: "Discipline -> Outcomes",
    badge: "Structure",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
  },
  {
    text: "Outcomes -> Growth",
    badge: "Feedback",
    badgeClass: "bg-cerulean/10 text-cerulean",
  },
  {
    text: "Growth -> Mastery",
    badge: "Depth",
    badgeClass: "bg-allports/10 text-allports",
  },
  {
    text: "Mastery -> Acceleration",
    badge: "Leverage",
    badgeClass: "bg-intl-orange/10 text-intl-orange",
  },
  {
    text: "Acceleration -> Intelligence",
    badge: "Synthesis",
    badgeClass: "bg-cerulean/10 text-cerulean",
  },
];

type RadarAxisKey = "discipline" | "outcomes" | "growth" | "mastery" | "acceleration" | "intelligence";

const radarAxes: { key: RadarAxisKey; label: string }[] = [
  { key: "discipline", label: "Discipline (D)" },
  { key: "outcomes", label: "Outcomes (O)" },
  { key: "growth", label: "Growth (G)" },
  { key: "mastery", label: "Mastery (M)" },
  { key: "acceleration", label: "Acceleration (A)" },
  { key: "intelligence", label: "Intelligence (I)" },
];

const loopRadarStates: { label: string; levels: Record<RadarAxisKey, number> }[] = [
  {
    label: loopFlow[0].text,
    levels: {
      discipline: 1,
      outcomes: 0.7,
      growth: 0.4,
      mastery: 0.3,
      acceleration: 0.2,
      intelligence: 0.2,
    },
  },
  {
    label: loopFlow[1].text,
    levels: {
      discipline: 0.7,
      outcomes: 1,
      growth: 0.7,
      mastery: 0.4,
      acceleration: 0.3,
      intelligence: 0.4,
    },
  },
  {
    label: loopFlow[2].text,
    levels: {
      discipline: 0.6,
      outcomes: 0.7,
      growth: 1,
      mastery: 0.9,
      acceleration: 0.5,
      intelligence: 0.5,
    },
  },
  {
    label: loopFlow[3].text,
    levels: {
      discipline: 0.5,
      outcomes: 0.6,
      growth: 0.9,
      mastery: 1,
      acceleration: 0.9,
      intelligence: 0.6,
    },
  },
  {
    label: loopFlow[4].text,
    levels: {
      discipline: 0.4,
      outcomes: 0.7,
      growth: 0.8,
      mastery: 0.9,
      acceleration: 1,
      intelligence: 1,
    },
  },
];

type LoopRadarProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

function LoopRadar({ activeIndex, setActiveIndex }: LoopRadarProps) {
  useEffect(() => {
    const id = setInterval(() => {
      const nextIndex = (activeIndex + 1) % loopRadarStates.length;
      setActiveIndex(nextIndex);
    }, 3200);

    return () => clearInterval(id);
  }, [activeIndex, setActiveIndex]);

  const size = 200;
  const center = size / 2;
  const radius = 70;
  const rings = 4;
  const angleStep = (Math.PI * 2) / radarAxes.length;

  const activeState = loopRadarStates[activeIndex];

  const points = radarAxes
    .map((axis, idx) => {
      const angle = -Math.PI / 2 + idx * angleStep;
      const value = activeState.levels[axis.key];
      const r = radius * (0.25 + value * 0.75);
      const x = center + Math.cos(angle) * r;
      const y = center + Math.sin(angle) * r;
      return `${x},${y}`;
    })
    .join(" ");

  const dataPoints = radarAxes.map((axis, idx) => {
    const angle = -Math.PI / 2 + idx * angleStep;
    const value = activeState.levels[axis.key];
    const r = radius * (0.25 + value * 0.75);
    const x = center + Math.cos(angle) * r;
    const y = center + Math.sin(angle) * r;
    return { x, y };
  });

  return (
    <div className="mt-3 flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[220px] drop-shadow-[0_0_18px_rgba(56,189,248,0.35)]">
          {Array.from({ length: rings }).map((_, i) => {
            const r = radius * ((i + 1) / rings);
            return <circle key={i} cx={center} cy={center} r={r} fill="none" stroke="rgba(148,163,184,0.18)" strokeWidth={0.5} />;
          })}

          {radarAxes.map((axis, idx) => {
            const angle = -Math.PI / 2 + idx * angleStep;
            const x = center + Math.cos(angle) * radius;
            const y = center + Math.sin(angle) * radius;
            return <line key={axis.key} x1={center} y1={center} x2={x} y2={y} stroke="rgba(148,163,184,0.25)" strokeWidth={0.5} />;
          })}

          <polygon points={points} fill="rgba(56,189,248,0.22)" stroke="rgba(56,189,248,1)" strokeWidth={1.6} style={{ transition: "all 0.9s ease-out" }} />

          {dataPoints.map((point, idx) => (
            <circle key={radarAxes[idx].key} cx={point.x} cy={point.y} r={3} fill="rgba(248,250,252,0.9)" />
          ))}
        </svg>
      </div>

      <div className="mt-3 text-center text-[11px] text-slate-400">
        <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Active Flow Step</div>
        <div className="mt-1 text-xs text-slate-100">{activeState.label}</div>
        <p className="mt-1 max-w-xs text-[11px] text-slate-500">The spider graph shows how Discipline, Outcomes, Growth, Mastery, Acceleration, and Intelligence vary as the loop progresses.</p>
      </div>
    </div>
  );
}

export default function CoreSystemSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AnimatedSection id="system" className="border-b border-white/5 bg-black/80 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-intl-orange">What DOGM.AI Actually Is</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Accelerate Mastery. Learn With AI. Build Proof.</h2>
            <p className="mt-4 max-w-xl text-sm text-slate-300">
              DOGM.AI is not a course. It&apos;s a structured operating system that turns daily discipline into shipped work, measurable growth, and a portfolio that proves how you think and build.
            </p>
            <p className="mt-4 max-w-xl text-sm text-slate-300">
              AI guides your planning, feedback, and iteration - but you do the reps. Every sprint is intentional, every artifact is proof, and every loop compounds your edge.
            </p>
            <p className="mt-4 max-w-xl text-sm font-semibold text-slate-100">This is how Digital Professionals learn in 2026.</p>

            <div className="mt-6 grid auto-rows-fr gap-3 text-xs text-slate-300 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-slate-900/70 to-black/80 p-3 shadow-[0_10px_25px_rgba(0,0,0,0.45)]">
                  <div className="pointer-events-none absolute inset-px rounded-[1.35rem] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
                  <div className="relative z-10">
                    <div className="text-[11px] font-semibold text-slate-400">{item.label}</div>
                    <div className="mt-1 text-sm text-white">{item.value}</div>
                    <p className="mt-1 text-[11px] text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/70 to-black/80 p-5 text-xs text-slate-300 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
            <div className="pointer-events-none absolute inset-px rounded-[2rem] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
            <div className="relative">
              <div className="mb-3 flex items-center justify-between text-[11px] text-slate-400">
                <span>System Graph</span>
                <span className="rounded-full bg-black/60 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]">Loop View</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-px flex-1 bg-gradient-to-r from-intl-orange via-cerulean to-allports" />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Flow</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-allports via-cerulean to-intl-orange" />
                </div>

                <LoopRadar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

                <div className="grid gap-2 text-[11px] sm:grid-cols-2">
                  {loopFlow.map((step, i) => (
                    <div
                      key={step.text}
                      role="button"
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`flex items-center justify-between rounded-xl px-3 py-2 text-slate-300 transition duration-300 border ${
                        i === activeIndex ? "border-cerulean/40 bg-slate-800/60 shadow-[0_0_12px_rgba(56,189,248,0.45)]" : "border-white/5 bg-black/40"
                      }`}
                    >
                      <span>{step.text}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] ${step.badgeClass}`}>{step.badge}</span>
                    </div>
                  ))}
                </div>

                <p className="pt-2 text-[11px] text-slate-400">
                  The system cycles Digital Professionals through increasingly complex projects while AI tracks friction, surfaces patterns, and personalizes the next sprint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
