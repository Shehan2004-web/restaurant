'use client';

import { useState } from 'react';
import { Plus, Image as ImageIcon, Calendar, Edit, Trash2, Layout } from 'lucide-react';
import AdminModal from '@/components/admin/AdminModal';
import AdminChart from '@/components/admin/AdminChart';

const events = [
    { id: 1, title: 'Seafood Night', date: '2024-03-20', status: 'Active', attendees: 45 },
    { id: 2, title: 'Live Jazz Band', date: '2024-03-22', status: 'Upcoming', attendees: 120 },
    { id: 3, title: 'Full Moon Party', date: '2024-03-25', status: 'Draft', attendees: 0 },
];

const chartData = [
    { name: 'Seafood Night', value: 45 },
    { name: 'Jazz Band', value: 120 },
    { name: 'Beach BBQ', value: 80 },
    { name: 'Yoga Session', value: 30 },
];

const heroSlides = [
    { id: 1, title: 'Welcome to Bamboo Edge', subtitle: 'Experience the beauty of nature', image: '/hero1.jpg', cta: 'Book Now' },
    { id: 2, title: 'Luxury Cabanas', subtitle: 'Relax in comfort and style', image: '/hero2.jpg', cta: 'View Rooms' },
];

export default function CMSManager() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<'events' | 'gallery' | 'hero'>('events');

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 font-serif">Content Management</h1>
                    <p className="text-slate-500 mt-1">Manage events, gallery, and site content.</p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
                >
                    <Plus className="w-4 h-4" />
                    Add New {activeTab === 'events' ? 'Event' : activeTab === 'gallery' ? 'Image' : 'Slide'}
                </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-slate-200">
                <button
                    onClick={() => setActiveTab('events')}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'events' ? 'border-teal-600 text-teal-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                >
                    Events
                </button>
                <button
                    onClick={() => setActiveTab('gallery')}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'gallery' ? 'border-teal-600 text-teal-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                >
                    Gallery
                </button>
                <button
                    onClick={() => setActiveTab('hero')}
                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'hero' ? 'border-teal-600 text-teal-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                >
                    Hero Section
                </button>
            </div>

            {/* Content Area */}
            <div className="space-y-6">
                {activeTab === 'events' && (
                    <>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80">
                            <AdminChart
                                title="Event Interest"
                                type="bar"
                                data={chartData}
                                dataKey="value"
                                xAxisKey="name"
                                colors={['#0d9488']}
                                height={250}
                            />
                        </div>
                        <div className="space-y-4">
                            {events.map((event) => (
                                <div key={event.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-teal-600 shadow-sm">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800">{event.title}</h3>
                                            <p className="text-sm text-slate-500">{event.date} • {event.status}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-teal-600 transition-colors">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-rose-600 transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {activeTab === 'gallery' && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 relative group cursor-pointer overflow-hidden">
                                <ImageIcon className="w-8 h-8" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                    <button className="p-2 bg-white rounded-full text-slate-800 hover:text-rose-600">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'hero' && (
                    <div className="space-y-4">
                        {heroSlides.map((slide) => (
                            <div key={slide.id} className="bg-white p-4 rounded-xl border border-slate-100 flex gap-4 items-center">
                                <div className="w-32 h-20 bg-slate-100 rounded-lg overflow-hidden relative flex items-center justify-center text-slate-400">
                                    <Layout className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-800">{slide.title}</h3>
                                    <p className="text-sm text-slate-500">{slide.subtitle}</p>
                                    <span className="text-xs text-teal-600 font-medium mt-1 inline-block">CTA: {slide.cta}</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-teal-600 transition-colors">
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-rose-500 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Add Modal */}
            <AdminModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title={`Add New ${activeTab === 'events' ? 'Event' : activeTab === 'gallery' ? 'Image' : 'Slide'}`}
                maxWidth="max-w-2xl"
            >
                <form className="space-y-6">
                    {activeTab === 'events' && (
                        <>
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Event Details</h4>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Event Title</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="e.g. Summer Beach Party" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Date</label>
                                        <input type="date" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Time</label>
                                        <input type="time" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Location</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="e.g. Main Beach Area" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Description</label>
                                    <textarea className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none h-24" placeholder="Event description..." />
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'gallery' && (
                        <div className="space-y-4">
                            <div className="border-2 border-dashed border-slate-200 rounded-xl p-12 text-center hover:border-teal-500 transition-colors cursor-pointer">
                                <ImageIcon className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                                <h3 className="font-bold text-slate-700">Upload Images</h3>
                                <p className="text-sm text-slate-500 mt-1">Drag & drop or click to select files</p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Album / Category</label>
                                <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none">
                                    <option>General</option>
                                    <option>Rooms</option>
                                    <option>Events</option>
                                    <option>Food</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {activeTab === 'hero' && (
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Slide Details</h4>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Title</label>
                                <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="e.g. Welcome to Paradise" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Subtitle</label>
                                <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="e.g. Experience luxury..." />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">CTA Text</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="e.g. Book Now" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">CTA Link</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="e.g. /book" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Background Image</label>
                                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-teal-500 transition-colors cursor-pointer">
                                    <ImageIcon className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                                    <p className="text-sm text-slate-500">Click to upload hero image</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
                        <button
                            type="button"
                            onClick={() => setIsAddModalOpen(false)}
                            className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-xl bg-teal-600 text-white hover:bg-teal-700 font-medium shadow-lg shadow-teal-900/20"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </AdminModal>
        </div>
    );
}
