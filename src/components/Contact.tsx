"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ArrowUpRight, Send, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(
      `Portfolio Outreach from ${form.name}`
    )}&body=${encodeURIComponent(`${form.message}\n\nSender: ${form.name} (${form.email})`)}`;
    window.open(mailto, "_blank");
  };

  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto px-6 border-t border-slate-800/80">
      <div className="mb-12">
        <span className="text-xs uppercase font-mono tracking-widest text-sky-400 font-semibold">
          Get in Touch
        </span>
        <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Contact</h2>
        <p className="text-sm text-slate-400 mt-2">
          Available for software engineering roles, AI research collaborations, and internships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#10121a] border border-slate-800/90 space-y-4">
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase">Direct Email</div>
              <div className="flex items-center justify-between mt-1">
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm font-mono text-sky-400 hover:underline"
                >
                  {personal.email}
                </a>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copied ? (
                    <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-500 uppercase">Location & Phone</div>
              <div className="text-sm text-slate-300 font-mono mt-1">
                {personal.location} • {personal.phone}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center gap-4 text-xs font-mono">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-[#10121a] border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#10121a] border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Hi Aman, let's discuss an engineering role / collaboration..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#10121a] border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold font-mono text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>{submitted ? "Email Client Triggered!" : "Send Message"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
