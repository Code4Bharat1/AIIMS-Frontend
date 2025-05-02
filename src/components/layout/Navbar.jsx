'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/result", label: "Result" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const linkClass = (href) =>
        `transition-colors duration-300  ${pathname === href ? "text-blue-600 font-semibold" : "text-black"
        }`;

    return (
        <div className={`sticky top-0 z-50 bg-white shadow-lg transition-all duration-300 ${!isOpen ? 'rounded-b-[2.5rem]' : ''}`}>
            <nav className="flex justify-between items-center px-6 md:px-16 py-3 h-24">
                {/* Clickable Logo */}
                <div className="w-32 sm:w-40 md:w-52">
                    <Link href="/" aria-label="Homepage">
                        <Image
                            src="/Navbar&Footer/AIMLOGO.png"
                            alt="AIM Logo"
                            width={276}
                            height={82}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 lg:gap-10 text-base md:text-lg lg:text-xl">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href} className={linkClass(href)}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-black"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="w-full bg-white flex flex-col items-center gap-6 py-6 text-lg md:hidden rounded-b-[2.5rem]">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href} onClick={() => setIsOpen(false)} className={linkClass(href)}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;


// 'use client';

// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/result", label: "Result" },
//     { href: "/gallery", label: "Gallery" },
//     { href: "/contact", label: "Contact" },
// ];

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const pathname = usePathname();

//     const linkClass = (href) =>
//         `transition-colors duration-300 ${pathname === href ? "text-blue-600 font-semibold" : "text-black"}`;

//     // Animation variants for mobile menu items only
//     const itemVariants = {
//         hidden: { opacity: 0, y: -10 },
//         visible: (i) => ({
//             opacity: 1,
//             y: 0,
//             transition: {
//                 delay: i * 0.05,
//                 duration: 0.2,
//                 ease: "easeOut"
//             }
//         })
//     };

//     return (
//         <div className={`sticky top-0 z-50 bg-white shadow-lg ${!isOpen ? 'rounded-b-[2.5rem]' : ''}`}>
//             <nav className="flex justify-between items-center px-6 md:px-16 py-3 h-24">
//                 {/* Logo - unchanged */}
//                 <div className="w-32 sm:w-40 md:w-52">
//                     <Link href="/" aria-label="Homepage">
//                         <Image
//                             src="/Navbar&Footer/AIMLOGO.png"
//                             alt="AIM Logo"
//                             width={276}
//                             height={82}
//                             className="w-full h-auto object-contain"
//                             priority
//                         />
//                     </Link>
//                 </div>

//                 {/* Desktop Nav - unchanged */}
//                 <ul className="hidden md:flex gap-8 lg:gap-10 text-base md:text-lg lg:text-xl">
//                     {navLinks.map(({ href, label }) => (
//                         <li key={href}>
//                             <Link href={href} className={linkClass(href)}>
//                                 {label}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>

//                 {/* Mobile Hamburger - unchanged */}
//                 <button
//                     className="md:hidden text-black"
//                     onClick={() => setIsOpen(!isOpen)}
//                     aria-label="Toggle menu"
//                 >
//                     {isOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </nav>

//             {/* Mobile Menu - only change is adding motion */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <div className="w-full bg-white flex flex-col items-center gap-6 py-6 text-lg md:hidden rounded-b-[2.5rem]">
//                         {navLinks.map(({ href, label }, i) => (
//                             <motion.li
//                                 key={href}
//                                 className="list-none"
//                                 custom={i}
//                                 variants={itemVariants}
//                                 initial="hidden"
//                                 animate="visible"
//                                 exit="hidden"
//                                 onClick={() => setIsOpen(false)}
//                             >
//                                 <Link href={href} className={linkClass(href)}>
//                                     {label}
//                                 </Link>
//                             </motion.li>
//                         ))}
//                     </div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default Navbar;