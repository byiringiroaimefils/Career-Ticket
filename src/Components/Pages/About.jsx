import { Shield, Code2, Paintbrush2, SwatchBook } from 'lucide-react'
import AboutUs from "./Images/AboutImage.jpg";

export default function About() {
    return (
        <>
            <div className="Container flex flex-col justify-center items-center m-4 fade-in fade-in-delay-2 ">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl">Join Our Mission & More About us.</h2>
                    <div className="line w-32 h-1 rounded-xl bg-indigo-500 my-2"></div>
                    <p className="text-center">Empowering young people to thrive in the Knowledge Economy and Future of work. </p>
                </div> 
            </div><br /><br /><br /><br />
            <div className='md:grid grid-cols-2 gap-2 mx-10 fade-in fade-in-delay-3'>
                <div>
                    <img src={AboutUs} alt="lorem uplsm " className='w-[90%] rounded-e-3xl translate-y-3' />
                </div>
                <div className="description">
                    <h2>About Career Ticket by Umurava.</h2>
                    <p>CareerTicket accelerates their career growth and increases their competencies for navigating the challenges and opportunities available in the current digital age and knowledge economy. 21st-century skills refer to a set of abilities, competencies, and knowledge that are essential for success in today’s rapidly changing world. By participating in Career Ticket, young people gain competencies and digital confidence that are needed to thrive in today’s digital work environments.</p> <br />
                    <h3 className='text-lg font-bold'>E-learning Platform at Career Ticket by Umurava.</h3>
                    <ul className='mb-2'>
                        <li>Online Learning:  Google Classroom</li>
                        <li>On-Site Learning:  Umurava Hub</li>
                    </ul>
                    <button className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg 
                     hover:bg-blue-700 transition-colors duration-200 text-center"
                    > Opening Jobs</button>
                </div>
            </div>
        </>
    );
}
