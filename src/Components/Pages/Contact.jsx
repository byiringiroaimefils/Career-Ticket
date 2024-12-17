import { Shield, Code2, Paintbrush2, SwatchBook } from 'lucide-react'

export default function Contact() {
    return (
        <>
            <div className="Container flex flex-col justify-center items-center m-4 fade-in fade-in-delay-2 ">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl">Get In Touch with Ours.</h2>
                    <div className="line w-32 h-1 rounded-xl bg-indigo-500 my-2"></div>
                    {/* <p className="text-center">Career Ticket Umurava empowers young individuals to get ready to succeed in the career paths <br /> that they want to pursue</p> */}
                </div> <br /><br />
            </div>
            <div className='main m-10 fade-in fade-in-delay-4'>
                <div className='w-full bg-indigo-500 p-10 rounded-3xl shadow-xl'>
                    <div className='flex flex-col'>
                        <h3 className='text-white font-bold text-2xl'>Get in touch!</h3>
                        <p className='text-gray-200'>Contact us for any inquiries you might have</p> <br />
                        <input type="text" placeholder='Email Address' className='bg-white outline-none p-2' /> <br />
                        <textarea name="messae" placeholder='Type your Message' className=' bg-white p-2 outline-none '></textarea> <br />
                        <button
                            className="w-full md:w-auto px-8 py-3 bg-white  font-semibold rounded-lg  transition-colors duration-200 text-center">
                            Submit your Meassage
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
