import React from 'react';

export default function TermsAndConditions() {
    return (
        <div className="prose prose-neutral max-w-none">
            <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Terms & Conditions</h1>
            <p className="text-neutral-600 mb-8">
                Welcome to Bamboo Edge. These Terms and Conditions govern your use of our website and your stay at our property. By booking a stay or using our services, you agree to comply with these terms.
            </p>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">1. Booking Policy</h2>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                    <li><strong>Minimum Age:</strong> Guests must be at least 18 years of age to make a reservation.</li>
                    <li><strong>Payment:</strong> A full payment or a specified advance payment is required to confirm your booking.</li>
                    <li><strong>Confirmation:</strong> Your booking is confirmed only upon receipt of the required payment and a confirmation email from Bamboo Edge.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">2. Check-in & Check-out</h2>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                    <li><strong>Standard Check-in:</strong> 2:00 PM</li>
                    <li><strong>Standard Check-out:</strong> 11:00 AM</li>
                    <li><strong>Early Check-in / Late Check-out:</strong> Subject to availability and may incur additional charges. Please contact the front desk in advance.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">3. Identification</h2>
                <p className="text-neutral-600 mb-2">
                    In compliance with Sri Lankan law, all guests are required to present valid identification upon check-in:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                    <li><strong>Sri Lankan Citizens:</strong> National Identity Card (NIC).</li>
                    <li><strong>Foreign Nationals:</strong> Valid Passport.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">4. House Rules</h2>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                    <li><strong>Noise Levels:</strong> To maintain the serenity of our cabanas and respect other guests, please keep noise levels to a minimum after 10:00 PM.</li>
                    <li><strong>Smoking:</strong> Smoking is strictly prohibited inside the rooms. Designated smoking areas are available.</li>
                    <li><strong>Pets:</strong> Pets are generally not allowed to ensure the comfort of all guests. Please contact us prior to booking for any special exceptions.</li>
                    <li><strong>Conduct:</strong> We reserve the right to refuse service or request guests to leave if their behavior is deemed inappropriate or disruptive.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">5. Damages & Liability</h2>
                <p className="text-neutral-600">
                    Guests are responsible for any damage caused to the property, furniture, or fixtures during their stay. Bamboo Edge reserves the right to charge the guest's credit card or request cash payment for any such damages. Bamboo Edge is not liable for the loss of personal valuables; please use the in-room safes provided.
                </p>
            </section>
        </div>
    );
}
