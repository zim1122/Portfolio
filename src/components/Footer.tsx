"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const PHONE = "01725382367";
const EMAIL = "mdmohtasimbillahzim@gmail.com";
const WHATSAPP = `https://wa.me/88${PHONE}`;
const MESSENGER = "https://www.facebook.com/disolate.zim";
const GITHUB = "https://github.com/";   // update with your GitHub URL

const SITEMAP = [
  { label: "Home",      href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Skills",    href: "#skill" },
  { label: "Projects",  href: "#project" },
  { label: "Contact",   href: "#contact" },
];

const SOCIALS = [
  { icon: GithubIcon,    href: GITHUB,    label: "GitHub" },
  { icon: MessageCircle, href: WHATSAPP,  label: "WhatsApp" },
  { icon: Send,          href: MESSENGER, label: "Messenger" },
];

export default function Footer() {
  return (
    <footer className="relative w-full font-manrope overflow-hidden">
      {/* subtle top border gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      {/* dark card shell matching reference */}
      <div className="mx-6 mb-6 mt-0 rounded-2xl bg-[#0e1512]/80 border border-white/[0.06] backdrop-blur-xl shadow-2xl shadow-black/40">
        {/* ── Main three-column row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 py-12">

          {/* ── Col 1 : Brand ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <h2
              className="text-2xl font-extrabold tracking-tight"
              style={{
                background: "linear-gradient(90deg, #f59e0b 0%, #fbbf24 60%, #fde68a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Md Mohtasim Billah Zim
            </h2>

            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Passionate Full-Stack Developer &amp; Competitive Programmer
              crafting high-performance, aesthetically pleasing digital
              experiences.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.93 }}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Col 2 : Sitemap ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/35">
              Sitemap
            </p>
            <ul className="flex flex-col gap-3">
              {SITEMAP.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/55 hover:text-white text-sm font-medium transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 3 : Say Hello ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/35">
              Say Hello
            </p>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-1.5 text-xs text-white/35 font-semibold">
                <Mail className="w-3 h-3" /> Email Me
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="text-white/80 hover:text-white text-sm font-semibold transition-colors duration-200 break-all"
              >
                {EMAIL}
              </a>
            </div>

            {/* Phone / WhatsApp */}
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-1.5 text-xs text-white/35 font-semibold">
                <MessageCircle className="w-3 h-3" /> WhatsApp
              </span>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-sm font-semibold transition-colors duration-200"
              >
                +88 {PHONE}
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-1.5 text-xs text-white/35 font-semibold">
                <MapPin className="w-3 h-3" /> Location
              </span>
              <span className="flex items-center gap-1.5 text-white/80 text-sm font-semibold">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Dhaka, Bangladesh
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.06] px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2026 Md Mohtasim Billah Zim. Product of Passion.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/25 text-xs">Crafted with Precision</span>
            <span className="text-white/25 text-xs">Built with Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
