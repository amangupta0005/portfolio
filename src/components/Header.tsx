import Link from "next/link";
import { ArrowUpRight, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Header() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090a0f]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white hover:text-sky-400 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
          <span>Aman Gupta</span>
          <span className="text-slate-600">/</span>
          <span className="text-xs font-mono text-slate-400 font-normal">Full-Stack Engineer</span>
        </Link>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href="#projects"
            className="text-slate-400 hover:text-white transition-colors hidden sm:inline"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-slate-400 hover:text-white transition-colors hidden sm:inline"
          >
            Stack
          </a>
          <a
            href="#education"
            className="text-slate-400 hover:text-white transition-colors hidden sm:inline"
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-slate-400 hover:text-white transition-colors hidden sm:inline"
          >
            Contact
          </a>

          <div className="h-4 w-px bg-slate-800 mx-1 hidden sm:block" />

          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-slate-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-slate-400 hover:text-sky-400 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="/Aman_Gupta_Resume.pdf"
            download="Aman_Gupta_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold font-mono transition-colors shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
