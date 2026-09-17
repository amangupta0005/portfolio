import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="border-t border-slate-800/80 py-12 px-6 max-w-5xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
      <div>
        © {new Date().getFullYear()} Aman Gupta • Bengaluru, India
      </div>

      <div className="flex items-center gap-6 text-slate-400">
        <a
          href={personal.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a
          href={personal.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="hover:text-white transition-colors"
        >
          Email
        </a>
        <a
          href="/Aman_Gupta_Resume.pdf"
          download="Aman_Gupta_Resume.pdf"
          className="hover:text-sky-400 transition-colors"
        >
          Resume (PDF)
        </a>
      </div>
    </footer>
  );
}
