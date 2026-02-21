"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SpotlightCard from "./SpotlightCard";

export default function SkillOrbit() {
    return (
        <section id="skills" className="py-24 border-t border-white/5">
            <div className="flex flex-col mb-20">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-8 bg-accent/30" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Arsenal</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
                    Technical <br /> <span className="text-white/20">Stacks</span>
                </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {portfolioData.skills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <SpotlightCard className="p-8 hover:bg-accent/10 hover:border-accent transition-all duration-500 flex flex-col items-center text-center h-full">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-accent transition-colors mb-4">
                                Verified
                            </span>
                            <h4 className="text-xl font-black uppercase tracking-tighter text-white group-hover:text-accent transition-colors">
                                {skill}
                            </h4>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
