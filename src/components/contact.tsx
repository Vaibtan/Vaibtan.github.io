"use client";

import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    { icon: Github, href: DATA.contact.social.GitHub.url, label: "GitHub" },
    { icon: Linkedin, href: DATA.contact.social.LinkedIn.url, label: "LinkedIn" },
    { icon: Mail, href: DATA.contact.social.email.url, label: "Email" },
];

export const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 flex flex-col items-center justify-center text-center space-y-10 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/[0.06] rounded-full blur-[120px] -z-10" />
            <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-neon-green/[0.04] rounded-full blur-[100px] -z-10" />

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute size-1 rounded-full bg-white/[0.15] -z-10"
                    style={{
                        left: `${15 + i * 14}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.15, 0.4, 0.15],
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                    }}
                />
            ))}

            {/* Section divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <motion.div
                className="space-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
                    Let&apos;s Build
                </h2>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">
                    Something{" "}
                    <span className="font-serif italic font-normal text-gradient-green-purple">Amazing</span>
                </h2>
            </motion.div>

            <motion.p
                className="max-w-[550px] text-neutral-400 md:text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                Have a project, idea, or collaboration in mind? I&apos;d love to hear from you. Let&apos;s create something impactful together.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <Link href={`mailto:${DATA.contact.email}`}>
                    <Button
                        className="h-12 px-8 rounded-full bg-neon-green text-black font-semibold text-base transition-all duration-300 shadow-[0_0_20px_rgba(0,255,157,0.2)] hover:shadow-[0_0_32px_rgba(0,255,157,0.4)] hover:scale-[1.02] active:scale-[0.98] hover:bg-neon-green/90"
                    >
                        Get in Touch <ArrowRight className="ml-2 size-4" />
                    </Button>
                </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
                className="flex items-center gap-3 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                {socialLinks.map(({ icon: Icon, href, label }) => (
                    <Link
                        key={label}
                        href={href}
                        target="_blank"
                        className="group p-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] hover:border-neon-green/30 hover:bg-neon-green/[0.06] transition-all duration-300"
                        aria-label={label}
                    >
                        <Icon className="size-4 text-neutral-500 group-hover:text-neon-green transition-colors duration-300" />
                    </Link>
                ))}
            </motion.div>
        </section>
    );
};
