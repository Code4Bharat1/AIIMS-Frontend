import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { stats } from "@/utils/data";

const Highlights = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,  
  });

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="bg-[#2467C9] text-white py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
        {stats.map((stat, index) => {
          const numericValue = parseInt(stat.value.replace(/\D/g, "")); // strips out '+' and other chars
          const hasPlus = stat.value.includes("+");

          return (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold">
                {startAnimation ? (
                  <CountUp
                    end={numericValue}
                    duration={1.5}
                    suffix={hasPlus ? "+" : ""}
                    separator=","
                  />
                ) : hasPlus ? (
                  "0+"
                ) : (
                  "0"
                )}
              </div>
              <div className="text-lg mt-2">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Highlights;
