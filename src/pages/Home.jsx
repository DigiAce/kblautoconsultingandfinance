import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import WhyUsSection from "../components/home/WhyUsSection";
import Testimonials from "../components/home/Testimonials";
import ServiceSection from "../components/home/ServiceSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyUsSection />
      <Testimonials />
    </div>
  );
};

export default Home;
