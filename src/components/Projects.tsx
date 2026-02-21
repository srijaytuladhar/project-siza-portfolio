"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="flex flex-col mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-4"
                >
                    <div className="h-px w-8 bg-accent/30" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Selected Work</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8"
                >
                    Featured <br /> <span className="text-white/20">Projects</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 gap-12">
                {portfolioData.projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 flex justify-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/[0.02] flex items-center gap-4 group"
                >
                    View All Projects
                    <div className="p-2 rounded-full bg-accent text-background group-hover:scale-110 transition-transform">
                        <ArrowUpRight className="h-4 w-4" />
                    </div>
                </motion.button>
            </div>
        </section>
    );
}
