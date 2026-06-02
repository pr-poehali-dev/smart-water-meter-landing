import Navbar from "@/components/landing/Navbar";
import BannerCarousel from "@/components/landing/BannerCarousel";
import ReliabilitySection from "@/components/landing/ReliabilitySection";
import ConnectivitySection from "@/components/landing/ConnectivitySection";
import ContactsSection from "@/components/landing/ContactsSection";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: "#f0f7ff", color: "#0d1b2a" }}>
      <Navbar />
      <div className="pt-[60px]">
        <BannerCarousel />
        <ReliabilitySection />
        <ConnectivitySection />
        <ContactsSection />
      </div>
    </div>
  );
}
