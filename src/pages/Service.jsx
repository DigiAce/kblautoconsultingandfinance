import FAQSection from "../components/services/FAQSection";
import FinanceBanner from "../components/services/FinanceBanner";
import ZigZagCards from "../components/services/ZigZagCards";
import { servicesPageBanner } from "../data";

const Service = () => {
  return (
    <div>
      <FinanceBanner data={servicesPageBanner} />
      <ZigZagCards />
      <FAQSection />
    </div>
  );
};

export default Service;
