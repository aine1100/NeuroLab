import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyUs from "./components/WhyChooseUs";
import DoctorsSection from "./components/DoctorsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import FadeInSection from "./components/FadeInSection";
import Contact from "./components/contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <FadeInSection>
        <div id="home">
          <HeroSection />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id="about">
          <ServicesSection />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id="services">
          <WhyUs />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id="team">
          <DoctorsSection />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id="faq">
          <FAQSection />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id="contact">
          <Contact />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id="footer">
          <Footer />
        </div>
      </FadeInSection>
    </div>
  );
};

export default App;
