'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Facebook, Instagram, Youtube, Music } from 'lucide-react';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: 'Accommodation', href: '#accommodation', image: '/hero/hero1.jpg' },
    { label: 'Dining', href: '#', image: '/hero/top-view-delicious-pasta-table.jpg' },
    { label: 'Experiences', href: '#experiences', image: '/hero/hero3.jpg' },
    { label: 'Gallery', href: '/gallery', image: '/hero/hero4.jpg' },
    { label: 'Contact Us', href: '#', image: '/hero/hero1.jpg' },
    { label: 'Events', href: '/events', image: '/hero/hero3.jpg' },
    { label: 'Our Food Menu', href: '/menu', image: '/hero/top-view-delicious-pasta-table.jpg' },
    { label: 'Offers', href: '#', image: '/hero/top-view-delicious-pasta-table.jpg' },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const [activeImage, setActiveImage] = useState(menuItems[0].image);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                    />

                    {/* Sidebar Panel */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 left-0 z-50 flex h-screen w-[75vw] overflow-hidden shadow-2xl"
                    >
                        {/* Left Side - Image */}
                        <div className="hidden md:block w-1/2 h-full relative bg-teal-900">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeImage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={activeImage}
                                        alt="Menu Preview"
                                        fill
                                        className="object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Overlay Text/Decorations if needed */}
                            <div className="absolute bottom-12 left-12 text-white">
                                <h3 className="text-3xl font-serif italic mb-2">Your next great adventure</h3>
                                <h3 className="text-3xl font-serif italic">starts right here</h3>

                                <button className="mt-8 text-xs font-bold tracking-widest uppercase border-b border-white/50 pb-1 hover:text-amber-200 hover:border-amber-200 transition-colors">
                                    Explore All
                                </button>

                                <div className="flex gap-4 mt-12">
                                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                                        <Facebook className="w-4 h-4" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                                        <Instagram className="w-4 h-4" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                                        <Youtube className="w-4 h-4" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                                        <Music className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Menu */}
                        <div className="w-full md:w-1/2 h-full bg-[#aab3a8] relative flex flex-col p-6 md:p-24">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 p-2 hover:rotate-90 transition-transform duration-300"
                            >
                                <X className="w-8 h-8 text-teal-900" />
                            </button>

                            {/* Logo */}
                            <div className="mb-12">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={100}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>

                            {/* Menu Links */}
                            <div className="flex-grow flex flex-col justify-center space-y-4">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-2xl md:text-5xl font-serif text-teal-900/80 hover:text-teal-900 hover:pl-4 transition-all duration-300"
                                        onMouseEnter={() => setActiveImage(item.image)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            {/* Footer Links */}
                            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-teal-900/10 text-teal-900/60 text-sm font-medium">
                                <div className="space-y-3">
                                    <Link href="#" className="block hover:text-teal-900 transition-colors">About Us</Link>
                                    <Link href="#" className="block hover:text-teal-900 transition-colors">Location</Link>
                                    <Link href="#" className="block hover:text-teal-900 transition-colors">FAQ</Link>
                                </div>
                                <div className="space-y-3">
                                    <Link href="#" className="block hover:text-teal-900 transition-colors">Facilities</Link>
                                    <Link href="#" className="block hover:text-teal-900 transition-colors">Our Ventures</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
