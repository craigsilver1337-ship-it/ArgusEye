"use client";

import { motion } from "framer-motion";
import { Github, Send, Twitter } from "lucide-react";

const PumpIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M17.5 7.5a4.5 4.5 0 0 0-6.36 0L4.77 13.87a4.5 4.5 0 0 0 6.36 6.36l6.37-6.37a4.5 4.5 0 0 0 0-6.36z" />
        <path d="m11.13 13.87 1.42 1.41" />
    </svg>
);

const socials = [
    {
        name: "Pump.Fun",
        icon: PumpIcon,
        href: "https://pump.fun",
        tooltip: "Pump.Fun",
    },
    {
        name: "Telegram",
        icon: Send,
        href: "https://t.me/argus_surveillance",
        tooltip: "Join Telegram",
    },
    {
        name: "X (Twitter)",
        icon: Twitter,
        href: "https://x.com/argus_surveil",
        tooltip: "Follow on X",
    },
    {
        name: "Git.Hub",
        icon: Github,
        href: "https://github.com/salimmohamed/colorstackwinterhack2025-argus",
        tooltip: "Git.Hub",
    },
];

export function SocialLinks() {
    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-row items-center gap-2 md:gap-3">
            {socials.map((social, i) => (
                <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        delay: 1.5 + i * 0.1,
                        duration: 0.5,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-[var(--background)] border border-[var(--text-muted)] hover:border-[var(--accent)] hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all duration-300"
                >
                    <social.icon
                        className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300"
                    />

                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--background)] border border-[var(--text-muted)] rounded text-[10px] tracking-wider uppercase text-[var(--text-dim)] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                        {social.tooltip}
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-5 blur-md transition-opacity duration-300" />
                </motion.a>
            ))}
        </div>
    );
}
