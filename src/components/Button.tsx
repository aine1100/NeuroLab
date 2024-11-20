import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
