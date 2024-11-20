import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon: string; // This can also be a ReactNode if using icons as components
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 text-center">
      <div className="text-blue-500 text-3xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
