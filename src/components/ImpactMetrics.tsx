"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Users } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function ImpactMetrics() {
    return (
        <section id="metrics" className="py-24">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[240px]">
                {/* Title/Intro Card */}
                <SpotlightCard className="md:col-span-4 lg:col-span-3 p-12 flex flex-col justify-end">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                        Proven <br /> Results
                    </h2>
                    <p className="text-slate-500 font-medium max-w-xs uppercase text-[10px] tracking-widest">
                        Engineering resilience and scale in <span className="text-white">fintech</span> ecosystems.
                    </p>
                </SpotlightCard>

                {/* Uptime Card (Highlight) */}
                <div className="md:col-span-2 lg:col-span-3 bento-card bg-accent p-12 flex flex-col justify-between group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                    <Zap className="h-8 w-8 text-background fill-background relative z-10" />
                    <div className="relative z-10">
                        <div className="text-7xl font-black text-background tracking-tighter leading-none mb-2">
                            99.9%
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-background/60">
                            System Availability
                        </div>
                    </div>
                </div>

                {/* Transaction Volume Card */}
                <SpotlightCard className="md:col-span-3 p-12 flex flex-col justify-between">
                    <TrendingUp className="h-8 w-8 text-accent" />
                    <div>
                        <div className="text-6xl font-black text-white tracking-tighter leading-none mb-2">
                            $240K+
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                            Monthly Transactions
                        </div>
                    </div>
                </SpotlightCard>

                {/* Deployment Speed Card */}
                <SpotlightCard className="md:col-span-3 p-12 flex flex-col justify-between">
                    <Users className="h-8 w-8 text-white/20" />
                    <div>
                        <div className="text-6xl font-black text-white tracking-tighter leading-none mb-2">
                            40%
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                            Operational Efficiency
                        </div>
                    </div>
                </SpotlightCard>
            </div>
        </section>
    );
}
