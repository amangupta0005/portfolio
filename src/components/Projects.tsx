"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-6 border-t border-slate-800/80">
      {/* Section Header */}
      <div className="mb-14">
        <span className="text-xs uppercase font-mono tracking-widest text-sky-400 font-semibold">
          Featured Engineering Work
        </span>
        <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
          Flagship Projects
        </h2>
        <p className="text-sm text-slate-400 mt-2 max-w-2xl">
          Architected with genuine codebases, deployed live previews, and documented engineering decisions.
        </p>
      </div>

      {/* Projects List with Generous Spacing */}
      <div className="space-y-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-7 sm:p-9 rounded-2xl bg-[#10121a] border border-slate-800/90 hover:border-slate-700 transition-all duration-200"
          >
            {/* Top Bar: Category & Links */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-sky-300 border border-slate-800">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 transition-colors"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

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
              </div>
            </div>

            {/* Project Title & Tagline */}
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-slate-400 mt-1 mb-4">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed max-w-4xl mb-6">
              {project.description}
            </p>

            {/* Bulleted Impact Points */}
            <div className="space-y-2 mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-900">
              <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold mb-2">
                Engineering Highlights & Architecture
              </div>
              {project.impactPoints.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
