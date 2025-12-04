'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';

interface NavbarProps {
    alwaysSolid?: boolean;
}

const Navbar = ({ alwaysSolid = false }: NavbarProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine visibility based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Scrolling down
            } else {
                setIsVisible(true); // Scrolling up
            }

            // Determine background style
            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-24 transition-all duration-300 flex justify-between items-center ${isSidebarOpen ? 'hidden' : 'flex'
                    } ${isScrolled || alwaysSolid
                        ? 'bg-teal-950/95 backdrop-blur-md shadow-lg py-2'
                        : 'bg-transparent py-6'
                    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
            >
                {/* Left Side: Logo */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/logo.png"
                                alt="Restaurant Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className={`font-serif text-xl font-bold tracking-wide transition-colors duration-300 ${isScrolled || alwaysSolid ? 'text-white' : 'text-white'}`}>
                            Bamboo Edge
                        </span>
                    </Link>
                </div>

                {/* Right Side: Navigation Links, Button & Menu */}
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-8 text-amber-100 font-medium">
                        <Link href="/#accommodation" className="hover:text-white transition-colors">
                            Accommodation
                        </Link>
                        <Link href="/#experiences" className="hover:text-white transition-colors">
                            Experiences
                        </Link>
                        <Link href="/gallery" className="hover:text-white transition-colors">
                            Gallery
                        </Link>
                        <Link href="/events" className="hover:text-white transition-colors">
                            Events
                        </Link>
                        <Link href="/menu" className="hover:text-white transition-colors">
                            Our Food Menu
                        </Link>
                    </div>

                    <Link
                        href="/book"
                        className="hidden md:block bg-amber-500 text-teal-950 px-6 py-2.5 rounded-full font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                    >
                        Book Now
                    </Link>

                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-white hover:text-amber-200 transition-colors"
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </nav>

            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </>
    );
};

export default Navbar;
