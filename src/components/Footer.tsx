"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="py-32 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="flex flex-col items-center text-center">
                <div className="inline-block py-1.5 px-3 rounded-md bg-accent/10 border border-accent/20 mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                        Let's build the future of finance
                    </span>
                </div>

                <h2 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-16 leading-[0.9]">
                    Get in <br /> <span className="text-white/20">Touch</span>
                </h2>

                <a
                    href="mailto:srijay73@gmail.com"
                    className="text-3xl md:text-5xl lg:text-6xl font-black text-white hover:text-accent transition-all duration-500 tracking-tighter mb-24 uppercase"
                >
                    srijay73@gmail.com
                </a>

                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/5">
                    <div className="flex gap-8">
                        {["LinkedIn", "GitHub", "Twitter", "Instagram"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors"
                            >
                                {social}
                            </a>
                        ))}
                    </div>

                    <div className="text-[9px] font-black text-slate-700 uppercase tracking-[0.4em]">
                        © {new Date().getFullYear()} Srijay Tuladhar. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
