import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import VideoPreview from "@/components/sections/video-preview";
import FAQSection from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import FloatingWidget from "@/components/sections/floating-widget";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VideoPreview />
      <FAQSection />
      <Footer />
      <FloatingWidget />
    </main>
  );
}
