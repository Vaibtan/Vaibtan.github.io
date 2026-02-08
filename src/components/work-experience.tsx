"use client";

import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export const WorkExperience = () => {
    // Filter for the current/ongoing role (assuming "Present" or similar in end date)
    // Logic: Find the first role that has "Present" in end date, or default to the first one if none.
    const currentRole = DATA.work.find((role) => role.end.toLowerCase().includes("present")) || DATA.work[0];
    const previousRoles = DATA.work.filter((role) => role !== currentRole);

    return (
        <section id="work" className="py-12 space-y-12">
            <div className="flex flex-col items-start gap-4">
                <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2">
                    Previous Endeavors
                    <span className="text-xs font-mono text-neutral-600 bg-neutral-900 px-2 py-1 rounded ml-4 tracking-widest hidden sm:inline-block">
                        ||||||| | ||| || ||
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                {/* LEFT COLUMN: PREVIOUS ENDEAVORS (Gradient Cards) */}
                <div className="space-y-8 relative">
                    {/* Vertical Line Guide (Subtle) */}
                    <div className="absolute left-[-1px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-cyan-900/50 via-neutral-800 to-transparent hidden xl:block" />

                    {previousRoles.map((role, index) => (
                        <div key={role.company} className="relative group">
                            {/* Card Content */}
                            <div className="relative overflow-hidden rounded-2xl bg-neutral-900/40 border border-white/5 p-6 hover:border-cyan-500/30 transition-colors duration-300">
                                {/* Background Gradient & Noise */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-black to-black z-0 opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0 mix-blend-overlay" />

                                {/* Logo on Hover */}
                                <div className="absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 scale-110 pointer-events-none">
                                    <img src={role.logoUrl} alt={role.company} className="size-24 object-contain grayscale invert" />
                                </div>

                                {/* Timeline Marker (Inside Card for mobile/tablet, Outside for desktop) */}
                                <div className="hidden xl:block absolute left-[-33px] top-8 size-2.5 bg-black border border-cyan-800 rounded-full group-hover:border-cyan-400 group-hover:bg-cyan-500 transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)]" />

                                <div className="relative z-10 space-y-4">
                                    {/* Header: Company & Link */}
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <Link href={role.href || "#"} target="_blank" className="block">
                                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                                                    {role.company}
                                                </h3>
                                            </Link>
                                            <h4 className="text-sm text-cyan-200/80 font-medium">{role.title}</h4>
                                        </div>
                                        <Link href={role.href || "#"} target="_blank" className="text-white/20 group-hover:text-cyan-400 transition-colors">
                                            <ExternalLink className="size-5" />
                                        </Link>
                                    </div>

                                    {/* Date Badge */}
                                    <div className="flex items-center gap-3">
                                        <div className="h-[1px] w-6 bg-cyan-500/30 group-hover:bg-cyan-500/60 transition-colors" />
                                        <span className="text-xs font-mono text-neutral-400 group-hover:text-cyan-300 transition-colors tracking-wider">
                                            {role.start} — {role.end}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors leading-relaxed">
                                        {role.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT COLUMN: ONGOING ROLE (Featured Card) */}
                <div className="relative">
                    <div className="sticky top-24">
                        <div className="absolute -top-3 -left-3 bg-neutral-900 text-neutral-500 text-[10px] font-mono px-2 py-1 z-10 border border-white/10">
                            Ongoing
                        </div>

                        <div className="relative overflow-hidden rounded-3xl bg-neutral-900/50 border border-white/10 p-8 min-h-[500px] flex flex-col justify-end group">
                            {/* Background Gradient & Noise */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black z-0" />
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay" />

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                                <img src={currentRole.logoUrl} alt={currentRole.company} className="size-32 object-contain grayscale invert" />
                            </div>

                            <div className="relative z-10 space-y-6">
                                {/* Date Date Divider */}
                                <div className="flex items-center gap-4">
                                    <div className="h-[2px] w-12 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                    <span className="text-xs font-mono text-purple-400 tracking-wider">
                                        {currentRole.start} — Present
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                        {currentRole.company}
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20">
                                            {currentRole.title}
                                        </Badge>
                                        <Badge variant="outline" className="border-white/10 text-neutral-400">
                                            {currentRole.location}
                                        </Badge>
                                    </div>

                                    <p className="text-base text-neutral-400 leading-relaxed border-l-2 border-purple-500/30 pl-4">
                                        {currentRole.description}
                                    </p>
                                </div>

                                <div className="pt-4 flex justify-end">
                                    <Link
                                        href={currentRole.href || "#"}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition-colors"
                                    >
                                        VISIT WEBSITE <ArrowRight className="size-4" />
                                    </Link>
                                </div>

                                {/* Bottom Progress Bar Decoration */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-transparent to-transparent opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
