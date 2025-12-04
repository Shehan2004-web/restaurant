"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function GalleryHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div ref={ref} className="relative h-[60vh] overflow-hidden flex items-center justify-center">
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <Image
                    src="/hero/hero1.jpg" // Using an existing hero image
                    alt="Gallery Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-serif text-white mb-4"
                >
                    Visual Journey
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-light"
                >
                    Immerse yourself in the beauty of Bamboo Edge.
                </motion.p>
            </div>
        </div>
    );
}
