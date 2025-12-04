'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const packages = [
    {
        id: 1,
        title: "HEATED JACUZZI",
        image: "/pakeges/download.png",
    },
    {
        id: 2,
        title: "INFINITY POOL",
        image: "/pakeges/download (2).png",
    },
    {
        id: 3,
        title: "DAY BEDS",
        image: "/pakeges/download (1).png",
    },
    {
        id: 4,
        title: "BARS & DINING",
        image: "/pakeges/download (3).png",
    },
];

const PackagesSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                {/* Left Side: Image Grid */}
                <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-4">
                    {/* Column 1 (Left - Moved Up) */}
                    <div className="flex-1 flex flex-col gap-4 -mt-8 md:-mt-12">
                        {packages.filter((_, i) => i % 2 === 0).map((pkg, index) => (
                            <motion.div
                                key={pkg.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg
                                    ${hoveredIndex !== null && hoveredIndex !== (index * 2) ? 'opacity-40 grayscale-[30%] scale-95' : 'opacity-100 scale-100'}
                                    transition-all duration-500 ease-out
                                `}
                                onMouseEnter={() => setHoveredIndex(index * 2)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                                    <h3 className="text-white font-bold text-2xl md:text-3xl tracking-widest uppercase mb-2 drop-shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                                        {pkg.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-teal-500 rounded-full mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                    <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 border border-white/80 text-white px-8 py-2 text-sm font-bold tracking-wider hover:bg-white hover:text-black uppercase backdrop-blur-sm rounded-sm">
                                        Find Out More
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Column 2 (Right - Moved Down) */}
                    <div className="flex-1 flex flex-col gap-4 mt-8 md:mt-12">
                        {packages.filter((_, i) => i % 2 !== 0).map((pkg, index) => (
                            <motion.div
                                key={pkg.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: (index * 2 + 1) * 0.1 }}
                                className={`relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg
                                    ${hoveredIndex !== null && hoveredIndex !== (index * 2 + 1) ? 'opacity-40 grayscale-[30%] scale-95' : 'opacity-100 scale-100'}
                                    transition-all duration-500 ease-out
                                `}
                                onMouseEnter={() => setHoveredIndex(index * 2 + 1)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                                    <h3 className="text-white font-bold text-2xl md:text-3xl tracking-widest uppercase mb-2 drop-shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                                        {pkg.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-teal-500 rounded-full mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                    <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 border border-white/80 text-white px-8 py-2 text-sm font-bold tracking-wider hover:bg-white hover:text-black uppercase backdrop-blur-sm rounded-sm">
                                        Find Out More
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-2/5 text-center lg:text-right space-y-8"
                >
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-none">
                            Bamboo Edge
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-none text-teal-900">
                            Pool Club
                        </h2>
                        <p className="text-teal-600 font-bold tracking-[0.2em] text-sm uppercase pt-2">
                            Ella, Sri Lanka
                        </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg font-light">
                        Welcome to the exclusive Bamboo Edge Pool Club. Overlooking the serene river and lush bamboo groves, this is your ultimate sanctuary for relaxation and fun. Experience the perfect blend of excitement and tranquility.
                    </p>

                    <p className="text-gray-600 leading-relaxed font-light">
                        Designed with sustainable bamboo architecture, our pool club offers a seamless blend of luxury and nature. Enjoy our infinity pool, heated jacuzzi, and exquisite dining options with breathtaking views.
                    </p>

                    <div className="pt-8 flex flex-col items-center lg:items-end gap-1">
                        <div className="text-5xl font-black text-gray-800">
                            2.5 KM
                        </div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">
                            From Ella City
                        </div>
                        <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-10 rounded-full uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            Get Directions
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default PackagesSection;
