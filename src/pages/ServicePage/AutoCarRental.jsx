import BenefitsSection from "../../components/autorental/BenefitsSection";
import CTASection from "../../components/autorental/CTASection";
import HeroSection from "../../components/autorental/HeroSection";
import VehicleTypesSection from "../../components/autorental/VehicleTypesSection";

const AutoCarRental = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <HeroSection />
      <VehicleTypesSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

export default AutoCarRental;
