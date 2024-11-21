const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      company: "ABC Health",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero id lectus ultricies faucibus. Nulla facilisi. Sed vel felis at nunc viverra faucibus. Maecenas sed arcu vel sapien ultricies ultricies.",
    },
    {
      name: "Jane Smith",
      company: "XYZ Wellness",
      review:
        "Sed vel felis at nunc viverra faucibus. Maecenas sed arcu vel sapien ultricies ultricies. Nulla facilisi. Sed in libero id lectus ultricies faucibus.",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto flex flex-col gap-10 items-center">
        <h2 className="text-4xl text-gray-800 font-bold">Testimonials</h2>
        <p className="max-w-2xl text-center text-gray-600">
          See what our clients have to say about our services and their
          experience with us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-6 md:px-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start"
            >
              <img src="/hero.png" alt="" className="w-20 h-20 rounded-full" />
              <p className="text-gray-600 italic mb-4">"{testimonial.review}"</p>
              <div className="mt-auto">
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
