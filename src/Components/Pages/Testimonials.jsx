import { Activity } from 'lucide-react'
import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import User1 from "./Images/User1.jpg";
import User2 from "./Images/User2.jpg";
import User3 from "./Images/User3.jpg";

export default function Testimonial() {
    const testimonials = [
        {
            image: User1,
            name: "John Doe",
            text: "This program transformed my career path completely!"
        },
        {
            image: User2,
            name: "Jane Smith",
            text: "The skills I learned here were invaluable for my growth."
        },
        {
            image: User3,
            name: "Mike Johnson",
            text: "Excellent curriculum and supportive environment."
        }
    ];

    return (
        <>
            <div className="Container flex flex-col justify-center items-center m-4 ">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl">Success Stories.</h2>
                    <div className="line w-32 h-1 rounded-xl bg-indigo-500 my-2"></div>
                    <p className="text-center">Showcases testimonials and alumni achievements.</p>
                </div>
                <br /><br />
            </div>
            <div className='mx-10'>
                <Slide>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="each-slide-effect border    p-6 rounded-lg " >
                            <div className="flex flex-col items-center space-y-4" >
                                <img 
                                    src={testimonial.image} 
                                    alt={`${testimonial.name}'s testimonial`}
                                    className="w-32 h-32 rounded-full object-cover"
                                />
                                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                <p className="text-gray-600 text-center">{testimonial.text}</p>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </>
    );
}
