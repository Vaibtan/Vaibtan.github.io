"use client";

import { CodeGraph } from "@/components/code-graph";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            {/* Subtle section divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="flex flex-col md:flex-row items-center gap-16">
                {/* Left Content */}
                <motion.div
                    className="flex-1 space-y-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge variant="outline" className="text-neon-green border-neon-green/20 bg-neon-green/[0.04] px-4 py-1.5">
                        About Me
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                        EVERYTHING ABOUT <br />
                        <span className="font-serif italic text-white/40">{DATA.name.split(" ")[0].toUpperCase()}</span>
                    </h2>

                    <div className="space-y-5 text-neutral-400 text-base md:text-lg leading-relaxed">
                        <p>
                            Hi, I&apos;m <strong className="text-white font-medium">{DATA.name}</strong> — an <strong className="text-white font-medium">Applied AI Engineer</strong> who builds end-to-end ML systems that ship to production, from model training to containerized deployment at scale.
                        </p>
                        <p>
                            My core stack spans <strong className="text-neon-green/80">PyTorch, FastAPI, LangChain, Docker, and PostgreSQL</strong>. I&apos;ve built computer vision pipelines with YOLO and CLIP, multi-agent LLM systems, and MLOps platforms handling millions of records — all with rigorous testing and CI/CD.
                        </p>
                        <p>
                            Whether it&apos;s a <span className="text-white/80 italic font-serif">zero-to-one AI product</span> or scaling existing infrastructure, I focus on reliability, low-latency inference, and clean architecture that teams can build on.
                        </p>
                    </div>

                    <Link
                        href="#contact"
                        className="group inline-flex items-center gap-2 text-neon-green border-b border-neon-green/20 pb-1 hover:border-neon-green/60 transition-all duration-300 uppercase font-bold tracking-wider text-sm"
                    >
                        More About Me
                        <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                {/* Right Animation */}
                <motion.div
                    className="flex-1 relative h-[500px] w-full flex items-center justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <CodeGraph />
                </motion.div>
            </div>
        </section>
    );
}
