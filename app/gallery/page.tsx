import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";




export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-stone-900">
            <Navbar />
            <GalleryHero />
            <GalleryGrid />
            <FooterSection waveColor="#1c1917" />
        </main>
    );
}
