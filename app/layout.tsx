import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Bamboo Edge | Authentic Sri Lankan Dining & Lodging",
    description: "Experience the true taste of Sri Lanka at Bamboo Edge. Enjoy traditional cuisine and comfortable lodging in the heart of nature.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
