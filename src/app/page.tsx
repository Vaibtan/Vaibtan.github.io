import About from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { TechStack } from "@/components/tech-stack";
import { WorkExperience } from "@/components/work-experience";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-24 overflow-x-hidden">

      <Hero />

      <About />

      <TechStack />

      <WorkExperience />

      <section id="projects" className="space-y-10 relative">
        {/* Section divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase pt-4">Projects</h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                tagline={project.tagline}
                bullets={project.bullets}
                tags={project.technologies}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
