import React from "react";
import { DomainTrack } from "../domain-tracks";

type DomainTabProps = {
  activeDomain: DomainTrack;
};

const DomainTab: React.FC<DomainTabProps> = ({ activeDomain }) => {
  const { student } = activeDomain;

  const trackMilestones = ["UI foundations", "Cart API", "Checkout flow", "Order DB", "Auth + sessions", "AI-assisted workflows"];

  const technologyRoadmap = [
    {
      title: "Frontend",
      items: ["Next.js", "React server components", "Tailwind", "Dynamic e-commerce UI patterns"],
    },
    {
      title: "Backend",
      items: ["REST API design", "Node services", "Postgres / relational modeling", "Payment providers", "Webhooks"],
    },
    {
      title: "Observability",
      items: ["Logs", "Metrics", "Error states", "Performance traces"],
    },
    {
      title: "AI-Native",
      items: ["Codegen + refactoring with copilot", "AI-assisted test generation", "AI debugging and analysis"],
    },
  ];

  const tools = ["Next.js / React", "Tailwind", "Node", "Postgres", "Prisma", "Redis (optional)", "Stripe (payments)", "LangChain / OpenAI", "GitHub"];

  const trackExpectations = [
    "Ship one outcome per week",
    "Follow the DOGM loop",
    "Use AI copilots for planning, coding, testing",
    "Maintain a working deployed app",
    "Produce portfolio-ready artifacts",
  ];

  return (
    <section className="space-y-5">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-2">
        <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Track</div>
        <h1 className="text-lg font-semibold text-slate-50">Full-Stack Product Builder (E-commerce)</h1>
        <p className="text-[11px] text-slate-400">Track-specific info for the student's bootcamp.</p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3">
        <h2 className="text-sm font-semibold text-slate-50">Builder Profile</h2>
        <ul className="text-[11px] text-slate-300 space-y-1">
          <li>Name: {student.name}</li>
          <li>Role: {student.role}</li>
          <li>Location: {student.location}</li>
          <li>Email: {student.email}</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3">
        <h2 className="text-sm font-semibold text-slate-50">Attendance</h2>
        <ul className="text-[11px] text-slate-300 space-y-1">
          <li>Streak: {student.attendance.streak}</li>
          <li>Sessions This Week: {student.attendance.sessionsThisWeek} / 4</li>
          <li>Last Absence: {student.attendance.lastAbsent}</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3">
        <h2 className="text-sm font-semibold text-slate-50">Next Milestones</h2>
        <ul className="text-[11px] text-slate-300 space-y-1">
          {trackMilestones.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-4">
        <h2 className="text-sm font-semibold text-slate-50">Technology Roadmap</h2>
        <div className="text-[11px] text-slate-300 space-y-3">
          {technologyRoadmap.map((section) => (
            <div key={section.title}>
              <div className="text-xs font-semibold text-slate-50">{section.title}</div>
              <ul className="list-disc ml-4">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3">
        <h2 className="text-sm font-semibold text-slate-50">Tools</h2>
        <ul className="text-[11px] text-slate-300 space-y-1 list-disc ml-4">
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3">
        <h2 className="text-sm font-semibold text-slate-50">Track Expectations</h2>
        <ul className="text-[11px] text-slate-300 space-y-1 list-disc ml-4">
          {trackExpectations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DomainTab;
