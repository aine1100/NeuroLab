import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { name: "Home", path: "#" },
    { name: "About Us", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Doctors", path: "#doctors" },
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
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-[20px] px-6 font-bold text-blue-500">NeuroLab</h1>

        <ul className="flex space-x-6 -ml-[20rem]">
          {tabs.map((tab, index) => (
            <li key={index}>
              <a
                href={tab.path}
                className="text-gray-600 hover:text-blue-500 transition-colors"
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
