"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  const skillGroups = [
    {
      title: "Frontend & Modern Web",
      tagline: "React, Next.js, TypeScript & Component Architecture",
      items: skills.frontend,
      highlight: true,
    },
    {
      title: "Backend & Databases",
      tagline: "Node.js, Express, MongoDB, PostgreSQL, Prisma & REST APIs",
      items: skills.backendAndDatabases,
      highlight: true,
    },
    {
      title: "AI, Machine Learning & Python",
      tagline: "LLMs, Prompt Engineering, PyTorch, Transformers, Scikit-Learn",
      items: skills.aiMlAndPython,
      highlight: false,
    },
    {
      title: "Tools, DevOps & Cloud",
      tagline: "Docker, CI/CD, Git, GitHub Actions, Postman",
      items: skills.devopsAndTools,
      highlight: false,
    },
  ];

  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto px-6 border-t border-slate-800/80">
      <div className="mb-12">
        <span className="text-xs uppercase font-mono tracking-widest text-sky-400 font-semibold">
          Technical Arsenal
        </span>
        <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
          Full-Stack & Engineering Stack
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          Prioritizing production web development, distributed backend architectures, and AI model integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className={`p-6 rounded-2xl bg-[#10121a] border transition-colors ${
              group.highlight
                ? "border-slate-800 hover:border-sky-500/50"
                : "border-slate-800/80 hover:border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-bold font-mono text-white">
                {group.title}
              </h3>
              {group.highlight && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/60">
                  Core Focus
                </span>
              )}
            </div>
            <p className="text-xs font-mono text-slate-400 mb-4">{group.tagline}</p>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors ${
                    group.highlight
                      ? "bg-slate-950 text-slate-200 border-slate-800 hover:border-sky-500/40"
                      : "bg-slate-950/70 text-slate-400 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Core Competencies banner matching resume */}
      <div className="mt-8 p-6 rounded-2xl bg-[#10121a] border border-slate-800/80">
        <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold mb-3">
          Core Engineering Competencies
        </h4>
        <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
          {skills.coreCompetencies.map((comp) => (
            <span
              key={comp}
              className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800"
            >
              {comp}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
