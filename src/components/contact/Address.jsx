'use client';


const Address = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-start relative mt-10 mb-10 px-4 lg:px-0">
            {/* Blue background div - hidden on mobile, shown on lg screens */}
            <div className="hidden lg:flex bg-[#AFDDFF] h-[400px] w-[700px] rounded-r-full relative z-10 items-center justify-between px-10 pr-48">
                <div className="flex-1" />
                <div className="flex flex-col gap-9">
                    <h1 className="text-4xl">Feel free to Contact <br /> Us</h1>
                    <p className="text-md text-left">
                        <span className="font-semibold">Get In Touch</span><br />
                        At AIM Tutorials , we offer advanced classrooms, personalized attention, regular parent-teacher meetings, top-notch teachers, and a leading curriculum. Experience the best in education with us.
                    </p>
                </div>
            </div>

            {/* Mobile header - shown only on small screens */}
            <div className="lg:hidden mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">Feel free to Contact Us</h1>
                <p className="text-2xl text-[#2467C9]">
                    <span className="font-semibold">Get In Touch</span><br />
                    At AIM Tutorials , we offer advanced classrooms, personalized attention, regular parent-teacher meetings, top-notch teachers, and a leading curriculum. Experience the best in education with us.
                </p>
            </div>

            {/* Red testimonial card */}
            <div className="relative lg:absolute w-full lg:w-[500px] lg:left-[calc(100%-1000px)] lg:top-1/2 lg:-translate-y-1/2 h-84 bg-[#2467C9] z-20 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-8 p-6 lg:p-9 text-white overflow-hidden mx-auto lg:mx-0">
                <form className="absolute inset-0 p-6 lg:p-9 flex flex-wrap justify-center items-center lg:items-start gap-6 lg:gap-8 text-center lg:text-left">
                    <input type="text" name="" id="" placeholder="Your Name" className="bg-[#D9D9D9] p-2 rounded-lg text-black text-md outline-none" />
                    <input type="text" name="" id="" placeholder="Your Email" className="bg-[#D9D9D9] p-2 rounded-lg text-black text-md outline-none" />
                    <input type="text" name="" id="" placeholder="Mobile Number" className="bg-[#D9D9D9] p-2 rounded-lg text-black text-md outline-none" />
                    <input type="text" name="" id="" placeholder="Subject" className="bg-[#D9D9D9] p-2 rounded-lg text-black text-md outline-none" />
                    <textarea type="text" name="" id="" placeholder="Message" className="bg-[#D9D9D9] p-2 rounded-lg text-black text-md outline-none w-full resize-none " />
                    <div className="flex w-full justify-end">
                        <button className="bg-[#AFDDFF] hover:bg-[#bfe3ff] cursor-pointer px-4 py-2 rounded-lg text-black self-end">Send Message</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Address;
