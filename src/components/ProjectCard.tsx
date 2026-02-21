"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export default function ProjectCard({
    title,
    description,
    tags,
    githubUrl,
    liveUrl
}: ProjectCardProps) {
    return (
        <SpotlightCard>
            <div className="group relative h-[600px] overflow-hidden">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-slate-900">
                    <Image
                        src="/hero-bg.png"
                        alt={title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-3 mb-6">
                        {tags.slice(0, 3).map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/50">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 group-hover:text-accent transition-colors">
                        {title}
                    </h3>

                    <p className="text-slate-400 text-sm font-medium max-w-md leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {description}
                    </p>

                    <div className="flex gap-4">
                        {liveUrl && (
                            <Magnetic strength={0.4}>
                                <a href={liveUrl} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent group/btn">
                                    Explore Case Study
                                    <div className="p-2 rounded-full border border-accent/20 group-hover/btn:bg-accent group-hover/btn:text-background transition-all">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </a>
                            </Magnetic>
                        )}
                        {githubUrl && (
                            <Magnetic strength={0.2}>
                                <a href={githubUrl} className="p-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all">
                                    <Github className="h-4 w-4" />
                                </a>
                            </Magnetic>
                        )}
                    </div>
                </div>
            </div>
        </SpotlightCard>
    );
}
