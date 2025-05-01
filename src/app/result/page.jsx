import Hero from '@/components/Hero';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Result from '@/components/Result';
import Testimonials from '@/components/Testimonials';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero heading1="Result" />
      <Result/>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default page;
