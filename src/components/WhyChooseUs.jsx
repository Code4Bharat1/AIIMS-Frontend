const data = [
    {
        imgPath: "/Scholarhat.png",
        title: "Technologically advanced classroom",
        description: "Our classrooms are equipped with cutting-edge PPT projectors, enhancing the learning experience with dynamic and interactive presentations. This technology fosters an engaging and advanced educational environment."
    },
    {
        imgPath: "/Book.png",
        title: "All subjects under one roof",
        description: "All subjects are offered under one roof, providing a comprehensive and convenient learning experience. Students benefit from a seamless education journey without the need to seek external resources."
    },
    {
        imgPath: "/Book.png",
        title: "Subject wise best faculty in the industry",
        description: "Each subject is taught by dedicated faculty experts, ensuring that students receive specialized and in-depth instruction. Our expert teachers bring a wealth of knowledge and experience to foster academic excellence."
    },
    {
        imgPath: "/Book.png",
        title: "Regular parents-teachers meeting",
        description: "We hold regular parent-teacher meetings to keep parents informed and engaged in their child's academic progress. This open communication ensures a collaborative approach to each student's success."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="w-full px-6 md:px-20 py-16 bg-white">
            <div className="flex gap-6">
                {/* Fixed Why Choose Us Card */}
                <div className="bg-[#2467C9] text-white rounded-3xl shadow-lg p-8 w-full max-w-[365px] h-[480px] flex flex-col justify-center shrink-0">
                    <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
                    <p className="text-lg leading-relaxed">
                        Expert faculty with years of experience in NEET & JEE coaching. <br />
                        Smart classrooms and innovative teaching methods for better understanding. <br />
                        Personalized attention and regular progress tracking for every student. <br />
                        Proven track record of academic excellence and top results.
                    </p>
                </div>

                {/* Scrollable Dynamic Cards in a Horizontal Row */}
                <div className="overflow-x-auto w-full scrollbar-hidden ">
                    <div className="flex gap-6 w-max">
                        {data.map((item) => (
                            <div
                                key={item.title}
                                className="bg-[#AFDDFF] hover:bg-[#2467C9] hover:text-white transition-all duration-500 cursor-pointer text-black rounded-3xl shadow-lg p-8 w-[310px] h-[480px] flex flex-col items-center text-center shrink-0 scrollbar-hidden "
                            >
                                <img
                                    src={item.imgPath}
                                    alt={item.title}
                                    className="w-[97px] h-[65px] object-contain object-center mb-4"
                                />
                                <h3 className="text-[22px] font-semibold leading-tight mb-2">{item.title}</h3>
                                <p className="text-xl leading-tight">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};



export default WhyChooseUs;
