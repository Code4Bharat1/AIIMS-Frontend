'use client'

const About = () => {
    return (
      <div className="mb-24 px-4 sm:px-8 md:px-8 lg:px-16 xl:px-18">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mt-12 mb-6 md:mb-12">
          About Us
        </h1>
        <div className="flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-24 max-w-screen-xl mx-auto">
          <div className="flex-1 text-left text-md sm:text-md lg:text-2xl leading-relaxed">
            <p>
              AIM Tutorials is a leading coaching institute committed to
              academic excellence for students from grades 8 to 12. Our programs
              are designed to build strong subject foundations and prepare
              students for competitive exams like NEET and JEE. For grades 8 to
              10, we focus on core subjects and scholarship exam preparation.
              Our science courses for grades 11 and 12 are tailored to help
              students succeed in medical and engineering entrance exams. With
              expert faculty, modern teaching methods, and a student-first
              approach, we provide a learning environment that fosters
              confidence, clarity, and success.
            </p>
          </div>
          <div className="flex-1 w-full">
            <img
              src="/AboutUsImg.jpg"
              alt="About AIM Tutorials"
              className="w-full h-auto rounded-xl shadow-lg object-contain"
            />
          </div>
        </div>
      </div>
    );
}

export default About;
