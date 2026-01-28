"use client";

import { PixelBlastEye } from "@/components/ui/pixel-blast-eye";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DocsPage() {
    return (
        <div className="min-h-screen relative bg-[var(--background)] overflow-hidden">
            {/* Background Eye - Matched with Loading Screen */}
            <div className="absolute inset-0 opacity-20 transform scale-125">
                <PixelBlastEye
                    className="w-full h-full"
                    pixelSize={16}
                    gap={6}
                />
            </div>

            {/* Simple overlay to match loading screen vibe */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            {/* Scanlines and Noise - Matched with Loading Screen */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-scanlines"
                style={{
                    background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.05) 2px, rgba(255, 255, 255, 0.05) 4px)"
                }}
            />

            {/* Content Layer */}
            <div className="relative z-10 max-w-[1400px] mx-auto h-screen flex flex-col md:flex-row">
                {/* Left Sidebar Navigation */}
                <aside className="w-full md:w-80 p-8 md:p-12 md:border-r border-white/5 flex flex-col gap-16 bg-black/20 backdrop-blur-sm">
                    <Link
                        href="/"
                        className="text-[var(--text-dim)] text-[0.65rem] tracking-[0.2em] uppercase hover:text-[var(--accent)] transition-colors flex items-center gap-2 group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> System_Root
                    </Link>

                    <div className="flex flex-col gap-10">
                        <div className="space-y-6">
                            <p className="text-[0.6rem] tracking-[0.35em] text-[var(--text-muted)] uppercase font-bold px-2">Protocols</p>
                            <nav className="flex flex-col gap-1">
                                <a href="#mission" className="group flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors">
                                    <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent)]">01. Mission</span>
                                    <div className="w-1 h-1 bg-[var(--accent)] rounded-full" />
                                </a>
                                <a href="#capabilities" className="group flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors">
                                    <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--text-dim)] group-hover:text-[var(--foreground)]">02. Capabilities</span>
                                    <div className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-white/30" />
                                </a>
                                <a href="#api" className="group flex items-center justify-between p-2 opacity-30 cursor-not-allowed">
                                    <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--text-dim)]">03. API (Locked)</span>
                                    <div className="w-1 h-1 bg-white/10 rounded-full" />
                                </a>
                            </nav>
                        </div>

                        <div className="pt-10 border-t border-white/5 space-y-4 px-2">
                            <p className="text-[0.5rem] tracking-[0.2em] text-[var(--text-muted)] uppercase">Encryption_Level</p>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                                <span className="text-[10px] font-mono text-green-500/80 tracking-[0.1em]">RSA_4096_ACTIVE</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-w-0">
                    <header className="p-8 md:p-12 pb-0 flex flex-col md:flex-row justify-between items-start gap-4">
                        <div className="space-y-1">
                            <h1 className="font-serif text-5xl tracking-wider text-[var(--foreground)] uppercase">Documentation</h1>
                            <p className="text-[0.6rem] tracking-[0.5em] text-[var(--accent)] uppercase opacity-80">Protocol_v0.1.0_Stable</p>
                        </div>
                        <div className="text-[10px] font-mono text-[var(--text-muted)] px-3 py-1 border border-white/5 bg-white/5">
                            TIME: {new Date().toISOString().substring(11, 19)} UTC
                        </div>
                    </header>

                    <main className="flex-1 overflow-y-auto p-8 md:p-12 pt-16 custom-scrollbar scroll-smooth">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-3xl space-y-32"
                        >
                            {/* Hero Subtitle */}
                            <div id="mission" className="space-y-6">
                                <h2 className="font-serif text-4xl italic text-[var(--accent)] leading-tight">
                                    "Markets are never wrong, but the actors within them often are."
                                </h2>
                                <p className="text-sm tracking-[0.2em] text-[var(--text-muted)] font-mono">
                                    Autonomous Surveillance Protocol for Prediction Markets
                                </p>
                            </div>

                            {/* Section 01: The Mission */}
                            <section className="scroll-mt-20 space-y-12">
                                <div className="flex items-center gap-4">
                                    <span className="text-[0.6rem] font-mono text-[var(--accent)] border border-[var(--accent)] px-2 py-0.5 font-bold">01</span>
                                    <h3 className="text-[0.7rem] tracking-[0.4em] uppercase text-[var(--foreground)] font-black">The Mission (Manifesto)</h3>
                                    <div className="h-[1px] flex-1 bg-white/5" />
                                </div>

                                <div className="grid gap-10">
                                    <p className="text-sm leading-8 text-[var(--text-dim)] font-mono">
                                        Prediction markets were designed to be the ultimate truth machine. But in their current state, they are opaque battlegrounds where insiders execute trades with impunity.
                                    </p>

                                    <div className="bg-white/[0.03] p-8 border-l-2 border-[var(--accent)] space-y-8 backdrop-blur-sm">
                                        <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--text-muted)] font-black">Systemic Failures Injected:</p>
                                        <ul className="space-y-10">
                                            <li className="flex gap-8 group">
                                                <span className="text-[var(--accent)] mt-1.5 font-black text-xs transition-transform group-hover:scale-110">/01</span>
                                                <div>
                                                    <p className="text-xs font-black text-[var(--foreground)] uppercase tracking-widest mb-2">Information Asymmetry</p>
                                                    <p className="text-xs leading-7 text-[var(--text-dim)] font-mono">Insiders trade on news hours before it breaks (e.g., Maduro Capture, Jan '26).</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-8 group">
                                                <span className="text-[var(--accent)] mt-1.5 font-black text-xs transition-transform group-hover:scale-110">/02</span>
                                                <div>
                                                    <p className="text-xs font-black text-[var(--foreground)] uppercase tracking-widest mb-2">Zero Oversight</p>
                                                    <p className="text-xs leading-7 text-[var(--text-dim)] font-mono">Unlike traditional finance (TradFi), there is no SEC, no circuit breakers, and no surveillance.</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-8 group">
                                                <span className="text-[var(--accent)] mt-1.5 font-black text-xs transition-transform group-hover:scale-110">/03</span>
                                                <div>
                                                    <p className="text-xs font-black text-[var(--foreground)] uppercase tracking-widest mb-2">The Invisible Hand</p>
                                                    <p className="text-xs leading-7 text-[var(--text-dim)] font-mono">Millions of dollars are siphoned by wallets with statistical improbability of success.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text-sm leading-8 text-[var(--text-dim)] font-mono pt-4">
                                        Argus is the answer to this opacity. It is not just an analytics tool; it is an autonomous surveillance agent. By combining high-frequency on-chain data ingestion with LLM-driven heuristic analysis (Claude via AWS Bedrock), Argus detects anomalies that rigid algorithms miss.
                                    </p>

                                    <div className="p-6 border border-white/10 bg-black/40 backdrop-blur-sm flex items-center gap-6">
                                        <div className="w-2 h-2 bg-[var(--accent)] animate-pulse rounded-full shadow-[0_0_15px_var(--accent-glow)]" />
                                        <p className="text-[10px] font-mono text-[var(--foreground)] uppercase tracking-[0.2em] leading-relaxed">
                                            Providing the public with forensic insight previously reserved for centralized exchanges and regulators.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 02: Core Capabilities */}
                            <section id="capabilities" className="scroll-mt-20 space-y-16">
                                <div className="flex items-center gap-4">
                                    <span className="text-[0.6rem] font-mono text-[var(--accent)] border border-[var(--accent)] px-2 py-0.5 font-bold">02</span>
                                    <h3 className="text-[0.7rem] tracking-[0.4em] uppercase text-[var(--foreground)] font-black">Core Capabilities</h3>
                                    <div className="h-[1px] flex-1 bg-white/5" />
                                </div>

                                <div className="space-y-16">
                                    <p className="text-sm leading-8 text-[var(--text-dim)] font-mono italic px-4 border-l border-white/10">
                                        Argus operates on a "Detect-Verify-Expose" loop.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8 text-[0.75rem] font-mono">
                                        <div className="space-y-8 p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all hover:bg-white/[0.04]">
                                            <h4 className="text-[var(--accent)] uppercase tracking-widest font-black">01. Pattern Recognition</h4>
                                            <p className="text-[var(--text-muted)] leading-7">Unlike traditional bots, Argus uses a probabilistic approach to identify anomalies.</p>
                                            <ul className="space-y-6">
                                                <li className="text-[var(--text-dim)] flex gap-4">
                                                    <span className="text-[var(--accent)] shrink-0 font-bold">▸</span>
                                                    <span className="leading-6">Statistical Improbability: Accounts with win rates {'>'}90% on high-variance events.</span>
                                                </li>
                                                <li className="text-[var(--text-dim)] flex gap-4">
                                                    <span className="text-[var(--accent)] shrink-0 font-bold">▸</span>
                                                    <span className="leading-6">Insider Timing: Positions opened immediately preceding news leaks.</span>
                                                </li>
                                                <li className="text-[var(--text-dim)] flex gap-4">
                                                    <span className="text-[var(--accent)] shrink-0 font-bold opacity-50">▸</span>
                                                    <span className="leading-6 opacity-60">Network Clustering: (Coming Soon) Coordinated wallet rings.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="space-y-8 p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all hover:bg-white/[0.04]">
                                            <h4 className="text-[var(--accent)] uppercase tracking-widest font-black">02. Semantic Analysis</h4>
                                            <p className="text-[var(--text-muted)] leading-7">We utilize Anthropic's Claude via AWS Bedrock to contextualize raw market data.</p>
                                            <div className="bg-black/60 p-6 border border-white/5 space-y-4 text-[10px] shadow-inner">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[var(--text-muted)] uppercase tracking-tighter">Market_Data_Input:</span>
                                                    <p className="text-[var(--foreground)]">Wallet 0x31... bet $32k on "Yes" for Venezuela.</p>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[var(--accent)] uppercase tracking-tighter">Narrative_Context:</span>
                                                    <p className="text-[var(--text-muted)]">No history in LatAm. Account funded 1hr ago.</p>
                                                </div>
                                                <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                                                    <span className="text-[var(--text-muted)]">AI_VERDICT:</span>
                                                    <span className="text-[var(--accent)] font-black uppercase shadow-[0_0_8px_var(--accent-glow)] px-2 py-0.5 bg-[var(--accent)]/10">HIGH_CONFIDENCE_INSIDER</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <h4 className="text-[0.65rem] tracking-[0.4em] uppercase text-[var(--accent)] font-bold">Real-Time Transparency</h4>
                                        <div className="grid md:grid-cols-2 gap-12">
                                            <div className="group border-b border-white/5 pb-8">
                                                <p className="text-xs text-[var(--foreground)] uppercase tracking-widest mb-3 group-hover:text-[var(--accent)] transition-colors">Live Dashboard</p>
                                                <p className="text-[11px] leading-7 text-[var(--text-muted)] font-mono">A terminal-grade interface for monitoring active markets and live transaction flows with sub-second latency.</p>
                                            </div>
                                            <div className="group border-b border-white/5 pb-8">
                                                <p className="text-xs text-[var(--foreground)] uppercase tracking-widest mb-3 group-hover:text-[var(--accent)] transition-colors">Social Signal</p>
                                                <p className="text-[11px] leading-7 text-[var(--text-muted)] font-mono">Automated reporting of suspicious activity directly to X (Twitter) and Telegram feeds via autonomous agent hooks.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Footer Status */}
                            <div className="pt-32 opacity-20 pointer-events-none pb-24 border-t border-white/5">
                                <p className="text-[0.6rem] font-mono uppercase tracking-[0.6em] text-center italic">
                                    [END_OF_PROTOCOL] • System status: OPTIMIZED • Calibration: 100%
                                </p>
                            </div>
                        </motion.div>
                    </main>
                </div>
            </div>

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--accent);
        }
      `}</style>
        </div>
    );
}
