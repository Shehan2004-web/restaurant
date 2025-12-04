'use client';

import { usePathname } from 'next/navigation';
import AdminSidebar from '@/components/admin/Sidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isLoginPage = pathname === '/admin/login';

    return (
        <div className="min-h-screen bg-slate-50">
            {!isLoginPage && <AdminSidebar />}
            <main className={`${!isLoginPage ? 'md:ml-64' : ''} min-h-screen transition-all duration-300`}>
                {/* Mobile Header - Only show if not login page */}
                {!isLoginPage && (
                    <div className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center sticky top-0 z-40">
                        <span className="font-bold font-serif">Bamboo Edge Admin</span>
                        {/* Mobile Menu Toggle would go here */}
                    </div>
                )}

                <div className={`${!isLoginPage ? 'p-4 md:p-8 max-w-7xl mx-auto' : ''}`}>
                    {children}
                </div>
            </main>
        </div>
    );
}
