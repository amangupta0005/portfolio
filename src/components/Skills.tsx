"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Code2, Server, Database, Brain, Cpu, ShieldCheck } from "lucide-react";

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  const skillGroups = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-4 h-4 text-sky-400" />,
      tagline: "C, C++, Java, Python, JavaScript, TypeScript, SQL",
      items: skills.languages,
      highlight: true,
      badge: "Core Fundamentals",
    },
    {
      title: "Full-Stack Frameworks & Web",
      icon: <Server className="w-4 h-4 text-sky-400" />,
      tagline: "Next.js 14, React 18, Node.js, Express, FastAPI, Prisma, Tailwind",
      items: skills.frameworks,
      highlight: true,
      badge: "Primary Stack",
    },
    {
      title: "Databases, Cloud & DevOps",
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      tagline: "PostgreSQL, Redis 7, MongoDB Atlas, AWS EC2, Docker, Nginx, CI/CD",
      items: [...skills.toolsAndDatabases, ...skills.devopsAndInfrastructure.slice(0, 4)],
      highlight: true,
      badge: "Infrastructure",
    },
    {
      title: "AI, Machine Learning & Vision",
      icon: <Brain className="w-4 h-4 text-purple-400" />,
      tagline: "Gemini 3.5/2.5 Flash, PyTorch, YOLOv8, RoBERTa, Scikit-Learn, XGBoost",
      items: skills.aiMlAndVision,
      highlight: false,
      badge: "Applied AI",
    },
  ];

  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto px-6 border-t border-slate-800/80">
      <div className="mb-12">
        <span className="text-xs uppercase font-mono tracking-widest text-sky-400 font-semibold flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Arsenal</span>
        </span>
        <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
          Technical Stack & Engineering Tooling
        </h2>
        <p className="text-sm text-slate-400 mt-2 max-w-3xl">
          Deep Computer Science grounding paired with production full-stack engineering, distributed caching, 
          containerized cloud pipelines, and generative AI integrations.
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
              <div className="flex items-center gap-2">
                {group.icon}
                <h3 className="text-base font-bold font-mono text-white">
                  {group.title}
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-800/60 font-semibold">
                {group.badge}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400 mb-4">{group.tagline}</p>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-950 text-slate-200 border border-slate-800/90 hover:border-sky-500/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cloud & System Automation Detail */}
      <div className="mt-6 p-6 rounded-2xl bg-[#10121a] border border-slate-800/80">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-sky-400" />
            <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              DevOps, Linux & Cloud Infrastructure
            </h4>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
            Zero-Touch Automation
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
          {skills.devopsAndInfrastructure.map((infra) => (
            <span
              key={infra}
              className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800/90 text-slate-300 hover:border-slate-700 transition-colors"
            >
              {infra}
            </span>
          ))}
        </div>
      </div>

      {/* Core Engineering Strengths */}
      <div className="mt-6 p-6 rounded-2xl bg-[#10121a] border border-slate-800/80">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
            Core Engineering Strengths
          </h4>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
          {skills.coreCompetencies.map((comp) => (
            <span
              key={comp}
              className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200"
            >
              {comp}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
