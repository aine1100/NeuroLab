import Button from "./Button";

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-blue-50 py-16"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center justify-center content-center">
        <h2 className="text-4xl w-[20rem] text-left font-bold text-gray-800">Complete Health Care Solution for Everyone</h2>
        <p className="text-gray-600 mt-4">Providing comprehensive and compassionate care for you and your loved ones. Together, let’s create a healthier tomorrow. </p>
        <Button text="Book Now" className="mt-6" />
      </div>
    </section>
  );
};

export default HeroSection;
