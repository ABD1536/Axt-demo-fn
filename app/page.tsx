import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import AboutSection from "@/components/AboutSection";
import ParallaxVideoSection from "@/components/ParallaxVideoSection";
import ServicesSection from "@/components/ServicesSection";
import WorkHighlightSection from "@/components/WorkHighlightSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <MarqueeBanner />
        <AboutSection />
        <ParallaxVideoSection />
        <ServicesSection />
        <WorkHighlightSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
