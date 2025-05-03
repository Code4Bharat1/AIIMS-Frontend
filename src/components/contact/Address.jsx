'use client';

import Image from "next/image";
import Link from "next/link";

const contactDetails = [
    {
        icon: '/officeAddressIcon.png',
        text: '19, Sunil Sadan, 3rd Floor, Central Avenue Road, Near Ambedkar Garden, Opp.of Grand Central hotel, Above Monginis OR Yewle Tea, Chembur(East)-71',
    },
    {
        icon: '/call.png',
        text: '+91 9870780524 / +91 8779955027',
    },
    {
        icon: '/email.png',
        text: 'ghodke.kishor@yahoo.in',
        isEmail: true,
    },
];

const ContactInfo = () => (
    <div className={`flex flex-col gap-8 xl:gap-16 `}>
        {contactDetails.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
                <Image src={item.icon} alt="" className="h-6 w-6 mt-3" width={1000} height={1000} />
                {item.isEmail ? (
                    <Link
                        href={`mailto:${item.text}`}
                        className={`text-[32px] hover:text-[#2467C9]`}
                    >
                        {item.text}
                    </Link>
                ) : (
                    <p className="text-[32px]">{item.text}</p>
                )}
            </div>
        ))}
    </div>
);

const Address = () => {
    return (
        <div className="flex flex-col xl:flex-row justify-start relative mt-30 mb-30 px-4 xl:px-0">
            {/* Desktop layout with background */}
            <div className="hidden xl:flex bg-[#AFDDFF] h-[600px] w-[1200px] rounded-r-full relative z-10 items-center px-10 pr-60 text-2xl ">
                <div className="flex-1" />
                <ContactInfo />
            </div>

            {/* Mobile layout */}
            <div className="xl:hidden mb-8 text-left">
                <ContactInfo isMobile />
            </div>

            {/* Embedded Google Map */}
            <div className="relative xl:absolute w-full xl:w-[450px] xl:right-[calc(100%-1400px)] xl:top-1/2 xl:-translate-y-1/2 h-[500px] bg-[#2467C9] z-20 rounded-2xl flex flex-col justify-center items-center xl:items-start gap-8 p-4 text-white overflow-hidden mx-auto xl:mx-0 select-none">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7542.1080115727145!2d72.900999!3d19.061363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7bf91346769%3A0x540d723b75c1ec50!2sAIM%20TUTORIALS...%20Prof.kishor%20sir!5e0!3m2!1sen!2sin!4v1746089026216!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                ></iframe>
            </div>
        </div>
    );
};

export default Address;
