"use client";

import { Globe, Share2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-auto bg-emerald-950/50 backdrop-blur-lg border-t border-white/5 font-manrope text-sm tracking-wide">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-lg font-bold text-white">&lt;Zim /&gt;</div>
          <p className="text-white/60">© 2024 Zim. Engineered for growth.</p>
        </div>

        <div className="flex gap-8">
          {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-primary/20 group transition-colors">
            <Globe className="w-4 h-4 text-white/60 group-hover:text-primary" />
          </div>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-primary/20 group transition-colors">
            <Share2 className="w-4 h-4 text-white/60 group-hover:text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
}
