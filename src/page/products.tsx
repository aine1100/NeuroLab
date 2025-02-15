import { useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function ProjectPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const tools = [
      {
        image: "/eeg.png",
        title: "Eeg HeadBand",
        desc: "This is a headband used for eeg recording",
        price: "$100",
        button: "Buy Now",
      },
    ];
  
    const handleBuyNow = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mx-auto py-4 px-10 container flex flex-col gap-10 items-start justify-center">
          <div className="flex gap-5 items-center -mt-20 justify-center">
            <h1 className="text-xl font-semibold  text-gray-800">Our Products</h1>
          </div>
          <div className="flex">
            {tools.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-lg gap-3 rounded-lg px-5 py-3 flex flex-col items-start"
              >
                <img src={item.image} alt="" className="w-[300px] rounded-lg" />
                <h1 className="font-semibold text-md text-gray-700">{item.title}</h1>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <p className="text-xl font-semibold text-gray-800">
                  Price: <span className="text-xl font-bold text-blue-700">{item.price}</span>
                </p>
                <Button text={item.button} className="w-full" onClick={handleBuyNow} />
              </div>
            ))}
          </div>
        </main>
  
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-40 flex items-center justify-center">
            <div className="bg-white rounded-lg p-5 w-96 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Product Update</h2>
              <p className="text-gray-600">This product is not yet on the market.</p>
              <button
                className="mt-4 px-4 py-2 text-white rounded bg-red-600 w-full"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
  
        <Footer />
      </div>
    );
  }
  