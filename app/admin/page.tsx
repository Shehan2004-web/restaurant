'use client';

import {
    TrendingUp,
    Users,
    CalendarCheck,
    Utensils,
    ArrowUpRight,
    ArrowDownRight,
    Clock
} from 'lucide-react';

const KPICard = ({ title, value, change, trend, icon: Icon, color }: any) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
                <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
            </div>
            {trend === 'up' ? (
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
                    +{change}% <ArrowUpRight className="w-3 h-3" />
                </div>
            ) : (
                <div className="flex items-center gap-1 text-rose-600 text-xs font-bold bg-rose-50 px-2 py-1 rounded-full">
                    {change}% <ArrowDownRight className="w-3 h-3" />
                </div>
            )}
        </div>
        <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
        <p className="text-2xl font-bold text-slate-800">{value}</p>
    </div>
);

const ActivityItem = ({ title, time, type }: any) => (
    <div className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors border-b border-slate-50 last:border-0">
        <div className={`w-2 h-2 mt-2 rounded-full ${type === 'booking' ? 'bg-teal-500' :
                type === 'order' ? 'bg-amber-500' : 'bg-blue-500'
            }`} />
        <div className="flex-1">
            <p className="text-sm font-medium text-slate-800">{title}</p>
            <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3" /> {time}
            </p>
        </div>
    </div>
);

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-slate-800 font-serif">Dashboard Overview</h1>
                <p className="text-slate-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard
                    title="Total Revenue"
                    value="$12,450"
                    change="12.5"
                    trend="up"
                    icon={TrendingUp}
                    color="bg-emerald-500"
                />
                <KPICard
                    title="Active Bookings"
                    value="24"
                    change="8.2"
                    trend="up"
                    icon={CalendarCheck}
                    color="bg-blue-500"
                />
                <KPICard
                    title="Check-ins Today"
                    value="12"
                    change="2.1"
                    trend="down"
                    icon={Users}
                    color="bg-purple-500"
                />
                <KPICard
                    title="Active Orders"
                    value="8"
                    change="5.4"
                    trend="up"
                    icon={Utensils}
                    color="bg-amber-500"
                />
            </div>

            {/* Charts & Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Occupancy Chart Placeholder */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-slate-800">Occupancy Overview</h2>
                        <select className="text-sm border-none bg-slate-50 rounded-lg px-3 py-1 text-slate-600 outline-none cursor-pointer">
                            <option>This Week</option>
                            <option>This Month</option>
                        </select>
                    </div>

                    {/* Visual Chart Representation (CSS/HTML only for now) */}
                    <div className="h-64 flex items-end gap-4 justify-between px-2">
                        {[65, 45, 75, 55, 85, 90, 70].map((height, i) => (
                            <div key={i} className="w-full bg-slate-50 rounded-t-xl relative group">
                                <div
                                    className="absolute bottom-0 left-0 w-full bg-teal-500 rounded-t-xl transition-all duration-500 group-hover:bg-teal-600"
                                    style={{ height: `${height}%` }}
                                />
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-lg font-bold text-slate-800 mb-4">Recent Activity</h2>
                    <div className="space-y-1">
                        <ActivityItem
                            title="New booking from Sarah Jenkins"
                            time="2 mins ago"
                            type="booking"
                        />
                        <ActivityItem
                            title="Order #1234 served at Table 5"
                            time="15 mins ago"
                            type="order"
                        />
                        <ActivityItem
                            title="New review received (5 Stars)"
                            time="1 hour ago"
                            type="other"
                        />
                        <ActivityItem
                            title="Check-out completed: Room 102"
                            time="2 hours ago"
                            type="booking"
                        />
                        <ActivityItem
                            title="Kitchen supply alert: Tomatoes low"
                            time="3 hours ago"
                            type="order"
                        />
                    </div>
                    <button className="w-full mt-4 text-sm text-teal-600 font-medium hover:text-teal-700 transition-colors">
                        View All Activity →
                    </button>
                </div>
            </div>
        </div>
    );
}
