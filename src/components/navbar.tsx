"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      let current = sections[0];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        className={cn(
          "flex items-center gap-0.5 rounded-full border px-2 py-1.5 shadow-lg transition-all duration-500",
          scrolled
            ? "border-white/10 bg-black/60 backdrop-blur-xl shadow-black/20"
            : "border-white/[0.06] bg-white/[0.03] backdrop-blur-md shadow-black/10"
        )}
      >
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300",
                isActive
                  ? "text-neon-green"
                  : "text-neutral-500 hover:text-neutral-200"
              )}
            >
              {isActive && (
                <span className="absolute inset-0 rounded-full bg-neon-green/[0.08] border border-neon-green/20" />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          );
        })}

      </nav>
    </div>
  );
}
