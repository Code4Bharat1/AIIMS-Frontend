"use client";

import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
    {
        imgPath: "/s1.png",
        name: "Siddharth Talreja",
        clg: "12 Sci - Swami College",
        review: "Regular parent-teacher meetings keep my parents updated on my progress.",
    },
    {
        imgPath: "/s2.png",
        name: "Adnan Khan",
        clg: "12 Sci - AFAC College",
        review: "The technologically advanced classrooms make learning so much fun and effective!",
    },
    {
        imgPath: "/s3.png",
        name: "Shreya Mishra",
        clg: "12 Sci - Somaiya College",
        review: "The personal attention I receive here helps me understand everything better.",
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const current = testimonialsData[index];

    // Auto-rotate testimonials every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                handleNext();
            }
        }, 1500);
        return () => clearInterval(interval);
    }, [isAnimating]);

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    };

    const completeAnimation = () => {
        setIsAnimating(false);
    };

    return (
        <div className="flex justify-end relative mb-10">
            {/* Blue background div */}
            <div className="flex bg-[#AFDDFF] h-[400px] w-[700px] rounded-l-full relative z-10 items-center justify-between px-10">
                <div className="flex-1" />
                <div className="flex flex-col gap-9">
                    <h1 className="text-4xl">Testimonials</h1>
                    <p className="text-5xl text-left font-medium ml-4">
                        What Our Students <br /> Say!
                    </p>
                </div>
            </div>

            {/* Red testimonial card */}
            <div className="absolute left-[calc(100%-1000px)] top-1/2 -translate-y-1/2 w-[500px] h-72 bg-[#2467C9] z-20 rounded-2xl flex flex-col justify-center items-start gap-8 p-9 text-white overflow-hidden">
                <AnimatePresence onExitComplete={completeAnimation}>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 p-9 flex flex-col justify-center items-start gap-8"
                    >
                        <div className="text-xl text-left">"{current.review}"</div>
                        <div className="flex items-center justify-between w-full">
                            {/* Student Info */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={current.imgPath}
                                    alt={current.name}
                                    className="h-20 w-20 rounded-full"
                                />
                                <div>
                                    <p className="text-xl font-light">{current.clg}</p>
                                    <p className="text-3xl">{current.name}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation buttons - moved outside the red card */}
            <div className="absolute left-[calc(100%-1000px+460px)] top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2 ml-4">
                <button
                    onClick={handlePrev}
                    disabled={isAnimating}
                    className={`p-2 rounded-full text-[#2467C9] cursor-pointer transition-all duration-300 ${isAnimating ? "bg-white/30" : "bg-white/70 hover:bg-white/90"
                        }`}
                >
                    <IoIosArrowForward size={30} />
                </button>
                <button
                    onClick={handleNext}
                    disabled={isAnimating}
                    className={`p-2 rounded-full text-[#2467C9] cursor-pointer transition-all duration-300 ${isAnimating ? "bg-white/30" : "bg-white/70 hover:bg-white/90"
                        }`}
                >
                    <IoIosArrowBack size={30} />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;