"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
}

export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const spotlightX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const spotlightY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { left, top } = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={`relative bento-card group ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(168, 85, 247, 0.08), transparent 40%)`,
                }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
