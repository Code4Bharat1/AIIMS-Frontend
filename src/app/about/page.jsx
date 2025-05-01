import About from '@/components/About';
import Hero from '@/components/Hero';
import TeacherCard from '@/components/InstructorsProfileCard';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import WhyChooseUs from '@/components/WhyChooseUs';
import { instructorDetails } from '@/utils/data';
import React from 'react';

const page = () => {
    return (
      <div>
        <Navbar />
        <Hero heading1="About Us" />

        <About />
        <WhyChooseUs />

        <section className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-12">
          {/* Video */}
          <div className="w-full md:w-1/2">
            <video
              className="w-full h-auto rounded shadow-lg"
              controls
              src="/videos/aim-intro.mp4" // <-- Replace with your actual path
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <p className="text-lg mb-4">
              At <strong>AIM Tutorials</strong>, we offer various
              extracurricular activities, career counseling, and support
              services to ensure the holistic development of our students. Our
              focus extends beyond academic excellence to nurturing overall
              personal growth and well-being.
            </p>
            <p className="text-lg">
              Our commitment lies in providing a comprehensive learning
              environment that fosters curiosity, creativity, and critical
              thinking. Join us in creating an enriching student experience that
              prepares individuals for success in all aspects of life.
            </p>
          </div>
        </section>

        <div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-8">
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
        <Footer />
      </div>
    );
}

export default page;
