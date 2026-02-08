"use client";

import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

            <div className="space-y-0">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
                    Let&apos;s Build
                </h2>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
                    Something <span className="font-serif italic font-normal text-white/90">Amazing</span>
                </h2>
            </div>

            <p className="max-w-[600px] text-neutral-400 md:text-lg">
                Have a project, idea, or collaboration in mind? I&apos;d love to hear from you. Let&apos;s create something impactful together.
            </p>

            <Link href={`mailto:${DATA.contact.email}`}>
                <Button
                    className="h-12 px-8 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-base transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-105"
                >
                    Get in Touch <ArrowRight className="ml-2 size-4" />
                </Button>
            </Link>
        </section>
    );
};
