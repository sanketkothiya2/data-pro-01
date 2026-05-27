"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, FileDown } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 md:px-6",
          scrolled ? "glass ring-amber" : "border border-transparent"
        )}
      >
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-amber to-honey font-display text-base font-bold text-black shadow-glow">
            SK
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-ink sm:block">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-ink-dim transition-colors hover:text-amber"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.resumePath}
            download
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-amber to-gold px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.04] active:scale-95 sm:flex"
          >
            <FileDown size={16} /> Resume
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl glass text-ink md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 w-[calc(100%-2rem)] max-w-5xl rounded-2xl glass p-3 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-ink-dim transition-colors hover:bg-white/5 hover:text-amber"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.resumePath}
              download
              className="mt-1 flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber to-gold px-4 py-3 font-semibold text-black"
            >
              <FileDown size={16} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
