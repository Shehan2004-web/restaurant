'use client';

import { useState } from 'react';
import { Search, Filter, MoreVertical, Star, CheckCircle, XCircle, Trash2 } from 'lucide-react';
import AdminModal from '@/components/admin/AdminModal';

const reviews = [
    { id: 1, user: 'Sarah Jenkins', rating: 5, comment: 'Absolutely amazing experience! The cabana was perfect.', date: '2024-03-15', status: 'Approved' },
    { id: 2, user: 'Michael Chen', rating: 4, comment: 'Great food, but service was a bit slow.', date: '2024-03-16', status: 'Pending' },
    { id: 3, user: 'Emma Wilson', rating: 5, comment: 'Best vacation ever. Highly recommend!', date: '2024-03-18', status: 'Approved' },
    { id: 4, user: 'James Rodriguez', rating: 2, comment: 'Room was not clean upon arrival.', date: '2024-03-20', status: 'Rejected' },
    { id: 5, user: 'Lisa Wong', rating: 5, comment: 'Loved the private pool!', date: '2024-03-22', status: 'Pending' },
];

export default function ReviewManager() {
    const [selectedReview, setSelectedReview] = useState<any>(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    const handleViewReview = (review: any) => {
        setSelectedReview(review);
        setIsViewModalOpen(true);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 font-serif">Review Management</h1>
                    <p className="text-slate-500 mt-1">Moderate and manage customer reviews.</p>
                </div>
                <div className="flex gap-3">
                    {/* Stats Cards could go here */}
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search reviews..."
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
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Rating</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Comment</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {reviews.map((review) => (
                            <tr key={review.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer" onClick={() => handleViewReview(review)}>
                                <td className="p-4 font-medium text-slate-800">{review.user}</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-1 text-amber-400">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="text-slate-700 font-bold text-sm">{review.rating}</span>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-slate-600 max-w-xs truncate">{review.comment}</td>
                                <td className="p-4 text-sm text-slate-500">{review.date}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${review.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                                            review.status === 'Rejected' ? 'bg-rose-100 text-rose-700' :
                                                'bg-amber-100 text-amber-700'
                                        }`}>
                                        {review.status}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="p-2 hover:bg-emerald-50 text-emerald-600 rounded-lg transition-colors" title="Approve">
                                            <CheckCircle className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-rose-50 text-rose-600 rounded-lg transition-colors" title="Reject">
                                            <XCircle className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-lg transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* View Review Modal */}
            {selectedReview && (
                <AdminModal
                    isOpen={isViewModalOpen}
                    onClose={() => setIsViewModalOpen(false)}
                    title="Review Details"
                    maxWidth="max-w-lg"
                >
                    <div className="space-y-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">{selectedReview.user}</h3>
                                <p className="text-sm text-slate-500">{selectedReview.date}</p>
                            </div>
                            <div className="flex items-center gap-1 text-amber-400 bg-amber-50 px-3 py-1 rounded-full">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="font-bold text-slate-800">{selectedReview.rating}/5</span>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <p className="text-slate-700 leading-relaxed">"{selectedReview.comment}"</p>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${selectedReview.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                                    selectedReview.status === 'Rejected' ? 'bg-rose-100 text-rose-700' :
                                        'bg-amber-100 text-amber-700'
                                }`}>
                                Status: {selectedReview.status}
                            </span>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-medium">
                                    Approve
                                </button>
                                <button className="px-4 py-2 bg-rose-100 text-rose-700 rounded-xl hover:bg-rose-200 transition-colors font-medium">
                                    Reject
                                </button>
                            </div>
                        </div>
                    </div>
                </AdminModal>
            )}
        </div>
    );
}
