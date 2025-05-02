"use client";
import { useEffect, useState } from "react";

const Hero = ({
  heading1,
  heading2,
  heading3,
  highlightWords = [], // array of phrases to highlight
  highlightClass = "",
  bgImg,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Helper: Escape RegExp special chars
  const escapeRegExp = (string) =>
    string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Highlight all matching phrases
  const highlightText = (text, highlights, className) => {
    if (!highlights || highlights.length === 0) return text;

    const pattern = highlights.map(escapeRegExp).join("|");
    const regex = new RegExp(`(${pattern})`, "gi");

    const parts = text.split(regex);
    return parts.map((part, i) =>
      highlights.some(
        (highlight) => part.toLowerCase() === highlight.toLowerCase()
      ) ? (
        <span key={i} className={className}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section
      className="relative bg-cover min-h-[500px] sm:min-h-[600px] md:min-h-[690px] flex items-center justify-center text-white text-center -mt-9"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-4 select-none">
        <h2
          className={`text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-[#AFDDFF] 
          ${
            show
              ? "opacity-100 translate-y-0 transition-all duration-1000 ease-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          {heading2}
        </h2>
        <h1
          className={`text-[44px] sm:text-[52px] md:text-[60px] font-extrabold 
          ${
            show
              ? "opacity-100 translate-y-0 transition-all duration-1000 ease-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          {heading1}
        </h1>
        <h3
          className={`text-[18px] sm:text-[20px] md:text-[21px] font-semibold 
          ${
            show
              ? "opacity-100 translate-y-0 transition-all duration-1000 ease-out"
              : "opacity-0 translate-y-12"
          }`}
        >
          {highlightText(heading3, highlightWords, highlightClass)}
        </h3>
      </div>
    </section>
  );
};

export default Hero;
