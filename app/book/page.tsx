'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Calendar, Users, Check, ShieldCheck, Star, ArrowRight } from 'lucide-react';

const cabinData = {
    'Luxury Cabana': [
        { name: 'Bamboo Grove 1', image: '/hero/hero1.jpg' },
        { name: 'Bamboo Grove 2', image: '/hero/hero2.jpg' },
        { name: 'Mountain View 1', image: '/hero/hero3.jpg' }
    ],
    'Family Suite': [
        { name: 'Family Haven 1', image: '/hero/hero4.jpg' },
        { name: 'Garden Retreat', image: '/hero/hero1.jpg' }
    ],
    'Honeymoon Cottage': [
        { name: 'Lovers Nest', image: '/hero/hero3.jpg' },
        { name: 'Private Escape', image: '/hero/hero2.jpg' }
    ]
};

function BookingFormContent() {
    const searchParams = useSearchParams();
    const [showAdvanceRequests, setShowAdvanceRequests] = useState(false);
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        adults: '2',
        children: '0',
        roomType: 'Luxury Cabana',
        cabin: 'Bamboo Grove 1',
        name: '',
        email: '',
        phone: '',
        message: '',
        bbq: false,
        decoration: false,
        lunch: false,
        dinner: false,
        additionalRequests: ''
    });

    useEffect(() => {
        const checkInParam = searchParams.get('checkIn');
        const checkOutParam = searchParams.get('checkOut');
        const adultsParam = searchParams.get('adults');
        const childrenParam = searchParams.get('children');
        const roomTypeParam = searchParams.get('roomType');
        const cabinParam = searchParams.get('cabin');

        if (checkInParam || checkOutParam || adultsParam || childrenParam || roomTypeParam || cabinParam) {
            setFormData(prev => ({
                ...prev,
                checkIn: checkInParam || prev.checkIn,
                checkOut: checkOutParam || prev.checkOut,
                adults: adultsParam || prev.adults,
                children: childrenParam || prev.children,
                roomType: roomTypeParam || prev.roomType,
                cabin: cabinParam || (roomTypeParam ? cabinData[roomTypeParam as keyof typeof cabinData]?.[0]?.name || prev.cabin : prev.cabin)
            }));
        }
    }, [searchParams]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send email or API call)
        alert('Thank you for your inquiry! We will contact you shortly.');
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <main className="min-h-screen bg-[#fffbeb]">
            <Navbar alwaysSolid={true} />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero/hero1.jpg"
                        alt="Booking Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-teal-950/70" />
                </div>

                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-serif text-white mb-4"
                    >
                        Reserve Your Sanctuary
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-gray-200 max-w-2xl mx-auto"
                    >
                        Begin your journey to tranquility. Fill out the form below to inquire about availability and rates.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 -mt-20 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Booking Form */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-neutral-100"
                    >
                        <h2 className="text-3xl font-serif text-teal-950 mb-8">Reservation Inquiry</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-600 flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-amber-500" /> Check-in Date
                                    </label>
                                    <input
                                        type="date"
                                        name="checkIn"
                                        value={formData.checkIn}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-neutral-700"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-600 flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-amber-500" /> Check-out Date
                                    </label>
                                    <input
                                        type="date"
                                        name="checkOut"
                                        value={formData.checkOut}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-neutral-700"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-600 flex items-center gap-2">
                                        <Users className="w-4 h-4 text-amber-500" /> Adults
                                    </label>
                                    <select
                                        name="adults"
                                        value={formData.adults}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-neutral-700 bg-white"
                                    >
                                        {[1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-600 flex items-center gap-2">
                                        <Users className="w-4 h-4 text-amber-500" /> Children
                                    </label>
                                    <select
                                        name="children"
                                        value={formData.children}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-neutral-700 bg-white"
                                    >
                                        {[0, 1, 2, 3, 4].map(num => <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-600">Accommodation Type</label>
                                <select
                                    name="roomType"
                                    value={formData.roomType}
                                    onChange={(e) => {
                                        const newRoomType = e.target.value;
                                        setFormData({
                                            ...formData,
                                            roomType: newRoomType,
                                            cabin: cabinData[newRoomType as keyof typeof cabinData][0].name
                                        });
                                    }}
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-neutral-700 bg-white"
                                >
                                    {Object.keys(cabinData).map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-600">Choose Your Cabin</label>
                                <select
                                    name="cabin"
                                    value={formData.cabin}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-neutral-700 bg-white"
                                >
                                    {cabinData[formData.roomType as keyof typeof cabinData]?.map((cabin) => (
                                        <option key={cabin.name} value={cabin.name}>{cabin.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Cabin Preview */}
                            <motion.div
                                key={formData.cabin}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="relative h-48 rounded-2xl overflow-hidden shadow-md border border-neutral-100"
                            >
                                <Image
                                    src={cabinData[formData.roomType as keyof typeof cabinData]?.find(c => c.name === formData.cabin)?.image || '/hero/hero1.jpg'}
                                    alt={formData.cabin}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <p className="text-white font-medium text-sm flex items-center gap-2">
                                        <Check className="w-4 h-4 text-amber-400" />
                                        Selected: {formData.cabin}
                                    </p>
                                </div>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-600">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-neutral-700"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-600">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-neutral-700"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-600">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+94 77 123 4567"
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-neutral-700"
                                    required
                                />
                            </div>

                            {/* Advance Request Section */}
                            <div className="space-y-4 pt-4 border-t border-neutral-100">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="advanceRequest"
                                        checked={showAdvanceRequests}
                                        onChange={(e) => setShowAdvanceRequests(e.target.checked)}
                                        className="w-5 h-5 rounded border-neutral-300 text-teal-900 focus:ring-amber-500"
                                    />
                                    <label htmlFor="advanceRequest" className="text-neutral-700 font-medium cursor-pointer select-none">
                                        Advance Request <span className="text-neutral-400 text-sm font-normal">(Optional)</span>
                                    </label>
                                </div>

                                <AnimatePresence>
                                    {showAdvanceRequests && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="space-y-6 overflow-hidden pl-2"
                                        >
                                            <div className="space-y-3">
                                                <label className="text-sm font-medium text-neutral-600 block">Add Additional Features</label>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <label className="flex items-center gap-3 p-3 border border-neutral-200 rounded-xl cursor-pointer hover:bg-neutral-50 transition-colors">
                                                        <input
                                                            type="checkbox"
                                                            name="bbq"
                                                            checked={formData.bbq}
                                                            onChange={handleChange}
                                                            className="w-4 h-4 rounded border-neutral-300 text-teal-900 focus:ring-amber-500"
                                                        />
                                                        <span className="text-neutral-700">BBQ Machine</span>
                                                    </label>
                                                    <label className="flex items-center gap-3 p-3 border border-neutral-200 rounded-xl cursor-pointer hover:bg-neutral-50 transition-colors">
                                                        <input
                                                            type="checkbox"
                                                            name="decoration"
                                                            checked={formData.decoration}
                                                            onChange={handleChange}
                                                            className="w-4 h-4 rounded border-neutral-300 text-teal-900 focus:ring-amber-500"
                                                        />
                                                        <span className="text-neutral-700">Room Decoration</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-sm font-medium text-neutral-600 block">Meal Options</label>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <label className="flex items-center gap-3 p-3 border border-neutral-200 rounded-xl cursor-pointer hover:bg-neutral-50 transition-colors">
                                                        <input
                                                            type="checkbox"
                                                            name="lunch"
                                                            checked={formData.lunch}
                                                            onChange={handleChange}
                                                            className="w-4 h-4 rounded border-neutral-300 text-teal-900 focus:ring-amber-500"
                                                        />
                                                        <span className="text-neutral-700">Lunch</span>
                                                    </label>
                                                    <label className="flex items-center gap-3 p-3 border border-neutral-200 rounded-xl cursor-pointer hover:bg-neutral-50 transition-colors">
                                                        <input
                                                            type="checkbox"
                                                            name="dinner"
                                                            checked={formData.dinner}
                                                            onChange={handleChange}
                                                            className="w-4 h-4 rounded border-neutral-300 text-teal-900 focus:ring-amber-500"
                                                        />
                                                        <span className="text-neutral-700">Dinner</span>
                                                    </label>
                                                </div>
                                            </div>


                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-600">Special Requests</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Any dietary requirements, arrival time, or special occasions?"
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-neutral-700 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-teal-950 text-white font-bold py-4 rounded-xl hover:bg-amber-500 hover:text-teal-950 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                Send Inquiry
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Info Column */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Why Book Direct */}
                        <div className="bg-teal-900 text-white rounded-3xl p-8 shadow-xl">
                            <h3 className="text-2xl font-serif mb-6 text-amber-400">Why Book Direct?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-amber-400" />
                                    </div>
                                    <span className="text-gray-200">Best Rate Guarantee</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-amber-400" />
                                    </div>
                                    <span className="text-gray-200">No Hidden Booking Fees</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-amber-400" />
                                    </div>
                                    <span className="text-gray-200">Flexible Cancellation Policy</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-amber-400" />
                                    </div>
                                    <span className="text-gray-200">Welcome Drink & Refreshments</span>
                                </li>
                            </ul>
                        </div>

                        {/* Need Help */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-100">
                            <h3 className="text-xl font-serif text-teal-950 mb-4">Need Assistance?</h3>
                            <p className="text-neutral-600 mb-6">
                                Our team is here to help you plan your perfect stay. Contact us directly for personalized assistance.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-teal-800 font-medium">
                                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <span>+94 57 205 0050</span>
                                </div>
                                <div className="flex items-center gap-3 text-teal-800 font-medium">
                                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                                        <Star className="w-5 h-5" />
                                    </div>
                                    <span>info@bambooedge.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Image Card */}
                        <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/hero/hero3.jpg"
                                alt="Relaxation"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-transparent flex items-end p-6">
                                <p className="text-white font-serif text-lg italic">"Nature does not hurry, yet everything is accomplished."</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>

            <FooterSection />
        </main>
    );
}

export default function BookNowPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#fffbeb] text-teal-900">Loading...</div>}>
            <BookingFormContent />
        </Suspense>
    );
}
