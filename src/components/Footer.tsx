import { FaCopyright } from "react-icons/fa";

export default function Footer() {
   
    return (
        <div className="flex items-center flex-col  gap-5 justify-center container mx-auto w-full bg-blue-500 py-3 ">
            <div className="items-center flex gap-2 text-white text-opacity-85">
                <FaCopyright/> 
                <p>NeuroLab all rights reserved</p>

            </div>
            <p className="text-white text-opacity-75">Made by Neurolab Team 2025</p>
            

        </div>
    )
}