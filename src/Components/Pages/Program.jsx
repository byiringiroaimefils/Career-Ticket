import { Activity } from 'lucide-react'

export default function Program() {
    const modules = [
        { title: "Module 1", focus: "Foundation and Basics" },
        { title: "Module 2", focus: "Core Concepts" },
        { title: "Module 3", focus: "Advanced Techniques" },
        { title: "Module 4", focus: "Practical Applications" },
        { title: "Module 5", focus: "Project Development" },
        { title: "Module 6", focus: "Final Project & Assessment" }
    ];


    const Learnings = [
        {
            name: 'Project Based Learning:',
            description: 'This is a learner-centered approach which involves youths acquiring skills by actively working on real work projects',
        },
        {
            name: 'Blended Learning:',
            description: 'This is an approach that combines online and in class learning',
        },
        {
            name: 'Peer Learning:',
            description: ' This is an interactive learning approach where leverage peer feedback and projects to improve their skills',
        },
        {
            name: 'Personalized Learning:',
            description: 'It’s a method which allows Learners to take control of their learning journey based on their preferences',
        },
        {
            name: 'Expert Led-Sessions:',
            description: 'It’s a way to learn directly from someone who is highly skilled in a particular subject',
        },

    ]
    return (
        <>
            <div className="Container flex flex-col justify-center items-center m-4 fade-in fade-in-delay-2  ">
                <div className="flex flex-col  justify-center items-center ">
                    <h2 className="text-2xl">Program Details & Learning Approach.</h2>
                    <div className="line w-32  h-1 rounded-xl bg-indigo-500 my-2 "></div>
                    <p className="text-center ">This program has a big focus on the soft skills and digital skills needed to learn, work, <br /> and navigate everyday life in the digital age</p>
                </div>
                <br /><br />
            </div >
            <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8 fade-in fade-in-delay-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Program Details</h2>

                <div className="space-y-6">
                    <div className="flex items-center justify-between border-b pb-4">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-gray-700">Duration</h3>
                            <p className="text-gray-600">6 weeks</p>
                        </div>
                        <div className="space-y-1 text-right">
                            <h3 className="text-lg font-semibold text-gray-700">Fee</h3>
                            <p className="text-gray-600">$200</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-700">Program Modules </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {modules.map((module, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-semibold text-gray-700">{module.title}</h4>
                                    <p className="text-gray-600 text-sm">{module.focus}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-700">Learning Approaches</h3>
                        <div className="">
                            {Learnings.map((Learning, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded-lg mb-5">
                                    <h4 className="font-semibold text-gray-700">{Learning.name}</h4>
                                    <p className="text-gray-600 text-sm">{Learning.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg 
                     hover:bg-blue-700 transition-colors duration-200 text-center"
                    >
                        Enroll Now
                    </button>
                </div>
            </div>
        </>
    );
}
