'use client';

import { useParams } from 'next/navigation';
import { cabins } from '@/data/cabins';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';
import {
    Star, MapPin, Wifi, Wind, Coffee, Utensils,
    BedDouble, Bath, Tv, Speaker, Snowflake,
    CheckCircle2, Clock, ShieldCheck, Ban,
    Baby, Cigarette, ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function CabinDetailsPage() {
    const params = useParams();
    const cabin = cabins.find(c => c.id === params.id);

    if (!cabin) {
        return (
            <div className="min-h-screen bg-stone-950 flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Cabin Not Found</h1>
                    <Link href="/" className="text-amber-500 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    const getIcon = (amenity: string) => {
        const lower = amenity.toLowerCase();
        if (lower.includes('wifi')) return <Wifi className="w-5 h-5" />;
        if (lower.includes('bed')) return <BedDouble className="w-5 h-5" />;
        if (lower.includes('bath') || lower.includes('shower')) return <Bath className="w-5 h-5" />;
        if (lower.includes('tv')) return <Tv className="w-5 h-5" />;
        if (lower.includes('speaker')) return <Speaker className="w-5 h-5" />;
        if (lower.includes('ac') || lower.includes('fan') || lower.includes('cool')) return <Wind className="w-5 h-5" />;
        if (lower.includes('coffee') || lower.includes('tea')) return <Coffee className="w-5 h-5" />;
        if (lower.includes('food') || lower.includes('bar') || lower.includes('kitchen')) return <Utensils className="w-5 h-5" />;
        return <CheckCircle2 className="w-5 h-5" />;
    };

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[80vh] w-full">
                <Image
                    src={cabin.images.main}
                    alt={cabin.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
                    <div className="max-w-7xl mx-auto">
                        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="bg-amber-500 text-stone-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {cabin.availability.status}
                                    </span>
                                    <div className="flex items-center gap-1 text-amber-400">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="font-bold">{cabin.rating.stars}</span>
                                        <span className="text-white/60 text-sm">({cabin.rating.count} Reviews)</span>
                                    </div>
                                </div>

                                <h1 className="text-4xl md:text-7xl font-serif leading-tight">
                                    {cabin.name}
                                </h1>
                                <p className="text-xl text-white/80 font-light max-w-2xl">
                                    {cabin.tagline}
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 min-w-[300px]">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-3xl font-bold">{cabin.price.currency} {cabin.price.amount}</span>
                                    <span className="text-sm text-white/70">/{cabin.price.period}</span>
                                </div>
                                <p className="text-xs text-white/60 mb-4">{cabin.price.taxInfo}</p>
                                {cabin.price.discount && (
                                    <div className="text-sm text-amber-400 mb-4">
                                        <span className="line-through text-white/50 mr-2">
                                            {cabin.price.currency} {cabin.price.discount.originalAmount}
                                        </span>
                                        {cabin.price.discount.label}
                                    </div>
                                )}
                                <button className="w-full bg-amber-500 text-stone-950 py-3 rounded-xl font-bold hover:bg-amber-400 transition-colors">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Details */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Description */}
                    <section>
                        <h2 className="text-3xl font-serif text-stone-900 mb-6">The Experience</h2>
                        <p className="text-lg text-stone-600 leading-relaxed mb-8">
                            {cabin.description.vibe}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-stone-200">
                                <span className="block text-xs text-stone-500 uppercase tracking-wider mb-1">Size</span>
                                <span className="font-medium text-stone-900">{cabin.description.size}</span>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-stone-200 col-span-2 md:col-span-2">
                                <span className="block text-xs text-stone-500 uppercase tracking-wider mb-1">View</span>
                                <span className="font-medium text-stone-900">{cabin.description.view}</span>
                            </div>
                        </div>
                    </section>

                    {/* Gallery */}
                    <section>
                        <h2 className="text-3xl font-serif text-stone-900 mb-6">Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
                            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden">
                                <Image src={cabin.images.bathroom} alt="Bathroom" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">Bathroom</div>
                            </div>
                            <div className="relative rounded-2xl overflow-hidden">
                                <Image src={cabin.images.balcony} alt="Balcony" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden">
                                <Image src={cabin.images.night} alt="Night View" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="col-span-2 relative rounded-2xl overflow-hidden">
                                <Image src={cabin.images.exterior} alt="Exterior" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                    </section>

                    {/* Amenities */}
                    <section>
                        <h2 className="text-3xl font-serif text-stone-900 mb-6">Amenities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="font-bold text-stone-900 flex items-center gap-2">
                                    <BedDouble className="w-5 h-5 text-teal-600" /> Bedroom
                                </h3>
                                <ul className="space-y-2">
                                    {cabin.amenities.bedroom.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-stone-600 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-teal-600/50" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-stone-900 flex items-center gap-2">
                                    <Bath className="w-5 h-5 text-teal-600" /> Bathroom
                                </h3>
                                <ul className="space-y-2">
                                    {cabin.amenities.bathroom.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-stone-600 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-teal-600/50" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-stone-900 flex items-center gap-2">
                                    <Wifi className="w-5 h-5 text-teal-600" /> Tech & Connectivity
                                </h3>
                                <ul className="space-y-2">
                                    {cabin.amenities.tech.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-stone-600 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-teal-600/50" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-bold text-stone-900 flex items-center gap-2">
                                    <Wind className="w-5 h-5 text-teal-600" /> Comfort
                                </h3>
                                <ul className="space-y-2">
                                    {cabin.amenities.comfort.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-stone-600 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-teal-600/50" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Right Column: Sticky Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 space-y-8">

                        {/* Location Highlights */}
                        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                            <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-amber-500" /> Location Highlights
                            </h3>
                            <ul className="space-y-3">
                                {cabin.location.highlights.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Policies */}
                        <div className="bg-stone-100 p-6 rounded-2xl">
                            <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-stone-600" /> Policies
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between py-2 border-b border-stone-200">
                                    <span className="text-stone-500">Check-in</span>
                                    <span className="font-medium text-stone-900">{cabin.policies.checkIn}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-stone-200">
                                    <span className="text-stone-500">Check-out</span>
                                    <span className="font-medium text-stone-900">{cabin.policies.checkOut}</span>
                                </div>
                                <div className="flex items-start gap-3 text-stone-600">
                                    <Ban className="w-4 h-4 mt-0.5 shrink-0" />
                                    <span>{cabin.policies.cancellation}</span>
                                </div>
                                <div className="flex items-start gap-3 text-stone-600">
                                    <Baby className="w-4 h-4 mt-0.5 shrink-0" />
                                    <span>{cabin.policies.child}</span>
                                </div>
                            </div>
                        </div>

                        {/* Dining */}
                        <div className="bg-teal-900 text-white p-6 rounded-2xl">
                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <Utensils className="w-5 h-5 text-amber-400" /> Dining
                            </h3>
                            <ul className="space-y-3 text-sm text-white/80">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                                    {cabin.dining.breakfast}
                                </li>
                                {cabin.dining.inRoom && (
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                                        In-Room Dining Available
                                    </li>
                                )}
                                {cabin.dining.bbq && (
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                                        Private BBQ Allowed
                                    </li>
                                )}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <FooterSection />
        </main>
    );
}
