"use client";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/layout/Footer";
import TeacherCard from "@/components/InstructorsProfileCard";
import { instructorDetails } from "@/utils/data";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Alumni from "@/components/Alumni";

import FloatingButtons from "@/components/FloatingButtons";
export default function Home() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -350 : 350;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const stats = [
    { value: "1232+", label: "Students" },
    { value: "13+", label: "Courses" },
    { value: "--+", label: "Experience" },
    { value: "12+", label: "Trainers" },
  ];

  return (
    <>
      <Navbar />
      <Hero
        heading2="The Most Trusted Coaching Institute"
        heading1="AIM Tutorials Education Institute"
        heading3="Equipping students with quality education, expert mentorship, and state-of-the-art facilities"
      />
      <WhyChooseUs />
      <div className="bg-[#2467C9] text-white py-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

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
