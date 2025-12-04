'use client';

import { useState } from 'react';
import { Search, Filter, MoreVertical, Plus, BedDouble, Users, Settings, Trash2 } from 'lucide-react';
import AdminModal from '@/components/admin/AdminModal';
import AdminChart from '@/components/admin/AdminChart';

const cabanas = [
    { id: 1, name: 'Bamboo Grove 1', type: 'Luxury Cabana', status: 'Occupied', price: 150, capacity: 2 },
    { id: 2, name: 'Bamboo Grove 2', type: 'Luxury Cabana', status: 'Available', price: 150, capacity: 2 },
    { id: 3, name: 'Family Haven 1', type: 'Family Suite', status: 'Available', price: 280, capacity: 4 },
    { id: 4, name: 'River View 1', type: 'Standard Cabana', status: 'Maintenance', price: 120, capacity: 2 },
    { id: 5, name: 'Honeymoon Cottage', type: 'Suite', status: 'Occupied', price: 200, capacity: 2 },
];

const chartData = [
    { name: 'Luxury', value: 85 },
    { name: 'Family', value: 65 },
    { name: 'Standard', value: 45 },
    { name: 'Suite', value: 30 },
];

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

export default function RoomManager() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // Master Data State
    const [amenities, setAmenities] = useState(['WiFi', 'AC', 'Hot Water', 'Mini Bar', 'TV', 'Balcony']);
    const [bedTypes, setBedTypes] = useState(['King', 'Queen', 'Twin', 'Double']);
    const [cabinTypes, setCabinTypes] = useState(['Luxury Cabana', 'Family Suite', 'Standard Cabana', 'Suite']);

    // Configuration Modals State
    const [isAmenityModalOpen, setIsAmenityModalOpen] = useState(false);
    const [isBedTypeModalOpen, setIsBedTypeModalOpen] = useState(false);
    const [isCabinTypeModalOpen, setIsCabinTypeModalOpen] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 font-serif">Rooms & Cabanas</h1>
                    <p className="text-slate-500 mt-1">Manage accommodation inventory and status.</p>
                </div>
                <div className="flex gap-3">
                    <div className="flex gap-2 mr-2 border-r border-slate-200 pr-4">
                        <button
                            onClick={() => setIsCabinTypeModalOpen(true)}
                            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
                        >
                            <Settings className="w-3 h-3" /> Types
                        </button>
                        <button
                            onClick={() => setIsBedTypeModalOpen(true)}
                            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
                        >
                            <Settings className="w-3 h-3" /> Beds
                        </button>
                        <button
                            onClick={() => setIsAmenityModalOpen(true)}
                            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
                        >
                            <Settings className="w-3 h-3" /> Amenities
                        </button>
                    </div>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <Plus className="w-4 h-4" />
                        Add New Cabana
                    </button>
                </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80">
                <AdminChart
                    title="Occupancy by Type"
                    type="pie"
                    data={chartData}
                    dataKey="value"
                    xAxisKey="name"
                    colors={['#0d9488', '#f59e0b', '#3b82f6', '#ec4899']}
                    height={250}
                />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search cabanas..."
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
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Cabana Name</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Capacity</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Price/Night</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {cabanas.map((cabana) => (
                            <tr key={cabana.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="p-4 font-medium text-slate-800 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                                        <BedDouble className="w-5 h-5" />
                                    </div>
                                    {cabana.name}
                                </td>
                                <td className="p-4 text-sm text-slate-500">{cabana.type}</td>
                                <td className="p-4 text-sm text-slate-500 flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {cabana.capacity}
                                </td>
                                <td className="p-4 text-sm font-bold text-slate-800">${cabana.price}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${cabana.status === 'Available' ? 'bg-emerald-100 text-emerald-700' :
                                        cabana.status === 'Occupied' ? 'bg-amber-100 text-amber-700' :
                                            'bg-slate-100 text-slate-500'
                                        }`}>
                                        {cabana.status}
                                    </span>
                                </td>
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

            {/* Add Cabana Modal */}
            <AdminModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Add New Cabana"
                maxWidth="max-w-2xl"
            >
                <form className="space-y-6">
                    {/* Basic Info */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Basic Information</h4>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Cabana Name</label>
                            <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="e.g. Bamboo Grove 3" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Type</label>
                                <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none">
                                    {cabinTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Price per Night ($)</label>
                                <input type="number" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="150" />
                            </div>
                        </div>
                    </div>

                    {/* Photo Uploads */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Photos</h4>
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="aspect-square bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 hover:border-teal-500 hover:text-teal-500 transition-colors cursor-pointer">
                                    <Plus className="w-6 h-6 mb-2" />
                                    <span className="text-xs font-medium">Upload Photo</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Or Image URL</label>
                            <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="https://..." />
                        </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Room Details</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Capacity (Guests)</label>
                                <input type="number" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" defaultValue="2" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Bed Type</label>
                                <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none">
                                    {bedTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Size (sq ft)</label>
                                <input type="number" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="450" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">View Type</label>
                                <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="e.g. River View" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Amenities</label>
                            <div className="flex flex-wrap gap-2">
                                {amenities.map((amenity) => (
                                    <label key={amenity} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 cursor-pointer hover:bg-slate-100">
                                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
                                        {amenity}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Description</label>
                        <textarea className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none h-32" placeholder="Detailed room description..." />
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
                            Add Cabana
                        </button>
                    </div>
                </form>
            </AdminModal>

            {/* Configuration Modals */}
            <ConfigModal
                isOpen={isAmenityModalOpen}
                onClose={() => setIsAmenityModalOpen(false)}
                title="Manage Amenities"
                items={amenities}
                setItems={setAmenities}
            />
            <ConfigModal
                isOpen={isBedTypeModalOpen}
                onClose={() => setIsBedTypeModalOpen(false)}
                title="Manage Bed Types"
                items={bedTypes}
                setItems={setBedTypes}
            />
            <ConfigModal
                isOpen={isCabinTypeModalOpen}
                onClose={() => setIsCabinTypeModalOpen(false)}
                title="Manage Cabin Types"
                items={cabinTypes}
                setItems={setCabinTypes}
            />
        </div>
    );
}
