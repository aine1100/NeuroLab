import Card from './Card'
export default function WhyUs() {
    const numbers = [
        {
            number: 25,
            text: "Best Doctors"
        },
        {
            number: 3,
            text: "Clinical Locations"
        },
        {
            number: "150+",
            text: "Pasierts Capacity"
        }, {
            number: "1900+",
            text: "Pmienos Cared"
        }
    ];
    const cardContent = [
        {
            icon: "📸",
            title: "Get free consultation",
            descriptions: "lorem ipsum dolor sit amet, consectetur adipis ",
            width:"18rem",
            height:"18rem"

        }, {
            icon: "💖",
            title: "24 Hours services",
            descriptions: "lorem ipsum dolor sit amet, consectetur adipis",
            width:"18rem",
            height:"18rem"

        }, {
            icon: "💖",
            title: "Qualified Doctors",
            descriptions: "lorem ipsum dolor sit amet, consectetur adipis",
            width:"18rem",
            height:"18rem"

        }
    ]

    return (
        <section className="">
            <div className="container mx-auto text-center flex flex-wrap items-center justify-center gap-10 lg:gap-44">
                <div className="flex flex-col gap-20">
                    <h2 className="text-4xl font-bold text-gray-800 ">Why Choose Neuro <br />Lab</h2>
                    <p className='text-sm text-gray-500 md:w-[500px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam laudantium dolore assumenda temporibus enim itaque? Vero sint neque, incidunt fugit assumenda minima dolorum quo veniam, officiis reprehenderit repellendus voluptatum.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
                        {numbers.map((item, index) => (
                            <div key={index} className="p-6 border rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-blue-600">{item.number}</h3>
                                <p className="text-md text-gray-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div>

                    </div>



                </div>
                <div className=" flex gap-20 items-center  justify-center">
                    <div className="flex flex-col gap-5">
                        {
                            cardContent.slice(0, 2).map((item, index) => (
                                <Card key={index} icon={item.icon} title={item.title} description={item.descriptions} width={item.width} height={item.height} />
                            ))
                        }


                    </div>
                    {
                        cardContent.slice(2).map((item, index) => (
                            <Card key={index} icon={item.icon} title={item.title} description={item.descriptions} width={item.width} height={item.height}  />

                        ))
                    }
                </div>



            </div>

        </section>
    )

}