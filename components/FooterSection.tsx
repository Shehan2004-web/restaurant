'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

interface FooterSectionProps {
    waveColor?: string;
}

const FooterSection = ({ waveColor = "#fffbeb" }: FooterSectionProps) => {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <footer className="relative bg-teal-950 text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/footer.png"
                    alt="Footer Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-teal-950/80" />
            </div>

            {/* Wave Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" style={{ fill: waveColor }}></path>
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
                >
                    {/* Brand Column */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative w-20 h-20">
                                <Image
                                    src="/logo.png"
                                    alt="Bamboo Edge Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-serif text-amber-400">Bamboo Edge</h2>
                                <p className="text-sm tracking-widest uppercase text-amber-200/80">Resort & Lodge</p>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Experience the essence of luxury amidst the scenic beauty of Ella. A sanctuary for the soul.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 group"
                                >
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-xl font-serif text-amber-200">Explore</h3>
                        <ul className="space-y-4">
                            {[
                                { label: 'About Us', href: '/about' },
                                { label: 'Accommodation', href: '/#accommodation' },
                                { label: 'Experiences', href: '/#experiences' },
                                { label: 'Events', href: '/events' },
                                { label: 'Our Food Menu', href: '/menu' },
                                { label: 'Offers', href: '/offers' },
                                { label: 'Gallery', href: '/gallery' },
                                { label: 'Book Now', href: '/book' },
                                { label: 'Contact', href: '/contact' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-xl font-serif text-amber-200">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-amber-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Address</p>
                                    <p className="text-gray-200">Bamboo Edge Resort,<br />Ella, Sri Lanka</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-amber-400">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                                    <p className="text-gray-200">+94 57 205 0050</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-amber-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Email</p>
                                    <p className="text-gray-200">info@bambooedge.com</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-xl font-serif text-amber-200">Newsletter</h3>
                        <p className="text-gray-300">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 transition-all"
                                />
                            </div>
                            <button className="w-full bg-amber-500 text-teal-950 font-bold py-3 rounded-xl hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 group">
                                Subscribe
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
                >
                    <p>&copy; {currentYear} Bamboo Edge Resort. All rights reserved.</p>
                    <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
                        <Link href="/legal/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
                        <Link href="/legal/terms-and-conditions" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link>
                        <Link href="/legal/refund-policy" className="hover:text-amber-400 transition-colors">Refund Policy</Link>
                        <Link href="/legal/cookie-policy" className="hover:text-amber-400 transition-colors">Cookie Policy</Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default FooterSection;
