"use client";

import { ArrowRight } from "lucide-react";
import NextLink from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  href?: string;
}

export function ProjectCard({ title, description, tags, image, video, href }: ProjectProps) {
  return (
    <NextLink href={href || "#"} className="group block w-full">
      <div className="relative flex flex-col w-full overflow-hidden transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 group-hover:border-white/20 transition-colors">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        </div>

        {/* Content Below */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors flex items-center gap-2">
              {title}
            </h3>
            <p className="text-sm text-neutral-400 line-clamp-2 max-w-md">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.slice(0, 4).map(tag => (
                <span key={tag} className="text-xs text-white/60">
                  {tag}{tag !== tags[tags.length - 1] && ","}
                </span>
              ))}
            </div>
          </div>

          <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowRight className="text-white size-6" />
          </div>
        </div>
      </div>
      <div className="mt-4 h-[1px] w-full bg-white/10 group-hover:bg-white/20 transition-colors" />
    </NextLink>
  );
}
