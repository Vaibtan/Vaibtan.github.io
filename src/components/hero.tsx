import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";

export const Hero = () => {
    return (
        <section id="hero" className="relative pt-20 pb-32 overflow-visible">
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-20 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-green rounded-full blur-[100px] animate-breathing-glow" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-glow rounded-full blur-[100px] animate-breathing-glow [animation-delay:2s]" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <Badge variant="outline" className="text-neon-green border-neon-green/20 bg-neon-green/10 px-4 py-1">
                        Available for work
                    </Badge>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        From <span className="font-serif italic text-neon-green">Sketch</span> to Scale.
                    </h1>

                    <p className="text-xl text-neutral-400 max-w-lg leading-relaxed mx-auto md:mx-0">
                        {DATA.description}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <Button className="h-12 px-8 rounded-full bg-neon-green text-black hover:bg-neon-green/90 font-semibold" asChild>
                            <Link href="#contact">Let's talk</Link>
                        </Button>
                        <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 text-white hover:bg-white/10" asChild>
                            <Link href={DATA.contact.social.GitHub.url} target="_blank">View Code</Link>
                        </Button>
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-green to-purple-glow opacity-50 blur transition duration-500 group-hover:opacity-100" />
                    <Avatar className="size-64 md:size-80 border-4 border-black/50 relative">
                        <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                        <AvatarFallback>{DATA.initials}</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </section>
    );
};
