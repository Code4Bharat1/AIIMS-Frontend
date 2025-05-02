"use client"
import About from '@/components/About';
import Hero from '@/components/Hero';
import TeacherCard from '@/components/InstructorsProfileCard';
import About from '@/components/common/About';
import Hero from '@/components/common/Hero';
import TeacherCard from '@/components/common/InstructorsProfileCard';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import WhyChooseUs from '@/components/common/WhyChooseUs';
import { instructorDetails } from '@/utils/data';
import React from 'react';
import { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";

const page = () => {
const [visibleCount, setVisibleCount] = useState(3);

const handleLoadMore = () => {
  setVisibleCount((prev) => prev + 3);
};

  return (
    <div>
      <Navbar />
      <Hero heading1="About Us" bgImg={"/Hero/About.png"} />

      <About />
      <WhyChooseUs />

      <section className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12">
        {/* Video */}
        <div className="w-full md:w-1/2">
          <video
            className="w-full h-auto rounded shadow-lg"
            controls
            src="/about-video.mp4"
            autoPlay
            muted
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-gray-800">
          <p className="text-lg mb-4">
            At <strong>AIM Tutorials</strong>, we offer various extracurricular
            activities, career counseling, and support services to ensure the
            holistic development of our students. Our focus extends beyond
            academic excellence to nurturing overall personal growth and
            well-being.
          </p>
          <p className="text-lg">
            Our commitment lies in providing a comprehensive learning
            environment that fosters curiosity, creativity, and critical
            thinking. Join us in creating an enriching student experience that
            prepares individuals for success in all aspects of life.
          </p>
        </div>
      </section>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-8">
          <AnimatePresence>
            {instructorDetails.slice(0, visibleCount).map((instructor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
              >
                <TeacherCard
                  image={instructor.image}
                  name={instructor.name}
                  education={instructor.education}
                  social={instructor.social}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleCount < instructorDetails.length && (
          <motion.button
            onClick={handleLoadMore}
            className="my-4 px-6 py-2 bg-[#2467C9] text-white rounded hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More
          </motion.button>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default page;
