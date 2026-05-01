"use client";

import { motion } from "framer-motion";
import { Trophy, Code, Target, Zap, ExternalLink, BarChart3, Binary, Award } from "lucide-react";

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
    icon: Target,
    progress: 70,
  },
  {
    title: "ICPC",
    rank: "Participant",
    description: "Advanced team-based competition focusing on debugging under pressure and strategy.",
    color: "from-blue-400 to-cyan-500",
    icon: Trophy,
    progress: 90,
  },
  {
    title: "NCPC",
    rank: "Participant",
    description: "Competing against the best minds in the country. Strengthening analytical thinking.",
    color: "from-emerald-400 to-teal-500",
    icon: Zap,
    progress: 80,
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skill" className="py-24 bg-surface-container-lowest relative overflow-hidden">
      {/* Dynamic Background Blurs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/20 blur-[150px] rounded-full pointer-events-none" 
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-8 relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Capabilities & Mastery</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-manrope">
            Engineering <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Combining deep architectural knowledge in modern web stacks with high-level competitive programming skills. 
            I bridge the gap between abstract algorithmic logic and practical, scalable software solutions.
          </p>
        </div>

        <div className="space-y-12">
          {/* Technical Skills Frame */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-8 md:p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 relative z-10">
              {skillCategories.map((category, index) => (
                <div key={index} className={`flex flex-col ${index !== skillCategories.length - 1 ? 'lg:border-r lg:border-white/5 lg:pr-12' : ''}`}>
                  <h3 className="text-xl font-bold text-white mb-10 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {category.skills.map((skill, sIndex) => (
                      <motion.div 
                        key={sIndex} 
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center gap-4 group/item cursor-pointer"
                      >
                        <div className="w-16 h-16 rounded-[1.25rem] bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-primary/50 group-hover/item:bg-primary/5 group-hover/item:shadow-[0_0_20px_rgba(75,226,119,0.15)] transition-all duration-500 relative overflow-hidden">
                          <img
                            src={`https://cdn.simpleicons.org/${skill.icon}/ffffff`}
                            alt={skill.name}
                            className="w-9 h-9 object-contain group-hover/item:scale-110 transition-transform duration-500 relative z-10"
                          />
                        </div>
                        <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider text-center group-hover/item:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CP Achievements Frame */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-8 md:p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {cpData.map((item, index) => (
                <div key={index} className={`flex flex-col group/cp ${index !== cpData.length - 1 ? 'lg:border-r lg:border-white/5 lg:pr-8' : ''}`}>
                  <div className="flex justify-between items-start mb-8">
                    <motion.div 
                      whileHover={{ rotate: 15 }}
                      className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-background shadow-lg`}
                    >
                      <item.icon size={24} />
                    </motion.div>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-lg bg-white/5 text-on-surface-variant hover:text-primary hover:bg-white/10 transition-all"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1 group-hover/cp:text-primary transition-colors">{item.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.1em]">{item.rank}</span>
                    {item.stats && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-white/60 text-[10px] font-bold">{item.stats}</span>
                      </>
                    )}
                  </div>
                  
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  {/* Dynamic Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase text-white/40">
                      <span>Expertise</span>
                      <span className="text-primary">{item.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        className={`h-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Call to Action */}
        <motion.div 
          variants={cardVariants}
          className="mt-20 flex flex-col items-center text-center"
        >
          <div className="p-4 rounded-3xl bg-white/5 border border-white/10 inline-flex items-center gap-4 hover:border-primary/30 transition-all group">
            <Award className="text-primary w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium text-lg italic">"Turning complex algorithmic problems into elegant software architecture."</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
