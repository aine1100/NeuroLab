
const DoctorSection = () => {
  const doctors = [
    {
      name: "Asimwe Landry",
      image:"/boys\.jpg",
      specialization: "Founder and Ceo",
      
    },
    {
      name: "Dushimire Aine",
      image:"/boys\.jpg",
      specialization: "Web and Mobile Developer",
     
    },
    {
      name: "Mugisha Prosper",
      image:"/boys\.jpg",
      specialization: "Data analyst and Backend Developer",
     
    },
    {
      name: "Uhirwe Esther Hope",
      image:"/gals.jpg",
      specialization: "Frontend Developer ",
      
    }
    ,
    {
      name: "Atumanyire Winy",
      image:"./gals.jpg",
      specialization: "Market research analyzer",
      
    },
  ];

  return (
    <div className="py-16 px-10">
      <div className="container mx-auto flex flex-col items-center gap-10">
        <h2 className="text-4xl text-gray-800 font-bold">Meet Our Team</h2>
        <p className="w-[40rem] text-center text-gray-500">At NeuroLab, we take pride in our diverse and skilled team of professionals dedicated to advancing brain health and mental well-being. Each member brings unique expertise, passion, and a commitment to innovation, ensuring we deliver the best solutions for our users.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 justify-center gap-10">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow- rounded-lg p-6"
            >
              <div className="h-cover w-cover  overflow-hidden mb-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {doctor.name}
              </h3>
              <p className="text-sm text-gray-600">{doctor.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorSection;
