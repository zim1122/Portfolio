"use client";

import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { Trophy, Code, Target, Zap, ExternalLink, BarChart3, Binary, Award } from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: "c" },
      { name: "C++", icon: "cplusplus" },
      { name: "Java", icon: "openjdk" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
];

const cpData = [
  {
    title: "Codeforces",
    rank: "Pupil",
    stats: "500+ Problems Solved",
    description: "Actively solving algorithmic challenges with a focus on graph theory and dynamic programming.",
    link: "https://codeforces.com/profile/Zim_is_not_deadyet",
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-orange-500/20",
    icon: Binary,
    progress: 85,
  },
  {
    title: "LeetCode",
    rank: "200+ Solved",
    stats: "Top 15% Contestant",
    description: "Consistent practice across arrays, trees, and system design patterns. Earned 100-day badge.",
    link: "https://leetcode.com/u/Zim1122/",
    color: "from-yellow-400 to-amber-600",
    shadow: "shadow-amber-500/20",
    icon: Target,
    progress: 70,
  },
  {
    title: "ICPC",
    rank: "Participant",
    description: "Advanced team-based competition focusing on debugging under pressure and strategy.",
    color: "from-blue-400 to-cyan-500",
    shadow: "shadow-cyan-500/20",
    icon: Trophy,
    progress: 90,
  },
  {
    title: "NCPC",
    rank: "Participant",
    description: "Competing against the best minds in the country. Strengthening analytical thinking.",
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/20",
    icon: Zap,
    progress: 80,
  },
];

/* ─── 3D Magnetic Card ─── */
function MagneticTiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skill" className="py-32 bg-background relative overflow-hidden font-manrope">
      {/* Dynamic Background Blurs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.03, 0.08, 0.03],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" 
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-400">Capabilities & Mastery</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Excellence</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white/50 text-lg md:text-xl leading-relaxed">
            Combining deep architectural knowledge in modern web stacks with high-level competitive programming skills. 
            I bridge the gap between abstract algorithmic logic and scalable software.
          </motion.p>
        </div>

        <div className="space-y-16 perspective-1000">
          {/* Technical Skills Frame */}
          <motion.div variants={itemVariants}>
            <MagneticTiltCard className="bg-white/[0.02] p-8 md:p-14 rounded-[3rem] border border-white/10 relative shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 rounded-[3rem] pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 relative z-10" style={{ transform: "translateZ(30px)" }}>
                {skillCategories.map((category, index) => (
                  <div key={index} className={`flex flex-col ${index !== skillCategories.length - 1 ? 'lg:border-r lg:border-white/10 lg:pr-12' : ''}`}>
                    <h3 className="text-xl font-extrabold text-white mb-10 flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {category.skills.map((skill, sIndex) => (
                        <motion.div 
                          key={sIndex} 
                          whileHover={{ y: -8, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex flex-col items-center gap-4 group/item cursor-pointer"
                        >
                          <div className="w-16 h-16 rounded-[1.25rem] bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-emerald-400/50 group-hover/item:bg-emerald-400/10 group-hover/item:shadow-[0_0_25px_rgba(52,211,153,0.2)] transition-all duration-300 relative overflow-hidden">
                            <motion.img
                              initial={{ y: 0 }}
                              animate={{ y: [-2, 2, -2] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: sIndex * 0.2 }}
                              src={`https://cdn.simpleicons.org/${skill.icon}/ffffff`}
                              alt={skill.name}
                              className="w-8 h-8 object-contain group-hover/item:scale-110 transition-transform duration-500 relative z-10"
                            />
                            {/* Inner shine */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none" />
                          </div>
                          <span className="text-[11px] text-white/50 font-extrabold uppercase tracking-widest text-center group-hover/item:text-emerald-300 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </MagneticTiltCard>
          </motion.div>

          {/* CP Achievements Frame */}
          <motion.div variants={itemVariants}>
            <MagneticTiltCard className="bg-white/[0.02] p-8 md:p-14 rounded-[3rem] border border-white/10 relative shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-bl from-teal-500/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 rounded-[3rem] pointer-events-none" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10" style={{ transform: "translateZ(30px)" }}>
                {cpData.map((item, index) => (
                  <div key={index} className={`flex flex-col group/cp ${index !== cpData.length - 1 ? 'lg:border-r lg:border-white/10 lg:pr-8' : ''}`}>
                    <div className="flex justify-between items-start mb-8">
                      <motion.div 
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-black shadow-xl ${item.shadow} transition-all duration-300`}
                      >
                        <item.icon size={26} strokeWidth={2.5} />
                      </motion.div>
                      {item.link && (
                        <motion.a 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-white mb-2 group-hover/cp:text-emerald-300 transition-colors">{item.title}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest">{item.rank}</span>
                      {item.stats && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span className="text-white/50 text-[10px] font-bold uppercase tracking-wider">{item.stats}</span>
                        </>
                      )}
                    </div>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow font-medium">
                      {item.description}
                    </p>

                    {/* Dynamic Progress Bar */}
                    <div className="space-y-2 mt-auto">
                      <div className="flex justify-between items-center text-[10px] font-extrabold uppercase text-white/40 tracking-widest">
                        <span>Expertise</span>
                        <span className="text-white group-hover/cp:text-emerald-400 transition-colors">{item.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 relative">
                        {/* Glow behind progress */}
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${item.color} blur-[4px] opacity-50`}
                        />
                        {/* Actual progress */}
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                          className={`relative h-full bg-gradient-to-r ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </MagneticTiltCard>
          </motion.div>
        </div>

        {/* Bottom Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="mt-24 flex flex-col items-center text-center relative z-10"
        >
          <motion.div 
            whileHover={{ scale: 1.02, y: -2 }}
            className="px-8 py-5 rounded-full bg-white/[0.03] border border-white/10 inline-flex items-center gap-5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group shadow-2xl backdrop-blur-md cursor-default"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/30 transition-all">
              <Award className="text-emerald-400 w-5 h-5" />
            </div>
            <span className="text-white/80 font-bold text-lg md:text-xl tracking-tight">"Turning complex algorithmic problems into <span className="text-emerald-400">elegant architecture.</span>"</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
