import React from 'react';

export default function CookiePolicy() {
    return (
        <div className="prose prose-neutral max-w-none">
            <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Cookie Policy</h1>
            <p className="text-neutral-600 mb-8">
                This Cookie Policy explains what cookies are, how we use them on the Bamboo Edge website, and how you can manage them.
            </p>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">What are Cookies?</h2>
                <p className="text-neutral-600">
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help the website function properly and provide a better user experience.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">How We Use Cookies</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-bold text-neutral-800">Essential Cookies</h3>
                        <p className="text-neutral-600">These cookies are necessary for the website to function. They enable core features such as the booking system, secure logins, and session management. You cannot opt-out of these cookies as the site cannot function without them.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-neutral-800">Analytics Cookies</h3>
                        <p className="text-neutral-600">We use tools like Google Analytics to understand how visitors interact with our website. These cookies help us track the number of visitors, pages visited, and traffic sources, allowing us to improve our services.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">Managing Cookies</h2>
                <p className="text-neutral-600">
                    Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, please note that disabling cookies may prevent you from taking full advantage of the website, including making reservations.
                </p>
            </section>
        </div>
    );
}
