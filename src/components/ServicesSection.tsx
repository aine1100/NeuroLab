import Card from "./Card";

const ServicesSection: React.FC = () => {
  const services = [
    { title: "Cardiology", description: "Heart health services", icon: "💖" },
    { title: "Neurology", description: "Brain health services", icon: "🧠" },
    { title: "Dentistry", description: "Dental care services", icon: "🦷" },
    { title: "X-ray", description: "Radiology services", icon: "📸" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
