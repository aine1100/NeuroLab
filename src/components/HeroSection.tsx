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
      <div className="container mx-auto lg:mt-10">
        <div className="grid grid-cols-1 gap-8 text-left">
          <h2 className="text-[50px] font-bold w-[25rem] text-gray-800">
          Healthy Minds, Strong society
          </h2>
          <p className="text-gray-600 text-2xl w-auto lg:w-[50rem]">
          Track your Mental Health Status with ease
            Providing comprehensive and compassionate care for you and your loved ones. Together, let’s create a healthier tomorrow.
          </p>
          <Button text="Get Started" className="w-[200px] h-[50px]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
