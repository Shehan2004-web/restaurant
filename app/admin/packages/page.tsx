'use client';

import { useState } from 'react';
import { Search, Filter, MoreVertical, Plus, Package, Settings, Trash2 } from 'lucide-react';
import AdminModal from '@/components/admin/AdminModal';

const packages = [
    { id: 1, name: 'Honeymoon Bliss', price: 450, duration: '3 Days / 2 Nights', status: 'Active', bookings: 24 },
    { id: 2, name: 'Family Adventure', price: 650, duration: '4 Days / 3 Nights', status: 'Active', bookings: 18 },
    { id: 3, name: 'Weekend Escape', price: 250, duration: '2 Days / 1 Night', status: 'Active', bookings: 45 },
    { id: 4, name: 'Nature Retreat', price: 350, duration: '3 Days / 2 Nights', status: 'Inactive', bookings: 5 },
];

export default function PackageManager() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 font-serif">Package Management</h1>
                    <p className="text-slate-500 mt-1">Create and manage special offers and packages.</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <Plus className="w-4 h-4" />
                        Create Package
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search packages..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-500/20"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-sm font-medium text-slate-600 transition-colors">
                        <Filter className="w-4 h-4" />
                        Filter Status
                    </button>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Package Name</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Price</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Duration</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Bookings</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {packages.map((pkg) => (
                            <tr key={pkg.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="p-4 font-medium text-slate-800 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                                        <Package className="w-5 h-5" />
                                    </div>
                                    {pkg.name}
                                </td>
                                <td className="p-4 text-sm font-bold text-slate-800">${pkg.price}</td>
                                <td className="p-4 text-sm text-slate-500">{pkg.duration}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${pkg.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                                        }`}>
                                        {pkg.status}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-slate-500">{pkg.bookings}</td>
                                <td className="p-4 text-right">
                                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Package Modal */}
            <AdminModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Create New Package"
                maxWidth="max-w-2xl"
            >
                <form className="space-y-6">
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Package Details</h4>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Package Name</label>
                            <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="e.g. Honeymoon Bliss" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Price ($)</label>
                                <input type="number" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="450" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Duration</label>
                                <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="e.g. 3 Days / 2 Nights" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Inclusions</label>
                            <textarea className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none h-24" placeholder="List items separated by commas..." />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Description</label>
                            <textarea className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none h-24" placeholder="Package description..." />
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
                            Create Package
                        </button>
                    </div>
                </form>
            </AdminModal>
        </div>
    );
}
