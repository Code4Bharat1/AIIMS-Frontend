'use client';

import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons = () => {
    return (
        <div className="fixed top-[50%] right-6 flex-col items-end space-y-3 z-50 lg:block hidden">
            <a
                href="https://wa.me/9870780524"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white h-0 font-medium rounded-full shadow-lg transition"
            >
                <FaWhatsapp size={50} />
            </a>
        </div>
    );
};

export default FloatingButtons;
