"use client";

import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export const WorkExperience = () => {
    const currentRole = DATA.work.find((role) => role.end.toLowerCase().includes("present")) || DATA.work[0];
    const previousRoles = DATA.work.filter((role) => role !== currentRole);

    return (
        <section id="work" className="py-12 space-y-12 relative">
            {/* Section divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="flex flex-col items-start gap-4">
                <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                    Previous Endeavors
                    <span className="text-[10px] font-mono text-neutral-700 bg-neutral-900/50 px-2.5 py-1 rounded-full border border-white/[0.04] tracking-widest hidden sm:inline-block">
                        EXPERIENCE
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* LEFT COLUMN: Previous Roles */}
                <div className="space-y-8 relative">
                    {/* Vertical Line Guide */}
                    <div className="absolute left-[-1px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-cyan-800/40 via-neutral-800/30 to-transparent hidden xl:block" />

                    {previousRoles.map((role, index) => (
                        <motion.div
                            key={role.company}
                            className="relative group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-neutral-900/30 border border-white/[0.05] p-6 hover:border-cyan-500/20 transition-all duration-500">
                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/10 via-transparent to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Logo on Hover */}
                                <div className="absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-15 transition-opacity duration-500 z-0 pointer-events-none">
                                    <img src={role.logoUrl} alt={role.company} className="size-20 object-contain grayscale invert" />
                                </div>

                                {/* Timeline Marker */}
                                <div className="hidden xl:block absolute left-[-33px] top-8 z-10">
                                    <span className="relative flex size-2.5">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-500/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
                                        <span className="relative inline-flex size-2.5 rounded-full bg-neutral-800 border border-cyan-800/50 group-hover:border-cyan-400 group-hover:bg-cyan-500 transition-all duration-300" />
                                    </span>
                                </div>

                                <div className="relative z-10 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <Link href={role.href || "#"} target="_blank" className="block">
                                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                                                    {role.company}
                                                </h3>
                                            </Link>
                                            <h4 className="text-sm text-cyan-200/60 font-medium">{role.title}</h4>
                                        </div>
                                        <Link href={role.href || "#"} target="_blank" className="text-white/15 group-hover:text-cyan-400/60 transition-colors duration-300">
                                            <ExternalLink className="size-4" />
                                        </Link>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="h-[1px] w-5 bg-cyan-500/20 group-hover:bg-cyan-500/50 group-hover:w-8 transition-all duration-300" />
                                        <span className="text-xs font-mono text-neutral-500 group-hover:text-cyan-300/70 transition-colors duration-300 tracking-wider">
                                            {role.start} — {role.end}
                                        </span>
                                    </div>

                                    <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300 leading-relaxed">
                                        {role.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* RIGHT COLUMN: Ongoing Role (Featured) */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="sticky top-24">
                        <div className="absolute -top-3 -left-3 bg-neutral-950 text-neutral-500 text-[10px] font-mono px-2.5 py-1 z-10 border border-white/[0.06] rounded-full">
                            Ongoing
                        </div>

                        <div className="relative overflow-hidden rounded-3xl bg-neutral-900/30 border border-white/[0.06] p-8 min-h-[500px] flex flex-col justify-end group shine-sweep">
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-transparent to-transparent z-0" />

                            {/* Decorative Logo */}
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-25 transition-opacity duration-700">
                                <img src={currentRole.logoUrl} alt={currentRole.company} className="size-32 object-contain grayscale invert" />
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-[2px] w-10 bg-purple-500/60 shadow-[0_0_8px_rgba(168,85,247,0.3)]" />
                                    <span className="text-xs font-mono text-purple-400/80 tracking-wider">
                                        {currentRole.start} — Present
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                        {currentRole.company}
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="bg-purple-500/[0.08] text-purple-300/80 border border-purple-500/15 hover:bg-purple-500/15">
                                            {currentRole.title}
                                        </Badge>
                                        <Badge variant="outline" className="border-white/[0.06] text-neutral-500">
                                            {currentRole.location}
                                        </Badge>
                                    </div>

                                    <p className="text-sm md:text-base text-neutral-400 leading-relaxed border-l-2 border-purple-500/20 pl-4">
                                        {currentRole.description}
                                    </p>
                                </div>

                                <div className="pt-4 flex justify-end">
                                    <Link
                                        href={currentRole.href || "#"}
                                        target="_blank"
                                        className="group/link inline-flex items-center gap-2 text-sm font-bold text-white/80 border-b border-purple-500/30 pb-1 hover:text-purple-400 hover:border-purple-500/60 transition-all duration-300"
                                    >
                                        VISIT WEBSITE
                                        <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                    </Link>
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500/40 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
