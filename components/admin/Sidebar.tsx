'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    CalendarDays,
    Home,
    UtensilsCrossed,
    FileText,
    Users,
    BarChart3,
    LogOut,
    Package,
    Star,
    Mail
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SidebarItem {
    name: string;
    href: string;
    icon: LucideIcon;
}

const sidebarItems: SidebarItem[] = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Bookings', href: '/admin/bookings', icon: CalendarDays },
    { name: 'Rooms & Cabanas', href: '/admin/rooms', icon: Home },
    { name: 'Restaurant', href: '/admin/restaurant', icon: UtensilsCrossed },
    { name: 'Packages', href: '/admin/packages', icon: Package },
    { name: 'Reviews', href: '/admin/reviews', icon: Star },
    { name: 'Messages', href: '/admin/contact', icon: Mail },
    { name: 'Content (CMS)', href: '/admin/cms', icon: FileText },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Reports', href: '/admin/reports', icon: BarChart3 },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 overflow-y-auto z-50 hidden md:flex flex-col">
            <div className="p-6 border-b border-slate-800">
                <h1 className="text-2xl font-bold text-teal-400 font-serif">Bamboo Edge</h1>
                <p className="text-xs text-slate-400 mt-1">Admin Dashboard</p>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/20'
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                }`}
                        >
                            <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}`} />
                            <span className="font-medium text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-xl w-full transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium text-sm">Sign Out</span>
                </button>
            </div>
        </aside>
    );
}
