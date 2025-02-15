export default function ChatRoom(){
    return(
        <div className="flex flex-col w-full px-10  py-5">
            <div className="flex justify-between bg-opacity-50  bg-white bg-transparent backdrop-blur-md items-center w-full rounded-3xl p-5">
            <h1 className="text-blue-600 font-semibold text-md">NeuroLab</h1>
            <div className="flex items-center gap-5 flex-row-reverse justify-center">
                <img src="/boys.jpg" alt="User image" className="w-10 h-10 rounded-full"/>
                <p className="text-gray-600">Welcome User</p>
            </div>

            </div>
            <div className="">

            </div>

        </div>
    )
}