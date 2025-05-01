"use client";

const Testimonials = () => {
    return (
        <div className="flex justify-end relative mb-10">
            {/* Blue rounded div */}
            <div className="flex bg-[#AFDDFF] h-[400px] w-[700px] rounded-l-full relative z-10"></div>

            {/* Red overlapping div */}
            <div className="absolute left-[calc(100%-880px)] top-1/2 -translate-y-1/2 w-[400px] h-72 bg-[#2467C9] z-20 rounded-2xl flex flex-col justify-center items-center gap-5 p-9">
                <div>
                    “Regular parent-teacher meetings keep my parents updated on my progress.”
                </div>
                <div className="flex">
                    <img src="/s1.png" alt="" />
                    <div>
                        <p>12 Sci - Swami College</p>
                        <p>Siddharth Talreja</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
