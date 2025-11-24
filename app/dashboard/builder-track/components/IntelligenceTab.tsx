import React from "react";

type IntelligenceTabProps = {
  completedWeeks: number;
  totalWeeks: number;
};

const skillGraphStages = ["Discipline", "Outcomes", "Growth", "Mastery", "Acceleration", "Intelligence"];

const telemetryOverview = [
  "API success/error rates",
  "Query performance",
  "Latency per endpoint",
  "Checkout failure points",
  "Logs from user flows",
];

const aiInsights = [
  "Common error types",
  "Weak API boundaries",
  "Slow data models",
  "Repeated UI issues",
  "Missing telemetry points",
];

const aiRecommendations = [
  "Add retries for checkout API",
  "Normalize product table indexes",
  "Add missing error boundary on cart page",
  "Improve prompt quality for codegen",
];

const IntelligenceTab: React.FC<IntelligenceTabProps> = ({ completedWeeks, totalWeeks }) => {
  const completionPercent = Math.round((completedWeeks / totalWeeks) * 100);

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Intelligence Dashboard</div>
          <p className="text-[11px] text-slate-400">The AI system’s analysis of how you are improving.</p>
        </div>
        <span className="text-[10px] rounded-full border border-slate-700 px-3 py-1 text-slate-300">
          {completedWeeks}/{totalWeeks} weeks · {completionPercent}%
        </span>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-2">
          <h2 className="text-sm font-semibold text-slate-50">Skill Graph</h2>
          <p className="text-[11px] text-slate-400">
            Radar showing your progression across the DOGM.AI loop. Updated automatically based on sprints, weeks completed, and reflections.
          </p>
          <ul className="text-[11px] text-slate-300 space-y-1 list-disc ml-4">
            {skillGraphStages.map((stage) => (
              <li key={stage}>{stage}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-2">
          <h2 className="text-sm font-semibold text-slate-50">Telemetry Overview</h2>
          <p className="text-[11px] text-slate-400">Signals collected from your e-commerce app:</p>
          <ul className="text-[11px] text-slate-300 space-y-1 list-disc ml-4">
            {telemetryOverview.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-2">
          <h2 className="text-sm font-semibold text-slate-50">AI Insights</h2>
          <p className="text-[11px] text-slate-400">AI identifies patterns in your building:</p>
          <ul className="text-[11px] text-slate-300 space-y-1 list-disc ml-4">
            {aiInsights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-2">
        <h2 className="text-sm font-semibold text-slate-50">Recommendations (AI-Generated)</h2>
        <p className="text-[11px] text-slate-400">Examples:</p>
        <ul className="text-[11px] text-slate-300 space-y-1 list-disc ml-4">
          {aiRecommendations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-[11px] text-slate-400">This tab makes you an AI-native full-stack developer.</p>
      </div>
    </section>
  );
};

export default IntelligenceTab;
