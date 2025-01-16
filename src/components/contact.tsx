import {   FaMailBulk, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
    const [isActive, setActive] = useState(0);
    function HandleActive() {
        setActive(isActive === 0 ? 1 : 0);
    }
    const contact = [
        {
            icon: <FaLocationDot />,
            title: "Address",
            name: "Kigali Rwanda",
        },
        {
            icon: <FaMailBulk />,
            title: "Email address",
            name: "neurolab@gmail.com",
        },
        {
            icon: <FaPhone />,
            title: "Phone number",
            name: "+250 700 000 290",
        },
    ];
    
    const inputData = [
        {
            name: "Email Address or Phone Number",
            className: "h-10",
            type: "text",
        },
        {
            name: "Full Name",
            className: "h-10",
            type: "text",
        },
        {
            name: "Message",
            className: "h-[100px] text-start items-start",
            type: "textarea",
        },
    ];

    return (
        <div className="flex flex-col pb-5  mx-auto container justify-center items-center  h-full ">
            <div className="flex flex-col   gap-8 justify-center items-center rounded-md p-5 ">
                <div className="flex flex-col md:flex-row gap-10 justify-center md:gap-72">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-semibold text-black">Contact us</h2>
                    <p className="text-md font-medium text-gray-600">Get In touch with us and get to know about how we work</p>
                    {contact.map((item, index) => (
                        <div key={index} className="flex gap-5 w-[270px] p-2 items-center ">
                            <div className="bg-blue-500 h-10 w-10 rounded-md text-white flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-md font-semibold text-gray-700">{item.title}</h3>
                                <p className="text-sm font-medium text-gray-600">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center gap-5 w-full md:w-auto">
                    {inputData.map((field, index) =>
                        field.type === "textarea" ? (
                            <textarea
                                key={index}
                                placeholder={field.name}
                                className={`w-full md:w-[500px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-purple-700 hover:bg-gray-50 ${field.className}`}
                            ></textarea>
                        ) : (
                            <input
                                key={index}
                                type={field.type}
                                placeholder={field.name}
                                className={`w-full md:w-[500px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-purple-700 hover:bg-gray-50 ${field.className}`}
                            />
                        )
                    )}
                    <button className="w-32 h-10 text-white font-semibold rounded-md bg-blue-500 transition-all duration-300">
                        Submit
                    </button>
                </div>

                </div>
                 {/* Social Media Icons */}
            
            </div>

           
        </div>
    );
}
