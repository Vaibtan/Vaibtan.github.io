import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    gradient?: boolean;
}

export const BentoCard = ({ children, className, gradient = false }: BentoCardProps) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10",
                className
            )}
        >
            {gradient && (
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-purple-glow/20 blur-3xl" />
            )}
            {gradient && (
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-neon-green/10 blur-3xl" />
            )}
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
};
