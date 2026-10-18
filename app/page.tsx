import BootcampProgramsSection from "./components/BootcampProgramsSection";
import BootcampStructure from "./components/BootcampStructure";
import CoreSystemSection from "./components/CoreSystemSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import MasterySummarySection from "./components/MasterySummarySection";
import AccelerationSection from "./components/AccelerationSection";
import OutcomesSection from "./components/OutcomesSection";
import ApplySection from "./components/ApplySection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PricingTabsSection from "./components/PricingTabsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-ebony text-slate-100">
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-intl-orange/10 blur-3xl" />
          <div className="absolute top-40 -right-20 h-96 w-96 rounded-full bg-cerulean/10 blur-3xl" />
        </div>

        <main>
          <HeroSection />
          <BootcampProgramsSection />
          <BootcampStructure />
          <PricingTabsSection />
          <CoreSystemSection />
          <JourneySection />
          <MasterySummarySection />
          <AccelerationSection />
          <OutcomesSection />
          <ApplySection />
          <FAQSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
