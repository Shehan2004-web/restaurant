'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cabins } from '@/data/cabins';
import { ArrowRight, Star } from 'lucide-react';

const HorizontalScrollSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-amber-50">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 px-12">
                    {cabins.map((cabin) => (
                        <div key={cabin.id} className="relative h-[90vh] w-[90vw] flex-shrink-0 flex flex-col lg:flex-row items-center gap-6 lg:gap-12 bg-white rounded-3xl lg:rounded-[3rem] p-6 lg:p-12 shadow-2xl border border-amber-100 overflow-y-auto lg:overflow-hidden group">
                            {/* Text Content */}
                            <div className="w-full lg:w-1/3 space-y-4 lg:space-y-6 flex flex-col justify-center order-2 lg:order-1">
                                <div className="flex items-center gap-3 mb-2 lg:mb-4">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(cabin.rating.stars) ? 'text-amber-400 fill-amber-400' : 'text-stone-300'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-stone-500 text-sm font-medium">({cabin.rating.count} Reviews)</span>
                                </div>

                                <div className="space-y-2">
                                    <span className="text-teal-600 font-bold tracking-widest uppercase text-xs lg:text-sm">
                                        {cabin.tagline}
                                    </span>
                                    <h2 className="text-3xl lg:text-5xl font-serif text-amber-900 leading-tight">
                                        {cabin.name}
                                    </h2>
                                </div>

                                <p className="text-sm lg:text-lg text-stone-600 leading-relaxed line-clamp-4">
                                    {cabin.description.vibe}
                                </p>

                                <div className="flex items-center gap-4 pt-4 border-t border-amber-100">
                                    <div>
                                        <span className="block text-xs text-stone-500 uppercase tracking-wider">Starting from</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-teal-800">{cabin.price.currency} {cabin.price.amount}</span>
                                            <span className="text-sm text-stone-500">/{cabin.price.period}</span>
                                        </div>
                                    </div>
                                    {cabin.price.discount && (
                                        <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold">
                                            {cabin.price.discount.label}
                                        </div>
                                    )}
                                </div>

                                <Link
                                    href={`/cabin/${cabin.id}`}
                                    className="w-fit inline-flex items-center gap-2 bg-teal-900 text-white px-8 py-4 rounded-full text-sm lg:text-base font-medium hover:bg-teal-800 transition-all shadow-lg shadow-teal-900/20 group-hover:pl-10 duration-300"
                                >
                                    View Details
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Image Grid - Modern Bento Style */}
                            <div className="w-full lg:w-2/3 h-64 lg:h-full grid grid-cols-2 grid-rows-2 gap-3 lg:gap-6 order-1 lg:order-2">
                                {/* Main Large Image (Left) */}
                                <div className="row-span-2 relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-inner group-hover:shadow-2xl transition-all duration-500">
                                    <Image src={cabin.images.main} alt={cabin.name} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-teal-900 shadow-sm">
                                        {cabin.availability.status}
                                    </div>
                                </div>
                                {/* Top Right Image */}
                                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-inner">
                                    <Image src={cabin.images.bathroom} alt="Bathroom" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                                {/* Bottom Right Image */}
                                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-inner">
                                    <Image src={cabin.images.balcony} alt="View" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScrollSection;
