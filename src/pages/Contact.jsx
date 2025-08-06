import ContactForm from "../components/contact/Contact";
import FinanceBanner from "../components/services/FinanceBanner";
import { ContactBanner } from "../data";

const Contact = () => {
  return (
    <div>
      <FinanceBanner data={ContactBanner} />
      <ContactForm />
    </div>
  );
};

export default Contact;
