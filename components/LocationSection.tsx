'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const locations = [
    {
        id: 'resort',
        title: "Bamboo Edge Resort",
        subtitle: "Ella, Sri Lanka",
        description: "Nestled in the heart of Ella's lush bamboo groves, our resort offers a sanctuary of peace and luxury. Experience the perfect blend of nature and comfort at Bamboo Edge.",
        image: "/hero/download.png",
        top: "40%",
        left: "55%"
    },
    {
        id: 'nine-arch',
        title: "Nine Arch Bridge",
        subtitle: "Demodara, Ella",
        description: "The famous Nine Arch Bridge is one of Sri Lanka's most iconic bridges. It is a magnificent stone brick viaduct set amidst lush green tea fields.",
        image: "/hero/hero3.jpg", // Placeholder, ideally use specific image
        top: "60%",
        left: "75%"
    },
    {
        id: 'ella-rock',
        title: "Ella Rock",
        subtitle: "Hiking Trail",
        description: "A challenging yet rewarding hike offering panoramic views of the hill country. The summit provides one of the best vantage points in Ella.",
        image: "/hero/hero4.jpg", // Placeholder
        top: "50%",
        left: "20%"
    },
    {
        id: 'ravana-falls',
        title: "Ravana Falls",
        subtitle: "Waterfall",
        description: "One of the widest waterfalls in Sri Lanka, this cascading beauty is a popular stop for visitors. Legend says King Ravana hid Princess Sita in the caves behind this fall.",
        image: "/hero/hero1.jpg", // Placeholder
        top: "70%",
        left: "45%"
    },
    {
        id: 'tea-factory',
        title: "Uva Halpewatte Tea Factory",
        subtitle: "Tea Factory",
        description: "Discover the art of tea making at the largest tea factory in the Uva region. Enjoy a guided tour and taste some of the finest Ceylon tea.",
        image: "/hero/hero3.jpg", // Placeholder
        top: "15%",
        left: "60%"
    },
    {
        id: 'little-adams-peak',
        title: "Little Adam's Peak",
        subtitle: "Hiking Trail",
        description: "An easy hike through lush tea plantations leading to a stunning viewpoint. Perfect for sunrise or sunset, offering breathtaking scenery without a strenuous climb.",
        image: "/hero/hero4.jpg", // Placeholder
        top: "45%",
        left: "70%"
    },
    {
        id: 'flying-ravana',
        title: "Flying Ravana Adventure Park",
        subtitle: "Adventure Park",
        description: "Sri Lanka's first mega zip-line and adventure park. Experience the thrill of flying over tea estates with the iconic Nine Arch Bridge in the distance.",
        image: "/hero/download.png", // Placeholder
        top: "55%",
        left: "65%"
    }
];

const LocationSection = () => {
    const [activeLocation, setActiveLocation] = useState(locations[0]);

    return (
        <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/mapbg.png"
                    alt="Location Background"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#fffbeb] via-transparent to-[#fffbeb]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-teal-700 font-bold tracking-widest uppercase text-sm">Discover Us</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-teal-900">Our Location</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left Side: Content */}
                    <div className="relative group min-h-[400px]">
                        <div className="absolute inset-0 bg-teal-900/10 transform rotate-3 rounded-3xl transition-transform group-hover:rotate-6 duration-500" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeLocation.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="relative bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-amber-100 overflow-hidden h-full"
                            >
                                {/* Dark Overlay Image Effect */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={activeLocation.image}
                                        alt={activeLocation.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-teal-900/80" />
                                </div>

                                <div className="relative z-10 text-white space-y-6">
                                    <div>
                                        <h3 className="text-3xl font-serif mb-2">{activeLocation.title}</h3>
                                        <p className="text-amber-200 font-medium">{activeLocation.subtitle}</p>
                                    </div>

                                    <p className="text-white/80 leading-relaxed">
                                        {activeLocation.description}
                                    </p>

                                    <Link
                                        href="/about"
                                        className={`inline-flex items-center gap-2 px-8 py-3 bg-amber-400 text-teal-900 rounded-xl font-bold hover:bg-amber-300 transition-all duration-300 ${activeLocation.id === 'resort' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                                    >
                                        About Us
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side: Map */}
                    <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden">
                        <Image
                            src="/map.png"
                            alt="Location Map"
                            fill
                            className="object-cover"
                        />

                        {/* Location Markers */}
                        {locations.map((location) => (
                            <div
                                key={location.id}
                                className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-300 ${activeLocation.id === location.id ? 'z-50' : 'z-10 hover:z-40'}`}
                                style={{ top: location.top, left: location.left }}
                                onClick={() => setActiveLocation(location)}
                            >
                                <div className="relative">
                                    {/* Tooltip */}
                                    <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-teal-900 text-white text-xs font-bold py-1 px-3 rounded-lg whitespace-nowrap transition-all duration-300 shadow-lg pointer-events-none ${activeLocation.id === location.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'}`}>
                                        {location.title}
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-teal-900"></div>
                                    </div>

                                    {/* Marker Pin */}
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${activeLocation.id === location.id ? 'bg-amber-500 scale-125' : 'bg-white hover:bg-amber-100'}`}>
                                        <MapPin className={`w-5 h-5 ${activeLocation.id === location.id ? 'text-white' : 'text-teal-900'}`} fill="currentColor" />
                                    </div>

                                    {/* Pulse Effect for Active */}
                                    {activeLocation.id === location.id && (
                                        <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-75 -z-10" />
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Custom Marker Label for Active Location */}
                        <div className="absolute bottom-8 right-8 bg-teal-900/90 backdrop-blur-sm text-white p-3 rounded-xl shadow-xl flex items-center gap-3 border border-white/20 transition-all duration-500">
                            <div className="bg-amber-500 p-2 rounded-lg">
                                <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <div className="font-serif text-lg leading-none mb-1">{activeLocation.title}</div>
                                <div className="text-xs text-amber-200 uppercase tracking-wider font-bold">Selected Location</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
