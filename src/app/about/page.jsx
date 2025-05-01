import About from '@/components/About';
import Hero from '@/components/Hero';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import WhyChooseUs from '@/components/WhyChooseUs';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar/>
            <Hero 
            heading1="About Us"
            />

            <About/>
            <WhyChooseUs/>  
            <Footer/>
        </div>
    );
}

export default page;
