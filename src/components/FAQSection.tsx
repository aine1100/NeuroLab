import FaqCard from "./FAQItem"
const FAQSection = () => {
  const faq=[
    {
      description:"why did you choose to make neurolab",
      icon:"+",
      explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero felis, semper at turpis vel, pellentesque congue lectus. Integer vitae condimentum ipsum. Mauris vel convallis mauris."
    },
    {
      description:"why did you choose to make neurolab",
      icon:"+",
      explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero felis, semper at turpis vel, pellentesque congue lectus. Integer vitae condimentum ipsum. Mauris vel convallis mauris."

    },
    {
      description:"why did you choose to make neurolab",
      icon:"+",
      explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero felis, semper at turpis vel, pellentesque congue lectus. Integer vitae condimentum ipsum. Mauris vel convallis mauris."

    }
    ,
    {
      description:"why did you choose to make neurolab",
      icon:"+",
      explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero felis, semper at turpis vel, pellentesque congue lectus. Integer vitae condimentum ipsum. Mauris vel convallis mauris."

    }
  ]
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col gap-10 items-center">
      <h2 className="text-4xl text-gray-800 font-bold">Frequently Asked Questions</h2>
      <p className='text-sm text-gray-500 md:w-[40rem] text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam laudantium dolore assumenda temporibus enim itaque? Vero sint neque, incidunt fugit assumenda minima dolorum quo veniam, officiis reprehenderit repellendus voluptatum.</p>
         <div className=" flex flex-col gap-10 ">
          {
            faq.map((item,index)=>(
              <FaqCard key={index} description={item.description} icon={item.icon} explanation={item.explanation} />
            ))
          }

         </div>

      </div>
    </section>
  )
}

export default FAQSection