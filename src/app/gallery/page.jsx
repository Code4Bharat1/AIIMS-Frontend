import Hero from "@/components/Hero";
import Navbar from "@/components/layout/Navbar";
import GalleryImg from "@/components/gallery/GalleryImg";
const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero heading1="Gallery"/>
        <GalleryImg/>
    </div>
  );
}

export default page;
