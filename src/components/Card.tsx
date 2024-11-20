
interface CardProps {
  title: string;
  description: string;
  icon: string; 
  height?: string; // Optional
  width?: string;  // Optional
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon, 
  width = "20rem", 
  height = "8rem" 
}) => {
  return (
    <div 
      className="flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-4 text-center" 
      style={{ width, height }} // Apply width and height dynamically
    >
      <div className="text-blue-500 text-3xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
