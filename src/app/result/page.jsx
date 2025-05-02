import Hero from '@/components/common/Hero';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Result from '@/components/common/Result';
import Testimonials from '@/components/common/Testimonials';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero heading1="Result" bgImg={"/Hero/Result.png"} />
      <Result />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default page;
