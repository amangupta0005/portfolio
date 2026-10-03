"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  // Keep the top 4 flagship projects on the homepage
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-6 border-t border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-sky-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
            Flagship Projects
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Highlighting core full-stack systems with live AWS EC2 deployments, distributed caching, 
            multimodal LLMs, and high-performance backends.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 hover:border-sky-500/40 transition-all shrink-0 w-fit"
        >
          <span>View All 10 Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 4 Featured Projects */}
      <div className="space-y-8">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="p-7 sm:p-9 rounded-2xl bg-[#10121a] border border-slate-800/90 hover:border-slate-700 transition-all duration-200"
          >
            {/* Top Bar: Category, Status & Action Links */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-sky-300 border border-slate-800 font-medium">
                  {project.category}
                </span>

                {project.liveUrl && (
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Live on AWS EC2</span>
                  </span>
                )}
                <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
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
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
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
                <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
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
      </div>

      {/* Explore All 10 Projects Banner / Link Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="mt-10 p-7 sm:p-8 rounded-2xl bg-gradient-to-r from-[#10121a] via-slate-900 to-[#10121a] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30 text-[11px] font-mono mb-2">
            <span>Engineering Catalog</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Looking for more engineering work?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Explore all 10 projects including <span className="text-slate-300">CollabTrack</span>,{" "}
            <span className="text-slate-300">NeuroShield</span> (ML Telemetry),{" "}
            <span className="text-slate-300">Aero Defect AI</span> (YOLOv8 Vision),{" "}
            <span className="text-slate-300">SmartLogger</span> (PyPI Library),{" "}
            <span className="text-slate-300">Sky2Soil</span> (IoT), and Market Analytics.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold font-mono text-xs transition-colors shrink-0 shadow-sm"
        >
          <span>View All 10 Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
