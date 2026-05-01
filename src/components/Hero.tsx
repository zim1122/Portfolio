"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Mail, Terminal } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);


const ROTATING_TEXTS = [
  "Full Stack Developer (MERN)",
  "AI Explorer",
  "Software Engineer",
  "Creative Problem Solver",
];

function LoopingTypewriter({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? 30 : 80;
    const pause = isDeleting ? 0 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && index < currentText.length) {
        setDisplayText(currentText.slice(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText(currentText.slice(0, index - 1));
        setIndex(index - 1);
      } else if (!isDeleting && index === currentText.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, textIndex, texts]);

  return (
    <span className="text-primary italic">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-0.5 h-8 md:h-12 ml-1 bg-primary align-middle"
      />
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Parallax Background Grid
      gsap.to(gridRef.current, {
        backgroundPosition: "40px 80px",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax Image Drift
      gsap.to(imageRef.current, {
        yPercent: 15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-background via-emerald-950/40 to-background"
    >
      {/* Background Grid */}
      <div ref={gridRef} className="absolute inset-0 grid-pattern pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-8 py-16 md:py-32 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Section */}
          <div className="md:col-span-7 space-y-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full"
            >
              <Terminal size={14} className="text-primary" />
              <span className="text-[12px] font-bold tracking-widest uppercase text-primary">
                Aspiring Software Engineer
              </span>
            </motion.div>

            <h1 ref={headlineRef} className="font-manrope text-5xl md:text-7xl text-white font-extrabold leading-[1.05]">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block"
              >
                Hi, I&apos;m
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="block text-white"
              >
                Md. Mohtasim Billah Zim
              </motion.span>
              <div className="text-3xl md:text-5xl mt-6 min-h-[1.2em]">
                <LoopingTypewriter texts={ROTATING_TEXTS} />
              </div>
            </h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="text-lg text-on-surface-variant max-w-2xl leading-relaxed"
            >
              I’m passionate about building modern, scalable, and user-focused web applications with the MERN stack. 
              Currently exploring AI to build smarter, more impactful applications and enhance the future of web technology.
            </motion.p>

            <div className="flex flex-wrap gap-6 pt-6">
              {[
                { icon: GithubIcon, href: "https://github.com/zim1122", label: "GitHub" },
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/md-mohtasim-billah-zim-b39a22370/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:mohtasimzim@gmail.com", label: "Email" },
                { icon: FacebookIcon, href: "https://facebook.com/mohtasim.zim", label: "Facebook" },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group shadow-lg"
                >
                  <social.icon size={24} className="group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="md:col-span-5 relative flex justify-center">
            {/* Hero Image Container */}
            <motion.div
              ref={imageRef}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="relative w-full max-w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 bg-emerald-950/20"
            >
              <Image
                src="/images/hero-zim.jpg"
                alt="Md. Mohtasim Billah Zim"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </motion.div>

            {/* Floating Developer Badges */}


            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: [0, 10, 0] }}
              transition={{
                x: { type: "spring", stiffness: 100, damping: 20, delay: 1.7 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                opacity: { duration: 1, delay: 1.7 },
              }}
              className="absolute -right-6 bottom-1/4 glass-card p-5 rounded-2xl shadow-2xl z-10 border border-white/10"
            >
              <div className="flex items-center gap-2 mb-1">
                <Cpu className="text-primary w-4 h-4" />
                <span className="text-primary font-bold text-sm">AI Integrated</span>
              </div>
              <p className="text-white font-bold text-md">Smart Solutions</p>
              <div className="w-20 h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 2, ease: "circOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-primary"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

