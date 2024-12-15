import { Activity } from 'lucide-react'

export default function Statics() {

    return (
        <>
            <div className="Container flex flex-col justify-center items-center m-4">
                <div className="flex flex-col  justify-center items-center ">
                    <h2 className="text-2xl">Why Career Ticket?</h2>
                    <div className="line w-32  h-1 rounded-xl bg-indigo-500 my-2 "></div>
                    <p className="text-center ">This program has a big focus on the soft skills and digital skills needed to learn, work, <br /> and navigate everyday life in the digital age</p>
                </div>
                <br /><br />
                <div className="md:flex gap-20 my-10 ">
                    <div className=" w-96 bg-indigo-500 p-9 text-center rounded-xl shadow-md transition-shadow hover:shadow-lg">
                        <Activity className='translate-x-16 translate-y-8 text-white size-8' />
                        <h3 className="font-extrabold text-4xl text-white">92% </h3><br />
                        <p className="text-white font-extrabold">all today’s jobs require digital skills according to the National Skill Coalition’s 2023 Report.
                            According to Harvard University Research
                        </p>
                    </div>
                    <div className=" w-96 border-1  bg-gray-50 p-9 text-center rounded-xl shadow-md transition-shadow hover:shadow-lg">
                        <Activity className='translate-x-16 translate-y-8 size-8' />
                        <h3 className="font-extrabold text-4xl">85%</h3><br />
                        <p className=" font-extrabold "> Job success comes from having well‐developed soft and people skills</p>
                    </div>

                    <div className="w-96 bg-indigo-500 p-9 text-center rounded-xl shadow-md transition-shadow hover:shadow-lg">
                        <Activity className='translate-x-16 translate-y-8 text-white size-8' />
                        <h3 className=" font-extrabold text-4xl text-white">15%</h3><br />
                        <p className="text-white font-extrabold">Job success comes from technical skills and knowledge (hard skills).</p>
                    </div>
                </div>

            </div >
        </>
    );
}
