import BenefitsSection from "../../components/Mortgage/BenefitsSection";
import HeroSection from "../../components/Mortgage/HeroSection";
import SecuritySection from "../../components/Mortgage/SecuritySection";

const MortgageLoans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <HeroSection />
      <BenefitsSection />
      <SecuritySection />
    </div>
  );
};

export default MortgageLoans;
