import Card from './Card'
export default function WhyUs(){
    const numbers = [
        {
            number: 25,
            text: "Best Doctors"
        },
        {
            number:3,
            text:"Clinical Locations"
        },
        {
            number:"150+",
            text:"Pasierts Capacity"
        },{
            number:"1900+",
            text:"Pmienos Cared"
        }
    ];
    const cardContent=[
        {
            icon:"/icon1.png",
            title:"Get free consultation",
            descriptions:"lorem ipsum dolor sit amet, consectetur adipis"
        },{
            icon:"/icon1.png",
            title:"24 Hours services",
            descriptions:"lorem ipsum dolor sit amet, consectetur adipis"
        },{
            icon:"/icon1.png",
            title:"Qualified Doctors",
            descriptions:"lorem ipsum dolor sit amet, consectetur adipis"
        }
    ]
    
     return(
        <section className="">
            <div className="container mx-auto text-center flex justify-center itens-center gap-20">
                <div className="flex flex-col gap-5">
                    <h2 className="text-4xl font-bold text-gray-800 ">Why Choose Our <br/>clinic</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
                        {numbers.map((item, index) => (
                            <div key={index} className="p-4 border rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-blue-600">{item.number}</h3>
                                <p className="text-md text-gray-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div>

                    </div>
                    <div className=" flex gap-5">
                        <div className="flex flex-col gap-5">
                            {
                                cardContent.slice(0,2).map((item, index) => (
                                    <Card key={index} icon={item.icon} title={item.title} description={item.descriptions} />
                                ))
                            }

                        </div>
                        {
                            cardContent.slice(2).map((item, index) => (
                                <Card key={index} icon={item.icon} title={item.title} description={item.descriptions} />
                            ))
                         }
                        
                    
                    </div>

                   

                </div>


            </div>

        </section>
    )

}