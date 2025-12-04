import EventsHero from "@/components/events/EventsHero";
import EventsList from "@/components/events/EventsList";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";



export default function EventsPage() {
    return (
        <main className="min-h-screen bg-stone-900">
            <Navbar />
            <EventsHero />
            <EventsList />
            <FooterSection waveColor="#1c1917" />
        </main>
    );
}
