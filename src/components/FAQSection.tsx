import FaqCard from "./FAQItem"
const FAQSection = () => {
  const faq=[
    {
      description:"why did you choose to make neurolab",
      icon:"+",
      explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero felis, semper at turpis vel, pellentesque congue lectus. Integer vitae condimentum ipsum. Mauris vel convallis mauris."
    },
    {
      description:"What is NeuroLab's primary focus?",
      icon:"+",
      explanation:"NeuroLab focuses on providing advanced brain health solutions through EEG data analysis, real-time visualization, and innovative tools to empower healthcare professionals and individuals."

    },
    {
      description:"Who can benefit from NeuroLab's services?",
      icon:"+",
      explanation:"NeuroLab is designed for healthcare professionals, researchers, and individuals seeking to monitor or improve their brain health. We aim to make brain data accessible and actionable for all"

    }
    ,
    {
      description:"How do I get started with NeuroLab?",
      icon:"+",
      explanation:"Getting started is easy! Contact us through our website, create a user profile, and begin exploring our tools for real-time brainwave monitoring and mental health insights."

    }
  ]
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col gap-10 items-center">
      <h2 className="text-4xl text-gray-800 font-bold">Frequently Asked Questions</h2>
      <p className='text-sm text-gray-500 md:w-[40rem] text-center'>

At NeuroLab, we are here to address your concerns. Explore answers to the most common questions about our services, tools, and how we can help you understand and improve your brain health. </p>
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