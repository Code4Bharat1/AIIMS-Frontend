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
                        At AIM Tutorials, we offer advanced classrooms, personalized attention, regular parent-teacher meetings, top-notch teachers, and a leading curriculum. Experience the best in education with us.
                    </p>
                </div>
            </div>

            {/* Mobile header - shown only on small screens */}
            <div className="lg:hidden mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">Feel free to Contact Us</h1>
                <p className="text-2xl text-[#2467C9]">
                    <span className="font-semibold">Get In Touch</span><br />
                    At AIM Tutorials, we offer advanced classrooms, personalized attention, regular parent-teacher meetings, top-notch teachers, and a leading curriculum. Experience the best in education with us.
                </p>
            </div>

            {/* Map card */}
            <div className="relative lg:absolute w-full lg:w-[500px] lg:left-[calc(100%-1000px)] lg:top-1/2 lg:-translate-y-1/2 h-84 bg-[#2467C9] z-20 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-8 p-6 lg:p-9 text-white overflow-hidden mx-auto lg:mx-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7542.1080115727145!2d72.900999!3d19.061363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7bf91346769%3A0x540d723b75c1ec50!2sAIM%20TUTORIALS...%20Prof.kishor%20sir!5e0!3m2!1sen!2sin!4v1746089026216!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Address;
