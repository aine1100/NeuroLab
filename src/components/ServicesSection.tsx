import Card from "./Card";

const ServicesSection: React.FC = () => {
  const services = [
    { title: "EEG Data Management", description: "Upload, retrieve, and process EEG data efficiently, enabling seamless integration with patient profiles.", icon: "🧠" },
    { title: "Patient Profile Management", description: "Create, update, and manage patient profiles with ease, ensuring accurate and secure record-keeping.", icon: "🧠" },
    { title: "Real-Time Monitoring and Visualization", description: "Access real-time EEG monitoring dashboards and graphical visualizations to track brainwave trends effectively.", icon: "🧠" },
    { title: "AI-Powered Diagnosis", description: "Benefit from advanced AI models trained on EEG data to support accurate diagnoses and future predictions.", icon: "🧠" },
  ];

  return (
    <section className="py-16 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            height="200px"
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
