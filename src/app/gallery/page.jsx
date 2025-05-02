import Hero from "@/components/common/Hero";
import Navbar from "@/components/layout/Navbar";
import GalleryImg from "@/components/gallery/GalleryImg";
import Footer from "@/components/layout/Footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <Hero heading1="Gallery" bgImg={"/Hero/Gallery.png"} />
      <GalleryImg />
      <Footer />
    </div>
  );
}

export default page;
