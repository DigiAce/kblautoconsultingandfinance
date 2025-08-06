import BenefitsSection from "../../components/weekly/BenefitsSection";
import CTASection from "../../components/weekly/CTASection";
import HeroSection from "../../components/weekly/HeroSection";

const WeeklyFinance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <HeroSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

export default WeeklyFinance;
