import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
// import WhyChooseUs from "./components/WhyChooseUs";
import DoctorsSection from "./components/DoctorsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import AppointmentForm from "./components/AppointmentForm";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <HeroSection />
      <ServicesSection />
      {/* <WhyChooseUs /> */}
      <DoctorsSection />
      <TestimonialsSection />
      <FAQSection />
      <AppointmentForm />
    </div>
  );
};

export default App;
