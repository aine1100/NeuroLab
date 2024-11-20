import React from "react";

const Header: React.FC = () => {
  const tabs = [
    { name: "Home", path: "#" },
    { name: "About Us", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Doctors", path: "#doctors" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="py-4 bg-white h-[4rem] shadow-md">
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
