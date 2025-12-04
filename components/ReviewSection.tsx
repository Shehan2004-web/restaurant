"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "Sarah Jenkins",
        location: "London, UK",
        rating: 5,
        text: "An absolute gem in Sri Lanka! The food was authentic and the atmosphere was breathtaking. The Bamboo Edge experience is unlike any other.",
        date: "2 days ago",
    },
    {
        id: 2,
        name: "David Chen",
        location: "Singapore",
        rating: 5,
        text: "Stunning views and incredible hospitality. The rooms were clean and modern, but the real highlight was the traditional curry. Highly recommended!",
        date: "1 week ago",
    },
    {
        id: 3,
        name: "Emma Thompson",
        location: "Sydney, Australia",
        rating: 5,
        text: "We stayed for 3 nights and didn't want to leave. The staff went above and beyond to make our stay special. A perfect blend of luxury and nature.",
        date: "2 weeks ago",
    },
    {
        id: 4,
        name: "Michael Ross",
        location: "Berlin, Germany",
        rating: 4,
        text: "Great location for exploring the area. The restaurant serves some of the best local dishes I've had. Will definitely come back.",
        date: "3 weeks ago",
    },
    {
        id: 5,
        name: "Priya Patel",
        location: "Mumbai, India",
        rating: 5,
        text: "A magical place. The river view from our room was mesmerizing. The food was spicy and delicious, just how we like it!",
        date: "1 month ago",
    },
];

export default function ReviewSection() {
    return (
        <section className="py-24 bg-[#fffbeb] overflow-hidden relative">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
                    Guest Stories
                </h2>
                <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                    Hear from travelers who have experienced the magic of Bamboo Edge.
                </p>
            </div>

            {/* Gradient Masks for smooth fade effect */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#fffbeb] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#fffbeb] to-transparent z-10 pointer-events-none" />

            <div className="flex">
                <motion.div
                    className="flex gap-6 px-6"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 50,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {/* Double the array to create seamless loop */}
                    {[...reviews, ...reviews].map((review, index) => (
                        <div
                            key={`${review.id}-${index}`}
                            className="w-[350px] md:w-[450px] flex-shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative group hover:shadow-md transition-shadow duration-300"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-stone-200 group-hover:text-amber-200 transition-colors" />

                            <div className="flex items-center gap-1 mb-4 text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < review.rating ? "fill-current" : "text-stone-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            <p className="text-stone-700 text-lg mb-6 leading-relaxed font-light italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center justify-between mt-auto border-t border-stone-100 pt-4">
                                <div>
                                    <h4 className="font-semibold text-stone-800">
                                        {review.name}
                                    </h4>
                                    <p className="text-xs text-stone-500 uppercase tracking-wider">
                                        {review.location}
                                    </p>
                                </div>
                                <span className="text-xs text-stone-400 font-medium">
                                    {review.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
