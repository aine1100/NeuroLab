import Button from "./Button"

export default function DownloadApp(){
    const download=[
        "Download Mobile","Download Desktop"
    ]
    return(
        <div className="flex flex-col gap-10 items-center py-5 px-10 justify-center">
            <h1 className="text-4xl font-bold text-gray-800">Download Our Apps</h1>
            <p className="text-gray-600 max-w-2xl text-center">At NeuroLab We offer the two main apps for our client the one for the mobile which is used by the clients and the other one of desktop used by doctors</p>
            <div className="flex items-center gap-10 justify-center">
            {
                download.map((item,index)=>(
                    <div key={index}>
                        <Button text={item} />

                    </div>
                ))
            }

            </div>

        </div>
    )
}