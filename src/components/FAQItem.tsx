import { useState } from "react";

interface CardProps {
  description: string;
  icon: string;
  explanation: string; 
}

export default function FaqCard({ description, icon, explanation }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex flex-col lg:w-[1200px] bg-white shadow-md rounded-lg p-4">
      <div className="flex lg:justify-between gap-10 items-center">
        <p className="text-gray-700">{description}</p>
        <div
          className="text-blue-500 text-2xl cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {icon}
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 text-gray-600 text-left">
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}
