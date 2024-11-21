import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyUs from "./components/WhyChooseUs";
import DoctorsSection from "./components/DoctorsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import FadeInSection from "./components/FadeInSection";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <ServicesSection />
      </FadeInSection>
      <FadeInSection>
        <WhyUs />
      </FadeInSection>
      <FadeInSection>
        <DoctorsSection />
      </FadeInSection>
      <FadeInSection>
        <TestimonialsSection />
      </FadeInSection>
      <FadeInSection>
        <FAQSection />
      </FadeInSection>
    </div>
  );
};

export default App;
