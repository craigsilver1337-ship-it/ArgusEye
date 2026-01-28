"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContractAddressProps {
    address: string;
    delay?: string;
}

export function ContractAddress({ address, delay = "1.2s" }: ContractAddressProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="flex flex-col gap-2 animate-fadeSlideUp mt-2"
            style={{ animationDelay: delay }}
        >
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[var(--text-muted)] font-medium">
                Contract Address
            </span>
            <div
                onClick={handleCopy}
                className="group relative flex items-center justify-between gap-4 px-3 py-2 bg-[var(--background)] border border-[var(--text-muted)] hover:border-[var(--accent)] transition-all cursor-pointer overflow-hidden max-w-[320px]"
            >
                <code className="text-[0.7rem] font-mono text-white group-hover:text-[var(--accent)] transition-colors truncate">
                    {address}
                </code>

                <div className="flex-shrink-0">
                    <AnimatePresence mode="wait">
                        {copied ? (
                            <motion.div
                                key="check"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                            >
                                <Check className="w-3.5 h-3.5 text-[var(--accent)]" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="copy"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                            >
                                <Copy className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Subtle background scanline effect on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent -translate-x-full group-hover:translate-x-full duration-1000 ease-in-out" />
            </div>
        </div>
    );
}
