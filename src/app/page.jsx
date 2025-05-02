"use client";
import Navbar from "../components/layout/Navbar";
import Hero from "@/components/common/Hero";
import WhyChooseUs from "@/components/common/WhyChooseUs";
import Testimonials from "@/components/common/Testimonials";
import About from "@/components/common/About";
import Footer from "@/components/layout/Footer";
import TeacherCard from "@/components/common/InstructorsProfileCard";
import { instructorDetails } from "@/utils/data";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Alumni from "@/components/home/Alumni";

import FloatingButtons from "@/components/home/FloatingButtons";
import Highlights from "@/components/home/Highlights";
export default function Home() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -350 : 350;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <Hero
        heading2="The Most Trusted Coaching Institute"
        heading1="AIM Tutorials Education Institute"
        heading3="Equipping students with quality education, expert mentorship, and state-of-the-art facilities"
        highlightWords={[
          "quality education",
          "expert mentorship",
          "state-of-the-art facilities",
        ]}
        highlightClass="text-[#AFDDFF] font-semibold"
        bgImg="/Hero/Home.jpg"
      />
      <WhyChooseUs />
      <Highlights />
      <About />
      <Alumni />

      <div className="flex items-center justify-center flex-col mt-10">
        <h1 className="text-[42px] font-bold text-center">Our Instructors</h1>

        <div className="w-full relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md "
          >
            <FaChevronLeft className="text-[#2467C9]" />
          </button>

          {/* Scrollable Container */}
          <div
            className="w-full overflow-x-auto scrollbar-hidden"
            ref={scrollRef}
          >
            <div className="flex gap-8 px-3 py-8 min-w-max">
              {instructorDetails.map((instructor, idx) => (
                <TeacherCard
                  key={idx}
                  image={instructor.image}
                  name={instructor.name}
                  education={instructor.education}
                  social={instructor.social}
                />
              ))}
            </div>
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md"
          >
            <FaChevronRight className="text-[#2467C9]" />
          </button>
        </div>
      </div>
      <Testimonials />
      <FloatingButtons />
      <Footer />
    </>
  );
}
