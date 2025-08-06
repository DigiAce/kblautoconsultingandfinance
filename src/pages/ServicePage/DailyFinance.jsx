import CTASection from "../../components/dailyfinance/CTASection";
import FeaturesBenefitsSection from "../../components/dailyfinance/FeaturesBenefitsSection";
import HeroSection from "../../components/dailyfinance/HeroSection";
import TargetAudienceSection from "../../components/dailyfinance/TargetAudienceSection";

const DailyFinance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      <HeroSection />
      <TargetAudienceSection />
      <FeaturesBenefitsSection />
      <CTASection />
    </div>
  );
};

export default DailyFinance;
