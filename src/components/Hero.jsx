"use client";
import { useEffect, useState } from 'react';

const Hero = ({ heading2, heading1, heading3 }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            className="relative bg-[url('/Class.jpg')] bg-cover bg-center min-h-[500px] sm:min-h-[600px] md:min-h-[670px] flex items-center justify-center text-white text-center -mt-9"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            {/* Content */}
            <div className="relative z-10 px-4 select-none">
                <h2
                    className={`text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-[#AFDDFF] 
                    ${show ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out' : 'opacity-0 translate-y-12'}`}
                >
                    {heading2}
                </h2>
                <h1
                    className={`text-[44px] sm:text-[52px] md:text-[60px] font-extrabold 
                    ${show ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out' : 'opacity-0 translate-y-12'}`}
                >
                    {heading1}
                </h1>
                <h3
                    className={`text-[18px] sm:text-[20px] md:text-[21px] font-semibold 
                    ${show ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out' : 'opacity-0 translate-y-12'}`}
                >
                    {heading3}
                </h3>
            </div>
        </section>
    );
};

export default Hero;
