"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Education() {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 max-w-5xl mx-auto px-6 border-t border-slate-800/80">
      <div className="mb-12">
        <span className="text-xs uppercase font-mono tracking-widest text-sky-400 font-semibold">
          Credentials
        </span>
        <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
          Education & Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Education (2 cols) */}
        <div className="md:col-span-2 space-y-6">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#10121a] border border-slate-800/90"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-slate-400">{item.period}</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-950/60 text-sky-300 border border-sky-800/60 font-semibold w-fit">
                  {item.score}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mt-1">{item.degree}</h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5 mb-4">
                {item.institution} • {item.location}
              </p>

              <div className="space-y-1.5 border-t border-slate-800/80 pt-3">
                {item.details.map((detail, dIdx) => (
                  <p key={dIdx} className="text-xs text-slate-300 leading-relaxed">
                    • {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & CV card (1 col) */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#10121a] border border-slate-800/90 space-y-4">
            <h3 className="text-sm font-semibold font-mono text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-400" />
              <span>Certifications</span>
            </h3>

            <div className="space-y-3">
              {certifications.map((c, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="text-xs font-semibold text-white">{c.title}</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">{c.issuer}</div>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">Issued {c.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-sm font-bold text-white">Full Resume PDF</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Complete semester transcripts, project breakdowns, and contact information.
            </p>
            <a
              href="/Aman_Gupta_Resume.pdf"
              download="Aman_Gupta_Resume.pdf"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors w-full justify-center"
            >
              <span>Download PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
