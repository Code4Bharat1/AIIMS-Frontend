import Image from "next/image";
import Link from "next/link";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram, IoMail } from "react-icons/io5";
import { FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/result", label: "Result" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#181d38] text-white py-8 px-4 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex justify-center items-center md:justify-start">
          <Image
            src="/Navbar&Footer/AIMLOGO.png"
            alt="AIM Tutorials Logo"
            width={332}
            height={120}
            className="object-cover object-center w-[332px] h-[120px]"
          />
        </div>

        <div className="sm:mx-auto md:mx-0">
          <h3 className="text-lg font-semibold mb-2">Quick Link</h3>
          <ul className="space-y-1 text-sm">
            {footerLinks.map(({ href, label }, index) => (
              <li key={index} className="flex items-center gap-1">
                <IoIosArrowForward className="text-blue-400" />
                <Link href={href} className="hover:text-blue-400">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm flex items-start gap-2">
            <FaLocationDot className="text-xl mt-1" />
            19, Sunil Sadan, 3rd Floor, Central Avenue Road, Near Ambedkar
            Garden, Opp. of Grand Central hotel, Above Monginis OR Yewle Tea,
            Chembur(East)-71
          </p>
          <p className="mt-2 text-sm flex items-center gap-2">
            <FaPhoneAlt />
            +91 9870780524 / +91 8779955027
          </p>
          <p className="mt-1 text-sm flex items-center gap-2 hover:text-blue-400 cursor-pointer">
            <IoMail />
            <a href="mailto:ghodke.kishor@yahoo.in">ghodke.kishor@yahoo.in</a>
          </p>
          <div className="flex space-x-2 mt-3">
            {[IoLogoInstagram, RiFacebookFill, FaYoutube].map((Icon, i) => (
              <div key={i} className="border border-white rounded-full p-1">
                <Icon />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm">
            At AIM Tutorials, we offer advanced classrooms, parent-teacher
            meetings, topnotch teacher, and a leading curriculum. Experience
            the best in education with us..
          </p>
        </div>
      </div>
    </footer>
  );
}
