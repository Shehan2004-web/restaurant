'use client';

import { useState } from 'react';
import { MapPin, Utensils, Users, Calendar, Search, Home, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

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

const BookingBar = () => {
    const router = useRouter();
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [adults, setAdults] = useState('2');
    const [children, setChildren] = useState('0');
    const [roomType, setRoomType] = useState('Luxury Cabana');
    const [cabin, setCabin] = useState('Bamboo Grove 1');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSearch = () => {
        const params = new URLSearchParams({
            checkIn,
            checkOut,
            adults,
            children,
            roomType,
            cabin
        });
        router.push(`/book?${params.toString()}`);
        setIsModalOpen(false);
    };

    const BookingFields = () => (
        <div className="grid grid-cols-1 gap-6">
            {/* Date Selection */}
            <div className="border-b border-amber-200 pb-4">
                <label className="block text-amber-900/60 text-xs font-semibold mb-1 uppercase tracking-wider">
                    Dates
                </label>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2 flex-1">
                        <span className="text-xs text-neutral-400 w-8">From:</span>
                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="text-sm text-teal-900 font-medium outline-none w-full cursor-pointer bg-transparent"
                        />
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                        <span className="text-xs text-neutral-400 w-8">To:</span>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="text-sm text-teal-900 font-medium outline-none w-full cursor-pointer bg-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* Guests */}
            <div className="border-b border-amber-200 pb-4">
                <label className="block text-amber-900/60 text-xs font-semibold mb-1 uppercase tracking-wider">
                    Guests
                </label>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-teal-400" />
                        <select
                            value={adults}
                            onChange={(e) => setAdults(e.target.value)}
                            className="text-sm text-teal-900 font-medium outline-none bg-transparent cursor-pointer w-full"
                        >
                            {[1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>)}
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-teal-400 opacity-50" />
                        <select
                            value={children}
                            onChange={(e) => setChildren(e.target.value)}
                            className="text-sm text-teal-900 font-medium outline-none bg-transparent cursor-pointer w-full"
                        >
                            {[0, 1, 2, 3, 4].map(num => <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            {/* Accommodation */}
            <div className="border-b border-amber-200 pb-4">
                <label className="block text-amber-900/60 text-xs font-semibold mb-1 uppercase tracking-wider">
                    Accommodation
                </label>
                <div className="flex items-center gap-2 text-amber-900 font-medium cursor-pointer hover:text-teal-700 transition-colors">
                    <Utensils className="w-5 h-5 text-teal-400" />
                    <select
                        value={roomType}
                        onChange={(e) => {
                            const newRoomType = e.target.value;
                            setRoomType(newRoomType);
                            setCabin(cabinData[newRoomType as keyof typeof cabinData][0].name);
                        }}
                        className="text-sm text-teal-900 font-medium outline-none bg-transparent cursor-pointer w-full"
                    >
                        {Object.keys(cabinData).map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Cabin Selection */}
            <div className="border-b border-amber-200 pb-4">
                <label className="block text-amber-900/60 text-xs font-semibold mb-1 uppercase tracking-wider">
                    Cabin
                </label>
                <div className="flex items-center gap-2 text-amber-900 font-medium cursor-pointer hover:text-teal-700 transition-colors">
                    <Home className="w-5 h-5 text-teal-400" />
                    <select
                        value={cabin}
                        onChange={(e) => setCabin(e.target.value)}
                        className="text-sm text-teal-900 font-medium outline-none bg-transparent cursor-pointer w-full"
                    >
                        {cabinData[roomType as keyof typeof cabinData]?.map((c) => (
                            <option key={c.name} value={c.name}>{c.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Search Button */}
            <div className="w-full">
                <button
                    onClick={handleSearch}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-semibold transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-teal-600/20"
                >
                    <Search className="w-5 h-5" />
                    Book Now
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop View */}
            <div className="hidden md:block bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-7xl mx-auto relative z-30">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="bg-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium">
                        Book Your Stay
                    </div>
                    <div className="text-amber-800 text-sm flex items-center gap-2">
                        <Users className="w-4 h-4 text-teal-400" />
                        Need Help? Online Support for you
                    </div>
                </div>

                {/* Fields Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-center">
                    {/* Date Selection */}
                    <div className="border-b md:border-b-0 md:border-r border-amber-200 pb-4 md:pb-0 md:pr-4 lg:col-span-2">
                        <label className="block text-amber-900/60 text-xs font-semibold mb-1 uppercase tracking-wider">
                            Dates
                        </label>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 flex-1">
                                <span className="text-xs text-neutral-400 w-8">From:</span>
                                <input
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="text-sm text-teal-900 font-medium outline-none w-full cursor-pointer"
                                />
                            </div>
                            <div className="flex items-center gap-2 flex-1">
                                <span className="text-xs text-neutral-400 w-8">To:</span>
                                <input
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    className="text-sm text-teal-900 font-medium outline-none w-full cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Guests */}
                    <div className="border-b md:border-b-0 md:border-r border-amber-200 pb-4 md:pb-0 md:pr-4">
                        <label className="block text-amber-900/60 text-xs font-semibold mb-1 uppercase tracking-wider">
                            Guests
                        </label>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-teal-400" />
                                <select
                                    value={adults}
                                    onChange={(e) => setAdults(e.target.value)}
                                    className="text-sm text-teal-900 font-medium outline-none bg-transparent cursor-pointer w-full"
                                >
                                    {[1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>)}
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-teal-400 opacity-50" />
                                <select
                                    value={children}
                                    onChange={(e) => setChildren(e.target.value)}
                                    className="text-sm text-teal-900 font-medium outline-none bg-transparent cursor-pointer w-full"
                                >
                                    {[0, 1, 2, 3, 4].map(num => <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Accommodation */}
                    <div className="border-b md:border-b-0 md:border-r border-amber-200 pb-4 md:pb-0 md:pr-4">
                        <label className="block text-amber-900/60 text-xs font-semibold mb-1 uppercase tracking-wider">
                            Accommodation
                        </label>
                        <div className="flex items-center gap-2 text-amber-900 font-medium cursor-pointer hover:text-teal-700 transition-colors">
                            <Utensils className="w-5 h-5 text-teal-400" />
                            <select
                                value={roomType}
                                onChange={(e) => {
                                    const newRoomType = e.target.value;
                                    setRoomType(newRoomType);
                                    setCabin(cabinData[newRoomType as keyof typeof cabinData][0].name);
                                }}
                                className="text-sm text-teal-900 font-medium outline-none bg-transparent cursor-pointer w-full"
                            >
                                {Object.keys(cabinData).map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Cabin Selection */}
                    <div className="border-b md:border-b-0 md:border-r border-amber-200 pb-4 md:pb-0 md:pr-4">
                        <label className="block text-amber-900/60 text-xs font-semibold mb-1 uppercase tracking-wider">
                            Cabin
                        </label>
                        <div className="flex items-center gap-2 text-amber-900 font-medium cursor-pointer hover:text-teal-700 transition-colors">
                            <Home className="w-5 h-5 text-teal-400" />
                            <select
                                value={cabin}
                                onChange={(e) => setCabin(e.target.value)}
                                className="text-sm text-teal-900 font-medium outline-none bg-transparent cursor-pointer w-full"
                            >
                                {cabinData[roomType as keyof typeof cabinData]?.map((c) => (
                                    <option key={c.name} value={c.name}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="w-full">
                        <button
                            onClick={handleSearch}
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-semibold transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-teal-600/20"
                        >
                            <Search className="w-5 h-5" />
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile View - Reserve Button */}
            <div className="md:hidden w-full max-w-sm mx-auto mt-4">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-teal-700 text-white py-4 rounded-full shadow-2xl flex items-center justify-center gap-2 font-bold text-lg border-2 border-white/20 backdrop-blur-sm"
                >
                    <Calendar className="w-5 h-5" />
                    Reserve Now
                </button>
            </div>

            {/* Mobile Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl relative z-10 overflow-hidden max-h-[90vh] flex flex-col"
                        >
                            <div className="p-6 border-b border-neutral-100 flex justify-between items-center bg-neutral-50">
                                <h3 className="text-xl font-serif text-teal-900">Plan Your Stay</h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 hover:bg-neutral-200 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-neutral-500" />
                                </button>
                            </div>

                            <div className="p-6 overflow-y-auto">
                                <BookingFields />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default BookingBar;
