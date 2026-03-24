"use client";

import { motion } from "framer-motion";

export const CodeGraph = () => {
    return (
        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
            {/* Background Ripples */}
            <div className="absolute inset-0 flex items-center justify-center">
                {[480, 360, 240, 120].map((size, i) => (
                    <motion.div
                        key={size}
                        className="absolute rounded-full border"
                        style={{
                            width: size,
                            height: size,
                            borderColor: i < 2 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)",
                        }}
                        animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 4, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </div>

            {/* Central Node — Brain / AI */}
            <motion.div
                className="relative z-10 flex size-24 items-center justify-center rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-sm"
                animate={{
                    boxShadow: [
                        "0 0 20px rgba(0, 255, 157, 0.15)",
                        "0 0 40px rgba(0, 255, 157, 0.25)",
                        "0 0 20px rgba(0, 255, 157, 0.15)",
                    ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Icons.brain className="size-10 text-white" />

                {/* Connecting Lines (SVG Overlay) */}
                <svg className="absolute inset-0 size-full overflow-visible pointer-events-none">
                    {/* Top Right: PyTorch */}
                    <path
                        d="M 48 0 L 48 -60 L 100 -60"
                        fill="none"
                        stroke="url(#gradient-ml)"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        className="opacity-60"
                        style={{ animation: "flow-dash 2s linear infinite" }}
                    />
                    {/* Right: FastAPI */}
                    <path
                        d="M 96 48 L 160 48"
                        fill="none"
                        stroke="url(#gradient-web)"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        className="opacity-60"
                        style={{ animation: "flow-dash 2s linear infinite", animationDelay: "0.3s" }}
                    />
                    {/* Bottom Right: PostgreSQL */}
                    <path
                        d="M 48 96 L 48 140 L 100 140"
                        fill="none"
                        stroke="url(#gradient-data)"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        className="opacity-60"
                        style={{ animation: "flow-dash 2s linear infinite", animationDelay: "0.6s" }}
                    />
                    {/* Top Left: Python */}
                    <path
                        d="M 0 48 L -60 48 L -60 -40"
                        fill="none"
                        stroke="url(#gradient-lang)"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        className="opacity-60"
                        style={{ animation: "flow-dash 2s linear infinite", animationDelay: "0.9s" }}
                    />
                    {/* Bottom Left: Docker */}
                    <path
                        d="M 0 60 L -60 60 L -60 120"
                        fill="none"
                        stroke="url(#gradient-infra)"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        className="opacity-60"
                        style={{ animation: "flow-dash 2s linear infinite", animationDelay: "1.2s" }}
                    />
                    {/* Upper Far Right: LangChain */}
                    <path
                        d="M 96 30 L 140 -10 L 190 -10"
                        fill="none"
                        stroke="url(#gradient-llm)"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        className="opacity-60"
                        style={{ animation: "flow-dash 2s linear infinite", animationDelay: "1.5s" }}
                    />
                    {/* Lower Far Right: Node.js */}
                    <path
                        d="M 96 65 L 140 100 L 185 100"
                        fill="none"
                        stroke="url(#gradient-node)"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        className="opacity-60"
                        style={{ animation: "flow-dash 2s linear infinite", animationDelay: "1.8s" }}
                    />
                    {/* Upper Far Left: Next.js */}
                    <path
                        d="M 0 30 L -50 -10 L -100 -10"
                        fill="none"
                        stroke="url(#gradient-next)"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        className="opacity-60"
                        style={{ animation: "flow-dash 2s linear infinite", animationDelay: "2.1s" }}
                    />

                    <defs>
                        <linearGradient id="gradient-ml" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#EE4C2C" />
                            <stop offset="100%" stopColor="#ff7043" />
                        </linearGradient>
                        <linearGradient id="gradient-web" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#009688" />
                            <stop offset="100%" stopColor="#00ff9d" />
                        </linearGradient>
                        <linearGradient id="gradient-data" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#336791" />
                            <stop offset="100%" stopColor="#5B9BD5" />
                        </linearGradient>
                        <linearGradient id="gradient-lang" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3776AB" />
                            <stop offset="100%" stopColor="#FFD43B" />
                        </linearGradient>
                        <linearGradient id="gradient-infra" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2496ED" />
                            <stop offset="100%" stopColor="#66b2ff" />
                        </linearGradient>
                        <linearGradient id="gradient-llm" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1C3C3C" />
                            <stop offset="100%" stopColor="#00ff9d" />
                        </linearGradient>
                        <linearGradient id="gradient-node" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#539E43" />
                            <stop offset="100%" stopColor="#8CC84B" />
                        </linearGradient>
                        <linearGradient id="gradient-next" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="100%" stopColor="#999999" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            {/* Outer Nodes with float animations */}
            {nodes.map((node, i) => (
                <motion.div
                    key={i}
                    className="absolute flex size-14 items-center justify-center rounded-2xl bg-neutral-900/80 border border-white/[0.08] backdrop-blur-sm shadow-xl hover:border-white/20 hover:shadow-[0_0_16px_rgba(0,255,157,0.15)] transition-[border-color,box-shadow] duration-300 cursor-default"
                    style={node.position}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                >
                    <node.icon className="size-7" />
                </motion.div>
            ))}
        </div>
    );
};

const nodes = [
    {
        // PyTorch — top right
        position: { top: "130px", right: "100px" },
        icon: ({ className }: { className?: string }) => (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path d="M12.1 2.4L7.7 6.8c-2.4 2.4-2.4 6.3 0 8.7 2.4 2.4 6.3 2.4 8.7 0 2.4-2.4 2.4-6.3 0-8.7l-1.1 1.1c1.8 1.8 1.8 4.7 0 6.5-1.8 1.8-4.7 1.8-6.5 0-1.8-1.8-1.8-4.7 0-6.5l3.3-3.3V2.4z" fill="#EE4C2C" />
                <circle cx="14.5" cy="5.5" r="1.2" fill="#EE4C2C" />
            </svg>
        ),
    },
    {
        // FastAPI — mid right
        position: { top: "218px", right: "40px" },
        icon: ({ className }: { className?: string }) => (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <circle cx="12" cy="12" r="10" stroke="#009688" strokeWidth="1.5" />
                <path d="M13 6L9.5 13H12L11 18L15.5 11H12.5L13 6Z" fill="#009688" />
            </svg>
        ),
    },
    {
        // PostgreSQL — bottom right
        position: { bottom: "80px", right: "100px" },
        icon: ({ className }: { className?: string }) => (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#336791" strokeWidth="1.5" fill="none" />
                <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#336791" strokeWidth="1.5" fill="none" />
                <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#336791" strokeWidth="1.5" fill="none" />
            </svg>
        ),
    },
    {
        // Python — top left
        position: { top: "130px", left: "100px" },
        icon: ({ className }: { className?: string }) => (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path d="M11.9 2C7.4 2 7.8 3.9 7.8 3.9V6h4.3v.8H6.2S3 6.4 3 11.5s2.8 4.9 2.8 4.9h1.7v-2.4s-.1-2.8 2.8-2.8h4.8s2.7 0 2.7-2.6V4.7S18.2 2 11.9 2zm-2.6 1.6c.5 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.3-.8.8-.8z" fill="#3776AB" />
                <path d="M12.1 22c4.5 0 4.1-1.9 4.1-1.9V18h-4.3v-.8h5.9s3.2.4 3.2-4.7-2.8-4.9-2.8-4.9h-1.7v2.4s.1 2.8-2.8 2.8H8.9s-2.7 0-2.7 2.6v3.9S5.8 22 12.1 22zm2.6-1.6c-.5 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.3.8-.8.8z" fill="#FFD43B" />
            </svg>
        ),
    },
    {
        // Docker — bottom left
        position: { bottom: "100px", left: "100px" },
        icon: ({ className }: { className?: string }) => (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path d="M13 4h2v2h-2V4zm-3 0h2v2h-2V4zm-3 0h2v2H7V4zm6 3h2v2h-2V7zm-3 0h2v2h-2V7zm-3 0h2v2H7V7zm-3 0h2v2H4V7zm6 3h2v2h-2v-2zm-3 0h2v2H7v-2z" fill="#2496ED" />
                <path d="M22 10.5c-.7-.4-1.5-.5-2.2-.3-.2-1.2-1.1-2.2-2.1-2.8l-.4-.3-.3.4c-.4.6-.5 1.5-.5 2.2.1.6.3 1.2.7 1.7-.4.2-.8.4-1.2.5-.6.2-1.3.3-1.9.3H1.1l-.1.6c-.1 1.4.1 2.8.6 4.1.6 1.3 1.5 2.3 2.8 2.9 1.5.7 3.1 1 4.7 1 .9 0 1.8-.1 2.7-.3 1.2-.3 2.4-.8 3.4-1.6 .8-.7 1.5-1.5 2-2.5.8-1.4 1.2-3 1.3-4.6h1.1c.9 0 1.7-.3 2.3-.8l.3-.3-.2-.2z" fill="#2496ED" />
            </svg>
        ),
    },
    {
        // LangChain — upper far right
        position: { top: "100px", right: "10px" },
        icon: ({ className }: { className?: string }) => (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path d="M12 3L4 7.5v9L12 21l8-4.5v-9L12 3z" stroke="#1C3C3C" strokeWidth="1.5" fill="none" />
                <path d="M12 3v9m0 0l8-4.5M12 12l-8-4.5M12 12v9" stroke="#00ff9d" strokeWidth="1" opacity="0.6" />
                <circle cx="12" cy="12" r="2" fill="#1C3C3C" stroke="#00ff9d" strokeWidth="0.5" />
            </svg>
        ),
    },
    {
        // Node.js — lower far right
        position: { bottom: "60px", right: "10px" },
        icon: ({ className }: { className?: string }) => (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" stroke="#539E43" strokeWidth="1.5" fill="none" />
                <path d="M12 8v5.5l4 2.3" stroke="#8CC84B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 13.5l-4 2.3" stroke="#8CC84B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        // Next.js — upper far left
        position: { top: "100px", left: "10px" },
        icon: ({ className }: { className?: string }) => (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.2" />
                <path d="M8 8l8.5 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 8v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
];

const Icons = {
    brain: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 2C9.2 2 7 4.2 7 7c0 .7.1 1.4.4 2C5.4 9.6 4 11.3 4 13.3c0 1.6.8 3 2 3.8C6 17.7 6 18.3 6 19c0 1.7 1.3 3 3 3 .8 0 1.5-.3 2-.8.5.5 1.2.8 2 .8 1.7 0 3-1.3 3-3 0-.7 0-1.3 0-1.9 1.2-.8 2-2.2 2-3.8 0-2-1.4-3.7-3.4-4.3.3-.6.4-1.3.4-2 0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2v4M9 8.5h6M12 10v3M10 14.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
            <circle cx="12" cy="7" r="1" fill="currentColor" opacity="0.7" />
            <circle cx="10" cy="12" r="0.5" fill="currentColor" opacity="0.5" />
            <circle cx="14" cy="12" r="0.5" fill="currentColor" opacity="0.5" />
        </svg>
    ),
};
