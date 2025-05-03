"use client"
import { useEffect, useRef, useState } from "react"
import { whyChooseUs } from "@/utils/data"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const WhyChooseUs = () => {
    const scrollContainerRef = useRef(null)
    const [isMobile, setIsMobile] = useState(false)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const cardWidth = 310 // Width of each card including gap
    const gap = 24 // Gap between cards

    // Check screen size and scroll position
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
            updateScrollButtons()
        }

        const updateScrollButtons = () => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
                setCanScrollLeft(scrollLeft > 0)
                setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
            }
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        scrollContainerRef.current?.addEventListener('scroll', updateScrollButtons)

        return () => {
            window.removeEventListener('resize', checkScreenSize)
            scrollContainerRef.current?.removeEventListener('scroll', updateScrollButtons)
        }
    }, [])

    const scrollTo = (direction) => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.clientWidth;

        const totalCardWidth = cardWidth + gap;

        // Calculate current index
        const currentIndex = Math.round(scrollLeft / totalCardWidth);

        let targetIndex = direction === 'left'
            ? Math.max(0, currentIndex - 1)
            : currentIndex + 1;

        const targetScroll = targetIndex * totalCardWidth;

        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth',
        });
    };


    return (
        <section className="w-full px-4 md:px-20 py-16 bg-white">
            <div className={`flex ${isMobile ? "flex-col items-center" : "gap-6"}`}>
                {/* Fixed Why Choose Us Card */}
                <div className="bg-[#2467C9] text-white rounded-3xl p-8 w-full max-w-[365px] h-[480px] flex flex-col justify-center shrink-0 mb-6 md:mb-0">
                    <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
                    <p className="text-lg leading-relaxed">
                        Expert faculty with years of experience in NEET & JEE coaching. <br />
                        Smart classrooms and innovative teaching methods for better understanding. <br />
                        Personalized attention and regular progress tracking for every student. <br />
                        Proven track record of academic excellence and top results.
                    </p>
                </div>

                {/* Scrollable Dynamic Cards */}
                <div className="relative w-full overflow-hidden">
                    {(canScrollLeft || isMobile) && (
                        <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-all active:scale-90"
                            onClick={() => scrollTo('left')}
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="text-[#2467C9]" size={24} />
                        </button>
                    )}

                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto scrollbar-hidden pl-2 pr-2"
                    >
                        <div className="flex gap-6 w-max">
                            {whyChooseUs.map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-[#AFDDFF] hover:bg-[#2467C9] hover:text-white transition-all duration-500 cursor-pointer text-black rounded-3xl p-8 w-[310px] h-[480px] flex flex-col items-center text-center shrink-0"
                                >
                                    <Image
                                        src={item.imgPath}
                                        alt={item.title}
                                        className="w-[97px] h-[65px] object-contain object-center mb-4"
                                        width={1000}
                                        height={1000}
                                    />
                                    <h3 className="text-[22px] font-semibold leading-tight mb-2">
                                        {item.title.split(' • ').map((line, i) => (
                                            <span key={i} className="block">
                                                {line}
                                            </span>
                                        ))}
                                    </h3>
                                    <p className="text-xl leading-tight">
                                        {item.description.split(' • ').map((line, i) => (
                                        <span key={i} className="block">
                                            {line}
                                        </span>
                                    ))}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {(canScrollRight || isMobile) && (
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-all x"
                            onClick={() => scrollTo('right')}
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="text-[#2467C9]" size={24} />
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs