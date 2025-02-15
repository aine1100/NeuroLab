import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

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
    { name: "Home", path: "/" },
    { name: "Blog", path: "https://neurolablog.blogspot.com/" },
    { name: "Products", path: "/products" },
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

        <ol className="flex space-x-6 items-center justify-center -ml-[20rem]">
          {tabs.map((tab, index) => (
            <li key={index}>
              <NavLink
                to={tab.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-gray-600 hover:text-blue-500 transition-colors"
                }
              >
                {tab.name}
              </NavLink>
            </li>
          ))}
          <Button text="Download Apps" />
        </ol>
      </div>
    </nav>
  );
};

export default Header;
