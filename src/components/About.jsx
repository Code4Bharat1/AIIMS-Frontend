'use client'

const About = () => {
    return (
        <div className="mb-10">
            <h1 className="text-[42px] font-bold text-center">About Us</h1>
            <div className="flex justify-center w-[100%] items-center px-48 gap-10">
                <div><p>AIM Tutorials is a leading coaching institute committed to academic excellence for students from grades 8 to 12. Our programs are designed to build strong subject foundations and prepare students for competitive exams like NEET and JEE.
                    For grades 8 to 10, we focus on core subjects and scholarship exam preparation. Our science courses for grades 11 and 12 are tailored to help students succeed in medical and engineering entrance exams.
                    With expert faculty, modern teaching methods, and a student-first approach, we provide a learning environment that fosters confidence, clarity, and success.</p></div>
                <div>
                    <img src="/AboutUsImg.jpg" alt="" className="h-[300px] w-[250rem]  " />
                </div>
            </div>
        </div>
    );
}

export default About;
