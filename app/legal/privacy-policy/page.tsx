import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="prose prose-neutral max-w-none">
            <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Privacy Policy</h1>
            <p className="text-neutral-600 mb-8">
                At Bamboo Edge, we value your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and safeguard your information.
            </p>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">1. Data Collection</h2>
                <p className="text-neutral-600 mb-2">We collect the following information when you make a reservation or interact with our website:</p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                    <li>Full Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Payment Details (processed securely via our payment gateway)</li>
                    <li>National Identity Card (NIC) or Passport Number (upon check-in)</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">2. Usage of Data</h2>
                <p className="text-neutral-600 mb-2">Your data is used primarily for:</p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                    <li>Processing and confirming your bookings.</li>
                    <li>Communicating with you regarding your stay.</li>
                    <li>Sending you exclusive offers and updates (Marketing), provided you have opted in.</li>
                    <li>Complying with legal obligations.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">3. Third-Party Sharing</h2>
                <p className="text-neutral-600 mb-2">
                    We do <strong>not</strong> sell or trade your personal information to outside parties. We only share data with:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                    <li><strong>Payment Gateways (e.g., PayHere):</strong> To process secure transactions.</li>
                    <li><strong>Government Authorities:</strong> When required by Sri Lankan law for tourism and security purposes.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">4. Data Security</h2>
                <p className="text-neutral-600">
                    We implement a variety of security measures to maintain the safety of your personal information. Our website uses SSL (Secure Socket Layer) encryption to ensure that your sensitive data is transmitted securely.
                </p>
            </section>
        </div>
    );
}
