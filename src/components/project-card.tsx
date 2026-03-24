import { ArrowRight, ArrowUpRight } from "lucide-react";
import NextLink from "next/link";

interface ProjectProps {
  title: string;
  tagline: string;
  bullets: readonly string[];
  tags: readonly string[];
  href?: string;
}

export function ProjectCard({ title, tagline, bullets, tags, href }: ProjectProps) {
  return (
    <NextLink href={href || "#"} className="group block h-full" target="_blank" rel="noopener noreferrer">
      <div className="relative flex flex-col h-full rounded-lg border-[3px] border-neutral-700/60 bg-[#0c0c0c] transition-[border-color,background-color] duration-500 hover:border-neutral-600 hover:bg-[#101010]">

        <div className="flex items-start justify-between gap-4 p-5 pb-4">
          <div className="space-y-1.5 flex-1 min-w-0">
            <h3 className="text-xl font-bold text-white leading-tight tracking-tight group-hover:text-neon-green transition-colors duration-300">
              {title}
            </h3>
            <p className="text-[13px] text-neutral-500 leading-snug">
              {tagline}
            </p>
          </div>

          <div className="shrink-0 size-10 rounded-md border-[3px] border-neutral-700/60 bg-[#111111] flex items-center justify-center group-hover:border-neon-green/30 group-hover:bg-neon-green/[0.06] transition-colors duration-300">
            <ArrowUpRight className="size-4 text-neutral-500 group-hover:text-neon-green transition-colors duration-300" />
          </div>
        </div>

        <div className="px-5 pb-4 flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] text-neon-green/80 bg-neon-green/[0.08] border border-neon-green/[0.15] px-2.5 py-1 rounded-full uppercase tracking-wider font-mono group-hover:bg-neon-green/[0.12] group-hover:border-neon-green/25 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mx-5 h-px bg-neutral-700/50 group-hover:bg-neutral-600/60 transition-colors duration-300" />

        <div className="p-5 flex-1">
          <ul className="space-y-2.5">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm text-neutral-400 leading-relaxed">
                <ArrowRight className="size-3.5 text-neon-green/60 shrink-0 mt-[3px]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </NextLink>
  );
}
