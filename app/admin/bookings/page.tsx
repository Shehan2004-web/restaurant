'use client';

import { useState } from 'react';
import {
    Search,
    Filter,
    MoreVertical,
    Clock,
    Calendar as CalendarIcon,
    Plus,
    Settings,
    Trash2
} from 'lucide-react';
import AdminModal from '@/components/admin/AdminModal';
import AdminChart from '@/components/admin/AdminChart';

const bookings = [
    { id: '#BK-001', guest: 'Sarah Jenkins', room: 'Luxury Cabana', checkIn: '2024-03-15', checkOut: '2024-03-18', status: 'Confirmed', amount: '$450' },
    { id: '#BK-002', guest: 'Michael Chen', room: 'Family Suite', checkIn: '2024-03-16', checkOut: '2024-03-20', status: 'Pending', amount: '$820' },
    { id: '#BK-003', guest: 'Emma Wilson', room: 'Honeymoon Cottage', checkIn: '2024-03-18', checkOut: '2024-03-22', status: 'Confirmed', amount: '$600' },
    { id: '#BK-004', guest: 'James Rodriguez', room: 'Luxury Cabana', checkIn: '2024-03-20', checkOut: '2024-03-21', status: 'Cancelled', amount: '$150' },
    { id: '#BK-005', guest: 'Lisa Wong', room: 'Garden Retreat', checkIn: '2024-03-22', checkOut: '2024-03-25', status: 'Confirmed', amount: '$380' },
];

const chartData = [
    { name: 'Mon', value: 12 },
    { name: 'Tue', value: 19 },
    { name: 'Wed', value: 15 },
    { name: 'Thu', value: 25 },
    { name: 'Fri', value: 22 },
    { name: 'Sat', value: 30 },
    { name: 'Sun', value: 28 },
];

