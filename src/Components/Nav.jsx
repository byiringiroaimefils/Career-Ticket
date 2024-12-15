// import { FaMagnifyingGlass } from "react-icons/fa6";
import Logo from "../assets/CareerTicket_log 1.png";
import { useState } from "react";
import { Link } from "react-router-dom";

import Hamburger from 'hamburger-react'

export default function Nav() {
    const [openLink, setOpenLink] = useState(false)

    return (
        <>
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <img src={Logo} alt="CareerTicket_Logo" className="w-10 h-10 object-contain" />
                            <h2 className="text-xl font-bold text-gray-900">
                                Career Ticket.
                            </h2>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="text-gray-600 hover:text-indigo-500 transition-colors">Home</Link>
                            <Link to="Skills" className="text-gray-600 hover:text-indigo-500 transition-colors">Skills Package</Link>
                            <Link to="Program" className="text-gray-600 hover:text-indigo-500 transition-colors">Program</Link>
                            <Link to="About" className="text-gray-600 hover:text-indigo-500 transition-colors">About Us</Link>
                            <Link to="Contact" className="text-gray-600 hover:text-indigo-500 transition-colors">Contact Us</Link>
                        </nav>

                        <div className="flex items-center gap-4">
                            <button className="bg-indigo-500 text-white font-semibold px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                                sign Up
                            </button>
                            <div className="md:hidden">
                                <Hamburger toggled={openLink} toggle={setOpenLink} size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile menu */}
            <div className={`fixed inset-0 z-40 bg-white transform ${openLink ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="p-4">
                    <nav className="space-y-6 pt-16">
                        <Link to="/" className="block text-lg font-medium text-gray-900 hover:text-indigo-500">Home</Link>
                        <Link to="Skills" className="block text-lg font-medium text-gray-900 hover:text-indigo-500">Skills Package</Link>
                        <Link to="Program" className="block text-lg font-medium text-gray-900 hover:text-indigo-500">Program</Link>
                        <Link to="About" className="block text-lg font-medium text-gray-900 hover:text-indigo-500">About Us</Link>
                        <Link to="Contact" className="block text-lg font-medium text-gray-900 hover:text-indigo-500">Contact Us</Link>
                    </nav>
                </div>
            </div>
        </>
    );
}
