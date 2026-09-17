import Link from "next/link";
import { ArrowUpRight, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function DashboardHeader() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <header className="py-6 px-4 sm:px-6 max-w-7xl mx-auto w-full flex items-center justify-between">
      {/* Brand logo & dynamic status */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-sm group-hover:glow-cyan transition-all">
          <div className="w-full h-full bg-[#0d1322] rounded-[14px] flex items-center justify-center">
            <span className="font-mono text-cyan-400 font-bold text-xs">AG</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-sm font-bold text-white tracking-tight">
            <span>Aman Gupta</span>
            <span className="text-slate-600">/</span>
            <span className="text-cyan-400 text-xs font-mono font-normal">dashboard</span>
          </div>
          <div className="text-[11px] font-mono text-slate-400">
            Python & AI/ML Engineer
          </div>
        </div>
      </Link>

      {/* Quick Access Links */}
      <div className="flex items-center gap-3">
        <Link
          href="/links"
          className="text-xs font-mono text-slate-400 hover:text-cyan-300 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition hidden sm:inline-flex items-center gap-1"
        >
          <span>/links</span>
          <ArrowUpRight className="w-3 h-3 text-slate-500" />
        </Link>

        <a
          href={personal.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white transition"
          aria-label="GitHub"
        >
          <GithubIcon className="w-4 h-4" />
        </a>

        <a
          href={personal.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-400 transition"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>

        <a
          href="/Aman_Gupta_Resume.pdf"
          download="Aman_Gupta_Resume.pdf"
          className="flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95 shadow-md shadow-cyan-900/20 transition"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Resume</span>
        </a>
      </div>
    </header>
  );
}
