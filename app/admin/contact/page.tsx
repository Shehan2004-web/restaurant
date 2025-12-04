'use client';

import { useState } from 'react';
import { Search, Filter, MoreVertical, Mail, Eye, Trash2 } from 'lucide-react';
import AdminModal from '@/components/admin/AdminModal';

const messages = [
    { id: 1, name: 'David Miller', email: 'david@example.com', subject: 'Wedding Inquiry', message: 'Hi, we are planning a wedding for 50 guests...', date: '2024-03-24', status: 'Unread' },
    { id: 2, name: 'Sarah Connor', email: 'sarah@example.com', subject: 'Booking Question', message: 'Do you offer airport pickup?', date: '2024-03-23', status: 'Read' },
    { id: 3, name: 'John Smith', email: 'john@example.com', subject: 'Event Hosting', message: 'I would like to host a corporate retreat...', date: '2024-03-22', status: 'Replied' },
];

export default function ContactManager() {
    const [selectedMessage, setSelectedMessage] = useState<any>(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    const handleViewMessage = (message: any) => {
        setSelectedMessage(message);
        setIsViewModalOpen(true);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 font-serif">Contact Inquiries</h1>
                    <p className="text-slate-500 mt-1">View and manage messages from the contact form.</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search messages..."
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
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Sender</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {messages.map((msg) => (
                            <tr key={msg.id} className={`hover:bg-slate-50/50 transition-colors cursor-pointer ${msg.status === 'Unread' ? 'bg-slate-50' : ''}`} onClick={() => handleViewMessage(msg)}>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${msg.status === 'Unread' ? 'bg-teal-600' : 'bg-slate-400'}`}>
                                            {msg.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className={`font-medium ${msg.status === 'Unread' ? 'text-slate-900' : 'text-slate-700'}`}>{msg.name}</p>
                                            <p className="text-xs text-slate-500">{msg.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-slate-700 font-medium">{msg.subject}</td>
                                <td className="p-4 text-sm text-slate-500">{msg.date}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${msg.status === 'Unread' ? 'bg-teal-100 text-teal-700' :
                                            msg.status === 'Replied' ? 'bg-emerald-100 text-emerald-700' :
                                                'bg-slate-100 text-slate-500'
                                        }`}>
                                        {msg.status}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-rose-500 transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* View Message Modal */}
            {selectedMessage && (
                <AdminModal
                    isOpen={isViewModalOpen}
                    onClose={() => setIsViewModalOpen(false)}
                    title="Message Details"
                    maxWidth="max-w-lg"
                >
                    <div className="space-y-6">
                        <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">{selectedMessage.subject}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-sm font-medium text-slate-700">{selectedMessage.name}</span>
                                    <span className="text-sm text-slate-400">&lt;{selectedMessage.email}&gt;</span>
                                </div>
                            </div>
                            <span className="text-sm text-slate-500">{selectedMessage.date}</span>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 min-h-[150px]">
                            <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{selectedMessage.message}</p>
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                            <button className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 font-medium">
                                Mark as Unread
                            </button>
                            <button className="px-4 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors font-medium flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Reply via Email
                            </button>
                        </div>
                    </div>
                </AdminModal>
            )}
        </div>
    );
}
