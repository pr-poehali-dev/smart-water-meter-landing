import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesAdvantages from "@/components/landing/FeaturesAdvantages";
import ContactsSection from "@/components/landing/ContactsSection";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: "#080d14", color: "#d0e8f0" }}>
      <Navbar />
      <HeroSection />
      <FeaturesAdvantages />
      <ContactsSection />
    </div>
  );
}
