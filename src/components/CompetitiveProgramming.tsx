"use client";

import { motion, Variants } from "framer-motion";
import { Trophy, Code, Award, ExternalLink, Target, Zap } from "lucide-react";

const cpData = [
  {
    title: "Codeforces",
    rank: "Pupil",
    description:
      "Actively solving algorithmic and data structure problems with a focus on optimization and contest performance.",
    topics: ["Graphs", "Dynamic Programming", "Greedy", "Binary Search", "Math"],
    link: "https://codeforces.com/profile/Zim_is_not_deadyet",
    color: "from-[#FFD700] to-[#FFA500]", // Gold-ish for Pupil (actually green but let's make it look premium)
    icon: Code,
  },
  {
    title: "LeetCode",
    rank: "200+ Problems Solved",
    description:
      "Demonstrating consistency with 50 Days and 100 Days Consistency Badges. Focused on arrays, strings, and system-level problems.",
    topics: ["Recursion", "Trees", "DP", "Arrays", "Strings"],
    link: "https://leetcode.com/u/Zim1122/",
    color: "from-[#FFA116] to-[#FFD700]",
    icon: Target,
  },
  {
    title: "ICPC",
    rank: "Participant",
    description:
      "Gained experience in team-based competitive programming, advanced algorithmic thinking, and debugging under pressure.",
    topics: ["Teamwork", "C++", "Contest Strategy", "Advanced Algos"],
    color: "from-blue-500 to-cyan-500",
    icon: Trophy,
  },
  {
    title: "NCPC",
    rank: "Participant",
    description:
      "Competed in National Collegiate Programming Contest against top university teams. Strengthened analytical thinking.",
    topics: ["Analytical Thinking", "Fast Problem Solving", "Teamwork"],
    color: "from-emerald-500 to-teal-500",
    icon: Zap,
  },
];

export default function CompetitiveProgramming() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="cp" className="py-24 bg-surface-container-lowest relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Contests & Problems</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-manrope">
            Competitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-x">Programming</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cpData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Animated Corner Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
              
              <div className="flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 text-white group-hover:text-primary transition-colors">
                    <item.icon size={32} />
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${item.color} text-background text-sm font-bold`}>
                    {item.rank}
                  </div>
                </div>

                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {item.topics.map((topic, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-on-surface-variant group-hover:text-white group-hover:border-primary/20 transition-all"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
