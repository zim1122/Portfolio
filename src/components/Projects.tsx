"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Keen Keeper",
    description: "A personal CRM and relationship management tool designed to help users nurture their connections. It intelligently identifies which relationships 'Need Attention' based on interaction history, ensuring you never lose touch with those who matter most.",
    tech: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "Firebase"],
    live: "https://mohtasim-keen-keeper.vercel.app/",
    github: "https://github.com/mohtasim", 
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSY4lBnXpdyCfGIjUHFa5fp2wAPJ7op3TNJ5w3P0abDvSnD7nLmsjJrR1VF_oLsdFnqdMPn8A4YU0s8F9E1uViCeoIvPzS2JZVgPDgNwNF8uny0A48Y0Gj79SuuvaF0k9ok7tGXgkQm9J5VPP4nqjpPAo26ZDphH7zKWDaK4hZ-SZj3sXoKYwWe04THluVLe7XWwsnafnk-5R4dE_VFtqCMRsT18Sr7MXLK4tU6zTScdFxw44BL0CvhkW2k7cRbNEV-ySGt1Eytg",
    id: "01"
  },
  {
    title: "DigiTools Platform",
    description: "A premium marketplace and workflow platform providing access to diverse digital resources. From AI tools to design templates, DigiTools simplifies the discovery and acquisition of professional assets for creators and developers.",
    tech: ["Next.js", "React", "Tailwind CSS", "Productivity API", "Netlify"],
    live: "https://mohtasim-digitool-platfrom.netlify.app/",
    github: "https://github.com/mohtasim",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwaz5M97XbxDJxeYxVCFpKWxdtzTKVFMX8dHVfq_3_57zZyMiEZhZZ452PWmVc1pFx-khg1mVjYuNpl7ZU1nEgaMIN_eM13U-ctPC2vxyTmKIESG58Dcy6SsTUfo8qL8QFq7JExaVZX7kiaZwnIkZWNY7x0IQoNUOvvvBBJPmN5YjyvCNN7_3MOu7ojVl8X8MTdhB2nuIR649r9Lz7Hq-b4XS8mqVlgzsaw30FnSB9WPNd7130oMUwqXE8bDsAo4F5l06vbbATpg",
    id: "02"
  },
  {
    title: "English জানালা (Janala)",
    description: "An interactive educational platform dedicated to language mastery. It provides structured learning paths, interactive exercises, and a wealth of resources tailored for both beginners and advanced English learners.",
    tech: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "Netlify"],
    live: "https://mohtasim-english-learning-website.netlify.app/",
    github: "https://github.com/mohtasim",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW41c_BSolJJyA48q_ZRf06GEX8KgSqovrw07uDde2zUn0BdrLskqwj3PQs9CJlw1i0k-656oBuEFMI4KzD2pFBhsLackC5bHDVFd8O-ftf1pxl6ag2y5I6kgjQksNxsaWUsiRosECuh8aB_JMJPcocNrnjG3RhAmTBfiR8uyqF2125q8e7UHzofMbBuYuMrKuLp5sKz6s4w6paqiqUETyVYW_0gmOd8sPR_hmvQYN6LS5GQTa1qRL8MEYn5BmrkhDtYJBWzQkWQ",
    id: "03"
  },
  {
    title: "GitHub Issue Tracker",
    description: "A specialized tool for managing software development workflows directly through GitHub's ecosystem. It offers advanced filtering, real-time tracking, and collaborative features to ensure issues are resolved efficiently.",
    tech: ["Next.js", "JavaScript", "HTML5", "CSS3", "Vercel"],
    live: "https://github-issue-tracke-a5-bm584ifw7.vercel.app/home.html",
    github: "https://github.com/mohtasim",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW41c_BSolJJyA48q_ZRf06GEX8KgSqovrw07uDde2zUn0BdrLskqwj3PQs9CJlw1i0k-656oBuEFMI4KzD2pFBhsLackC5bHDVFd8O-ftf1pxl6ag2y5I6kgjQksNxsaWUsiRosECuh8aB_JMJPcocNrnjG3RhAmTBfiR8uyqF2125q8e7UHzofMbBuYuMrKuLp5sKz6s4w6paqiqUETyVYW_0gmOd8sPR_hmvQYN6LS5GQTa1qRL8MEYn5BmrkhDtYJBWzQkWQ",
    id: "04"
  }
];

export default function Projects() {
  return (
    <section id="project" className="py-32 bg-surface-container-lowest relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(75,226,119,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Selected Works</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-manrope">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Details */}
              <div className={index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-black text-white/5 font-manrope">{project.id}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-background px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-primary/20"
                  >
                    <ExternalLink size={18} />
                    Live Preview
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <Code size={18} />
                    Source Code
                  </a>
                </div>
              </div>

              {/* Project Image Frame */}
              <div className={`relative group ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl aspect-video cursor-pointer"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Floating Icon Decor */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-background shadow-2xl">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                </motion.div>
                
                {/* Visual Accent */}
                <div className={`absolute -z-10 top-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[120px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ${
                  index % 2 === 0 ? "-right-1/4 bg-primary" : "-left-1/4 bg-secondary"
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
