"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Magnetic from "./Magnetic";

export default function Navbar() {
    const menuItems = [
        { label: "About", href: "#hero" },
        { label: "Case Studies", href: "#projects" },
        { label: "Resume", href: "#experience" },
        { label: "Stacks", href: "#skills" },
    ];

    return (
        <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
            <div className="flex items-center gap-2 p-2 rounded-full bg-background/80 backdrop-blur-xl border border-white/5 pointer-events-auto shadow-2xl">
                <div className="flex px-4 items-center gap-2">
                    {menuItems.map((item) => (
                        <Magnetic key={item.label} strength={0.2}>
                            <Link
                                href={item.href}
                                className="px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors block"
                            >
                                {item.label}
                            </Link>
                        </Magnetic>
                    ))}
                </div>

                <Magnetic strength={0.4}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-full bg-accent text-background text-[10px] font-black uppercase tracking-widest hover:bg-accent-dark transition-all"
                    >
                        Hire Me
                    </motion.button>
                </Magnetic>
            </div>
        </nav>
    );
}
