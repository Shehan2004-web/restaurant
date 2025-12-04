"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function EventsHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div ref={ref} className="relative h-[60vh] overflow-hidden flex items-center justify-center bg-stone-900">
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <Image
                    src="/hero/hero4.jpg" // Using an existing image suitable for events
                    alt="Events Hero"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-900" />
            </motion.div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium tracking-widest uppercase mb-6 border border-amber-500/30"
                >
                    Gatherings & Celebrations
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight"
                >
                    Unforgettable Moments at Bamboo Edge
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    From intimate dinners to grand celebrations, discover the perfect setting for your next event.
                </motion.p>
            </div>
        </div>
    );
}
