'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryImgs } from '@/utils/data';
import Image from 'next/image';

const GalleryImg = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [origin, setOrigin] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const imgRefs = useRef({});

  const handleClick = (imgPath) => {
    const rect = imgRefs.current[imgPath].getBoundingClientRect();
    setOrigin({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });
    setSelectedImg(imgPath);
  };

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-4 md:gap-y-24 md:p-16 p-8">
        {galleryImgs.map(({ id, imgPath }) => (
          <div
            key={id}
            onClick={() => handleClick(imgPath)}
            className="cursor-pointer relative group"
          >
            <Image
              src={imgPath}
              alt={`Gallery image ${id}`}
              className="w-full h-auto object-cover shadow-md transition-transform duration-300 "
              width={1000}
              height={1000}
              ref={(el) => (imgRefs.current[imgPath] = el)}
            />

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn className="text-white w-8 h-8 mb-2" />
              <p className="text-white text-lg">Zoom In</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              className="relative"
              initial={{
                top: origin.top,
                left: origin.left,
                width: origin.width,
                height: origin.height,
                position: 'absolute',
              }}
              animate={{
                top: '50%',
                left: '50%',
                width: 'auto',
                height: 'auto',
                x: '-50%',
                y: '-50%',
              }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-2 right-2 text-black rounded-full p-1 cursor-pointer"
              >
                <X size={30} strokeWidth={5} />
              </button>

              <Image
                src={selectedImg}
                alt="Enlarged"
                className="shadow-xl w-[600px] h-[600px] max-h-[80vh] max-w-[90vw]"
                width={1000}
                height={1000}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryImg;
