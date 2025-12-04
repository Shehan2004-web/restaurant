'use client';

import { useState } from 'react';
import { Search, Filter, MoreVertical, Plus, User, Shield, Mail, Phone, Settings, Trash2 } from 'lucide-react';
import AdminModal from '@/components/admin/AdminModal';
import AdminChart from '@/components/admin/AdminChart';

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastActive: '2 mins ago' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', status: 'Active', lastActive: '1 hour ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Staff', status: 'Offline', lastActive: '2 days ago' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Customer', status: 'Active', lastActive: '5 mins ago' },
];

const chartData = [
    { name: 'Admin', value: 5 },
    { name: 'Manager', value: 12 },
    { name: 'Staff', value: 45 },
    { name: 'Customer', value: 850 },
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

export default function UserManager() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // Master Data State
    const [userRoles, setUserRoles] = useState(['Customer', 'Staff', 'Manager', 'Admin']);
    const [accountStatuses, setAccountStatuses] = useState(['Active', 'Inactive', 'Banned', 'Suspended']);

    // Configuration Modals State
    const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
    const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 font-serif">User Management</h1>
                    <p className="text-slate-500 mt-1">Manage system users, roles, and customers.</p>
                </div>
                <div className="flex gap-3">
                    <div className="flex gap-2 mr-2 border-r border-slate-200 pr-4">
                        <button
                            onClick={() => setIsRoleModalOpen(true)}
                            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
                        >
                            <Settings className="w-3 h-3" /> Roles
                        </button>
                        <button
                            onClick={() => setIsStatusModalOpen(true)}
                            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
                        >
                            <Settings className="w-3 h-3" /> Statuses
                        </button>
                    </div>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <Plus className="w-4 h-4" />
                        Add New User
                    </button>
                </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80">
                <AdminChart
                    title="User Distribution by Role"
                    type="pie"
                    data={chartData}
                    dataKey="value"
                    xAxisKey="name"
                    colors={['#0f172a', '#334155', '#475569', '#94a3b8']}
                    height={250}
                />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search users by name or email..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-500/20"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-sm font-medium text-slate-600 transition-colors">
                        <Filter className="w-4 h-4" />
                        Role
                    </button>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Active</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-800">{user.name}</p>
                                            <p className="text-xs text-slate-500">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className="flex items-center gap-1 text-sm text-slate-600">
                                        <Shield className="w-3 h-3" />
                                        {user.role}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-slate-500">{user.lastActive}</td>
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

            {/* Add User Modal */}
            <AdminModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Add New User"
                maxWidth="max-w-2xl"
            >
                <form className="space-y-6">
                    {/* Personal Info */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Personal Information</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">First Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Last Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input type="email" className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input type="tel" className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="+94 77 123 4567" />
                            </div>
                        </div>
                    </div>

                    {/* Role & Security */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Role & Security</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Role</label>
                                <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none">
                                    {userRoles.map(role => (
                                        <option key={role} value={role}>{role}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Status</label>
                                <select className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none">
                                    {accountStatuses.map(status => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Temporary Password</label>
                            <input type="password" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 outline-none" placeholder="••••••••" />
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
                            Create User
                        </button>
                    </div>
                </form>
            </AdminModal>

            {/* Configuration Modals */}
            <ConfigModal
                isOpen={isRoleModalOpen}
                onClose={() => setIsRoleModalOpen(false)}
                title="Manage User Roles"
                items={userRoles}
                setItems={setUserRoles}
            />
            <ConfigModal
                isOpen={isStatusModalOpen}
                onClose={() => setIsStatusModalOpen(false)}
                title="Manage Account Statuses"
                items={accountStatuses}
                setItems={setAccountStatuses}
            />
        </div>
    );
}
