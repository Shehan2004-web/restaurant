'use client';

import { useState } from 'react';
import { Search, Filter, MoreVertical, Plus, Image as ImageIcon, Settings, Trash2 } from 'lucide-react';
import AdminModal from '@/components/admin/AdminModal';
import AdminChart from '@/components/admin/AdminChart';

const menuItems = [
    { id: 1, name: 'Sri Lankan Rice & Curry', category: 'Mains', price: 12.50, status: 'Available', orders: 145 },
    { id: 2, name: 'Devilled Chicken', category: 'Mains', price: 15.00, status: 'Available', orders: 120 },
    { id: 3, name: 'Coconut Sambol', category: 'Sides', price: 5.00, status: 'Available', orders: 200 },
    { id: 4, name: 'Lobster Special', category: 'Seafood', price: 45.00, status: 'Sold Out', orders: 15 },
];

const chartData = [
    { name: 'Rice & Curry', value: 145 },
    { name: 'Devilled Chicken', value: 120 },
    { name: 'Coconut Sambol', value: 200 },
    { name: 'Lobster', value: 15 },
    { name: 'Hoppers', value: 85 },
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

export default function RestaurantManager() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // Master Data State
    const [categories, setCategories] = useState(['Mains', 'Appetizers', 'Seafood', 'Desserts', 'Beverages']);
    const [dietaryTags, setDietaryTags] = useState(['Spicy', 'Vegan', 'Gluten-Free', 'Contains Nuts', 'Dairy-Free']);
    const [portionSizes, setPortionSizes] = useState(['Standard', 'Large', 'Family Share']);

    // Configuration Modals State
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [isDietaryModalOpen, setIsDietaryModalOpen] = useState(false);
    const [isPortionModalOpen, setIsPortionModalOpen] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 font-serif">Restaurant & Menu</h1>
                    <p className="text-slate-500 mt-1">Manage menu items, orders, and kitchen.</p>
                </div>
                <div className="flex gap-3">
                    <div className="flex gap-2 mr-2 border-r border-slate-200 pr-4">
                        <button
                            onClick={() => setIsCategoryModalOpen(true)}
                            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
                        >
                            <Settings className="w-3 h-3" /> Categories
                        </button>
                        <button
                            onClick={() => setIsPortionModalOpen(true)}
                            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
                        >
                            <Settings className="w-3 h-3" /> Portions
                        </button>
                        <button
                            onClick={() => setIsDietaryModalOpen(true)}
                            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
                        >
                            <Settings className="w-3 h-3" /> Dietary
                        </button>
                    </div>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <Plus className="w-4 h-4" />
                        Add Menu Item
                    </button>
                </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80">
                <AdminChart
                    title="Top Selling Items (Today)"
                    type="bar"
                    data={chartData}
                    dataKey="value"
                    xAxisKey="name"
                    colors={['#f59e0b']}
                    height={250}
                />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search menu items..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-500/20"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-sm font-medium text-slate-600 transition-colors">
                        <Filter className="w-4 h-4" />
                        Category
                    </button>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Item Name</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Price</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Orders</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {menuItems.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="p-4 font-medium text-slate-800 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                                        <ImageIcon className="w-5 h-5" />
                                    </div>
                                    {item.name}
                                </td>
                                <td className="p-4 text-sm text-slate-500">{item.category}</td>
                                <td className="p-4 text-sm font-bold text-slate-800">${item.price.toFixed(2)}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${item.status === 'Available' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-slate-500">{item.orders}</td>
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

            {/* Add Item Modal */}
            <AdminModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Add Menu Item"
                maxWidth="max-w-2xl"
            >
                <form className="space-y-6">
                    {/* Basic Info */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Basic Details</h4>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Item Name</label>
                            <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="e.g. Spicy Crab Curry" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Category</label>
                                <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none">
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Price ($)</label>
                                <input type="number" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="0.00" />
                            </div>
                        </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Kitchen Details</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Prep Time (mins)</label>
                                <input type="number" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="20" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Calories (kcal)</label>
                                <input type="number" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="450" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Portion Size</label>
                                <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none">
                                    {portionSizes.map(size => (
                                        <option key={size} value={size}>{size}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Ingredients</label>
                            <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="Comma separated (e.g. Crab, Coconut Milk, Spices)" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Dietary Tags</label>
                            <div className="flex flex-wrap gap-2">
                                {dietaryTags.map((tag) => (
                                    <label key={tag} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 cursor-pointer hover:bg-slate-100">
                                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
                                        {tag}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Description</label>
                        <textarea className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none h-20" placeholder="Dish description..." />
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
                            Add Item
                        </button>
                    </div>
                </form>
            </AdminModal>

            {/* Configuration Modals */}
            <ConfigModal
                isOpen={isCategoryModalOpen}
                onClose={() => setIsCategoryModalOpen(false)}
                title="Manage Categories"
                items={categories}
                setItems={setCategories}
            />
            <ConfigModal
                isOpen={isPortionModalOpen}
                onClose={() => setIsPortionModalOpen(false)}
                title="Manage Portion Sizes"
                items={portionSizes}
                setItems={setPortionSizes}
            />
            <ConfigModal
                isOpen={isDietaryModalOpen}
                onClose={() => setIsDietaryModalOpen(false)}
                title="Manage Dietary Tags"
                items={dietaryTags}
                setItems={setDietaryTags}
            />
        </div>
    );
}
