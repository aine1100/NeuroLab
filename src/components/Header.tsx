import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("");

  // Sections for IntersectionObserver
  const sections = ["home", "about", "services", "team", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id); // Update activeTab when section is in view
          }
        });
      },
      observerOptions
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const tabs = [
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Team", path: "#team" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav
      className={`py-4 h-[4rem] shadow-md sticky top-0 transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-white bg-opacity-70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-10">
        <h1 className="text-[20px] font-bold text-blue-500">NeuroLab</h1>

        <ul className="flex space-x-6 -ml-[20rem]">
          {tabs.map((tab, index) => (
            <li key={index}>
              <a
                href={tab.path}
                className={`${
                  activeTab === tab.path.slice(1) ? "text-blue-500" : "text-gray-600"
                } hover:text-blue-500 transition-colors`}
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
