"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Partner 1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSY4lBnXpdyCfGIjUHFa5fp2wAPJ7op3TNJ5w3P0abDvSnD7nLmsjJrR1VF_oLsdFnqdMPn8A4YU0s8F9E1uViCeoIvPzS2JZVgPDgNwNF8uny0A48Y0Gj79SuuvaF0k9ok7tGXgkQm9J5VPP4nqjpPAo26ZDphH7zKWDaK4hZ-SZj3sXoKYwWe04THluVLe7XWwsnafnk-5R4dE_VFtqCMRsT18Sr7MXLK4tU6zTScdFxw44BL0CvhkW2k7cRbNEV-ySGt1Eytg",
  },
  {
    name: "Partner 2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwaz5M97XbxDJxeYxVCFpKWxdtzTKVFMX8dHVfq_3_57zZyMiEZhZZ452PWmVc1pFx-khg1mVjYuNpl7ZU1nEgaMIN_eM13U-ctPC2vxyTmKIESG58Dcy6SsTUfo8qL8QFq7JExaVZX7kiaZwnIkZWNY7x0IQoNUOvvvBBJPmN5YjyvCNN7_3MOu7ojVl8X8MTdhB2nuIR649r9Lz7Hq-b4XS8mqVlgzsaw30FnSB9WPNd7130oMUwqXE8bDsAo4F5l06vbbATpg",
  },
  {
    name: "Partner 3",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW41c_BSolJJyA48q_ZRf06GEX8KgSqovrw07uDde2zUn0BdrLskqwj3PQs9CJlw1i0k-656oBuEFMI4KzD2pFBhsLackC5bHDVFd8O-ftf1pxl6ag2y5I6kgjQksNxsaWUsiRosECuh8aB_JMJPcocNrnjG3RhAmTBfiR8uyqF2125q8e7UHzofMbBuYuMrKuLp5sKz6s4w6paqiqUETyVYW_0gmOd8sPR_hmvQYN6LS5GQTa1qRL8MEYn5BmrkhDtYJBWzQkWQ",
  },
];

export default function Partners() {
  return (
    <div id="partners" className="bg-background py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-[12px] text-on-surface-variant/60 mb-8 font-bold uppercase tracking-widest text-center md:text-left">
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-12 opacity-40 grayscale">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={120}
                height={40}
                className="h-6 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
