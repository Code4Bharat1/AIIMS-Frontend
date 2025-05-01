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
