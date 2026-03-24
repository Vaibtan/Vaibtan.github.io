"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useRef, useState } from "react";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    gradient?: boolean;
}

export const BentoCard = ({ children, className, gradient = false }: BentoCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-md transition-[border-color,box-shadow] duration-500 hover:border-white/[0.12]",
                className
            )}
        >
            {/* Mouse-tracking spotlight */}
            {isHovered && (
                <div
                    className="absolute pointer-events-none transition-opacity duration-300 z-0"
                    style={{
                        left: mousePos.x - 150,
                        top: mousePos.y - 150,
                        width: 300,
                        height: 300,
                        background: gradient
                            ? "radial-gradient(circle, rgba(0,255,157,0.06) 0%, transparent 70%)"
                            : "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
                    }}
                />
            )}

            {gradient && (
                <>
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-glow/10 blur-3xl transition-all duration-700" />
                    <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-neon-green/[0.06] blur-3xl transition-all duration-700" />
                </>
            )}
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
};
