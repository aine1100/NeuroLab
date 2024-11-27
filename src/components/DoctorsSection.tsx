
const DoctorSection = () => {
  const doctors = [
    {
      name: "Asimwe Landry",
      specialization: "Founder and Ceo",
      
    },
    {
      name: "Dushimire Aine",
      specialization: "Web and Mobile Developer",
     
    },
    {
      name: "Mugisha Prosper",
      specialization: "Data analyst and Backend Developer",
     
    },
    {
      name: "Uhirwe Esther Hope",
      specialization: "Frontend Developer ",
      
    }
    ,
    {
      name: "Atumanyire Winy",
      specialization: "Market research analyzer",
      
    },
  ];

  return (
    <div className="py-16 px-10">
      <div className="container mx-auto flex flex-col items-center gap-10">
        <h2 className="text-4xl text-gray-800 font-bold">Meet Our Team</h2>
        <p className="w-[40rem] text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nihil suscipit ipsam repudiandae delectus assumenda pariatur harum dolorum impedit earum placeat, reiciendis nam ab. Fuga ratione aspernatur aperiam rem distinctio?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 justify-center gap-10">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow- rounded-lg p-6"
            >
              <div className="h-cover w-cover  overflow-hidden mb-4">
                <img
                  src="/doctor.png"
                  alt={doctor.name}
                  className="h-full w-full object-cover"
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
