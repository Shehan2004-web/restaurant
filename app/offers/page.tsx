'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Calendar, Users, ArrowRight, Star, Clock, Check } from 'lucide-react';

export default function OffersPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const offers = [
        {
            id: 1,
            title: "Early Bird Special",
            description: "Plan ahead and save! Book your stay at least 30 days in advance and enjoy exclusive discounts on our premium cabanas.",
            discount: "20% OFF",
            image: "/offer/f3.png",
            features: ["Book 30 days in advance", "Welcome drink on arrival", "Flexible cancellation"]
        },
        {
            id: 2,
            title: "Long Stay Retreat",
            description: "Immerse yourself in nature for longer. Stay 3 nights or more and receive a special rate along with complimentary breakfast.",
            discount: "15% OFF",
            image: "/offer/f4.png",
            features: ["Min. 3 nights stay", "Daily breakfast included", "Late check-out"]
        },
        {
            id: 3,
            title: "Adventure Package",
            description: "For the thrill-seekers! Includes a guided hike to Ella Rock and a zip-line experience at Flying Ravana.",
            discount: "Package Deal",
            image: "/offer/f5.png",
            features: ["Guided Hike", "Zip-line tickets", "Packed lunch"]
        }
    ];

    return (
        <main className="min-h-screen bg-[#fffbeb]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/950.jpg"
                        alt="Offers Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-teal-950/60" />
                </div>

                <div className="relative z-10 text-center px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-amber-400 font-medium tracking-[0.2em] uppercase mb-4"
                    >
                        Special Deals
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif text-white mb-6"
                    >
                        Exclusive Offers
                    </motion.h1>
                </div>
            </section>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24">

                {/* Featured Offer */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-24"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white grid lg:grid-cols-2">
                        <div className="relative h-[400px] lg:h-auto">
                            <Image
                                src="/offer/f2.png" // Placeholder for romantic image
                                alt="Honeymoon Package"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-6 left-6 bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                                Most Popular
                            </div>
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                            <div className="flex items-center gap-2 text-amber-600 font-medium">
                                <Star className="w-5 h-5 fill-current" />
                                <span>Honeymoon Bliss</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif text-teal-950">
                                Romantic Getaway Package
                            </h2>
                            <p className="text-neutral-600 leading-relaxed">
                                Celebrate love in the heart of nature. Our honeymoon package includes a private candlelit dinner, a couple's spa treatment, and a flower-decorated cabana to make your stay unforgettable.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-neutral-700">
                                    <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    Candlelit Dinner under the stars
                                </li>
                                <li className="flex items-center gap-3 text-neutral-700">
                                    <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    Complimentary Bottle of Wine
                                </li>
                                <li className="flex items-center gap-3 text-neutral-700">
                                    <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    Late Check-out until 2:00 PM
                                </li>
                            </ul>
                            <div className="pt-4">
                                <button className="bg-teal-950 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-500 transition-colors duration-300 w-full md:w-auto">
                                    Book This Package
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Offers Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {offers.map((offer) => (
                        <motion.div
                            key={offer.id}
                            variants={fadeInUp}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-100 group hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={offer.image}
                                    alt={offer.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-teal-900 px-3 py-1 rounded-lg font-bold text-sm">
                                    {offer.discount}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-serif text-teal-950 mb-3">{offer.title}</h3>
                                <p className="text-neutral-600 mb-6 text-sm leading-relaxed flex-grow">
                                    {offer.description}
                                </p>
                                <div className="space-y-4">
                                    <div className="space-y-2 border-t border-neutral-100 pt-4">
                                        {offer.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-neutral-500">
                                                <Check className="w-4 h-4 text-amber-500" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full py-3 border border-teal-950 text-teal-950 rounded-xl font-semibold hover:bg-teal-950 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                                        View Details
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            <FooterSection />
        </main>
    );
}
