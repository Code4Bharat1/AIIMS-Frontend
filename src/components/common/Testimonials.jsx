"use client";

import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "@/utils/data";
import Image from "next/image";

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const current = testimonialsData[index];

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
      <div className="flex flex-col  lg:flex-row justify-end relative mt-20 mb-20 px-4 lg:px-0">
        {/* Blue background div - hidden on mobile, shown on lg screens */}
        <div className="hidden lg:flex bg-[#AFDDFF] h-[400px] w-[700px] rounded-l-full relative z-10 items-center justify-between px-10">
          <div className="flex-1" />
          <div className="flex flex-col gap-9">
            <h1 className="text-[32px]">TESTIMONIALS</h1>
            <p className="text-5xl text-left font-medium ml-4">
              What Our Students <br /> Say!
            </p>
          </div>
        </div>

        {/* Mobile header - shown only on small screens */}
        <div className="lg:hidden mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Testimonials</h1>
          <p className="text-2xl text-[#2467C9]">What Our Students Say!</p>
        </div>

        {/* Red testimonial card */}
        {/* Red testimonial card */}
        <div className="relative lg:absolute w-full lg:w-[500px] lg:left-[calc(100%-1000px)] lg:top-1/2 lg:-translate-y-1/2 h-72 bg-[#2467C9] z-20 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-8 p-6 lg:p-9 text-white overflow-hidden mx-auto lg:mx-0">
          <AnimatePresence onExitComplete={completeAnimation}>
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-6 lg:p-9 flex flex-col justify-center items-center lg:items-start gap-6 lg:gap-8 text-center lg:text-left"
            >
              <div className="text-lg lg:text-xl text-center">
                "{current.review}"
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full gap-4">
                {/* Student Info */}
                <div className="flex items-center gap-4">
                  <Image
                    src={current.imgPath}
                    alt={current.name}
                    className="h-16 w-16 lg:h-20 lg:w-20 rounded-full"
                    width={1000}
                    height={1000}
                  />
                  <div>
                    <p className="text-base lg:text-xl font-light">
                      {current.clg}
                    </p>
                    <p className="text-2xl lg:text-3xl">{current.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons - position changes based on screen size */}
        <div className="flex lg:flex-col flex-row-reverse justify-center gap-4 lg:gap-2 mt-6 lg:mt-0 lg:absolute lg:left-[calc(100%-1000px+460px)] lg:top-1/2 lg:-translate-y-1/2 z-30 lg:ml-4">
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className={`p-2 rounded-full text-[#2467C9] active:scale-90 cursor-pointer shadow-[0px_0px_4px_rgba(0,0,0,0.4)] transition-all duration-300 ${
              isAnimating ? "bg-white/30" : "bg-white/70 hover:bg-white/90"
            }`}
          >
            <IoIosArrowForward size={24} className="lg:w-6 lg:h-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className={`p-2 rounded-full text-[#2467C9] active:scale-90 cursor-pointer shadow-[0px_0px_4px_rgba(0,0,0,0.4)] transition-all duration-300 ${
              isAnimating ? "bg-white/30" : "bg-white/70 hover:bg-white/90 "
            }`}
          >
            <IoIosArrowBack size={24} className="lg:w-6 lg:h-6" />
          </button>
        </div>
      </div>
    );
};

export default Testimonials;