"use client";

import { Badge } from "@/components/ui/badge";
import { BentoCard } from "@/components/ui/bento-card";

export const TechStack = () => {
    return (
        <section id="skills" className="space-y-8">
            <div className="flex flex-col items-center text-center space-y-4">
                <Badge variant="outline" className="text-white border-white/20 bg-white/5 px-4 py-1">
                    Skills & Tech Stack
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">MY TECH TOOLBOX</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* ROW 1: FRONTEND & DATABASES */}

                {/* Frontend - Large Graph Style */}
                <BentoCard className="p-8 space-y-6 min-h-[300px] flex flex-col justify-between group" gradient>
                    <div className="relative h-40 w-full flex items-center justify-center">
                        {/* Visual Lines */}
                        <div className="absolute top-1/2 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                        <div className="absolute top-[20%] left-1/2 w-[1px] h-[60%] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />

                        {/* Icons (Mocked with text/divs for now) */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black/50 p-2 rounded-lg border border-white/10"><span className="text-2xl">⚡</span></div> {/* Next */}
                        <div className="absolute bottom-0 right-1/4 bg-black/50 p-2 rounded-lg border border-white/10"><span className="text-2xl">TS</span></div>
                        <div className="absolute bottom-0 left-1/4 bg-black/50 p-2 rounded-lg border border-white/10"><span className="text-2xl">JS</span></div>
                        <div className="relative z-10 bg-black/80 p-4 rounded-xl border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                            <span className="text-3xl font-bold text-white/90">&lt;/&gt;</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-neon-green mb-2">Frontend</h3>
                        <p className="text-sm text-neutral-400 font-mono mb-4">JavaScript, TypeScript, React, Next.js, HTML, CSS, TailwindCSS</p>
                        <p className="text-base text-white/80 italic">Building sleek, responsive, and accessible user interfaces.</p>
                    </div>
                </BentoCard>

                {/* Databases - Radar Style */}
                <BentoCard className="p-8 space-y-6 min-h-[300px] flex flex-col justify-between group">
                    <div className="relative h-40 w-full flex items-center justify-center">
                        {/* Concentric Circles */}
                        <div className="absolute border border-white/5 rounded-full size-48" />
                        <div className="absolute border border-white/10 rounded-full size-32" />
                        <div className="absolute border border-purple-500/20 rounded-full size-16 animate-pulse" />

                        {/* Icons */}
                        <div className="absolute top-4 right-1/3 size-2 bg-white/20 rounded-full" />
                        <div className="absolute bottom-8 left-1/3 size-2 bg-white/20 rounded-full" />
                        <div className="relative z-10 bg-black/80 p-3 rounded-xl border border-white/10">
                            <span className="text-3xl">🗄️</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-neon-green mb-2">Databases</h3>
                        <p className="text-sm text-neutral-400 font-mono mb-4">MongoDB, PostgreSQL, Prisma</p>
                        <p className="text-base text-white/80 italic">Managing structured & unstructured data with reliability.</p>
                    </div>
                </BentoCard>


                {/* ROW 2: BACKEND, AUTH, PAYMENTS */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Backend */}
                    <BentoCard className="p-6 space-y-4">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-white/5 p-2 rounded-lg border border-white/10">JS</div>
                            <div className="h-[1px] w-8 bg-white/10" />
                            <div className="bg-black/50 p-3 rounded-xl border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                                <span className="text-xl">⚙️</span>
                            </div>
                            <div className="h-[1px] w-8 bg-white/10" />
                            <div className="bg-white/5 p-2 rounded-lg border border-white/10">ex</div>
                        </div>
                        <h3 className="text-xl font-bold text-neon-green">Backend</h3>
                        <p className="text-xs text-neutral-400 font-mono">Node.js, Express.js</p>
                        <p className="text-sm text-white/80 italic">Creating APIs and server-side logic that scale.</p>
                    </BentoCard>

                    {/* Authentication */}
                    <BentoCard className="p-6 space-y-4">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="bg-white/5 p-2 rounded-lg border border-white/10 text-xs">JWT</div>
                            <div className="bg-black/50 p-3 rounded-xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                                <span className="text-2xl">🔒</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-neon-green">Authentication</h3>
                        <p className="text-xs text-neutral-400 font-mono">Firebase, JWT</p>
                        <p className="text-sm text-white/80 italic">Secure login & role-based access made simple.</p>
                    </BentoCard>

                    {/* Payments */}
                    <BentoCard className="p-6 space-y-4">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="bg-white/5 p-2 rounded-lg border border-white/10 text-xs">Stripe</div>
                            <div className="bg-black/50 p-3 rounded-xl border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                                <span className="text-2xl">💳</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-neon-green">Payments</h3>
                        <p className="text-xs text-neutral-400 font-mono">Stripe, PayPal</p>
                        <p className="text-sm text-white/80 italic">Seamless checkout and payment integration.</p>
                    </BentoCard>
                </div>

            </div>
        </section>
    );
};
