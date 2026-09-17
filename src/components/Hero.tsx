"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown, Layers, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="pt-36 pb-20 max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
          <span>Bengaluru, India • {personal.status}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-3">
          Aman Gupta
        </h1>

        {/* Role: SOFTWARE ENGINEER — FULL-STACK */}
        <div className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl font-mono text-sky-400 mb-6 font-semibold">
          <span>{personal.role}</span>
        </div>

        {/* Verbatim Professional Summary from your Resume */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8 font-normal">
          {personal.bio}
        </p>

        {/* Full-Stack Core Highlight Strip */}
        <div className="flex flex-wrap gap-2 mb-8 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-800">
            React & Next.js
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-800">
            Node.js & Express
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-800">
            MongoDB Atlas & PostgreSQL
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-800">
            Prisma ORM
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-900 text-sky-300 border border-slate-800">
            LLMs & AI Product Patterns
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 text-sm font-mono">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-colors shadow-sm"
          >
            <span>Explore Full-Stack Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="/Aman_Gupta_Resume.pdf"
            download="Aman_Gupta_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
          >
            <FileDown className="w-4 h-4 text-sky-400" />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </a>
        </div>

        {/* Academic & Competency Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-10 mt-12 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl font-bold font-mono text-white">9.38 / 10</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">B.E. Computer Science CGPA</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl font-bold font-mono text-sky-400">Model → API → UI</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">End-to-End Ownership</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 col-span-2 sm:col-span-1">
            <div className="text-2xl font-bold font-mono text-emerald-400">Live Deployments</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">QuickGPT & Resume Ecosystem</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
