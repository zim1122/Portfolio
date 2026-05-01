"use client";

import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";

/* ─── Magnetic wrapper ───────────────────────────────────────── */
function MagneticButton({
  children,
  className,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.4);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
  };

  return (
    <motion.button
      type={type}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/* ─── Theme toggle icon ──────────────────────────────────────── */
function ThemeToggle({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
      className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
        isDark
          ? "bg-white/8 hover:bg-white/15 text-amber-300"
          : "bg-black/6 hover:bg-black/12 text-indigo-500"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Moon className="w-4 h-4" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Sun className="w-4 h-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

/* ─── Main Navbar ────────────────────────────────────────────── */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  const navItems = ["Home", "Education", "Skill", "Project", "Contact"];

  /* Read saved theme on mount */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved ? saved === "dark" : true;
    setIsDark(dark);
    applyTheme(dark);
    setMounted(true);
  }, []);

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    html.classList.remove("dark", "light");
    html.classList.add(dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    applyTheme(next);
  };

  /* Active section tracker */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.toLowerCase());
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(item.toLowerCase());
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Dynamic nav/text colours based on theme */
  const navBg = isDark
    ? "bg-emerald-950/30 border-white/10 shadow-emerald-950/20"
    : "bg-white/70 border-black/8 shadow-black/5";

  const linkActive = isDark ? "text-primary" : "text-emerald-600";
  const linkIdle = isDark ? "text-white/60 hover:text-white" : "text-gray-500 hover:text-gray-900";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b shadow-2xl font-manrope antialiased h-20 transition-colors duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between gap-6">

        {/* ── Logo ── */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-shrink-0"
        >
          <Link href="/" className="flex flex-col group">
            <span
              className={`text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-primary bg-[length:200%_auto] animate-gradient-x group-hover:scale-105 transition-transform duration-300`}
            >
              &lt;Zim /&gt;
            </span>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              Available for Work
            </div>
          </Link>
        </motion.div>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`font-bold text-sm transition-all duration-300 block relative ${
                    isActive ? `${linkActive} scale-105` : linkIdle
                  }`}
                >
                  {item}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── Right Actions ── */}
        <div className="flex items-center gap-3 flex-shrink-0">

          {/* Theme toggle */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="hidden md:block"
            >
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            </motion.div>
          )}

          {/* Download Resume */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block"
          >
            <motion.a
              href="/resume.pdf"
              download="Mohtasim_Billah_Zim_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-6 py-2.5 rounded-xl font-bold text-sm text-white cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #a78bfa 50%, #f472b6 100%)",
              }}
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>
          </motion.div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDark ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-black/8"
            }`}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden backdrop-blur-2xl border-b overflow-hidden ${
              isDark
                ? "bg-emerald-950/95 border-white/10"
                : "bg-white/95 border-black/8"
            }`}
          >
            <div className="flex flex-col p-8 gap-5">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <motion.div
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl font-bold transition-colors flex items-center gap-3 ${
                        isActive
                          ? "text-primary"
                          : isDark
                          ? "text-white"
                          : "text-gray-800"
                      }`}
                    >
                      {isActive && <span className="w-2 h-2 rounded-full bg-primary" />}
                      {item}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile bottom row: theme + download */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10 mt-1">
                {mounted && (
                  <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
                )}
                <a
                  href="/resume.pdf"
                  download="Mohtasim_Billah_Zim_Resume.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
