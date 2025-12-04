"use client";

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import dynamic from 'next/dynamic';

const MenuBook = dynamic(() => import('@/components/menu/MenuBook'), { ssr: false });

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-stone-950 relative overflow-hidden">
            <Navbar />

            {/* Creative Background */}
            <div className="absolute inset-0 z-0">
                {/* Dark textured background */}
                <div className="absolute inset-0 bg-[url('/hero/hero33.jpg')] bg-cover bg-center opacity-20 blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/90 to-[#171413]" />

                {/* Ambient Light Effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 pt-32 pb-20 px-4 min-h-screen flex flex-col items-center">
                <div className="text-center mb-64 md:mb-12">
                    <span className="text-amber-500 font-medium tracking-[0.2em] text-sm uppercase mb-2 block">
                        Culinary Excellence
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
                        Our Menu
                    </h1>
                    <p className="text-stone-400 max-w-lg mx-auto font-light">
                        Explore our carefully curated selection of dishes, blending traditional Sri Lankan flavors with modern culinary artistry.
                    </p>
                </div>

                <MenuBook />
            </div>

            <FooterSection waveColor="#171413" />
        </main>
    );
}
