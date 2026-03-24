"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section id="hero" className="relative pt-24 pb-32 overflow-visible">
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] opacity-15 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-green rounded-full blur-[120px] animate-breathing-glow" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-glow rounded-full blur-[120px] animate-breathing-glow [animation-delay:2s]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green/30 rounded-full blur-[80px] animate-breathing-glow [animation-delay:1s]" />
            </div>

            {/* Dot grid subtle overlay */}
            <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
                <motion.div
                    className="flex-1 space-y-8 text-center md:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Badge variant="outline" className="text-neon-green border-neon-green/20 bg-neon-green/[0.06] px-4 py-1.5 backdrop-blur-sm">
                            <span className="relative flex size-2 mr-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-green opacity-75" />
                                <span className="relative inline-flex size-2 rounded-full bg-neon-green" />
                            </span>
                            Available for work
                        </Badge>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        From{" "}
                        <span className="font-serif italic text-shimmer">Sketch</span>
                        {" "}to Scale.
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed mx-auto md:mx-0">
                        {DATA.description}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
                        <Button
                            className="h-12 px-8 rounded-full bg-neon-green text-black hover:bg-neon-green/90 font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,255,157,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                            asChild
                        >
                            <Link href="#contact">Let&apos;s talk</Link>
                        </Button>
                        <Button
                            variant="outline"
                            className="h-12 px-8 rounded-full border-white/15 text-white hover:bg-white/[0.06] hover:border-white/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                            asChild
                        >
                            <Link href="https://drive.google.com/file/d/1nirPoDWtjtTax3ql7EPgUBr0FZSw8ldR/view?usp=sharing" target="_blank">Resume</Link>
                        </Button>
                        <Link
                            href={DATA.contact.social.LinkedIn.url}
                            target="_blank"
                            className="group p-3 rounded-full border border-white/[0.06] bg-white/[0.02] hover:border-neon-green/30 hover:bg-neon-green/[0.06] transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="size-5 text-neutral-500 group-hover:text-neon-green transition-colors duration-300" />
                        </Link>
                    </div>
                </motion.div>

                {/* Avatar with animated ring */}
                <motion.div
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    {/* Outer spinning ring */}
                    <div className="absolute -inset-4 rounded-full animate-spin-slow opacity-40 group-hover:opacity-70 transition-opacity duration-700">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <defs>
                                <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#00ff9d" />
                                    <stop offset="50%" stopColor="transparent" />
                                    <stop offset="100%" stopColor="#bd00ff" />
                                </linearGradient>
                            </defs>
                            <circle cx="50" cy="50" r="48" fill="none" stroke="url(#ring-gradient)" strokeWidth="0.5" strokeDasharray="8 4" />
                        </svg>
                    </div>

                    {/* Inner static glow */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-green/40 to-purple-glow/40 opacity-40 blur-sm transition-all duration-500 group-hover:opacity-70 group-hover:blur-md" />

                    <Avatar className="size-56 md:size-72 border-2 border-white/10 relative shadow-2xl shadow-black/40">
                        <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                        <AvatarFallback>{DATA.initials}</AvatarFallback>
                    </Avatar>

                    {/* Orbiting dots */}
                    <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "12s" }}>
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-neon-green shadow-[0_0_6px_rgba(0,255,157,0.6)]" />
                    </div>
                    <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "18s", animationDirection: "reverse" }}>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-purple-glow shadow-[0_0_6px_rgba(189,0,255,0.6)]" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
