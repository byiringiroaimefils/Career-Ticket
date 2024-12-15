import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { GrCaretNext } from "react-icons/gr";
import Static from "./Pages/Statics"
import Skill from "./Pages/Skills"
import Testimonial from "./Pages/Testimonials"
import Program from "./Pages/Program"
import About from "./Pages/About"
import Contact from "./Pages/Contact"


export default function NewFeatures() {
    return (
        <>
            <div className="grid-background min-h-screen w-full">
                <div className="h-full w-full flex items-center justify-center py-20">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-center text-center">
                            <h1 className="text-4xl sm:text-5xl  md:text-6xl font-bold text-gray-900 leading-tight fade-in fade-in-delay-1">
                                Empower  Your  Career  with{' '}
                                <span className="text-indigo-500">
                                    21st-Century Skills
                                </span>
                            </h1>

                            <p className="mt-6 text-lg text-gray-600 fade-in fade-in-delay-2">
                                Career Ticket by Umurava is a one-stop shop job readiness program that equips young talents
                                and job seekers with modern skills for success in the digital era.
                            </p>

                            <div className="flex items-center gap-8 mt-12 fade-in fade-in-delay-3">
                                <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors text-2xl">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors text-2xl">
                                    <FaXTwitter />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors text-2xl">
                                    <FaLinkedin />
                                </a>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-12 fade-in fade-in-delay-4">
                                <button className="bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300">
                                    More Information
                                </button>
                                <button className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-full hover:border-indigo-500 hover:text-indigo-500 transition-all duration-300">
                                    Join Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-36">
                < Static />
            </div>
            <div className="mt-36">
                < Skill />
            </div>
            <div className="mt-36">
                < Testimonial />
            </div>
            <div className="mt-36">
                < Program />
            </div>
            <div className="mt-36">
                < About />
            </div>
            <div className="mt-36">
                < Contact />
            </div>
        </>
    );
}
