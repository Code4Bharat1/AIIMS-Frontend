'use client';

import Link from "next/link";

const FloatingButtons = () => {
    return (
      <div className="fixed bottom-9 right-6 flex flex-col items-end space-y-3 z-50">
        <Link
          href="https://wa.me/+919870780524"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center active:scale-90"
        >
          <img src="/wsp.png" alt="" className="h-14 w-14 hover:scale-105" />
        </Link>
      </div>
    );
};

export default FloatingButtons;
