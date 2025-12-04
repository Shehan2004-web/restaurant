'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const experiences = [
    {
        id: 1,
        title: "2 km",
        subtitle: "from Bamboo Edge",
        image: "/exp/e1.png",
        className: "lg:col-span-1 lg:row-span-2 h-96 lg:h-auto",
        location: "Little Adam's Peak"
    },
    {
        id: 2,
        title: "3 km",
        subtitle: "from Bamboo Edge",
        image: "/exp/e2.png",
        className: "lg:col-span-1 lg:row-span-1 h-64",
        location: "Nine Arch Bridge"
    },
    {
        id: 3,
        title: "5 km",
        subtitle: "from Bamboo Edge",
        image: "/exp/e3.png",
        className: "lg:col-span-1 lg:row-span-2 h-96 lg:h-auto",
        location: "Ravana Falls"
    },
    {
        id: 4,
        title: "1 km",
        subtitle: "from Bamboo Edge",
        image: "/exp/e4.png",
        className: "lg:col-span-1 lg:row-span-1 h-64",
        location: "Tea Plantations"
    },
    {
        id: 5,
        title: "4 km",
        subtitle: "from Bamboo Edge",
        image: "/exp/e5.png",
        className: "lg:col-span-1 lg:row-span-2 h-96 lg:h-auto",
        location: "Ella Rock"
    },
    {
        id: 6,
        title: "On-site",
        subtitle: "at Bamboo Edge",
        image: "/exp/e6.png",
        className: "lg:col-span-1 lg:row-span-2 h-96 lg:h-auto",
        location: "Cooking Class"
    },
    {
        id: 7,
        title: "On-site",
        subtitle: "at Bamboo Edge",
        image: "/exp/e7.png",
        className: "lg:col-span-1 lg:row-span-1 h-64",
        location: "Ayurveda Spa"
    },
    {
        id: 8,
        title: "0.5 km",
        subtitle: "from Bamboo Edge",
        image: "/exp/e8.png",
        className: "lg:col-span-1 lg:row-span-1 h-64",
        location: "Ella Train Station"
    }
];

const ExperiencesSection = () => {
    return (
        <section id="experiences" className="py-24 bg-[#fdfbf7] px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16 space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-serif text-gray-900">
                        Experiences in the Heart of Ella
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Bamboo Edge is the ideal starting point for discovering the beauty of Ella. Whether you choose to explore on foot, by tuk-tuk, or rent one of our bikes, adventure awaits.
                    </p>
                    <button className="bg-[#3d3935] text-white px-8 py-3 rounded-md font-medium hover:bg-black transition-colors">
                        Discover Surroundings
                    </button>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(100px,auto)]">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-6">
                        <ExperienceCard item={experiences[0]} />
                        <ExperienceCard item={experiences[1]} />
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6 pt-0 lg:pt-12">
                        <ExperienceCard item={experiences[2]} />
                        <ExperienceCard item={experiences[7]} />
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-6">
                        <ExperienceCard item={experiences[3]} />
                        <ExperienceCard item={experiences[4]} />
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-6 pt-0 lg:pt-24">
                        <ExperienceCard item={experiences[5]} />
                        <ExperienceCard item={experiences[6]} />
                    </div>

                </div>
            </div>
        </section>
    );
};

const ExperienceCard = ({ item }: { item: any }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`relative rounded-3xl overflow-hidden group cursor-pointer ${item.className.includes('h-96') ? 'h-96 md:h-[28rem]' : 'h-64'}`}
    >
        <Image
            src={item.image}
            alt={item.location}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

        <div className="absolute top-6 left-6 flex items-center gap-2 text-white">
            <MapPin size={18} />
            <span className="font-medium text-sm">{item.location}</span>
        </div>

        <div className="absolute bottom-6 left-6 text-white">
            <div className="text-5xl md:text-6xl font-serif leading-none mb-2">
                {item.title}
            </div>
            <div className="text-sm md:text-base font-medium opacity-90">
                {item.subtitle}
            </div>
        </div>
    </motion.div>
);

export default ExperiencesSection;
