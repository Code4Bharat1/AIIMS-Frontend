const Hero = ({ heading2, heading1, heading3 }) => {
    return (
        <section
            className="relative bg-[url('/Class.jpg')] bg-cover bg-center h-[670px] flex items-center justify-center text-white text-center -mt-9"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            {/* Content */}
            <div className="relative z-10 px-4">
                <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-[#AFDDFF] ">
                    {heading2}
                </h2>
                <h1 className="text-[44px] sm:text-[52px] md:text-[60px] font-extrabold ">
                    {heading1}
                </h1>
                <h3 className="text-[18px] sm:text-[20px] md:text-[21px] font-semibold">
                    {heading3}
                </h3>
            </div>
        </section>
    );
};

export default Hero;
