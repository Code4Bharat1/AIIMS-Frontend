import Hero from '@/components/Hero';
import Navbar from '@/components/layout/Navbar';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading1="Result"/>
    </div>
  );
}

export default page;
