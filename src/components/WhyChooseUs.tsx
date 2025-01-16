import Card from './Card'
export default function WhyUs() {
    const numbers = [
        {
            number: 25,
            text: "Best Experts"
        },
        {
            number: 3,
            text: "Clinical Locations"
        },
        {
            number: "15000+",
            text: "Patient Helped"
        }, {
            number: "10+",
            text: "Patner Countries"
        }
    ];
    const cardContent = [
        {
            icon: "🧠",
            title: " Know Your Mental Status",
            descriptions: "Gain insights into your brain health with advanced EEG data analysis and visualizations.",
            width:"18rem",
            height:"18rem"

        }, {
            icon: "🧑‍🏫",
            title: "Qualified Experts",
            descriptions: "Our experienced professionals specialize in brainwave analysis and mental health support.",
            width:"18rem",
            height:"18rem"

        }, {
            icon: "🕧",
            title: "24/7 Service",
            descriptions: "Reliable support and continuous care available anytime, ensuring your peace of mind",
            width:"18rem",
            height:"18rem"

        }
    ]

    return (
        <section className="">
            <div className="container mx-auto text-center flex flex-wrap items-center justify-center gap-10 lg:gap-44">
                <div className="flex flex-col gap-20">
                    <h2 className="text-4xl font-bold text-gray-800 ">Why Choose Neuro <br />Lab</h2>
                    <p className='text-sm text-gray-500 md:w-[500px]'>NeuroLab is dedicated to revolutionizing brain health and EEG data analysis through innovative, user-friendly solutions. Our team of experts combines advanced technology with practical insights to create tools that empower healthcare professionals and researchers. Choose us for cutting-edge brainwave visualization, real-time data processing, and a commitment to improving lives through science and innovation.</p>
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