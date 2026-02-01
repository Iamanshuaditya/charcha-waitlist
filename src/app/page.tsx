import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import ProductPreview from "@/components/sections/product-preview";
import WhyChacha from "@/components/sections/why-chacha";
import ForCreators from "@/components/sections/for-creators";
import EventMode from "@/components/sections/event-mode";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />
      <HeroSection />
      <WhyChacha />
      <ProductPreview />
      <ForCreators />
      <EventMode />
      <Footer />
    </main>
  );
}
