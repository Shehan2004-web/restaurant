"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

// Event Categories
const categories = ["Upcoming", "Today", "This Weekend", "All Events"];

// Sample Event Data
const events = [
    {
        id: 1,
        title: "Sunset Jazz Night",
        date: "Today",
        fullDate: "Nov 28, 2025",
        time: "6:00 PM - 9:00 PM",
        location: "River Deck",
        description: "Enjoy smooth jazz rhythms as the sun sets over the river. Featuring live performance by The Blue Note Trio.",
        image: "/hero/hero3.jpg",
        category: "Today",
        price: "Free Entry"
    },
    {
        id: 2,
        title: "Traditional Cooking Masterclass",
        date: "Nov 30",
        fullDate: "Nov 30, 2025",
        time: "10:00 AM - 1:00 PM",
        location: "Bamboo Kitchen",
        description: "Learn the secrets of authentic Sri Lankan curry with our head chef. Includes lunch and a recipe booklet.",
        image: "/exp/e6.png",
        category: "This Weekend",
        price: "€45 / person"
    },
    {
        id: 3,
        title: "Full Moon Yoga Retreat",
        date: "Dec 05",
        fullDate: "Dec 05, 2025",
        time: "5:00 PM - 7:00 PM",
        location: "Yoga Pavilion",
        description: "Rejuvenate your mind and body with a guided yoga session under the full moon. Suitable for all levels.",
        image: "/exp/e7.png",
        category: "Upcoming",
        price: "€20 / person"
    },
    {
        id: 4,
        title: "Live Acoustic Session",
        date: "Dec 02",
        fullDate: "Dec 02, 2025",
        time: "7:00 PM - 10:00 PM",
        location: "Main Lounge",
        description: "Unwind with acoustic covers of classic hits. Happy hour on cocktails throughout the performance.",
        image: "/hero/hero1.jpg",
        category: "Upcoming",
        price: "Free Entry"
    },
    {
        id: 5,
        title: "Christmas Eve Gala Dinner",
        date: "Dec 24",
        fullDate: "Dec 24, 2025",
        time: "7:30 PM - Midnight",
        location: "Grand Dining Hall",
        description: "Celebrate Christmas with a 5-course gourmet dinner, live music, and festive decorations.",
        image: "/hero/top-view-delicious-pasta-table.jpg",
        category: "Upcoming",
        price: "€80 / person"
    }
];

export default function EventsList() {
    const [activeCategory, setActiveCategory] = useState("Upcoming");

    const filteredEvents = activeCategory === "All Events"
        ? events
        : activeCategory === "Upcoming"
            ? events.filter(e => e.category === "Upcoming" || e.category === "This Weekend")
            : events.filter(e => e.category === activeCategory);

    return (
        <section className="py-20 px-4 md:px-8 bg-stone-900 min-h-screen">
            <div className="max-w-6xl mx-auto">

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "text-stone-900"
                                    : "text-stone-400 hover:text-white"
                                }`}
                        >
                            {activeCategory === category && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-amber-400 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{category}</span>
                        </button>
                    ))}
                </div>

                {/* Events List */}
                <motion.div layout className="space-y-6">
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.map((event) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                                key={event.id}
                                className="group relative bg-stone-800 rounded-3xl overflow-hidden border border-stone-700 hover:border-amber-500/50 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Image Section */}
                                    <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 bg-amber-400 text-stone-900 font-bold px-3 py-1 rounded-lg text-sm shadow-lg">
                                            {event.date}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="md:w-2/3 p-8 flex flex-col justify-between">
                                        <div>
                                            <div className="flex flex-wrap items-center gap-4 text-stone-400 text-sm mb-3">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4 text-amber-500" />
                                                    <span>{event.fullDate}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4 text-amber-500" />
                                                    <span>{event.time}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4 text-amber-500" />
                                                    <span>{event.location}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 group-hover:text-amber-400 transition-colors">
                                                {event.title}
                                            </h3>

                                            <p className="text-stone-400 leading-relaxed mb-6">
                                                {event.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between pt-6 border-t border-stone-700">
                                            <span className="text-white font-semibold text-lg">
                                                {event.price}
                                            </span>

                                            <button className="flex items-center gap-2 text-amber-400 font-medium hover:text-amber-300 transition-colors group/btn">
                                                Book Now
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredEvents.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-stone-500 text-lg">No events found in this category.</p>
                    </div>
                )}

            </div>
        </section>
    );
}
