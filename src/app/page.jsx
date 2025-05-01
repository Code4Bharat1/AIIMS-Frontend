import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/layout/Footer";
import TeacherCard from "@/components/InstructorsProfileCard";
import { instructorDetails } from "@/utils/data";
import FloatingButtons from "@/components/FloatingButtons";
export default function Home() {

  const stats = [
    { value: "1232+", label: "Students" },
    { value: "13+", label: "Courses" },
    { value: "--+", label: "Experience" },
    { value: "12+", label: "Trainers" },
  ];

  return (
    <>
      <Navbar />
      <Hero
        heading2="The Most Trusted Coaching Institute"
        heading1="AIM Tutorials Education Institute"
        heading3="Equipping students with quality education, expert mentorship, and state-of-the-art facilities"
      />
      <WhyChooseUs />
      <div className="bg-[#2467C9] text-white py-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <About />
      <div className="bg-[#2467C9] py-10 px-4 text-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Results</h2>
          <p className="text-lg">Few Of Our Alumni</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-10 flex-wrap">
          <Image
            src={"/Alumni/diksha.png"}
            width={360}
            height={235}
            alt="alumni-image"
            className="rounded-md"
          />
          <Image
            src={"/Alumni/vedika.png"}
            width={360}
            height={235}
            alt="alumni-image"
            className="rounded-md"
          />
          <Image
            src={"/Alumni/sneha.png"}
            width={360}
            height={235}
            alt="alumni-image"
            className="rounded-md"
          />
        </div>
      </div>

      <div className="flex items-center justify-center flex-col mt-10">
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
      <FloatingButtons />
      <Footer />
    </>
  );
}
