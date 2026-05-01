"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Rocket, ArrowUpRight, Activity, Palette, Layers, ArrowRight } from "lucide-react";
import { useRef } from "react";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(50px)" }}>{children}</div>
    </motion.div>
  );
}

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skill" className="py-24 bg-surface-container-lowest relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-manrope text-4xl md:text-5xl text-white font-bold mb-4">Mastering Digital Performance</h2>
          <p className="text-on-surface-variant text-lg">
            We provide the tools and expertise needed to dominate your market through data-driven precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bento Card 1 */}
          <TiltCard className="md:col-span-2">
            <motion.div
              variants={itemVariants}
              className="glass-card p-10 rounded-3xl group cursor-pointer hover:bg-white/[0.05] transition-all h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <Rocket className="w-12 h-12 text-primary" />
                <ArrowUpRight className="text-white/20 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-manrope text-3xl text-white font-semibold mb-4">Strategic Growth Scaling</h3>
              <p className="text-on-surface-variant text-lg mb-6 max-w-lg">
                Accelerate your market expansion with our proprietary scaling framework designed for high-growth SaaS and
                Enterprise platforms.
              </p>
              <div className="flex gap-2">
                {["Analysis", "Optimization"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full bg-on-secondary-fixed-variant/40 text-xs text-secondary font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </TiltCard>

          {/* Card 2 */}
          <TiltCard>
            <motion.div
              variants={itemVariants}
              className="glass-card p-10 rounded-3xl group cursor-pointer hover:bg-white/[0.05] transition-all h-full"
            >
              <Activity className="w-12 h-12 text-primary mb-8 block" />
              <h3 className="font-manrope text-2xl text-white font-semibold mb-4">Data Analytics</h3>
              <p className="text-on-surface-variant text-lg">
                Real-time insights that drive actual business value through deep behavior analysis.
              </p>
            </motion.div>
          </TiltCard>

          {/* Card 3 */}
          <TiltCard>
            <motion.div
              variants={itemVariants}
              className="glass-card p-10 rounded-3xl group cursor-pointer hover:bg-white/[0.05] transition-all h-full"
            >
              <Palette className="w-12 h-12 text-primary mb-8 block" />
              <h3 className="font-manrope text-2xl text-white font-semibold mb-4">UI/UX Design</h3>
              <p className="text-on-surface-variant text-lg">
                Crafting premium experiences that convert visitors into loyal brand advocates.
              </p>
            </motion.div>
          </TiltCard>

          {/* Bento Card 4 */}
          <TiltCard className="md:col-span-2">
            <motion.div
              variants={itemVariants}
              className="glass-card p-10 rounded-3xl group cursor-pointer hover:bg-white/[0.05] transition-all flex flex-col md:flex-row gap-8 items-center h-full"
            >
              <div className="flex-1">
                <h3 className="font-manrope text-3xl text-white font-semibold mb-4">Automated Lead Generation</h3>
                <p className="text-on-surface-variant text-lg mb-6">
                  Built-in ecosystems that capture and nurture high-intent leads while you focus on operations.
                </p>
                <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore Automation <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="w-full md:w-1/3 aspect-video bg-emerald-900/30 rounded-2xl flex items-center justify-center border border-white/5">
                <Layers className="text-white/10 w-20 h-20 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </motion.div>
          </TiltCard>
        </div>
      </motion.div>
    </section>
  );
}
