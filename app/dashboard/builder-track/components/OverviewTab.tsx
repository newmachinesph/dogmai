import React from "react";
import { DomainInfo, StudentProfile, WeekModule } from "../domain-tracks";

type OverviewTabProps = {
  loopStages: string[];
  activeDomain: DomainInfo;
  curriculum: WeekModule[];
  weekCompletion: Record<number, boolean>;
  totalWeeks: number;
  completedWeeks: number;
  student: StudentProfile;
  currentWeek: number;
  completionPercent: number;
  todaysSprint: string;
};

const OverviewTab: React.FC<OverviewTabProps> = ({
  loopStages,
  activeDomain,
  curriculum,
  weekCompletion,
  totalWeeks,
  completedWeeks,
  student,
  currentWeek,
  completionPercent,
  todaysSprint,
}) => {
  const upcoming = curriculum.filter((module) => !weekCompletion[module.week]).slice(0, 4);

  return (
    <section className="grid gap-6 lg:grid-cols-[1.6fr,1.4fr]">
      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Program Overview</div>
            <p className="text-[11px] text-slate-400 mt-1">
              You are in the DOGM.AI Full-Stack Product Development Bootcamp. Use this tab to see where you are, what is next, and what to do today.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Current Status</div>
            <ul className="text-[11px] text-slate-300 space-y-1">
              <li>Week: {currentWeek} / {totalWeeks}</li>
              <li>Curriculum Completion: {completionPercent}%</li>
              <li>Track: {activeDomain.label}</li>
              <li>Today's Sprint: {todaysSprint}</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Next Checkpoints</div>
            <ul className="text-[11px] text-slate-300 space-y-1">
              {upcoming.length === 0 && <li>All weeks are marked complete.</li>}
              {upcoming.map((module, index) => (
                <li key={module.week}>
                  Week {module.week}: {module.title}
                  {index === 0 && <span className="text-slate-400"> — Deliverable: {module.deliverable}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-2">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">DOGM.AI Loop</div>
          <div className="text-[11px] text-slate-300 font-semibold">{loopStages.join(" -> ")}</div>
          <p className="text-[11px] text-slate-400">
            You repeat this loop across 12 weeks to build working e-commerce features, measure performance, and improve based on telemetry.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-2">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Builder Profile</div>
          <ul className="text-[11px] text-slate-300 space-y-1">
            <li>Name: {student.name}</li>
            <li>Role: {student.role}</li>
            <li>Cohort: {student.cohort}</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-2">
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Program Note</div>
          <p className="text-[11px] text-slate-400">
            Keep shipping one authentic change every day. Track your progress, capture learnings, and use telemetry and builder signals to prove your work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewTab;
