"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function AvailabilityPill() {
    return (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[60] pointer-events-none">
            <Magnetic strength={0.3}>
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md pointer-events-auto"
                >
                    <div className="relative flex h-2 w-2">
                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></div>
                        <div className="relative inline-flex rounded-full h-2 w-2 bg-accent"></div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                        Available for new opportunities
                    </span>
                </motion.div>
            </Magnetic>
        </div>
    );
}
