import { Shield, Code2, Paintbrush2,SwatchBook } from 'lucide-react'

export default function Skill() {
    const courses = [
        {
            icon: Shield,
            title: "Digital Skills",
            description: "From basic computer literacy to advanced digital proficiency, our program ensures that participants are digitally confident, tech-savvy, and have the technical know-how to thrive in digital work environments.  Master essential software, applications, tools, and skills to operate confidently in the digital world.",
        },
        {
            icon: Code2,
            title: "Soft Skills",
            description: "In today’s rapidly evolving job market, soft skills are key to career success and are being demanded by every employer. Soft skills refer to personal attributes and interpersonal abilities that enhance collaboration, communication, and overall effectiveness in the workplace.",
        },
        {
            icon: Paintbrush2,
            title: "Workplace Tools",
            description: "Learn how to use the tools and technologies commonly used in today’s workplaces, from project management platforms to collaborative tools and productivity software",
        },
        {
            icon: SwatchBook,
            title: "Career Skills",
            description: "Whether you are pursuing freelancing, remote work, consulting, entrepreneurship or traditional employment, our program equips you with the career skills needed to succeed in your chosen career. Gain the knowledge and strategies to navigate job marketing, craft compelling resumes, build your profile & portfolio, and master job interview skills.",
        },
    ]

    return (
        <>
            <div className="Container flex flex-col justify-center items-center m-4 fade-in fade-in-delay-2 ">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl">Skills That Set You Apart.</h2>
                    <div className="line w-32 h-1 rounded-xl bg-indigo-500 my-2"></div>
                    <p className="text-center">Career Ticket Umurava empowers young individuals to get ready to succeed in the career paths <br /> that they want to pursue</p>
                </div> <br /><br />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 fade-in fade-in-delay-4">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="space-y-4">
                                <div className="flex flex-col space-y-3">
                                    <course.icon
                                        className={`h-8 w-8 ${index === 0
                                            ? "text-blue-600"
                                            : index === 1
                                                ? "text-slate-600"
                                                : "text-emerald-600"
                                            }`}
                                    />
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold tracking-tight">{course.title}</h3>
                                        <span className="inline-block rounded-full bg-indigo-500  px-3 py-1 text-xs font-medium text-white">
                                            JOB GUARANTEE
                                        </span>
                                    </div>
                                </div>
                                <p className="text-base text-gray-600">{course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
