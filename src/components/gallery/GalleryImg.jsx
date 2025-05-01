import { galleryImgs } from "@/utils/data";

const GalleryImg = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-4 md:gap-y-24 md:p-16 p-8">
      {galleryImgs.map(({ id, imgPath }) => (
        <div key={id}>
          <img src={imgPath} alt={`Gallery image ${id}`} className="w-full h-auto object-cover" />
        </div>
      ))}
    </div>
  );
};

export default GalleryImg;
