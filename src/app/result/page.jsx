import Hero from '@/components/Hero';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading1="Result"/>
      <Footer/>
    </div>
  );
}

export default page;
