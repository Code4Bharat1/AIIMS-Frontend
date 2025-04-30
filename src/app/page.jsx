import TeacherCard from "@/components/InstructorsProfileCard";
import Footer from "@/components/layout/Footer";
import { instructorDetails } from "@/utils/data";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-extralight text-2xl">Our Instructors</h1>

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
      <Footer />
    </>
  );
}
