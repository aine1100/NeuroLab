
const TestimonialsSection = () => {
  const Testimonials=[
    {
      name: "John Doe",
      company: "ABC Health",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero id lectus ultricies faucibus. Nulla facilisi. Sed vel felis at nunc viverra faucibus. Maecenas sed arcu vel sapien ultricies ultricies. Nulla facilisi. Sed vel felis at nunc viverra faucibus."        
    },
    {
      name: "John Doe",
      company: "ABC Health",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero id lectus ultricies faucibus. Nulla facilisi. Sed vel felis at nunc viverra faucibus. Maecenas sed arcu vel sapien ultricies ultricies. Nulla facilisi. Sed vel felis at nunc viverra faucibus."        
    },
  ]
  return (
    <section className="py-16" >
      <div className="container mx-auto flex flex-col gap-10 items-center">
        <h2 className="text-4xl text-gray-800 font-bold">Testimonials</h2>
        <p className="w-[40rem] text-center text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima laudantium at nisi, quas ducimus nulla blanditiis ut quis excepturi doloribus quaerat incidunt, optio, neque amet! Labore consequuntur aliquam nulla nostrum!</p>
      </div>


    </section>
  )
}

export default TestimonialsSection