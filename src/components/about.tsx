"use client";

import { CodeGraph } from "@/components/code-graph";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="py-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="flex-1 space-y-8">
                    <Badge variant="outline" className="text-neon-green border-neon-green/20 bg-neon-green/5 px-4 py-1">
                        About Me
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        EVERYTHING ABOUT <br />
                        <span className="font-serif italic text-white/50">{DATA.name.split(" ")[0].toUpperCase()}</span>
                    </h2>

                    <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
                        <p>
                            Hi, <strong className="text-white">{DATA.name}</strong> a passionate <strong className="text-white">Full Stack Developer</strong> who loves crafting modern web applications that are both beautiful on the surface and powerful under the hood.
                        </p>
                        <p>
                            With expertise in <strong className="text-neon-green">React, Next.js, Node.js, Express, and PostgreSQL</strong>, I bring together intuitive design and efficient functionality. My experience with authentication systems, payment gateways, and cloud deployment makes me confident in delivering production-ready solutions for real-world clients.
                        </p>
                        <p>
                            Whether it&apos;s a <span className="text-white italic font-serif">Startup MVP</span> or a scalable enterprise application, I focus on writing clean, maintainable code and creating experiences that users love.
                        </p>
                    </div>

                    <Link href="#contact" className="inline-flex items-center gap-2 text-neon-green border-b border-neon-green/20 pb-1 hover:border-neon-green transition-colors uppercase font-bold tracking-wider text-sm">
                        More About Me <ArrowRightIcon className="size-4" />
                    </Link>
                </div>

                {/* Right Animation */}
                <div className="flex-1 relative h-[500px] w-full flex items-center justify-center">
                    <CodeGraph />
                </div>
            </div>
        </section>
    );
}

const Icons = {
    react: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#61DAFB" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(45 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(-45 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        </svg>
    ),
    nextjs: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" />
            <path d="M15 9L9 15" stroke="white" strokeWidth="1.5" />
            <path d="M9 9V15" stroke="white" strokeWidth="1.5" />
        </svg>
    ),
    nodejs: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8">
            <path d="M12 2L20 6V18L12 22L4 18V6L12 2Z" fill="#339933" />
        </svg>
    ),
    postgresql: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#336791" strokeWidth="2" strokeLinejoin="round" />
            <path d="M2 17L12 22L22 17" stroke="#336791" strokeWidth="2" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="#336791" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    ),
    typescript: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
            <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
            <path d="M12 16H10V10H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 16C17.1046 16 18 15.1046 18 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
};
