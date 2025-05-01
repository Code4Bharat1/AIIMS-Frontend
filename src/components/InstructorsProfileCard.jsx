import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TeacherCard({ image, name, education, social }) {
  return (
    <div className="w-[300px] sm:w-[320px] md:w-[338px] h-[426px] relative text-center flex flex-col items-center shrink-0">
      {/* Circular Image */}
      <div className="relative w-[200px] sm:w-[220px] md:w-[240px] h-[200px] sm:h-[220px] md:h-[240px] border-2 border-[#AFDDFF] rounded-full overflow-hidden z-10 transition-all duration-500 ease-in-out hover:-translate-y-5 ">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full border"
        />
      </div>

      {/* Info Card */}
      <div className="absolute top-[140px] sm:top-[150px] md:top-[160px] w-[90%] max-w-[310px] bg-[#AFDDFF] rounded-2xl pt-24 pb-6 px-4 shadow-md overflow-hidden">
        <p className="text-[#2467C9] text-sm font-medium truncate whitespace-nowrap overflow-hidden">
          {education}
        </p>
        <h3 className="text-lg font-semibold text-gray-800 truncate whitespace-nowrap overflow-hidden">
          {name}
        </h3>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mt-4">
          {social.facebook && (
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2467C9] p-2 rounded-sm"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
          )}
          {social.youtube && (
            <a
              href={social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2467C9] p-2 rounded-sm"
            >
              <FaYoutube className="text-white text-lg" />
            </a>
          )}
          {social.instagram && (
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2467C9] p-2 rounded-sm"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2467C9] p-2 rounded-sm"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
