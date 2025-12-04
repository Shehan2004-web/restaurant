'use client';

import { Download, Upload, Calendar } from 'lucide-react';
import AdminChart from '@/components/admin/AdminChart';

const revenueData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
];

const expenseData = [
    { name: 'Jan', value: 2400 },
    { name: 'Feb', value: 1398 },
    { name: 'Mar', value: 9800 },
    { name: 'Apr', value: 3908 },
    { name: 'May', value: 4800 },
    { name: 'Jun', value: 3800 },
    { name: 'Jul', value: 4300 },
];

const sourceData = [
    { name: 'Website', value: 400 },
    { name: 'Booking.com', value: 300 },
    { name: 'Airbnb', value: 300 },
    { name: 'Direct', value: 200 },
];

export default function ReportsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 font-serif">Reports & Analytics</h1>
                    <p className="text-slate-500 mt-1">Comprehensive insights into business performance.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                        <Upload className="w-4 h-4" />
                        Import Data
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-xl text-sm font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-900/20">
                        <Download className="w-4 h-4" />
                        Export Report
                    </button>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Total Revenue', value: '$124,500', change: '+12%', color: 'text-emerald-600' },
                    { label: 'Total Bookings', value: '1,240', change: '+8%', color: 'text-blue-600' },
                    { label: 'Avg. Occupancy', value: '85%', change: '+5%', color: 'text-amber-600' },
                    { label: 'Net Profit', value: '$45,200', change: '+15%', color: 'text-teal-600' },
                ].map((metric, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <p className="text-sm text-slate-500 font-medium">{metric.label}</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">{metric.value}</h3>
                        <p className={`text-xs font-bold mt-2 ${metric.color}`}>{metric.change} from last month</p>
                    </div>
                ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Trend */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-96">
                    <AdminChart
                        title="Total Revenue Trend"
                        type="area"
                        data={revenueData}
                        dataKey="value"
                        xAxisKey="name"
                        colors={['#0d9488']}
                        height={320}
                    />
                </div>

                {/* Expenses vs Profit */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-96">
                    <AdminChart
                        title="Expenses Overview"
                        type="bar"
                        data={expenseData}
                        dataKey="value"
                        xAxisKey="name"
                        colors={['#f43f5e']}
                        height={320}
                    />
                </div>

                {/* Booking Sources */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-96">
                    <AdminChart
                        title="Booking Sources"
                        type="pie"
                        data={sourceData}
                        dataKey="value"
                        xAxisKey="name"
                        colors={['#0d9488', '#3b82f6', '#f59e0b', '#64748b']}
                        height={320}
                    />
                </div>

                {/* Customer Demographics */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-96">
                    <AdminChart
                        title="Customer Demographics (Age Group)"
                        type="bar"
                        data={[
                            { name: '18-25', value: 20 },
                            { name: '26-35', value: 45 },
                            { name: '36-45', value: 25 },
                            { name: '46+', value: 10 },
                        ]}
                        dataKey="value"
                        xAxisKey="name"
                        colors={['#8b5cf6']}
                        height={320}
                    />
                </div>
            </div>
        </div>
    );
}
