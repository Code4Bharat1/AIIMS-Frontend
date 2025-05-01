"use client";
import { useState } from "react";
import { resultImage } from "@/utils/data";

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
            <img
              src={imgPath}
              alt={`Gallery image ${id}`}
              className="w-full h-auto object-cover rounded shadow-md transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      </div>
  )
}
