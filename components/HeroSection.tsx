'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';

const images = [
    '/hero/hero11.jpg',
    '/hero/hero22.jpg',
    '/hero/hero33.jpg',
    '/hero/hero44.jpg',
    '/hero/hero5.jpg',
    '/hero/hero6.jpg',
    '/hero/hero7.jpg',

];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Calculate indices for the right-side image stack
    const getNextIndex = (offset: number) => (currentIndex + offset) % images.length;

    return (
        <div className="relative w-full h-screen overflow-hidden bg-teal-900 flex flex-col">
            <Navbar />

            {/* Background Image with Transition */}
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Hero Background ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Overlay - Teal/Black mix */}
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="absolute inset-0 bg-teal-900/20 z-10 mix-blend-multiply" />

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-44 flex-grow flex items-center pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">

                    {/* Left Column: Text & Navigation */}
                    <div className="text-white space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="space-y-4 animate-fade-in-up">
                            <div className="inline-block bg-amber-200 text-amber-900 px-4 py-1 rounded-full font-semibold text-sm mb-2">
                                Authentic Sri Lankan Hospitality
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-amber-50">
                                Experience the Essence <br />
                                of Bamboo Edge
                            </h1>
                            <p className="text-lg md:text-xl text-amber-100 max-w-lg">
                                Nestled in the heart of nature, Bamboo Edge offers a sanctuary of traditional flavors and serene comfort. Discover the true spirit of Sri Lanka.
                            </p>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full bg-teal-600/30 hover:bg-teal-600/50 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-teal-400/30"
                            >
                                <ArrowLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full bg-teal-600/30 hover:bg-teal-600/50 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-teal-400/30"
                            >
                                <ArrowRight className="w-6 h-6 text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Vertical Image Stack */}
                    <div className="hidden md:flex flex-col gap-4 md:gap-6 items-end justify-center h-full py-10 pt-12">
                        {/* Top Image */}
                        <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-2xl overflow-hidden border-2 border-amber-200/50 shadow-lg transform transition-all duration-700 ease-in-out">
                            <Image
                                src={images[getNextIndex(1)]}
                                alt="Next Slide 1"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Middle Image (Larger/Prominent) */}
                        <div className="relative w-56 h-40 md:w-80 md:h-52 rounded-2xl overflow-hidden border-2 border-amber-200/80 shadow-xl transform transition-all duration-700 ease-in-out translate-x-[-20px] scale-105">
                            <Image
                                src={images[getNextIndex(2)]}
                                alt="Next Slide 2"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Bottom Image */}
                        <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-2xl overflow-hidden border-2 border-amber-200/50 shadow-lg transform transition-all duration-700 ease-in-out">
                            <Image
                                src={images[getNextIndex(3)]}
                                alt="Next Slide 3"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HeroSection;
