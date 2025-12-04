import HeroSection from "@/components/HeroSection";
import WelcomeParallaxSection from "@/components/WelcomeParallaxSection";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import BookingBar from "@/components/BookingBar";
import RoomsSuites from "@/components/RoomsSuites";
import PackagesSection from "@/components/PackagesSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import LocationSection from "@/components/LocationSection";
import ReviewSection from "@/components/ReviewSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#fffbeb]">
            <HeroSection />

            <div className="relative z-40 -mt-6 px-4">
                <BookingBar />
            </div>
            <HorizontalScrollSection />
            <PackagesSection />
            <WelcomeParallaxSection />
            <RoomsSuites />
            <ExperiencesSection />
            <ReviewSection />
            <LocationSection />
            <ContactSection />
            <FooterSection />
        </main>
    );
}
