"use client";

import { projects } from "@/data/projects";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="04"
          kicker="Selected Work"
          title="Eight projects, one habit: ship the insight."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
