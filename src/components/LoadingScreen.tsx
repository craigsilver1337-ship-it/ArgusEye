"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PixelBlastEye } from "./ui/pixel-blast-eye";

export function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("INITIALIZING SURVEILLANCE...");
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const statusMessages = [
            "INITIALIZING SURVEILLANCE...",
            "CONNECTING TO POLYMARKET NODES...",
            "CALIBRATING ALL-SEEING EYE...",
            "SYNCHRONIZING SEC DATA...",
            "DECRYPTING TRADING PATTERNS...",
            "SYSTEM READY.",
        ];

        let currentMsgIndex = 0;
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsVisible(false), 500);
                    return 100;
                }

                // Update status based on progress
                const nextIndex = Math.floor((prev / 100) * statusMessages.length);
                if (nextIndex > currentMsgIndex && nextIndex < statusMessages.length) {
                    currentMsgIndex = nextIndex;
                    setStatus(statusMessages[currentMsgIndex]);
                }

                return prev + Math.random() * 4;
            });
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
                    }}
                    className="fixed inset-0 z-[9999] bg-[var(--background)] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background Eye - Optimized for performance */}
                    <div className="absolute inset-0 opacity-20 transform scale-125">
                        <PixelBlastEye
                            className="w-full h-full"
                            pixelSize={16}
                            gap={6}
                        />
                    </div>

                    {/* Simple overlay to reduce rendering complexity */}
                    <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-md px-6">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex flex-col items-center gap-2"
                        >
                            <h2 className="font-serif text-5xl tracking-[0.1em] text-[var(--foreground)]">
                                ARGUS
                            </h2>
                            <p className="text-[0.6rem] tracking-[0.4em] text-[var(--accent)] font-medium">
                                SURVEILLANCE SYSTEM
                            </p>
                        </motion.div>

                        {/* Loading Bar Container */}
                        <div className="w-full flex flex-col gap-3">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] animate-pulse">
                                    {status}
                                </span>
                                <span className="text-[10px] font-mono text-[var(--accent)]">
                                    {Math.round(progress)}%
                                </span>
                            </div>

                            <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-[var(--accent)] shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ type: "spring", bounce: 0, duration: 0.2 }}
                                />
                            </div>

                            {/* Decorative scanline markers */}
                            <div className="flex justify-between w-full">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-[1px] h-1 bg-white/10" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Scanlines and Noise */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 bg-scanlines"
                        style={{
                            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.05) 2px, rgba(255, 255, 255, 0.05) 4px)"
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
