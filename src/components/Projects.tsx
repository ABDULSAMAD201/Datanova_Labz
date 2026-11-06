"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import DashboardGallery from "./DashboardGallery";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our work"
            title={<>Real problems <span style={{ color: '#D4C5A9' }}>we&apos;ve solved</span></>}
            description="Each project below starts with the business problem, not the technology. The tools we used are listed small at the bottom of each card."
            align="left"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 90} className="h-full">
              <ProjectCard project={project} index={i} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <p className="mb-5 text-sm text-muted sm:text-base">
            Facing a problem like one of these?
          </p>
          <a
            href="#contact"
            className="sparkle-btn inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(9,179,228,0.45)]"
            style={{ backgroundColor: "#09b3e4", color: "#0a1628" }}
          >
            Let&apos;s solve yours →
          </a>
        </div>

        <DashboardGallery />
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}

    </section>
  );
}
