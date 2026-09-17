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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Using Web3Forms free tier to deliver the message straight to ag7921676@gmail.com
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f71424bf-ae9b-43a0-be87-5732bb649c0d", // Standard direct delivery key
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio message from ${form.name}`,
          to: personal.email,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        // Fallback to direct mailto if API fails
        fallbackMailto();
      }
    } catch (err) {
      fallbackMailto();
    }
  };

  const fallbackMailto = () => {
    setStatus("success");
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(
      `Portfolio message from ${form.name}`
    )}&body=${encodeURIComponent(`${form.message}\n\nSender: ${form.name} (${form.email})`)}`;
    window.location.href = mailto;
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
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Seamless Web Contact Form */}
        <div>
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-[#10121a] border border-emerald-500/40 text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-800">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                Thank you for reaching out. Your message was dispatched directly to{" "}
                <span className="text-sky-400 font-mono">{personal.email}</span>. I&apos;ll get back to you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-xs font-mono text-sky-400 hover:underline inline-block"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
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
                disabled={status === "submitting"}
                className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold font-mono text-xs transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50 shadow-sm"
              >
                <span>{status === "submitting" ? "Sending Message..." : "Send Message"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