const StatusBadge = ({ status }: { status: string }) => {
    const styles = {
        Confirmed: 'bg-emerald-100 text-emerald-700',
        Pending: 'bg-amber-100 text-amber-700',
        Cancelled: 'bg-rose-100 text-rose-700',
    };
    return (
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${styles[status as keyof typeof styles]}`}>
            {status}
        </span>
    );
};

const ConfigModal = ({
    isOpen,
    onClose,
    title,
    items,
    setItems
}: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    items: string[];
    setItems: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
    const [newItemInput, setNewItemInput] = useState('');

    const handleAddItem = () => {
        if (newItemInput.trim()) {
            setItems(prev => [...prev, newItemInput.trim()]);
            setNewItemInput('');
        }
    };

    const handleRemoveItem = (itemToRemove: string) => {
        setItems(prev => prev.filter(item => item !== itemToRemove));
    };

    return (
        <AdminModal isOpen={isOpen} onClose={onClose} title={title} maxWidth="max-w-md">
            <div className="space-y-4">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newItemInput}
                        onChange={(e) => setNewItemInput(e.target.value)}
                        placeholder={`Add new ${title.toLowerCase()}...`}
                        className="flex-1 px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none"
                    />
                    <button
                        onClick={handleAddItem}
                        className="bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700 transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                    {items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-slate-700 font-medium">{item}</span>
                            <button
                                onClick={() => handleRemoveItem(item)}
                                className="text-slate-400 hover:text-rose-500 transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="pt-4 border-t border-slate-100 text-right">
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-700 text-sm font-medium">Done</button>
                </div>
            </div>
        </AdminModal>
    );
};

export default function BookingManager() {
    const [view, setView] = useState<'list' | 'calendar'>('list');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // Master Data State
    const [bookingSources, setBookingSources] = useState(['Website', 'Phone Call', 'Booking.com', 'Airbnb', 'Walk-in']);
    const [paymentStatuses, setPaymentStatuses] = useState(['Pending', 'Paid', 'Partial', 'Refunded']);

    // Configuration Modals State
    const [isSourceModalOpen, setIsSourceModalOpen] = useState(false);
    const [isPaymentStatusModalOpen, setIsPaymentStatusModalOpen] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 font-serif">Booking Manager</h1>
                    <p className="text-slate-500 mt-1">Manage reservations and check-ins.</p>
                </div>
                <div className="flex gap-3">
                    <div className="flex gap-2 mr-2 border-r border-slate-200 pr-4">
                        <button
                            onClick={() => setIsSourceModalOpen(true)}
                            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
                        >
                            <Settings className="w-3 h-3" /> Sources
                        </button>
                        <button
                            onClick={() => setIsPaymentStatusModalOpen(true)}
                            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
                        >
                            <Settings className="w-3 h-3" /> Payment Status
                        </button>
                    </div>
                    <button
                        onClick={() => setView('list')}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${view === 'list' ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                    >
                        List View
                    </button>
                    <button
                        onClick={() => setView('calendar')}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${view === 'calendar' ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                    >
                        Calendar View
                    </button>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <Plus className="w-4 h-4" />
                        New Booking
                    </button>
                </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80">
                <AdminChart
                    title="Weekly Bookings Trend"
                    type="area"
                    data={chartData}
                    dataKey="value"
                    xAxisKey="name"
                    colors={['#0d9488']}
                    height={250}
                />
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by guest name, ID, or room..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-500/20"
                    />
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-sm font-medium text-slate-600 transition-colors">
                        <Filter className="w-4 h-4" />
                        Filter Status
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-sm font-medium text-slate-600 transition-colors">
                        <Clock className="w-4 h-4" />
                        Last 30 Days
                    </button>
                </div>
            </div>

            {/* Content */}
            {view === 'list' ? (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Booking ID</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Guest</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Room / Cabana</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Check-In</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Check-Out</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {bookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4 text-sm font-medium text-teal-600">{booking.id}</td>
                                        <td className="p-4 text-sm font-medium text-slate-800">{booking.guest}</td>
                                        <td className="p-4 text-sm text-slate-600">{booking.room}</td>
                                        <td className="p-4 text-sm text-slate-600">{booking.checkIn}</td>
                                        <td className="p-4 text-sm text-slate-600">{booking.checkOut}</td>
                                        <td className="p-4">
                                            <StatusBadge status={booking.status} />
                                        </td>
                                        <td className="p-4 text-sm font-bold text-slate-800">{booking.amount}</td>
                                        <td className="p-4">
                                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
                        <span>Showing 1-5 of 24 bookings</span>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50">Previous</button>
                            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50">Next</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center py-20">
                    <CalendarIcon className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-slate-800">Calendar View</h3>
                    <p className="text-slate-500">Full calendar integration coming soon.</p>
                </div>
            )}

            {/* Add Booking Modal */}
            <AdminModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Create New Booking"
                maxWidth="max-w-2xl"
            >
                <form className="space-y-6">
                    {/* Guest Information */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Guest Information</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Full Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="+94 77 123 4567" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Booking Source</label>
                                <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none">
                                    {bookingSources.map(source => (
                                        <option key={source} value={source}>{source}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Stay Details */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Stay Details</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Check-In Date</label>
                                <input type="date" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Check-Out Date</label>
                                <input type="date" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Adults</label>
                                <input type="number" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" defaultValue="2" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Children</label>
                                <input type="number" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" defaultValue="0" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Room / Cabana</label>
                            <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none">
                                <option>Bamboo Grove 1 (Luxury Cabana)</option>
                                <option>Bamboo Grove 2 (Luxury Cabana)</option>
                                <option>Family Haven 1 (Family Suite)</option>
                            </select>
                        </div>
                    </div>

                    {/* Payment & Requests */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Payment & Requests</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Total Amount ($)</label>
                                <input type="number" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="0.00" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Payment Status</label>
                                <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none">
                                    {paymentStatuses.map(status => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Special Requests</label>
                            <textarea className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none h-20" placeholder="Any special requirements..." />
                        </div>
                    </div>

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
                            Create Booking
                        </button>
                    </div>
                </form>
            </AdminModal>

            {/* Configuration Modals */}
            <ConfigModal
                isOpen={isSourceModalOpen}
                onClose={() => setIsSourceModalOpen(false)}
                title="Manage Booking Sources"
                items={bookingSources}
                setItems={setBookingSources}
            />
            <ConfigModal
                isOpen={isPaymentStatusModalOpen}
                onClose={() => setIsPaymentStatusModalOpen(false)}
                title="Manage Payment Statuses"
                items={paymentStatuses}
                setItems={setPaymentStatuses}
            />
        </div>
    );
}
