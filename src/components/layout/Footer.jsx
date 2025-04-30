import Image from "next/image";
import Link from "next/link";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram, IoMail } from "react-icons/io5";
import { FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#181d38] text-white py-8 px-4 md:px-16 h-[331] bottom-0 left-0 relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex items-center">
          <Image
            src="/Navbar&Footer/AIMLOGO.png"
            alt="AIM Tutorials Logo"
            width={132}
            height={80}
            className="top-106 left-44 object-cover object-center w-[332px] h-[120px]"
          />
        </div>
        <div className="w-28">
          <h3 className="text-lg font-semibold mb-2">Quick Link</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center">
              <IoIosArrowForward className="text-blue-400" />
              <Link href="#" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li className="flex items-center">
              <IoIosArrowForward className="text-blue-400" />
              <Link href="#" className="hover:text-blue-400">
                Results
              </Link>
            </li>
            <li className="flex items-center">
              <IoIosArrowForward className="text-blue-400" />
              <Link href="#" className="hover:text-blue-400">
                Gallery
              </Link>
            </li>
            <li className="flex items-center">
              <IoIosArrowForward className="text-blue-400" />
              <Link href="#" className="hover:text-blue-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm flex flex-row gap-1 items-start">
            <FaLocationDot className="text-4xl -mt-[7px]" /> 19, Sunil Sadan,
            3rd Floor, Central Avenue Road, Near Ambedkar Garden, Opp.of Grand
            Central hotel, Above Monginis OR Yewle Tea, Chembur(East)-71
          </p>
          <p className="mt-2 text-sm flex items-center flex-row text-center gap-1">
            <FaPhoneAlt />
            +91 9870780524 / +91 8779955027
          </p>
          <p className="text-sm flex flex-row items-center gap-1 hover:text-blue-400 cursor-pointer">
            <IoMail />
            ghodke.kishor@yahoo.in
          </p>
          <div className="flex space-x-2 mt-3">
            <div className="border border-white rounded-[50%] p-1">
              <IoLogoInstagram />
            </div>
            <div className="border border-white rounded-[50%] p-1">
              <RiFacebookFill />
            </div>
            <div className="border border-white rounded-[50%] p-1">
              <FaYoutube />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm">
            At AIM Tutorials, we offer advanced classrooms, parent-teacher
            meetings, top-notch teacher, and a leading curriculum. Experience
            the best in education with us.
          </p>
        </div>
      </div>
    </footer>
  );
}
