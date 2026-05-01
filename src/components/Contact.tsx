"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, Paperclip, CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";

/* ─── Constants ─────────────────────────────────────────────── */
const PHONE = "01725382367";
const EMAIL = "mdmohtasimbillahzim@gmail.com";
const WHATSAPP_URL = `https://wa.me/88${PHONE}`;
const MESSENGER_URL = "https://www.facebook.com/disolate.zim";

const SUBJECTS = [
  "Project Collaboration",
  "Freelance Work",
  "Job Opportunity",
  "General Inquiry",
  "Other",
];

const CARDS = [
  {
    id: "phone",
    Icon: Phone,
    label: "Phone",
    value: PHONE,
    sub: "Call me directly",
    href: `tel:${PHONE}`,
    gradient: "from-emerald-500 to-teal-400",
    bg: "from-emerald-500/10 to-teal-400/5",
    border: "border-emerald-500/25",
    ring: "focus-visible:ring-emerald-500",
    glow: "rgba(16,185,129,0.15)",
    external: false,
  },
  {
    id: "email",
    Icon: Mail,
    label: "Email",
    value: EMAIL,
    sub: "Drop me a line",
    href: `mailto:${EMAIL}`,
    gradient: "from-sky-500 to-blue-400",
    bg: "from-sky-500/10 to-blue-400/5",
    border: "border-sky-500/25",
    ring: "focus-visible:ring-sky-500",
    glow: "rgba(14,165,233,0.15)",
    external: false,
  },
  {
    id: "whatsapp",
    Icon: MessageCircle,
    label: "WhatsApp",
    value: `+88 ${PHONE}`,
    sub: "Chat instantly",
    href: WHATSAPP_URL,
    gradient: "from-green-500 to-emerald-400",
    bg: "from-green-500/10 to-emerald-400/5",
    border: "border-green-500/25",
    ring: "focus-visible:ring-green-500",
    glow: "rgba(34,197,94,0.15)",
    external: true,
  },
  {
    id: "messenger",
    Icon: Send,
    label: "Messenger",
    value: "disolate.zim",
    sub: "Message on Facebook",
    href: MESSENGER_URL,
    gradient: "from-violet-500 to-purple-400",
    bg: "from-violet-500/10 to-purple-400/5",
    border: "border-violet-500/25",
    ring: "focus-visible:ring-violet-500",
    glow: "rgba(139,92,246,0.15)",
    external: true,
  },
];

/* ─── Magnetic tilt card ─────────────────────────────────────── */
function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { stiffness: 200, damping: 20 });
  const sRotY = useSpring(rotY, { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    rotX.set(-y * 6);
    rotY.set(x * 6);
  };

  const handleLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: sRotX,
        rotateY: sRotY,
        transformPerspective: 800,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Floating orb ───────────────────────────────────────────── */
function Orb({
  color,
  size,
  top,
  left,
  delay,
}: {
  color: string;
  size: number;
  top: string;
  left: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -24, 0], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{ background: color, width: size, height: size, top, left }}
    />
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
export default function Contact() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFileName(e.target.files[0].name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const inputClass = (field: string) =>
    `w-full bg-white/[0.04] border ${
      focused === field ? "border-violet-500/70 ring-2 ring-violet-500/20" : "border-white/10"
    } rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/25 outline-none transition-all duration-300`;

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-10 font-manrope overflow-hidden"
    >
      {/* ── Decorative orbs ── */}
      <Orb color="rgba(16,185,129,0.08)" size={500} top="0%" left="5%" delay={0} />
      <Orb color="rgba(139,92,246,0.07)" size={450} top="40%" left="60%" delay={1.5} />
      <Orb color="rgba(14,165,233,0.06)" size={380} top="70%" left="20%" delay={2.5} />

      {/* ── Grid dots bg ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Get in Touch
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Connect
            </span>
          </h2>
          <p className="mt-5 text-white/45 max-w-lg mx-auto text-base leading-relaxed">
            Have a project in mind or just want to say hi? I&apos;m always open
            to great conversations and new opportunities.
          </p>
        </motion.div>

        {/* ── Two-column body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* ── LEFT: Cards ── */}
          <div className="flex flex-col gap-4 h-full">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1"
              >
                <TiltCard className="h-full">
                  <motion.a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`group relative flex items-center gap-5 p-5 h-full rounded-2xl bg-gradient-to-br ${card.bg} border ${card.border} backdrop-blur-sm overflow-hidden cursor-pointer no-underline`}
                    style={{ textDecoration: "none" }}
                  >
                    {/* Glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: `inset 0 0 40px ${card.glow}` }}
                    />

                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none" />

                    {/* Icon */}
                    <div
                      className={`relative flex-shrink-0 w-13 h-13 w-[52px] h-[52px] rounded-xl bg-gradient-to-br ${card.gradient} p-0.5`}
                    >
                      <div className="w-full h-full rounded-[10px] bg-[#0a1510] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                        <card.Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 mb-0.5">
                        {card.label}
                      </p>
                      <p className="text-white font-semibold text-sm truncate leading-snug">
                        {card.value}
                      </p>
                      <p className="text-white/30 text-xs mt-0.5">{card.sub}</p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -4 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="flex-shrink-0"
                    >
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center`}
                      >
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.a>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl bg-white/[0.035] border border-white/10 backdrop-blur-2xl p-8 shadow-2xl shadow-black/40 flex flex-col h-full"
          >
            {/* Top glow bar */}
            <div className="absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-violet-500/70 to-transparent rounded-full" />
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-violet-500/40 rounded-tl-xl" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-violet-500/40 rounded-tr-xl" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-violet-500/40 rounded-bl-xl" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-violet-500/40 rounded-br-xl" />

            <h3 className="text-xl font-bold text-white mb-7 tracking-tight">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("name")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("email")}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                  Subject
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    required
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass("subject")} appearance-none cursor-pointer pr-10`}
                    style={{ backgroundImage: "none" }}
                  >
                    <option value="" disabled className="bg-[#0a1510] text-white/30">
                      Select a subject
                    </option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s} className="bg-[#0a1510] text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Briefly describe your project, idea, or reason for reaching out."
                  required
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass("message")} resize-none flex-1`}
                  style={{ minHeight: "120px" }}
                />
              </div>

              {/* File attach */}
              <div>
                <input
                  ref={fileRef}
                  type="file"
                  className="hidden"
                  onChange={handleFile}
                />
                <motion.button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-dashed border-white/12 bg-white/[0.02] hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300 text-white/40 hover:text-violet-300 text-sm font-medium"
                >
                  <span className="w-7 h-7 rounded-full bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                    <Paperclip className="w-3.5 h-3.5 text-violet-400" />
                  </span>
                  {fileName ? (
                    <span className="text-violet-300 truncate max-w-[200px] text-sm">{fileName}</span>
                  ) : (
                    <span>Attach a file <span className="text-white/20 text-xs">(optional)</span></span>
                  )}
                </motion.button>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="relative w-full py-4 rounded-xl font-bold text-base tracking-wide overflow-hidden text-white shadow-xl shadow-violet-500/25 mt-auto"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/10 translate-y-full hover:translate-y-0 transition-transform duration-300 group-hover:translate-y-0" />

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-2 relative z-10"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-300" />
                      Message Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-2.5 relative z-10"
                    >
                      Send message
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <p className="text-center text-white/30 text-xs">
                I usually reply within{" "}
                <span className="text-violet-400 font-semibold">24 hours</span>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
