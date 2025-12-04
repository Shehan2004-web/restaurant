'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';

const ContactSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section className="relative py-24 overflow-hidden bg-[#fffbeb]" id="contact">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-900/5 -skew-x-12 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Column: Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Get in Touch</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-teal-950 leading-tight">
                                Let's Start a Conversation
                            </h2>
                            <p className="text-neutral-600 text-lg leading-relaxed max-w-md">
                                Whether you have a question about bookings, events, or just want to say hello, we're here to help you plan your perfect getaway.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-neutral-100 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-teal-950 mb-1">Visit Us</h3>
                                    <p className="text-neutral-600">Bamboo Edge Resort,<br />Ella, Sri Lanka</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-neutral-100 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-teal-950 mb-1">Call Us</h3>
                                    <p className="text-neutral-600">+94 57 205 0050</p>
                                    <p className="text-neutral-500 text-sm mt-1">Mon-Sun, 8am - 10pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-neutral-100 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-teal-950 mb-1">Email Us</h3>
                                    <p className="text-neutral-600">info@bambooedge.com</p>
                                    <p className="text-neutral-500 text-sm mt-1">We reply within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-neutral-200">
                            <p className="text-teal-950 font-medium mb-4">Follow our journey</p>
                            <div className="flex gap-4">
                                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-teal-950 text-white flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div variants={itemVariants} className="relative">
                        <div className="absolute inset-0 bg-teal-950 rounded-3xl rotate-3 opacity-5" />
                        <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-neutral-100">
                            <h3 className="text-2xl font-serif text-teal-950 mb-6">Send a Message</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-neutral-600">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-neutral-600">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-neutral-600">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all appearance-none"
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="booking">Booking Inquiry</option>
                                        <option value="event">Event Planning</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-neutral-600">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button className="w-full bg-teal-950 text-white font-bold py-4 rounded-xl hover:bg-amber-500 transition-colors duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-teal-950/20">
                                    Send Message
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
