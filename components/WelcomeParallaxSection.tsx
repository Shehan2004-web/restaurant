'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const WelcomeParallaxSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Text moves up from center to top as we scroll through the tall section
    // Increased distance to -130% to move text higher up so "Ella" is visible
    const textY = useTransform(scrollYProgress, [0, 0.8], ["0%", "-130%"]);
    const textOpacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[250vh] bg-[#ffffff]">
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* Gradient Overlay at Top */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#ffffff]/90 to-transparent z-30" />

                {/* Layer 1: Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/leyaerbg.png"
                        alt="Background Layer"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Layer 2: Text */}
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    className="absolute inset-0 z-10 flex items-center justify-center pt-20"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif bg-clip-text text-transparent bg-gradient-to-b from-amber-100 via-amber-300 to-amber-600 drop-shadow-2xl text-center px-4 tracking-wider">
                        Welcome To Bamboo Edge
                    </h1>
                </motion.div>

                {/* Layer 3: Foreground (Bottom Layer) */}
                <div className="absolute bottom-0 left-0 right-0 z-20 h-full">
                    <Image
                        src="/layer1.png"
                        alt="Foreground Layer"
                        fill
                        className="object-cover object-bottom"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default WelcomeParallaxSection;
