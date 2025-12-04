import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col">
            <Navbar alwaysSolid={true} />
            <div className="pt-24 pb-12 flex-grow">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-100">
                        {children}
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    );
}
