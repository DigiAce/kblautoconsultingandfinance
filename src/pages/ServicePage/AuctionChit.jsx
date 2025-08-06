import AuctionProcessSection from "../../components/auctionchit/AuctionProcessSection";
import BenefitsSection from "../../components/auctionchit/BenefitsSection";
import CTASection from "../../components/auctionchit/CTASection";
import HeroSection from "../../components/auctionchit/HeroSection";

const AuctionChitFund = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <HeroSection />
      <AuctionProcessSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

export default AuctionChitFund;
