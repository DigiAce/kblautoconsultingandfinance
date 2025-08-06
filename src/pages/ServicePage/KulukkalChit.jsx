import BenefitsSection from "../../components/Kulukkalchit/BenefitsSection";
import CTASection from "../../components/Kulukkalchit/CTASection";
import HeroSection from "../../components/Kulukkalchit/HeroSection";
import HowItWorksSection from "../../components/Kulukkalchit/HowItWorksSection";
import PlansSection from "../../components/Kulukkalchit/PlansSection";

const KulukkalChit = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <HeroSection />
      <PlansSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

export default KulukkalChit;
