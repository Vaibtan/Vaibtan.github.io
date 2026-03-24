"use client";

import { Badge } from "@/components/ui/badge";
import { BentoCard } from "@/components/ui/bento-card";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const TechStack = () => {
    return (
        <section id="skills" className="space-y-10 relative">
            {/* Section divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="flex flex-col items-center text-center space-y-4 pt-4">
                <Badge variant="outline" className="text-white/80 border-white/[0.12] bg-white/[0.03] px-4 py-1.5">
                    Skills & Tech Stack
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">MY TECH TOOLBOX</h2>
            </div>

            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-5"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
            >
                {/* AI & Machine Learning — Primary Card */}
                <motion.div variants={item}>
                    <BentoCard className="p-8 space-y-6 min-h-[300px] flex flex-col justify-between group" gradient>
                        <div className="relative h-40 w-full flex items-center justify-center">
                            {/* Connecting lines */}
                            <div className="absolute top-1/2 left-[15%] w-[70%] h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
                            <div className="absolute top-[15%] left-1/2 w-[1px] h-[70%] bg-gradient-to-b from-transparent via-red-500/20 to-transparent" />

                            {/* Satellite nodes */}
                            <div className="absolute top-2 left-1/4 bg-neutral-900/60 px-2.5 py-1.5 rounded-xl border border-white/[0.08] backdrop-blur-sm">
                                <svg className="size-5" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.1 2.4L7.7 6.8c-2.4 2.4-2.4 6.3 0 8.7 2.4 2.4 6.3 2.4 8.7 0 2.4-2.4 2.4-6.3 0-8.7l-1.1 1.1c1.8 1.8 1.8 4.7 0 6.5-1.8 1.8-4.7 1.8-6.5 0-1.8-1.8-1.8-4.7 0-6.5l3.3-3.3V2.4z" fill="#EE4C2C" />
                                    <circle cx="14.5" cy="5.5" r="1.2" fill="#EE4C2C" />
                                </svg>
                            </div>
                            <div className="absolute bottom-2 right-[20%] bg-neutral-900/60 px-2.5 py-1.5 rounded-xl border border-white/[0.08] backdrop-blur-sm">
                                <span className="text-xs font-mono text-yellow-400">HF</span>
                            </div>
                            <div className="absolute top-4 right-[15%] bg-neutral-900/60 px-2.5 py-1.5 rounded-xl border border-white/[0.08] backdrop-blur-sm">
                                <span className="text-xs font-mono text-sky-400">CV</span>
                            </div>
                            <div className="absolute bottom-4 left-[18%] bg-neutral-900/60 px-2.5 py-1.5 rounded-xl border border-white/[0.08] backdrop-blur-sm">
                                <span className="text-xs font-mono text-green-400">SK</span>
                            </div>

                            {/* Central icon */}
                            <div className="relative z-10 bg-neutral-900/80 p-4 rounded-2xl border border-orange-500/20 shadow-[0_0_24px_rgba(238,76,44,0.12)] backdrop-blur-sm">
                                <svg className="size-8 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2C9.2 2 7 4.2 7 7c0 .7.1 1.4.4 2C5.4 9.6 4 11.3 4 13.3c0 1.6.8 3 2 3.8C6 17.7 6 18.3 6 19c0 1.7 1.3 3 3 3 .8 0 1.5-.3 2-.8.5.5 1.2.8 2 .8 1.7 0 3-1.3 3-3 0-.7 0-1.3 0-1.9 1.2-.8 2-2.2 2-3.8 0-2-1.4-3.7-3.4-4.3.3-.6.4-1.3.4-2 0-2.8-2.2-5-5-5z" />
                                    <path d="M9 8.5h6M12 10v3" opacity="0.5" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-neon-green mb-2">AI & Machine Learning</h3>
                            <p className="text-sm text-neutral-500 font-mono mb-3">PyTorch, Transformers, Scikit-Learn, YOLO, CLIP, OpenCV, SpaCy</p>
                            <p className="text-sm text-white/60 italic">Training, fine-tuning, and deploying CV & NLP models at scale.</p>
                        </div>
                    </BentoCard>
                </motion.div>

                {/* LLM Ops & Agents */}
                <motion.div variants={item}>
                    <BentoCard className="p-8 space-y-6 min-h-[300px] flex flex-col justify-between group">
                        <div className="relative h-40 w-full flex items-center justify-center">
                            {/* Chain link visualization */}
                            <div className="absolute border border-white/[0.04] rounded-full size-48" />
                            <div className="absolute border border-white/[0.06] rounded-full size-32" />
                            <motion.div
                                className="absolute border border-emerald-500/15 rounded-full size-16"
                                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Orbiting agent nodes */}
                            <motion.div
                                className="absolute size-6 bg-neutral-900/80 rounded-lg border border-emerald-500/20 flex items-center justify-center"
                                style={{ top: "20%", right: "25%" }}
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <span className="text-[8px] font-mono text-emerald-400">LC</span>
                            </motion.div>
                            <motion.div
                                className="absolute size-6 bg-neutral-900/80 rounded-lg border border-purple-500/20 flex items-center justify-center"
                                style={{ bottom: "25%", left: "22%" }}
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                <span className="text-[8px] font-mono text-purple-400">DS</span>
                            </motion.div>
                            <motion.div
                                className="absolute size-6 bg-neutral-900/80 rounded-lg border border-blue-500/20 flex items-center justify-center"
                                style={{ top: "30%", left: "20%" }}
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <span className="text-[8px] font-mono text-blue-400">M0</span>
                            </motion.div>

                            {/* Central icon — chain links */}
                            <div className="relative z-10 bg-neutral-900/80 p-3.5 rounded-2xl border border-white/[0.08] backdrop-blur-sm">
                                <svg className="size-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-neon-green mb-2">LLM Ops & Agents</h3>
                            <p className="text-sm text-neutral-500 font-mono mb-3">LangChain, LangGraph, DSPy, Gemini-ADK, Mem0, Vector DBs</p>
                            <p className="text-sm text-white/60 italic">Building multi-agent systems, RAG pipelines, and LLM toolchains.</p>
                        </div>
                    </BentoCard>
                </motion.div>

                {/* Row 2 — Three smaller cards */}
                <motion.div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-5" variants={item}>
                    {/* Backend & APIs */}
                    <BentoCard className="p-6 space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-white/[0.04] p-2.5 rounded-xl border border-white/[0.08]">
                                <span className="text-sm font-mono text-teal-400">Fast</span>
                            </div>
                            <div className="h-[1px] w-6 bg-gradient-to-r from-white/10 to-transparent" />
                            <div className="bg-neutral-900/80 p-3 rounded-xl border border-teal-500/20 shadow-[0_0_16px_rgba(20,184,166,0.1)]">
                                <svg className="size-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-white/10" />
                            <div className="bg-white/[0.04] p-2.5 rounded-xl border border-white/[0.08]">
                                <span className="text-sm font-mono text-neutral-400">MQ</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-neon-green">Backend & APIs</h3>
                        <p className="text-xs text-neutral-500 font-mono">FastAPI, Node.js, NestJS, Kafka, RabbitMQ</p>
                        <p className="text-sm text-white/60 italic">High-throughput APIs and async task queues.</p>
                    </BentoCard>

                    {/* Databases & Storage */}
                    <BentoCard className="p-6 space-y-4">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="bg-white/[0.04] p-2.5 rounded-xl border border-white/[0.08]">
                                <span className="text-xs font-mono text-red-400">Redis</span>
                            </div>
                            <div className="bg-neutral-900/80 p-3 rounded-xl border border-blue-500/20 shadow-[0_0_16px_rgba(59,130,246,0.1)]">
                                <svg className="size-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                                    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                                    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-neon-green">Databases</h3>
                        <p className="text-xs text-neutral-500 font-mono">PostgreSQL, MongoDB, Redis, MySQL, pgvector</p>
                        <p className="text-sm text-white/60 italic">Relational, document, and vector stores at scale.</p>
                    </BentoCard>

                    {/* Infrastructure & DevOps */}
                    <BentoCard className="p-6 space-y-4">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="bg-white/[0.04] p-2.5 rounded-xl border border-white/[0.08]">
                                <span className="text-xs font-mono text-sky-400">AWS</span>
                            </div>
                            <div className="bg-neutral-900/80 p-3 rounded-xl border border-sky-500/20 shadow-[0_0_16px_rgba(14,165,233,0.1)]">
                                <svg className="size-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13 4h2v2h-2V4zm-3 0h2v2h-2V4zm-3 0h2v2H7V4zm6 3h2v2h-2V7zm-3 0h2v2h-2V7zm-3 0h2v2H7V7zm-3 0h2v2H4V7zm6 3h2v2h-2v-2zm-3 0h2v2H7v-2z" fill="currentColor" opacity="0.7" />
                                    <rect x="2" y="13" width="20" height="3" rx="1" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-neon-green">Infrastructure</h3>
                        <p className="text-xs text-neutral-500 font-mono">Docker, AWS, GitHub Actions, CI/CD, Prometheus</p>
                        <p className="text-sm text-white/60 italic">Containerized deployments with full observability.</p>
                    </BentoCard>
                </motion.div>
            </motion.div>
        </section>
    );
};
