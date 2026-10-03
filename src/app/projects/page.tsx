"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Package,
  Sparkles,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";

const FILTER_TABS = [
  { id: "all", label: "All Projects", count: 10 },
  { id: "fullstack", label: "Full-Stack & Cloud", count: 4 },
  { id: "aiml", label: "AI/ML & Vision", count: 3 },
  { id: "iot", label: "IoT & Systems", count: 2 },
  { id: "tools", label: "Tools & Research", count: 2 },
];

export default function AllProjectsPage() {
  const { projects } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projects.filter((project: Project) => {
    if (activeTab === "all") return true;
    if (activeTab === "fullstack") {
      return (
        project.category.includes("Full-Stack") ||
        project.domains.includes("Full-Stack") ||
        project.category.includes("Cloud")
      );
    }
    if (activeTab === "aiml") {
      return (
        project.domains.includes("AI/ML") ||
        project.domains.includes("Computer Vision") ||
        project.category.includes("Vision")
      );
    }
    if (activeTab === "iot") {
      return (
        project.domains.includes("IoT+ML") ||
        project.category.includes("IoT") ||
        project.category.includes("Real-Time")
      );
    }
    if (activeTab === "tools") {
      return (
        project.domains.includes("Developer Tools") ||
        project.domains.includes("Analytics") ||
        project.category.includes("Developer Tools") ||
        project.category.includes("Market Research")
      );
    }
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#090a0f] text-slate-100 selection:bg-sky-500/20 selection:text-sky-300">
      <Header />

      <main className="flex-1 pt-32 pb-24 max-w-5xl mx-auto px-6 w-full">
        {/* Breadcrumb / Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white mb-6 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Engineering Index</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            All Projects & Architectures
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-3xl leading-relaxed">
            A comprehensive catalog of 10 engineering systems covering distributed full-stack platforms,
            multimodal LLMs, real-time WebSockets, computer vision inspection, IoT telemetry pipelines, and open-source packages.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const count =
              tab.id === "all"
                ? projects.length
                : projects.filter((p) => {
                    if (tab.id === "fullstack")
                      return (
                        p.category.includes("Full-Stack") ||
                        p.domains.includes("Full-Stack") ||
                        p.category.includes("Cloud")
                      );
                    if (tab.id === "aiml")
                      return (
                        p.domains.includes("AI/ML") ||
                        p.domains.includes("Computer Vision") ||
                        p.category.includes("Vision")
                      );
                    if (tab.id === "iot")
                      return (
                        p.domains.includes("IoT+ML") ||
                        p.category.includes("IoT") ||
                        p.category.includes("Real-Time")
                      );
                    if (tab.id === "tools")
                      return (
                        p.domains.includes("Developer Tools") ||
                        p.domains.includes("Analytics") ||
                        p.category.includes("Developer Tools") ||
                        p.category.includes("Market Research")
                      );
                    return true;
                  }).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 border ${
                  isActive
                    ? "bg-sky-500/15 text-sky-300 border-sky-500/40 shadow-sm shadow-sky-950/40 font-semibold"
                    : "bg-slate-900/80 text-slate-400 border-slate-800/90 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-sky-400/20 text-sky-300" : "bg-slate-800 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* All Projects Cards */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="p-7 sm:p-9 rounded-2xl bg-[#10121a] border border-slate-800/90 hover:border-slate-700 transition-all duration-200"
              >
                {/* Top Bar: Category, Status & Action Links */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-sky-300 border border-slate-800 font-medium">
                      {project.category}
                    </span>

                    {project.status === "in_progress" ? (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <span>In Active Development</span>
                      </span>
                    ) : project.liveUrl ? (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Live on AWS EC2</span>
                      </span>
                    ) : null}

                    <span className="text-xs font-mono text-slate-500">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border border-sky-500/40 transition-colors shadow-sm"
                      >
                        <span>Live App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.packageUrl && (
                      <a
                        href={project.packageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-colors"
                      >
                        <Package className="w-3.5 h-3.5" />
                        <span>PyPI Package</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title & Tagline */}
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-sky-400/90 mt-1 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed max-w-4xl mb-5">
                  {project.description}
                </p>

                {/* Bulleted Impact Points */}
                <div className="space-y-2 mb-6 p-4 rounded-xl bg-slate-950/70 border border-slate-900">
                  <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold mb-2">
                    Engineering Architecture & Key Highlights
                  </div>
                  {project.impactPoints.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 hover:border-sky-500/40 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
