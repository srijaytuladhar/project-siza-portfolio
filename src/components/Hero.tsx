"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import Magnetic from "./Magnetic";
import { useRef } from "react";

export default function Hero() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const imgScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const imgOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
    const imgFilter = useTransform(
        scrollYProgress,
        [0, 0.3, 0.6],
        [
            "grayscale(100%) blur(0px) brightness(1)",
            "grayscale(0%) blur(0px) brightness(1.1)",
            "grayscale(0%) blur(40px) brightness(1.1)"
        ]
    );
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
        <section ref={targetRef} id="hero" className="relative min-h-screen flex flex-col lg:grid lg:grid-cols-2 items-center w-full overflow-hidden">
            {/* Background Aura */}
            <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] aura-glow -z-10 opacity-[0.03]" />

            {/* Left Column: Text content aligned to standard margins */}
            <div className="w-full h-full flex items-center justify-end px-6 sm:px-12 lg:px-16 py-20 lg:py-0">
                <motion.div style={{ y: textY }} className="w-full max-w-[650px] z-10 text-left">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                            }
                        }}
                    >
                        <motion.div
                            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="h-px w-12 bg-accent/30" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                                Senior Software Engineer
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] uppercase mb-8"
                        >
                            Building <br />
                            <span className="text-white/20">Digital</span> <br />
                            Architectures
                        </motion.h1>

                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-slate-500 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-12"
                        >
                            Engineering high-availability, cloud-native payment systems that scale to millions.
                            Currently Lead Engineer at <span className="text-white">Fonepay</span>.
                        </motion.p>

                        <motion.div
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                            className="flex flex-wrap gap-6"
                        >
                            <Magnetic strength={0.4}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-10 py-5 rounded-full bg-accent text-background font-black uppercase tracking-widest text-xs"
                                >
                                    Start a project
                                </motion.button>
                            </Magnetic>
                            <Magnetic strength={0.2}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-10 py-5 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/[0.02]"
                                >
                                    View Work
                                </motion.button>
                            </Magnetic>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Right Column: Expansive profile image */}
            <div className="w-full h-screen relative flex items-center justify-center p-8 lg:p-12">
                <motion.div
                    style={{ y: imgY, scale: imgScale, filter: imgFilter, opacity: imgOpacity }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full z-0"
                >
                    <div className="absolute inset-0 bg-accent/5 blur-[120px] opacity-10 -z-10" />
                    <Image
                        src="/profile.png"
                        alt={portfolioData.name}
                        fill
                        className="object-contain transition-all duration-700 pointer-events-none"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
