import About from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { TechStack } from "@/components/tech-stack";
import { Badge } from "@/components/ui/badge";
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

      <section id="projects" className="space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <Badge variant="outline" className="text-white border-white/20 bg-white/5 px-4 py-1">
            Featured Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Check out my latest work</h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl">
            I&apos;ve worked on a variety of projects, from simple
            websites to complex web applications. Here are a few of my
            favorites.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                tags={project.technologies}
                image={project.image}
                video={project.video}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
