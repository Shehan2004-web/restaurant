'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import LocationSection from '@/components/LocationSection';
import { Leaf, Utensils, Heart } from 'lucide-react';

export default function AboutPage() {
    // Fix applied: Framer Motion variants typed explicitly
    const fadeInUpVariant: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <main className="min-h-screen bg-[#fffbeb] overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/abut/a1.png" // Using existing hero image
                        alt="Bamboo Edge Scenery"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-teal-950/60" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-amber-400 font-medium tracking-[0.2em] uppercase mb-4"
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight"
                    >
                        About Bamboo Edge
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto"
                    >
                        A sanctuary where nature&apos;s rhythm dictates the pace of life.
                    </motion.p>
                </div>
            </section>

            {/* 1. The Brand Story - Our Origin */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                        <motion.div variants={fadeInUpVariant} className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/abut/b22.png" // Using existing cabin image
                                alt="Nature at Bamboo Edge"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/50 to-transparent" />
                        </motion.div>

                        <motion.div variants={fadeInUpVariant} className="space-y-8">
                            <div className="flex items-center gap-4 text-amber-600">
                                <span className="w-12 h-[1px] bg-amber-600"></span>
                                <span className="uppercase tracking-widest text-sm font-medium">Our Origin</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif text-teal-950 leading-tight">
                                Where Nature Meets Luxury
                            </h2>
                            <p className="text-neutral-600 text-lg leading-relaxed">
                                Bamboo Edge wasn&apos;t built; it was grown. Inspired by the rhythmic swaying of bamboo groves in Ella, we created a sanctuary that blends seamlessly into the mountains. Our goal was simple: to offer luxury that respects the earth.
                            </p>
                            <p className="text-neutral-600 text-lg leading-relaxed">
                                We envisioned a place where the boundaries between the indoors and outdoors blur, allowing you to reconnect with the raw beauty of Sri Lanka without compromising on comfort.
                            </p>
                            <div className="pt-4">
                                <Leaf className="w-10 h-10 text-teal-700 opacity-80" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Concept & Architecture - Sustainable Living */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-teal-950 text-white relative overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="bamboo" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M20 0v40M0 20h40" stroke="currentColor" strokeWidth="1" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#bamboo)" />
                    </svg>
                </div>

                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse"
                    >
                        <motion.div variants={fadeInUpVariant} className="order-2 lg:order-1 space-y-8">
                            <div className="flex items-center gap-4 text-amber-400">
                                <span className="w-12 h-[1px] bg-amber-400"></span>
                                <span className="uppercase tracking-widest text-sm font-medium">The Concept</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                                Sustainable Living
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our cabanas are crafted using sustainable bamboo and locally sourced timber, minimizing our carbon footprint while maximizing your comfort. Open-air designs invite the cool Ella breeze in, reducing the need for artificial cooling.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Every structure is designed to sit lightly on the land, preserving the existing flora and fauna. It&apos;s not just a stay; it&apos;s a commitment to a greener future.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUpVariant} className="order-1 lg:order-2 relative h-[500px] rounded-3xl overflow-hidden border border-white/10">
                            <Image
                                src="/abut/b3.png" // Using a gallery image
                                alt="Sustainable Architecture"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Culinary Journey - Farm to Table */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                        <motion.div variants={fadeInUpVariant} className="relative h-[600px] rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto w-full max-w-[500px]">
                            <Image
                                src="/abut/b4.png" // Using a food/gallery image
                                alt="Culinary Delights"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div variants={fadeInUpVariant} className="space-y-8 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-4 text-amber-600">
                                <span className="w-12 h-[1px] bg-amber-600"></span>
                                <span className="uppercase tracking-widest text-sm font-medium">Culinary Journey</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif text-teal-950 leading-tight">
                                A Taste of Ceylon
                            </h2>
                            <p className="text-neutral-600 text-lg leading-relaxed">
                                At Bamboo Edge Kitchen, we believe in the &apos;Farm-to-Table&apos; philosophy. Our spices come from local gardens, and our vegetables are harvested daily from surrounding farms. Experience authentic Sri Lankan flavors fused with modern culinary art.
                            </p>
                            <div className="flex justify-center lg:justify-start gap-8 pt-4">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 text-amber-600">
                                        <Utensils className="w-8 h-8" />
                                    </div>
                                    <p className="font-serif text-teal-950">Organic</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 text-amber-600">
                                        <Leaf className="w-8 h-8" />
                                    </div>
                                    <p className="font-serif text-teal-950">Fresh</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 4. The Experience - Hospitality */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-amber-50">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.div variants={fadeInUpVariant} className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-md text-amber-500 mb-4">
                            <Heart className="w-8 h-8 fill-current" />
                        </motion.div>
                        <motion.h2 variants={fadeInUpVariant} className="text-4xl md:text-5xl font-serif text-teal-950">
                            Heartfelt Hospitality
                        </motion.h2>
                        <motion.p variants={fadeInUpVariant} className="text-xl text-neutral-600 leading-relaxed">
                            &quot;We don&apos;t just host guests; we welcome family. Our team is dedicated to curating personalized experiences for you, from guided hikes to Little Adam&apos;s Peak to a private candlelit dinner under the stars.&quot;
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 5. Location */}
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#fffbeb] to-transparent z-10" />
                <LocationSection />
            </div>

            <FooterSection />
        </main>
    );
}
