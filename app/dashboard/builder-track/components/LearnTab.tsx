import React from "react";
import { WeekModule } from "../domain-tracks";

type LearnTabProps = {
  dailyStudy: string[];
  curriculum: WeekModule[];
  weekCompletion: Record<number, boolean>;
  onToggleWeek: (week: number) => void;
};

const LearnTab: React.FC<LearnTabProps> = ({ dailyStudy, curriculum, weekCompletion, onToggleWeek }) => {
  const nextModule = curriculum.find((module) => !weekCompletion[module.week]) ?? curriculum[curriculum.length - 1];

  return (
    <section className="grid gap-6 lg:grid-cols-[1.7fr,1.3fr]">
      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Daily Learning</div>
            <p className="text-[11px] text-slate-400">Daily sprints keep the product moving while refining fundamentals.</p>
          </div>
          <div className="space-y-2">
            {dailyStudy.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs text-slate-300 cursor-pointer hover:border-slate-600"
              >
                <input type="checkbox" className="h-3 w-3" />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <p className="text-[11px] text-slate-400">Small, consistent tasks that move real product work forward.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Fundamentals</div>
            <p className="text-[11px] text-slate-400">Core skills for full-stack e-commerce work.</p>
          </div>
          <div className="space-y-3 text-[11px] text-slate-300">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <div className="text-xs font-semibold text-slate-50">Product Foundations</div>
              <ul className="list-disc ml-4 mt-2 space-y-1">
                <li>User stories for e-commerce flows</li>
                <li>Acceptance criteria</li>
                <li>Checkout funnel metrics</li>
                <li>Error handling rules</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <div className="text-xs font-semibold text-slate-50">Frontend (React / Next.js)</div>
              <ul className="list-disc ml-4 mt-2 space-y-1">
                <li>Component patterns</li>
                <li>Dynamic UI for carts & checkout</li>
                <li>Client/server boundaries</li>
                <li>State, loading, error management</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <div className="text-xs font-semibold text-slate-50">Backend (APIs / DB)</div>
              <ul className="list-disc ml-4 mt-2 space-y-1">
                <li>REST contracts</li>
                <li>Postgres models for carts, orders, customers</li>
                <li>Auth + sessions</li>
                <li>Webhooks for payments and notifications</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <div className="text-xs font-semibold text-slate-50">AI-Native Development</div>
              <ul className="list-disc ml-4 mt-2 space-y-1">
                <li>Prompting for code generation</li>
                <li>AI-assisted planning</li>
                <li>AI debugging</li>
                <li>API testing via copilot agents</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-sm font-semibold mb-2">This Week's Module</h2>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-[11px] text-slate-300">
            <div className="text-xs font-semibold text-slate-50">
              <strong>Week {nextModule.week}: {nextModule.title}</strong>
            </div>
            <p className="mt-1 text-slate-400">{nextModule.summary}</p>
            <div className="mt-2 text-slate-100">
              Deliverable: <strong>{nextModule.deliverable}</strong>
            </div>
            <button
              onClick={() => onToggleWeek(nextModule.week)}
              className="mt-3 text-[10px] rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-slate-500"
            >
              {weekCompletion[nextModule.week] ? "Marked complete" : "Mark this week done"}
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default LearnTab;
