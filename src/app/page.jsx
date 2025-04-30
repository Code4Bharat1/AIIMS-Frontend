import Image from "next/image";
import Navbar from '../components/layout/Navbar'
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        heading2="The Most Trusted Coaching Institute"
        heading1="AIM Tutorials Education Institute"
        heading3="Equipping students with quality education, expert mentorship, and state-of-the-art facilities"
      />
      <WhyChooseUs/>
    </>
  );
}
