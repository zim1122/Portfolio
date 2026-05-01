"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science (B.Sc. Engg.) in Information Technology",
    institution: "Mawlana Bhashani Science and Technology University",
    period: "2023 – Present",
    location: "Tangail, Bangladesh",
    description:
      "Currently pursuing my undergraduate degree with a strong focus on software engineering, problem solving, and modern technologies.",
    details: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Software Engineering Fundamentals",
    ],
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Cantonment College, Jashore",
    period: "2020 – 2022",
    location: "Jashore, Bangladesh",
    description:
      "Completed higher secondary education with excellent academic performance, achieving GPA 5.00 out of 5.00.",
    details: ["Strong analytical, mathematical, and logical thinking skills through a science-focused curriculum."],
    icon: Award,
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Allardorga Secondary School",
    period: "2016 – 2020",
    location: "Kushtia, Bangladesh",
    description:
      "Successfully completed secondary education with GPA 5.00 out of 5.00. Built a strong academic foundation.",
    details: ["Developed an early passion for technology, programming, and problem solving."],
    icon: BookOpen,
  },
];

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="education" className="py-24 bg-surface-container-lowest relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Academic Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-manrope">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-x">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-surface-container border-4 border-primary md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(75,226,119,0.5)] hidden sm:block" />

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                   <div className="glass-card p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-500 group border border-white/5 relative overflow-hidden">
                    {/* Subtle Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                        <span className="flex items-center gap-2 text-primary font-bold text-sm">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                          {item.degree}
                        </h3>
                      </div>
                    </div>

                    <p className="text-on-surface-variant text-lg mb-6 leading-relaxed">
                      {item.institution}
                    </p>

                    <div className={`flex items-center gap-2 text-on-surface-variant/60 text-sm mb-6 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      {item.details.map((detail, dIndex) => (
                        <span
                          key={dIndex}
                          className="px-3 py-1 rounded-lg bg-on-secondary-fixed-variant/20 text-secondary text-xs font-semibold border border-secondary/10"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for MD and up */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
