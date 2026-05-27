"use client";

import { site } from "@/data/site";
import Reveal from "./ui/Reveal";
import Magnetic from "./ui/Magnetic";
import { Mail, Phone, FileDown, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "./ui/BrandIcons";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="flex items-center gap-3 font-mono text-sm text-honey">
          <span className="text-amber">05</span>
          <span className="h-px w-10 bg-honey/50" />
          Contact
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Let&apos;s turn your data into{" "}
            <span className="text-gradient">decisions.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg text-ink-dim">
            I&apos;m open to Data Analyst roles and collaborations. The fastest way
            to reach me is email — I usually reply within a day.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-4">
          <Magnetic>
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber to-gold px-7 py-4 font-display font-semibold text-black shadow-glow transition-transform hover:scale-[1.03]"
            >
              <Mail size={18} /> {site.email}
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
          <a
            href={site.resumePath}
            download
            className="flex items-center gap-2 rounded-2xl glass px-7 py-4 font-medium text-ink transition-colors hover:text-amber"
          >
            <FileDown size={18} /> Download résumé
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl glass px-4 py-3 text-sm text-ink-dim transition-colors hover:text-amber"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl glass px-4 py-3 text-sm text-ink-dim transition-colors hover:text-amber"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          {site.showPhone && (
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 rounded-xl glass px-4 py-3 text-sm text-ink-dim transition-colors hover:text-amber"
            >
              <Phone size={16} /> {site.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
