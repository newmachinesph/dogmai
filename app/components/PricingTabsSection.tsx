"use client";

import Link from "next/link";
import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const icons = {
  builder: "💻",
  designer: "🎨",
  datasci: "📊",
  operator: "⚙️",
  marketing: "📣",
};

const bullets = {
  essentials: ["Start fast", "Learn basics", "Join community"],
  projects: ["Real projects", "Mentor feedback", "Portfolio outputs"],
  full: ["Full program", "Capstone", "Certification"],
  accel: ["OJT-ready", "Career prep", "Portfolio polish"],
};

const pricing = {
  builder: [
    {
      id: "essentials",
      name: "Essentials",
      badge: "Start Here",
      price: "₱999",
      compareAt: "PHP 1,999",
      description: "Basics + community access.",
    },
    {
      id: "projects",
      name: "Projects Pack",
      badge: "Build Proof",
      price: "₱6,999",
      compareAt: "PHP 13,999",
      description: "Unlock builder projects + feedback.",
    },
    {
      id: "full",
      name: "Full Builder Track",
      badge: "Most Popular",
      price: "₱17,999",
      compareAt: "PHP 35,999",
      description: "Full 6-10 week program + capstone.",
    },
    {
      id: "accel",
      name: "Builder Accelerator",
      badge: "Career Track",
      price: "₱25,999",
      compareAt: "PHP 51,999",
      description: "Capstone + OJT + interview prep.",
    },
  ],
  designer: [
    {
      id: "essentials",
      name: "Essentials",
      badge: "Start Here",
      price: "₱999",
      compareAt: "PHP 1,999",
      description: "Figma basics + design community.",
    },
    {
      id: "projects",
      name: "Project Pack",
      badge: "Build Proof",
      price: "₱5,999",
      compareAt: "PHP 11,999",
      description: "Unlock UX/UI project cycles.",
    },
    {
      id: "full",
      name: "Full Designer Track",
      badge: "Most Popular",
      price: "₱15,999",
      compareAt: "PHP 31,999",
      description: "6–10 week design mastery + case study.",
    },
    {
      id: "accel",
      name: "Designer Accelerator",
      badge: "Career Track",
      price: "₱22,999",
      compareAt: "PHP 45,999",
      description: "Portfolio, interview prep, job-facing polish.",
    },
  ],
  datasci: [
    {
      id: "essentials",
      name: "Essentials",
      badge: "Start Here",
      price: "₱999",
      compareAt: "PHP 1,999",
      description: "Python basics + analytics intro.",
    },
    {
      id: "projects",
      name: "Analytics Projects",
      badge: "Build Proof",
      price: "₱5,999",
      compareAt: "PHP 11,999",
      description: "Dashboards, reports, datasets.",
    },
    {
      id: "full",
      name: "Full Data Track",
      badge: "Most Popular",
      price: "₱15,999",
      compareAt: "PHP 31,999",
      description: "6-10 week analytics + ML.",
    },
    {
      id: "accel",
      name: "Data Accelerator",
      badge: "Career Track",
      price: "₱22,999",
      compareAt: "PHP 45,999",
      description: "Business case studies + interview prep.",
    },
  ],
  operator: [
    {
      id: "essentials",
      name: "Essentials",
      badge: "Start Here",
      price: "₱999",
      compareAt: "PHP 1,999",
      description: "AI productivity + ops basics.",
    },
    {
      id: "projects",
      name: "Workflow Projects",
      badge: "Build Proof",
      price: "₱3,999",
      compareAt: "PHP 7,999",
      description: "Automation + dashboard tasks.",
    },
    {
      id: "full",
      name: "Full Operator Track",
      badge: "Most Popular",
      price: "₱13,999",
      compareAt: "PHP 23,999",
      description: "6–10 weeks + complete digital OS build.",
    },
    {
      id: "accel",
      name: "Operator Accelerator",
      badge: "Career Track",
      price: "₱19,999",
      compareAt: "PHP 39,999",
      description: "Client delivery templates + OJT.",
    },
  ],
  marketing: [
    {
      id: "essentials",
      name: "Essentials",
      badge: "Start Here",
      price: "₱999",
      compareAt: "PHP 1,999",
      description: "AI-powered marketing foundations + templates.",
    },
    {
      id: "projects",
      name: "Campaign Projects",
      badge: "Build Proof",
      price: "₱3,999",
      compareAt: "PHP 7,999",
      description: "Funnels, landing pages, and automation flows.",
    },
    {
      id: "full",
      name: "Full Marketing Track",
      badge: "Most Popular",
      price: "₱13,999",
      compareAt: "PHP 23,999",
      description: "6-10 weeks of ICP research through go-to-market launch.",
    },
    {
      id: "accel",
      name: "Marketing Accelerator",
      badge: "Career Track",
      price: "₱19,999",
      compareAt: "PHP 39,999",
      description: "Acquisition lab, audit sprints, and on-the-job prep.",
    },
  ],
};

const tabs = [
  { id: "builder", label: "Builder Track" },
  { id: "designer", label: "Designer Track" },
  { id: "datasci", label: "Analyst Track" },
  { id: "operator", label: "Operator Track" },
  { id: "marketing", label: "Marketing Track" },
];

export default function PricingTabsSection() {
  const [active, setActive] = useState("builder");

  return (
    <AnimatedSection id="pricing" className="border-y border-white/5 bg-ebony/80 py-20">
      <div className="mx-auto max-w-6xl px-4 space-y-12">
        <div className="space-y-3 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-intl-orange">
            2026 Philippines Pricing
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Choose the track that fits your goals
          </h2>
          <p className="text-sm text-slate-300">
            Each path includes mentorship, real projects, and community support built for PH builders,
            designers, analysts, and operators.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-intl-orange/70 bg-intl-orange/20 text-white"
                    : "border-white/10 bg-black/30 text-slate-300"
                } hover:border-white/30`}
              >
                <span>{icons[t.id as keyof typeof icons]}</span>
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricing[active as keyof typeof pricing].map((tier) => (
            <article
              key={tier.id}
              className="flex h-full flex-col rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/70 via-black/70 to-black/90 p-6 shadow-[0_20px_55px_rgba(2,6,23,0.75)] transition hover:scale-[1.02] hover:border-intl-orange/50"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-intl-orange">
                {tier.badge}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">{tier.name}</h3>
              {tier.compareAt && (
                <p className="mt-1 text-xs font-semibold text-slate-500 line-through">{tier.compareAt}</p>
              )}
              <p className="text-2xl font-extrabold text-cyan-300">{tier.price}</p>
              <p className="mt-2 text-xs text-slate-400">{tier.description}</p>

              <ul className="mt-4 space-y-1 text-[11px] text-slate-300">
                {bullets[tier.id as keyof typeof bullets].map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5">
                <Link
                  href="/apply"
                  className="inline-flex w-full items-center justify-center rounded-full bg-intl-orange px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black shadow-lg shadow-intl-orange/40 transition hover:-translate-y-0.5"
                >
                  Apply Now
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-xs text-slate-400">
            Need a flexible payment plan or scholarship? Reach out via the contact form and our
            admissions team will reply within one business day.
          </p>
          <Link
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-intl-orange/50 hover:text-intl-orange"
          >
            Speak with Admissions
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
