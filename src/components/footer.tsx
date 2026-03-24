import { DATA } from "@/data/resume";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    { icon: Github, href: DATA.contact.social.GitHub.url, label: "GitHub" },
    { icon: Linkedin, href: DATA.contact.social.LinkedIn.url, label: "LinkedIn" },
    { icon: Mail, href: DATA.contact.social.email.url, label: "Email" },
];

export function Footer() {
    return (
        <footer className="relative border-t border-white/[0.04] py-10 mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                        <Link
                            key={label}
                            href={href}
                            target="_blank"
                            className="text-neutral-600 hover:text-neutral-400 transition-colors duration-300"
                            aria-label={label}
                        >
                            <Icon className="size-4" />
                        </Link>
                    ))}
                </div>

                <p className="text-xs text-neutral-600 font-mono tracking-wide">
                    {DATA.name} &middot; {new Date().getFullYear()} &middot; Built with Next.js
                </p>
            </div>
        </footer>
    );
}
