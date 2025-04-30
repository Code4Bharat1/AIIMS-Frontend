'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`sticky top-0 z-50 bg-white shadow-lg transition-all duration-300 ${!isOpen ? 'rounded-b-[2.5rem]' : ''}`}>
            <nav className="flex justify-between items-center px-6 md:px-16 py-4">
                {/* Logo */}
                <Image
                    src="/Navbar&Footer/AIMLOGO.png"
                    alt="AIM Logo"
                    width={276}
                    height={82}
                    className="object-cover object-center h-[82px] w-[276px]"
                    priority
                />

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 lg:gap-10 text-base md:text-lg lg:text-xl">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/result">Result</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

                {/* Hamburger Icon */}
                <button
                    className="md:hidden text-black"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <ul className="w-full bg-white flex flex-col items-center gap-6 py-6 text-lg md:hidden rounded-b-[2.5rem]">
                    <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link href="/result" onClick={() => setIsOpen(false)}>Result</Link></li>
                    <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
                    <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
