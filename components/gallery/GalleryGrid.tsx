"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

// Define categories
const categories = ["All", "Rooms", "Dining", "Experiences", "Exterior"];

// Sample gallery data - mapping to existing images
const galleryImages = [
    { id: 1, src: "/rooms/r11.png", category: "Rooms", title: "River Edge Cabana" },
    { id: 2, src: "/rooms/r3.png", category: "Rooms", title: "Bamboo Family Suite" },
    { id: 3, src: "/rooms/r4.png", category: "Rooms", title: "Nature's Nest Chalet" },
    { id: 4, src: "/rooms/r1.png", category: "Rooms", title: "Sunset Haven" },
    { id: 5, src: "/rooms/r5.png", category: "Rooms", title: "Canopy Treehouse" },
    { id: 6, src: "/exp/e1.png", category: "Experiences", title: "Little Adam's Peak" },
    { id: 7, src: "/exp/e2.png", category: "Experiences", title: "Nine Arch Bridge" },
    { id: 8, src: "/exp/e6.png", category: "Experiences", title: "Cooking Class" },
    { id: 9, src: "/hero/top-view-delicious-pasta-table.jpg", category: "Dining", title: "Gourmet Dining" },
    { id: 10, src: "/hero/hero3.jpg", category: "Exterior", title: "Resort Grounds" },
    { id: 11, src: "/hero/hero4.jpg", category: "Exterior", title: "Scenic Views" },
    { id: 12, src: "/cabin/c1.jpg", category: "Exterior", title: "Cabin Exterior" },
    { id: 13, src: "/cabin/c3.jpg", category: "Rooms", title: "Cozy Interior" },
    { id: 14, src: "/exp/e7.png", category: "Experiences", title: "Ayurveda Spa" },
];

export default function GalleryGrid() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory);

    return (
        <section className="py-16 px-4 md:px-8 bg-stone-900 min-h-screen">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                            ? "text-stone-900 bg-amber-400"
                            : "text-stone-400 hover:text-white border border-stone-700 hover:border-amber-500/50"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Image Grid */}
            <motion.div
                layout
                className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto"
            >
                <AnimatePresence>
                    {filteredImages.map((image) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            key={image.id}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow border border-stone-800 hover:border-amber-500/50"
                            onClick={() => setSelectedImage(image)}
                        >
                            <Image
                                src={image.src}
                                alt={image.title}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <ZoomIn className="text-white w-8 h-8" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white font-serif text-lg">{image.title}</p>
                                <p className="text-stone-300 text-xs uppercase tracking-wider">{image.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-10 h-10" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                                <h3 className="text-white text-2xl font-serif text-shadow-lg">{selectedImage.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
