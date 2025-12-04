import React from 'react';

export default function RefundPolicy() {
    return (
        <div className="prose prose-neutral max-w-none">
            <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Cancellation & Refund Policy</h1>
            <p className="text-neutral-600 mb-8">
                We understand that plans can change. Our cancellation policy is designed to be fair to both our guests and our business operations.
            </p>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">Cancellation Timeframes</h2>
                <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <h3 className="font-bold text-green-800">Full Refund</h3>
                        <p className="text-green-700">Cancellations made <strong>7 days or more</strong> prior to the scheduled arrival date will receive a 100% refund.</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                        <h3 className="font-bold text-yellow-800">Partial Refund</h3>
                        <p className="text-yellow-700">Cancellations made <strong>3 to 6 days</strong> prior to the scheduled arrival date will receive a 50% refund.</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                        <h3 className="font-bold text-red-800">No Refund</h3>
                        <p className="text-red-700">Cancellations made <strong>within 24 hours</strong> of arrival or in the case of a <strong>No-Show</strong> will not be eligible for a refund.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">Refund Process</h2>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                    <li><strong>Processing Time:</strong> Approved refunds will be processed within <strong>5-7 working days</strong>.</li>
                    <li><strong>Bank Charges:</strong> Please note that any bank charges or transaction fees incurred during the initial payment or refund process will be deducted from the refund amount.</li>
                    <li><strong>Method:</strong> Refunds will be issued to the original payment method used during booking.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">Force Majeure</h2>
                <p className="text-neutral-600">
                    In the event of natural disasters, government-imposed travel restrictions, or other uncontrollable emergencies (Force Majeure) that prevent you from honoring your booking, we offer a <strong>Date Change Only</strong> policy. You may reschedule your stay for a future date, subject to availability and seasonal rate adjustments, instead of a monetary refund.
                </p>
            </section>
        </div>
    );
}
