import Button from "./Button";

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-blue-50 py-16 px-10 h-screen w-auto"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 text-left">
          <h2 className="text-[50px] font-bold w-[25rem] text-gray-800">
            Complete Health Care Solution for Everyone
          </h2>
          <p className="text-gray-600 text-2xl w-auto lg:w-[55rem]">
            Providing comprehensive and compassionate care for you and your loved ones. Together, let’s create a healthier tomorrow.
          </p>
          <Button text="Book Now" className="w-[200px] h-[50px]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
