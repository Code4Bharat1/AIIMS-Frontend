import Image from "next/image";
import Navbar from '../components/layout/Navbar'
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/layout/Footer";
import TeacherCard from "@/components/InstructorsProfileCard";
import { instructorDetails } from "@/utils/data";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        heading2="The Most Trusted Coaching Institute"
        heading1="AIM Tutorials Education Institute"
        heading3="Equipping students with quality education, expert mentorship, and state-of-the-art facilities"
      />
      <WhyChooseUs />
      {/* <About /> */}
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-[42px] font-bold text-center">Our Instructors</h1>

        <div className="w-full overflow-x-auto scrollbar-hidden">
          <div className="flex gap-8 px-4 py-8 min-w-max">
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
      </div>
      <Testimonials />
      <Footer />
    </>
  );
}
