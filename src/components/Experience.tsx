"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SpotlightCard from "./SpotlightCard";

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="flex flex-col mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-4"
                >
                    <div className="h-px w-8 bg-accent/30" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Evolution</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8"
                >
                    Career <br /> <span className="text-white/20">Timeline</span>
                </motion.h2>
            </div>

            <div className="flex flex-col gap-6">
                {portfolioData.experience.map((exp, index) => (
                    <motion.div
                        key={`${exp.company}-${exp.role}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <SpotlightCard className="p-12">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-accent transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center gap-3 mt-2">
                                        <span className="text-xs font-black uppercase tracking-widest text-white/40">{exp.company}</span>
                                        <div className="h-1 w-1 rounded-full bg-white/20" />
                                        <span className="text-xs font-medium text-white/40">{exp.period}</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-4 max-w-3xl">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-slate-500 text-sm leading-relaxed">
                                        <span className="text-accent mt-1.5 opacity-50">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>

            <div className="mt-24">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px w-8 bg-white/10" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Academic Foundation</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {portfolioData.education.map((edu) => (
                        <SpotlightCard key={edu.school} className="p-12">
                            <h4 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">{edu.degree}</h4>
                            <p className="text-xs font-black uppercase tracking-widest text-accent/60 mb-6">{edu.school}</p>
                            <p className="text-sm text-slate-500 font-medium">{edu.period}</p>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
