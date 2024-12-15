import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col items-center justify-center gap-6">
                    <p className="text-lg font-medium text-gray-900">More From  Career Ticket:</p>
                    <div className="flex items-center gap-8">
                        <a href="https://www.instagram.com" className="text-gray-600 hover:text-sky-500 transition-colors text-2xl">
                            <FaInstagram />
                        </a>
                        <a href="https://www.LinkedIn.com" className="text-gray-600 hover:text-sky-500 transition-colors text-2xl">
                            <FaLinkedin />
                        </a>
                        {/* <a href="https://www.youtube.com" className="text-gray-600 hover:text-sky-500 transition-colors text-2xl">
                            <FaYoutube />
                        </a> */}
                        <a href="https://www.twitter.com" className="text-gray-600 hover:text-sky-500 transition-colors text-2xl">
                            <FaXTwitter />
                        </a>
                    </div>
                    <br />
                    <div className="flex gap-2 underline">
                        <a href=""> Home</a>
                        <a href="">About Us</a>
                        <a href=""> Program Details</a>
                        <a href=""> Contact</a>
                        <a href=""> Terms of Service</a>
                        <a href=""> Privacy Policy</a>
                    </div>
                    <p className="text-sm text-gray-500 ">
                        TM &amp; © Career Ticket Ltd by Umurava. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}