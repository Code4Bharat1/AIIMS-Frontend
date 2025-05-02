"use client";
import { resultImage } from "@/utils/data";
import Image from "next/image";

export default function Result() {
  return (
    <div className="p-8 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {resultImage.map(({ id, imgPath }) => (
          <div
            key={id}
            onClick={() => setSelectedImg(imgPath)}
            className="cursor-pointer relative group"
          >
            <Image
              src={imgPath}
              alt={`Gallery image ${id}`}
              className="w-full h-auto object-cover rounded shadow-md transition-transform duration-300"
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
