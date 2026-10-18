"use client";

import React, { useMemo, useState } from "react";
import DomainTab from "./components/DomainTab";
import IntelligenceTab from "./components/IntelligenceTab";
import LearnTab from "./components/LearnTab";
import MasteryTab from "./components/MasteryTab";
import MissionsTab from "./components/MissionsTab";
import OverviewTab from "./components/OverviewTab";
import PortfolioTab from "./components/PortfolioTab";
import { domainTracks } from "./domain-tracks";

// Updated DOGM.AI loop for the full-stack product development bootcamp
const loopStages = ["Discipline", "Outcomes", "Growth", "Mastery", "Acceleration", "Intelligence"];

const dailyStudy = [
  "Review today's user story (5-10 min)",
  "Update a UI component or e-commerce flow (15-20 min)",
  "Extend an API or DB path (10-15 min)",
  "Log one reflection about what shipped",
];

const masteryPaths = [
  {
    label: "Weeks 1-3: Frontend (E-commerce UI)",
    desc: "React/Next.js components for cart, checkout, product list, and states.",
    weeks: [1, 2, 3],
  },
  {
    label: "Weeks 4-6: APIs & Databases",
    desc: "Cart API, order API, product API, user auth, relational data models.",
    weeks: [4, 5, 6],
  },
  {
    label: "Weeks 7-9: Systems & Operations",
    desc: "Error logging, metrics, performance profiling, retries, queues.",
    weeks: [7, 8, 9],
  },
  {
    label: "Weeks 10-12: Launch & Intelligence",
    desc: "Telemetry, AI agents, production deployment, final capstone.",
    weeks: [10, 11, 12],
  },
];

type TabId = "overview" | "learn" | "missions" | "mastery" | "portfolio" | "intelligence" | "track";

const DogmCombinedDashboard: React.FC = () => {
  const activeDomain = domainTracks.ecommerce; // You can rename this track to a full-stack/product track in domain-tracks.ts
  const curriculum = useMemo(
    () =>
      activeDomain.curriculum.map((module) => ({
        ...module,
        focus: [...module.focus],
      })),
    [activeDomain.curriculum],
  );
  const builder = useMemo(
    () => ({
      ...activeDomain.student,
      notes: [...activeDomain.student.notes],
    }),
    [activeDomain.student],
  );
  const totalWeeks = curriculum.length;
  const [tab, setTab] = useState<TabId>("overview");
  const [weekCompletion, setWeekCompletion] = useState<Record<number, boolean>>(() =>
    curriculum.reduce((acc, module) => {
      acc[module.week] = false;
      return acc;
    }, {} as Record<number, boolean>),
  );

  const completedWeeks = useMemo(() => Object.values(weekCompletion).filter(Boolean).length, [weekCompletion]);
  const currentWeek = Math.min(completedWeeks + 1, totalWeeks);
  const completionPercent = Math.round((completedWeeks / totalWeeks) * 100);
  const todaysSprint = dailyStudy[0] ?? "Start today's sprint";

  const handleToggleWeek = (week: number) => {
    setWeekCompletion((prev) => ({
      ...prev,
      [week]: !prev[week],
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pb-16">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">DOGM.AI LMS - Builder OS</div>
            <div className="text-sm font-semibold text-slate-50">Full-Stack Product Builder - 12 Week Dashboard</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right text-[11px] text-slate-400 md:block">
              <div>Next Live: Day 1 Orientation</div>
              <div>Today - 7:00 PM (PH)</div>
            </div>
            <button className="rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 px-4 py-1.5 text-[11px] font-semibold text-slate-950 shadow-md shadow-sky-500/30">
              Start Today's Sprint
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-3 text-[11px] border-b border-slate-800">
            {[
              { id: "overview", label: "Overview" },
              { id: "learn", label: "Learn" },
              { id: "missions", label: "Missions" },
              { id: "mastery", label: "Mastery" },
              { id: "portfolio", label: "Portfolio" },
              { id: "intelligence", label: "Intelligence" },
              { id: "track", label: "Track" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id as TabId)}
                className={`px-4 py-2 -mb-px border-b-2 transition ${
                  tab === t.id ? "border-emerald-400 text-emerald-300" : "border-transparent text-slate-500 hover:text-slate-300"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pt-6 space-y-6">
        {tab === "overview" && (
          <OverviewTab
            loopStages={loopStages}
            activeDomain={activeDomain}
            curriculum={curriculum}
            weekCompletion={weekCompletion}
            totalWeeks={totalWeeks}
            completedWeeks={completedWeeks}
            student={builder}
            currentWeek={currentWeek}
            completionPercent={completionPercent}
            todaysSprint={todaysSprint}
          />
        )}

        {tab === "learn" && (
          <LearnTab dailyStudy={dailyStudy} curriculum={curriculum} weekCompletion={weekCompletion} onToggleWeek={handleToggleWeek} />
        )}

        {tab === "missions" && (
          <MissionsTab curriculum={curriculum} weekCompletion={weekCompletion} onToggleWeek={handleToggleWeek} />
        )}

        {tab === "mastery" && <MasteryTab masteryPaths={masteryPaths} weekCompletion={weekCompletion} />}

        {tab === "portfolio" && <PortfolioTab weekCompletion={weekCompletion} />}

        {tab === "intelligence" && <IntelligenceTab completedWeeks={completedWeeks} totalWeeks={totalWeeks} />}

        {tab === "track" && <DomainTab activeDomain={activeDomain} />}
      </main>
    </div>
  );
};

export default DogmCombinedDashboard;
