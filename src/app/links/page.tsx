import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const metadata = {
  title: "Links — Aman Gupta",
  description: "Connect with Aman Gupta — Python & AI/ML Engineer.",
};

export default function LinksPage() {
  const { personal, projects } = PORTFOLIO_DATA;

  const links = [
    {
      title: "GitHub (@amangupta0005)",
      desc: "Open source AI models, full-stack repos & codebases",
      href: personal.socials.github,
      icon: <GithubIcon className="w-5 h-5 text-white" />,
    },
    {
      title: "LinkedIn Profile",
      desc: "Connect professionally and view recommendations",
      href: personal.socials.linkedin,
      icon: <LinkedinIcon className="w-5 h-5 text-sky-400" />,
    },
    {
      title: "QuickGPT (Live App)",
      desc: "Full-stack AI chatbot platform powered by Gemini 2.5",
      href: "https://quick-gpt-smoky.vercel.app/",
      icon: <ArrowUpRight className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: "Resume Ecosystem Builder (Live App)",
      desc: "Dynamic ATS-optimized multi-variant resume builder",
      href: "https://resume-ecosystem-builder.vercel.app/links",
      icon: <ArrowUpRight className="w-5 h-5 text-sky-400" />,
    },
    {
      title: "Direct Email Dispatch",
      desc: personal.email,
      href: personal.socials.email,
      icon: <Mail className="w-5 h-5 text-amber-400" />,
    },
    {
      title: "Download Resume (PDF)",
      desc: "9.38 CGPA, verified coursework & certifications",
      href: "/Aman_Gupta_Resume.pdf",
      icon: <FileDown className="w-5 h-5 text-blue-400" />,
      download: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full flex flex-col items-center text-center">
        <Link
          href="/"
          className="self-start inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Initials Avatar */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 p-[1.5px] mb-4 shadow-lg shadow-sky-950/30">
          <div className="w-full h-full bg-[#090a0f] rounded-[14px] flex items-center justify-center font-mono font-bold text-2xl text-sky-400">
            AG
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight">{personal.name}</h1>
        <p className="text-xs font-mono text-sky-400 mt-1 mb-2">{personal.role}</p>
        <p className="text-xs text-slate-400 max-w-xs mb-8">
          Global Academy of Technology (9.38 CGPA) • Bengaluru, India
        </p>

        {/* Links list */}
        <div className="w-full space-y-3 mb-8">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel="noopener noreferrer"
              download={link.download ? "Aman_Gupta_Resume.pdf" : undefined}
              className="w-full p-4 rounded-xl bg-[#10121a] border border-slate-800/90 hover:border-slate-700 flex items-center justify-between gap-3 text-left transition-colors group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                  {link.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                    {link.title}
                  </div>
                  <div className="text-[11px] text-slate-400">{link.desc}</div>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
