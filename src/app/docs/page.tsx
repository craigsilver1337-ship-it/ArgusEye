"use client";

import { PixelBlastEye } from "@/components/ui/pixel-blast-eye";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function DocsPage() {
    const [activeSection, setActiveSection] = useState("mission");
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sections = ['mission', 'capabilities', 'architecture', 'methodology', 'economics', 'roadmap', 'api'];
        let observer: IntersectionObserver | null = null;

        const initObserver = () => {
            if (observer) observer.disconnect();

            const isMobile = window.innerWidth < 768;
            const container = scrollContainerRef.current;

            const observerOptions = {
                root: isMobile ? null : container,
                rootMargin: isMobile ? '-10% 0px -80% 0px' : '-20% 0px -70% 0px',
                threshold: 0
            };

            const observerCallback = (entries: IntersectionObserverEntry[]) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            };

            observer = new IntersectionObserver(observerCallback, observerOptions);
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el && observer) observer.observe(el);
            });
        };

        initObserver();
        window.addEventListener('resize', initObserver);

        return () => {
            if (observer) observer.disconnect();
            window.removeEventListener('resize', initObserver);
        };
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        const container = scrollContainerRef.current;
        const isMobile = window.innerWidth < 768;

        if (element) {
            if (isMobile) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (container) {
                const containerTop = container.getBoundingClientRect().top;
                const elementTop = element.getBoundingClientRect().top;
                const scrollTarget = elementTop - containerTop + container.scrollTop - 40;

                container.scrollTo({
                    top: scrollTarget,
                    behavior: 'smooth'
                });
            }
            window.history.pushState(null, '', `#${id}`);
        }
    };

    return (
        <div className="min-h-screen md:h-screen w-full relative bg-[var(--background)] overflow-y-auto md:overflow-hidden">
            {/* Background elements - FIXED to prevent moving */}
            <div className="fixed inset-0 opacity-20 transform scale-125 z-0 pointer-events-none">
                <PixelBlastEye
                    className="w-full h-full"
                    pixelSize={16}
                    gap={6}
                />
            </div>

            <div className="fixed inset-0 bg-black/40 pointer-events-none z-[1]" />

            <div className="fixed inset-0 pointer-events-none opacity-20 bg-scanlines z-[2]"
                style={{
                    background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.05) 2px, rgba(255, 255, 255, 0.05) 4px)"
                }}
            />

            {/* Content Layer */}
            <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen md:h-screen flex flex-col md:flex-row">
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
                                <a
                                    href="#mission"
                                    onClick={(e) => scrollToSection(e, "mission")}
                                    className="group flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors"
                                >
                                    <span className={`text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${activeSection === 'mission' ? 'text-[var(--accent)]' : 'text-[var(--text-dim)] group-hover:text-[var(--foreground)]'}`}>01. Mission</span>
                                    <div className={`w-1 h-1 rounded-full transition-all ${activeSection === 'mission' ? 'bg-[var(--accent)] scale-125 shadow-[0_0_8px_var(--accent-glow)]' : 'bg-white/10 group-hover:bg-white/30'}`} />
                                </a>
                                <a
                                    href="#capabilities"
                                    onClick={(e) => scrollToSection(e, "capabilities")}
                                    className="group flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors"
                                >
                                    <span className={`text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${activeSection === 'capabilities' ? 'text-[var(--accent)]' : 'text-[var(--text-dim)] group-hover:text-[var(--foreground)]'}`}>02. Capabilities</span>
                                    <div className={`w-1 h-1 rounded-full transition-all ${activeSection === 'capabilities' ? 'bg-[var(--accent)] scale-125 shadow-[0_0_8px_var(--accent-glow)]' : 'bg-white/10 group-hover:bg-white/30'}`} />
                                </a>
                                <a
                                    href="#architecture"
                                    onClick={(e) => scrollToSection(e, "architecture")}
                                    className="group flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors"
                                >
                                    <span className={`text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${activeSection === 'architecture' ? 'text-[var(--accent)]' : 'text-[var(--text-dim)] group-hover:text(--foreground)'}`}>03. Architecture</span>
                                    <div className={`w-1 h-1 rounded-full transition-all ${activeSection === 'architecture' ? 'bg-[var(--accent)] scale-125 shadow-[0_0_8px_var(--accent-glow)]' : 'bg-white/10 group-hover:bg-white/30'}`} />
                                </a>
                                <a
                                    href="#methodology"
                                    onClick={(e) => scrollToSection(e, "methodology")}
                                    className="group flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors"
                                >
                                    <span className={`text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${activeSection === 'methodology' ? 'text-[var(--accent)]' : 'text-[var(--text-dim)] group-hover:text-[var(--foreground)]'}`}>04. Methodology</span>
                                    <div className={`w-1 h-1 rounded-full transition-all ${activeSection === 'methodology' ? 'bg-[var(--accent)] scale-125 shadow-[0_0_8px_var(--accent-glow)]' : 'bg-white/10 group-hover:bg-white/30'}`} />
                                </a>
                                <a
                                    href="#economics"
                                    onClick={(e) => scrollToSection(e, "economics")}
                                    className="group flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors"
                                >
                                    <span className={`text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${activeSection === 'economics' ? 'text-[var(--accent)]' : 'text-[var(--text-dim)] group-hover:text-[var(--foreground)]'}`}>05. Economics</span>
                                    <div className={`w-1 h-1 rounded-full transition-all ${activeSection === 'economics' ? 'bg-[var(--accent)] scale-125 shadow-[0_0_8px_var(--accent-glow)]' : 'bg-white/10 group-hover:bg-white/30'}`} />
                                </a>
                                <a
                                    href="#roadmap"
                                    onClick={(e) => scrollToSection(e, "roadmap")}
                                    className="group flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors"
                                >
                                    <span className={`text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${activeSection === 'roadmap' ? 'text-[var(--accent)]' : 'text-[var(--text-dim)] group-hover:text-[var(--foreground)]'}`}>06. Roadmap</span>
                                    <div className={`w-1 h-1 rounded-full transition-all ${activeSection === 'roadmap' ? 'bg-[var(--accent)] scale-125 shadow-[0_0_8px_var(--accent-glow)]' : 'bg-white/10 group-hover:bg-white/30'}`} />
                                </a>
                                <div className="group flex items-center justify-between p-2 opacity-30 cursor-not-allowed">
                                    <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--text-dim)]">07. API (Locked)</span>
                                    <div className="w-1 h-1 bg-white/10 rounded-full" />
                                </div>
                            </nav>
                        </div>


                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-w-0">
                    <header className="p-8 md:p-12 pb-6 flex flex-col md:flex-row justify-between items-start gap-4 flex-shrink-0 bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-white/5 md:border-none">
                        <div className="space-y-1">
                            <h1 className="font-serif text-5xl tracking-wider text-[var(--foreground)] uppercase">Documentation</h1>
                            <p className="text-[0.6rem] tracking-[0.5em] text-[var(--accent)] uppercase opacity-80">Protocol_v0.1.0_Stable</p>
                        </div>

                    </header>

                    <main
                        ref={scrollContainerRef}
                        className="flex-1 overflow-visible md:overflow-y-auto p-8 md:p-12 pt-16 custom-scrollbar"
                    >
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
                                                    <p className="text-xs leading-7 text-[var(--text-dim)] font-mono">Insiders trade on news hours before it breaks.</p>
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
                                        ArgusEye is the answer to this opacity. It is not just an analytics tool; it is an autonomous surveillance agent. By combining high-frequency on-chain data ingestion with LLM-driven heuristic analysis (Claude via AWS Bedrock), ArgusEye detects anomalies that rigid algorithms miss.
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
                                        ArgusEye operates on a "Detect-Verify-Expose" loop.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8 text-[0.75rem] font-mono">
                                        <div className="space-y-8 p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all hover:bg-white/[0.04]">
                                            <h4 className="text-[var(--accent)] uppercase tracking-widest font-black">01. Pattern Recognition</h4>
                                            <p className="text-[var(--text-muted)] leading-7">Unlike traditional bots, ArgusEye uses a probabilistic approach to identify anomalies.</p>
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

                            {/* Section 03: System Architecture */}
                            <section id="architecture" className="scroll-mt-20 space-y-16">
                                <div className="flex items-center gap-4">
                                    <span className="text-[0.6rem] font-mono text-[var(--accent)] border border-[var(--accent)] px-2 py-0.5 font-bold">03</span>
                                    <h3 className="text-[0.7rem] tracking-[0.4em] uppercase text-[var(--foreground)] font-black">System Architecture</h3>
                                    <div className="h-[1px] flex-1 bg-white/5" />
                                </div>

                                <div className="space-y-12">
                                    <p className="text-sm leading-8 text-[var(--text-dim)] font-mono">
                                        The ArgusEye architecture is built for low-latency state synchronization and high-throughput inference. We reject the traditional polling model in favor of a reactive, push-based architecture powered by <span className="text-[var(--accent)] font-bold">Convex</span>.
                                    </p>

                                    {/* Architecture Visual Diagram */}
                                    <div className="py-8 md:py-12 px-4 border border-white/5 bg-black/20 backdrop-blur-sm relative overflow-hidden group">
                                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)]" />

                                        <div className="relative z-10 flex flex-col items-center gap-6 md:gap-0 md:flex-row md:justify-between max-w-4xl mx-auto">
                                            {/* Data Source */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                className="w-32 md:w-32 aspect-square border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-2 p-2 text-center"
                                            >
                                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-[var(--accent)]/30 flex items-center justify-center">
                                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[var(--accent)] rounded-full animate-ping" />
                                                </div>
                                                <p className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest leading-tight">Polymarket<br />CLOB</p>
                                            </motion.div>

                                            {/* Connection 1 */}
                                            <div className="flex md:flex-1 items-center justify-center">
                                                {/* Vertical line for mobile */}
                                                <div className="md:hidden w-[1px] h-12 bg-gradient-to-b from-white/10 via-[var(--accent)]/40 to-white/10 relative">
                                                    <motion.div
                                                        animate={{ y: ["0%", "100%"] }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                        className="absolute left-[-2px] w-[4px] h-2 bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
                                                    />
                                                </div>
                                                {/* Horizontal line for desktop */}
                                                <div className="hidden md:block w-full h-[1px] bg-gradient-to-r from-white/10 via-[var(--accent)]/40 to-white/10 relative">
                                                    <motion.div
                                                        animate={{ x: ["0%", "100%"] }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                        className="absolute top-[-2px] w-2 h-[4px] bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
                                                    />
                                                </div>
                                            </div>

                                            {/* Reactive Core */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                className="w-40 md:w-48 aspect-square border-2 border-[var(--accent)]/50 bg-[var(--accent)]/5 flex flex-col items-center justify-center gap-3 md:gap-4 p-4 md:p-6 relative"
                                            >
                                                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--accent)]" />
                                                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--accent)]" />
                                                <div className="text-[var(--accent)] font-black text-[10px] md:text-xs tracking-tighter uppercase italic">The Core</div>
                                                <div className="text-[9px] md:text-[10px] font-mono uppercase font-bold text-center">Convex<br /><span className="text-[var(--text-dim)] text-[7px] md:text-[8px] font-normal tracking-normal leading-relaxed">Reactive State Engine</span></div>
                                            </motion.div>

                                            {/* Connection 2 */}
                                            <div className="flex md:flex-1 items-center justify-center">
                                                {/* Vertical line for mobile */}
                                                <div className="md:hidden w-[1px] h-12 bg-gradient-to-b from-white/10 via-[var(--accent)]/40 to-white/10 relative">
                                                    <motion.div
                                                        animate={{ y: ["0%", "100%"] }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                                                        className="absolute left-[-2px] w-[4px] h-2 bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
                                                    />
                                                </div>
                                                {/* Horizontal line for desktop */}
                                                <div className="hidden md:block w-full h-[1px] bg-gradient-to-r from-white/10 via-[var(--accent)]/40 to-white/10 relative">
                                                    <motion.div
                                                        animate={{ x: ["0%", "100%"] }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                                                        className="absolute top-[-2px] w-2 h-[4px] bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
                                                    />
                                                </div>
                                            </div>

                                            {/* AI Engine */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                className="w-32 md:w-32 aspect-square border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-2 p-2 text-center"
                                            >
                                                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center relative">
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                                        className="absolute inset-0 border border-t-[var(--accent)] rounded-lg opacity-40"
                                                    />
                                                    <div className="text-[9px] md:text-[10px] font-bold text-[var(--accent)]">AI</div>
                                                </div>
                                                <p className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest leading-tight">Claude 3.5<br />Inference</p>
                                            </motion.div>
                                        </div>

                                        {/* Status Bar */}
                                        <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-2 text-[6px] md:text-[7px] font-mono text-[var(--text-dim)] uppercase tracking-[0.2em] md:tracking-[0.3em]">
                                            <span>System_Sync: 0.2ms</span>
                                            <span className="text-[var(--accent)]">Stream: Active</span>
                                            <span>Inference_Load: 12%</span>
                                        </div>
                                    </div>

                                    <div className="grid gap-8">
                                        <div className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                                            <div className="flex justify-between items-start mb-6">
                                                <h1 className="text-[10px] tracking-[0.3em] uppercase text-[var(--accent)] font-bold">3.1 Data Ingestion Layer</h1>
                                                <span className="text-[0.5rem] font-mono text-white/20">STATUS: ACTIVE</span>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <p className="text-[10px] text-[var(--foreground)] uppercase font-bold tracking-widest">Source</p>
                                                    <p className="text-xs text-[var(--text-dim)] leading-6 font-mono">Direct connection to Polymarket’s CLOB (Central Limit Order Book) via Gamma API.</p>
                                                </div>
                                                <div className="space-y-3">
                                                    <p className="text-[10px] text-[var(--foreground)] uppercase font-bold tracking-widest">Normalization</p>
                                                    <p className="text-xs text-[var(--text-dim)] leading-6 font-mono">Raw transactional data is sanitized and normalized into a chain-agnostic schema for multi-chain expansion.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                                            <div className="flex justify-between items-start mb-6">
                                                <h1 className="text-[10px] tracking-[0.3em] uppercase text-[var(--accent)] font-bold">3.2 The Reactive Core (Convex)</h1>
                                                <span className="text-[0.5rem] font-mono text-white/20">STATUS: LOW_LATENCY</span>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <p className="text-[10px] text-[var(--foreground)] uppercase font-bold tracking-widest">ACID Compliance</p>
                                                    <p className="text-xs text-[var(--text-dim)] leading-6 font-mono">Ensures that every bet recorded is atomic and immutable, maintaining global state consistency.</p>
                                                </div>
                                                <div className="space-y-3">
                                                    <p className="text-[10px] text-[var(--foreground)] uppercase font-bold tracking-widest">Real-time Subscriptions</p>
                                                    <p className="text-xs text-[var(--text-dim)] leading-6 font-mono">WebSocket connections push suspicious bets to clients immediately upon indexing.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                                            <div className="flex justify-between items-start mb-6">
                                                <h1 className="text-[10px] tracking-[0.3em] uppercase text-[var(--accent)] font-bold">3.3 The Inference Engine (AWS Bedrock + Claude)</h1>
                                                <span className="text-[0.5rem] font-mono text-white/20">STATUS: HIGH_THROUGHPUT</span>
                                            </div>
                                            <div className="grid md:grid-cols-3 gap-8">
                                                <div className="space-y-3">
                                                    <p className="text-[10px] text-[var(--foreground)] uppercase font-bold tracking-widest">Orchestration</p>
                                                    <p className="text-[10px] text-[var(--text-dim)] leading-5 font-mono">AWS Bedrock manages LLM throughput and context windows securely.</p>
                                                </div>
                                                <div className="space-y-3">
                                                    <p className="text-[10px] text-[var(--foreground)] uppercase font-bold tracking-widest">Reasoning</p>
                                                    <p className="text-[10px] text-[var(--text-dim)] leading-5 font-mono">Claude 3.5 Sonnet analyzes complex textual and numerical context.</p>
                                                </div>
                                                <div className="space-y-3 opacity-50">
                                                    <p className="text-[10px] text-[var(--foreground)] uppercase font-bold tracking-widest text-white/40">Vectorization</p>
                                                    <p className="text-[10px] text-[var(--text-dim)] leading-5 font-mono">(Roadmap) RAG against known fraud cases.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 04: Detection Methodology */}
                            <section id="methodology" className="scroll-mt-20 space-y-16">
                                <div className="flex items-center gap-4">
                                    <span className="text-[0.6rem] font-mono text-[var(--accent)] border border-[var(--accent)] px-2 py-0.5 font-bold">04</span>
                                    <h3 className="text-[0.7rem] tracking-[0.4em] uppercase text-[var(--foreground)] font-black">Detection Methodology</h3>
                                    <div className="h-[1px] flex-1 bg-white/5" />
                                </div>

                                <div className="space-y-12">
                                    <p className="text-sm leading-8 text-[var(--text-dim)] font-mono">
                                        ArgusEye does not rely on rigid "hardcoded" rules. Rules are brittle; insiders adapt. Instead, we utilize a <span className="text-white font-bold">Multi-Factor Scoring System</span> that assigns a <span className="text-[var(--accent)] font-mono">RISK_SCORE (0-100)</span> to every active trader.
                                    </p>

                                    <div className="space-y-8">
                                        <h4 className="text-[10px] tracking-[0.3em] uppercase text-[var(--accent)] font-bold">4.1 The Triad of Suspicion</h4>
                                        <div className="grid gap-6">
                                            <div className="p-8 border border-white/5 bg-white/[0.01] backdrop-blur-sm space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[var(--accent)] font-mono text-xs">I.</span>
                                                    <h5 className="text-xs uppercase font-bold tracking-widest">Statistical Improbability (The "Luck" Factor)</h5>
                                                </div>
                                                <p className="text-[11px] text-[var(--text-muted)] font-mono italic leading-6">"Luck is a statistical anomaly. Consistent luck is a crime."</p>
                                                <div className="pt-4 grid md:grid-cols-2 gap-8">
                                                    <div>
                                                        <p className="text-[10px] text-[var(--foreground)] uppercase font-bold mb-2">Metric</p>
                                                        <p className="text-[10px] text-[var(--accent)] font-mono">Win_Rate_Z_Score</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] text-[var(--foreground)] uppercase font-bold mb-2">Analysis</p>
                                                        <p className="text-[10px] text-[var(--text-dim)] leading-5">If a user consistently wins on binary events with &lt;20% probability, the system flags the variance.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-8 border border-white/5 bg-white/[0.01] backdrop-blur-sm space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[var(--accent)] font-mono text-xs">II.</span>
                                                    <h5 className="text-xs uppercase font-bold tracking-widest">Timing Correlation (The "Clock" Factor)</h5>
                                                </div>
                                                <div className="pt-4 grid md:grid-cols-2 gap-8">
                                                    <div>
                                                        <p className="text-[10px] text-[var(--foreground)] uppercase font-bold mb-2">Metric</p>
                                                        <p className="text-[10px] text-[var(--accent)] font-mono">Delta_To_News_Event</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] text-[var(--foreground)] uppercase font-bold mb-2">Analysis</p>
                                                        <p className="text-[10px] text-[var(--text-dim)] leading-5">Detects positions opened within the "Dark Window" — hours before a major resolution event becomes public knowledge.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-8 border border-white/5 bg-white/[0.01] backdrop-blur-sm space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[var(--accent)] font-mono text-xs">III.</span>
                                                    <h5 className="text-xs uppercase font-bold tracking-widest">Wallet Hygiene (The "Identity" Factor)</h5>
                                                </div>
                                                <div className="pt-4 grid md:grid-cols-2 gap-8">
                                                    <div>
                                                        <p className="text-[10px] text-[var(--foreground)] uppercase font-bold mb-2">Metrics</p>
                                                        <ul className="text-[10px] text-[var(--accent)] font-mono space-y-1">
                                                            <li>• Account_Age</li>
                                                            <li>• Funding_Source</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] text-[var(--foreground)] uppercase font-bold mb-2">Analysis</p>
                                                        <p className="text-[10px] text-[var(--text-dim)] leading-5">Flags fresh wallets (&lt;72h), single-market focus, and (Soon) Tornado Cash funding trails.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <h4 className="text-[10px] tracking-[0.3em] uppercase text-[var(--accent)] font-bold">4.2 Risk Classifications</h4>
                                        <div className="overflow-hidden border border-white/10 bg-black/20">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="border-b border-white/10 bg-white/5">
                                                        <th className="p-4 text-[10px] uppercase tracking-widest font-black">Level</th>
                                                        <th className="p-4 text-[10px] uppercase tracking-widest font-black">Score</th>
                                                        <th className="p-4 text-[10px] uppercase tracking-widest font-black">Action</th>
                                                        <th className="p-4 text-[10px] uppercase tracking-widest font-black">Visual</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-[10px] font-mono">
                                                    <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                                        <td className="p-4 text-red-500 font-bold">CRITICAL</td>
                                                        <td className="p-4 text-[var(--text-dim)]">90-100</td>
                                                        <td className="p-4 text-[var(--text-dim)]">Immediate Alert. High confidence.</td>
                                                        <td className="p-4">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                                                                <span className="text-[8px] text-red-500/50 uppercase">Blinking Red</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                                                        <td className="p-4 text-orange-500 font-bold">HIGH</td>
                                                        <td className="p-4 text-[var(--text-dim)]">70-89</td>
                                                        <td className="p-4 text-[var(--text-dim)]">Flagged for manual review.</td>
                                                        <td className="p-4">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                                                <span className="text-[8px] text-orange-500/50 uppercase">Solid Orange</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-white/[0.02]">
                                                        <td className="p-4 text-yellow-500 font-bold">MEDIUM</td>
                                                        <td className="p-4 text-[var(--text-dim)]">50-69</td>
                                                        <td className="p-4 text-[var(--text-dim)]">Watchlist. Awaiting data.</td>
                                                        <td className="p-4">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 bg-yellow-500/50 rounded-full" />
                                                                <span className="text-[8px] text-yellow-500/30 uppercase">Dim Yellow</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 05: Economic Model */}
                            <section id="economics" className="scroll-mt-20 space-y-16">
                                <div className="flex items-center gap-4">
                                    <span className="text-[0.6rem] font-mono text-[var(--accent)] border border-[var(--accent)] px-2 py-0.5 font-bold">05</span>
                                    <h3 className="text-[0.7rem] tracking-[0.4em] uppercase text-[var(--foreground)] font-black">Economic Model & Utility</h3>
                                    <div className="h-[1px] flex-1 bg-white/5" />
                                </div>

                                <div className="space-y-12">
                                    <p className="text-sm leading-8 text-[var(--text-dim)] font-mono">
                                        The <span className="text-[var(--accent)] font-bold">$ARGUSEYE</span> token is not merely a speculative asset; it is the license key to the surveillance network. We enforce a strictly fair distribution model to prevent the very insider manipulation we aim to expose.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="p-8 border border-white/5 bg-white/[0.02] space-y-6">
                                            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[var(--accent)] font-bold">5.1 Supply Dynamics</h4>
                                            <p className="text-[11px] text-[var(--text-muted)] font-mono leading-6">Operated on Solana via Pump.fun bonding curve mechanism to ensure mathematical fairness.</p>
                                            <div className="space-y-4 pt-4 border-t border-white/5 font-mono">
                                                <div className="flex justify-between text-[10px]">
                                                    <span className="text-[var(--text-muted)] uppercase">Total Supply:</span>
                                                    <span className="text-[var(--foreground)]">1,000,000,000</span>
                                                </div>
                                                <div className="flex justify-between text-[10px]">
                                                    <span className="text-[var(--text-muted)] uppercase">Liquidity Policy:</span>
                                                    <span className="text-[var(--accent)] font-bold">100% BURN</span>
                                                </div>
                                                <div className="pt-4 space-y-2">
                                                    <div className="flex justify-between text-[9px]">
                                                        <span>Public Launch</span>
                                                        <span>99-100%</span>
                                                    </div>
                                                    <div className="w-full h-1 bg-white/5">
                                                        <div className="w-full h-full bg-[var(--accent)]" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8 border border-white/5 bg-white/[0.02] space-y-6">
                                            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[var(--accent)] font-bold">5.2 Token Utility</h4>
                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <p className="text-[9px] text-[var(--accent)] uppercase font-bold tracking-widest">Level 0: Observer (0 $ARGUSEYE)</p>
                                                    <p className="text-[10px] text-[var(--text-muted)] leading-5">Basic anomalies (delayed), Public "Case Files".</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-[9px] text-[var(--foreground)] uppercase font-bold tracking-widest flex justify-between">
                                                        Level 1: Analyst (Hold 0.5%)
                                                        <span className="text-[var(--accent)] text-[7px] border border-[var(--accent)] px-1">SOON</span>
                                                    </p>
                                                    <p className="text-[10px] text-[var(--text-muted)] leading-5">Unblur Addresses, Zero-latency Real-Time Dashboard.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-[9px] text-[var(--foreground)] uppercase font-bold tracking-widest flex justify-between">
                                                        Level 2: Sovereign (Hold 1.5%)
                                                        <span className="text-[var(--accent)] text-[7px] border border-[var(--accent)] px-1">SOON</span>
                                                    </p>
                                                    <p className="text-[10px] text-[var(--text-muted)] leading-5">API Access, Governance on monitor targets.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 06: Roadmap */}
                            <section id="roadmap" className="scroll-mt-20 space-y-16">
                                <div className="flex items-center gap-4">
                                    <span className="text-[0.6rem] font-mono text-[var(--accent)] border border-[var(--accent)] px-2 py-0.5 font-bold">06</span>
                                    <h3 className="text-[0.7rem] tracking-[0.4em] uppercase text-[var(--foreground)] font-black">Operation Roadmap</h3>
                                    <div className="h-[1px] flex-1 bg-white/5" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 relative">
                                    {/* Vertical Timeline Line */}
                                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2" />

                                    <div className="space-y-8 relative">
                                        <div className="p-6 border border-white/5 bg-black/40 backdrop-blur-sm group hover:border-[var(--accent)]/30 transition-colors">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="text-[var(--accent)] font-mono text-[9px] font-bold tracking-widest">PHASE I</span>
                                                <span className="text-[7px] font-mono bg-white/10 px-2 py-0.5 text-white/50 uppercase">COMPLETED</span>
                                            </div>
                                            <h4 className="text-xs uppercase font-bold mb-3 tracking-widest">Protocol Genesis</h4>
                                            <ul className="text-[10px] text-[var(--text-muted)] space-y-2 font-mono list-none">
                                                <li>• Next.js & Convex infrastructure</li>
                                                <li>• Claude AI fine-tuning</li>
                                                <li>• Polymarket API integration</li>
                                            </ul>
                                        </div>

                                        <div className="p-6 border border-white/5 bg-black/40 backdrop-blur-sm group hover:border-[var(--accent)]/30 transition-colors">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="text-[var(--accent)] font-mono text-[9px] font-bold tracking-widest">PHASE II</span>
                                                <span className="text-[7px] font-mono bg-white/10 px-2 py-0.5 text-white/50 uppercase">COMPLETED</span>
                                            </div>
                                            <h4 className="text-xs uppercase font-bold mb-3 tracking-widest">Signal Calibration</h4>
                                            <ul className="text-[10px] text-[var(--text-muted)] space-y-2 font-mono list-none">
                                                <li>• "War Room" on X/Telegram</li>
                                                <li>• Visual Identity & Branding</li>
                                                <li>• Private Beta Testing</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-8 mt-0 md:mt-24 relative">
                                        <div className="p-6 border border-[var(--accent)] bg-[var(--accent)]/5 backdrop-blur-sm relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,var(--accent)_0%,transparent_70%)] opacity-20" />
                                            <div className="flex justify-between items-start mb-4 relative z-10">
                                                <span className="text-[var(--accent)] font-mono text-[9px] font-bold tracking-widest">PHASE III</span>
                                                <span className="text-[7px] font-mono bg-[var(--accent)] text-black px-2 py-0.5 uppercase font-black animate-pulse">ACTIVE_Q1_2026</span>
                                            </div>
                                            <h4 className="text-xs uppercase font-bold mb-3 tracking-widest relative z-10 text-[var(--accent)]">The Broadcast</h4>
                                            <ul className="text-[10px] text-[var(--text-dim)] space-y-2 font-mono list-none relative z-10">
                                                <li>• Pump.fun Fair Launch</li>
                                                <li>• Raydium LP Destruction</li>
                                                <li>• Token-Gating Activation</li>
                                            </ul>
                                        </div>

                                        <div className="p-6 border border-white/5 bg-black/20 backdrop-blur-sm opacity-50">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="text-[var(--text-muted)] font-mono text-[9px] font-bold tracking-widest">PHASE IV</span>
                                                <span className="text-[7px) font-mono bg-white/5 px-2 py-0.5 text-white/20 uppercase">POST_RAYDIUM</span>
                                            </div>
                                            <h4 className="text-xs uppercase font-bold mb-3 tracking-widest">Network Expansion</h4>
                                            <ul className="text-[10px] text-white/30 space-y-2 font-mono list-none">
                                                <li>• Multi-Market Support</li>
                                                <li>• Automated Sentry Bot</li>
                                                <li>• Institutional API Release</li>
                                            </ul>
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
