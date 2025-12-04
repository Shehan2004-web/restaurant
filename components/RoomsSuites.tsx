'use client';

import Image from 'next/image';
import { Wifi, Coffee, Tv, Users, ArrowRight, Wind, Mountain } from 'lucide-react';

const rooms = [
    {
        id: 1,
        title: "River Edge Cabana",
        description: "Wake up to the soothing sound of the river. Cozy cabana with a king-size bed and private balcony overlooking the water.",
        price: "€120 / night",
        image: "/rooms/r11.png",
        amenities: [
            { icon: Wifi, label: "Free Wifi" },
            { icon: Coffee, label: "Coffee Maker" },
            { icon: Users, label: "2 Guests" },
        ]
    },
    {
        id: 2,
        title: "Bamboo Family Suite",
        description: "Perfect for families. Spacious suite nestled in bamboo groves, featuring a living area and ample space for everyone.",
        price: "€200 / night",
        image: "/rooms/r3.png",
        amenities: [
            { icon: Wifi, label: "Free Wifi" },
            { icon: Tv, label: "Smart TV" },
            { icon: Users, label: "4 Guests" },
        ]
    },
    {
        id: 3,
        title: "Nature's Nest Chalet",
        description: "Experience luxury in our private chalet. Features a fireplace, kitchenette, and premium amenities surrounded by nature.",
        price: "€350 / night",
        image: "/rooms/r4.png",
        amenities: [
            { icon: Wifi, label: "Free Wifi" },
            { icon: Coffee, label: "Kitchenette" },
            { icon: Users, label: "6 Guests" },
        ]
    },
    {
        id: 4,
        title: "Sunset Haven",
        description: "A cozy retreat for couples. Includes a private jacuzzi, champagne on arrival, and breathtaking sunset views.",
        price: "€180 / night",
        image: "/rooms/r1.png",
        amenities: [
            { icon: Wifi, label: "Free Wifi" },
            { icon: Wind, label: "AC" },
            { icon: Users, label: "2 Guests" },
        ]
    },
    {
        id: 5,
        title: "Canopy Treehouse",
        description: "The ultimate luxury experience. Elevated living with 360-degree views of the canopy, private chef option, and spa access.",
        price: "€500 / night",
        image: "/rooms/r5.png",
        amenities: [
            { icon: Wifi, label: "Free Wifi" },
            { icon: Mountain, label: "Best View" },
            { icon: Users, label: "4 Guests" },
        ]
    }
];

const RoomsSuites = () => {
    return (
        <section id="accommodation" className="py-24 bg-[#fffbeb] overflow-hidden">
            <div className="max-w-[1920px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4 px-6">
                    <span className="text-teal-700 font-bold tracking-widest uppercase text-sm">Accommodation</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-teal-900">Rooms & Suites</h2>
                    <p className="text-teal-800/60 max-w-2xl mx-auto text-lg">
                        Designed for comfort, inspired by nature. Choose the perfect space for your stay.
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative w-full">
                    {/* Gradient Masks for smooth fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fffbeb] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fffbeb] to-transparent z-10 pointer-events-none" />

                    <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] w-max px-8">
                        {/* Duplicate items for infinite loop effect */}
                        {[...rooms, ...rooms].map((room, index) => (
                            <div
                                key={`${room.id}-${index}`}
                                className="group w-[400px] flex-shrink-0 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100 flex flex-col hover:scale-105 transform"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={room.image}
                                        alt={room.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-teal-900 font-bold text-sm shadow-sm">
                                        {room.price}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-serif text-teal-900 mb-3 group-hover:text-teal-700 transition-colors">
                                        {room.title}
                                    </h3>
                                    <p className="text-teal-800/70 mb-6 flex-grow text-sm leading-relaxed">
                                        {room.description}
                                    </p>

                                    {/* Amenities */}
                                    <div className="flex gap-4 mb-8 border-t border-amber-100 pt-6">
                                        {room.amenities.map((amenity, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-teal-800/60 text-xs font-medium" title={amenity.label}>
                                                <amenity.icon className="w-4 h-4" />
                                                <span>{amenity.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Button */}
                                    <button className="w-full py-3 rounded-xl border border-teal-700 text-teal-700 font-semibold hover:bg-teal-700 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                        View Details
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inline Styles for Marquee Animation */}
                <style jsx>{`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        animation: scroll 40s linear infinite;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default RoomsSuites;
