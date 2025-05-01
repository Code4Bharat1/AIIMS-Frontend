import Address from "@/components/contact/Address";
import ReachUs from "@/components/contact/ReachUs";
import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function contactPage() {
  return (
    <div>
      <Navbar />
      <Hero heading1="Contact Us" />
      <Address />
      <ReachUs />
      <Footer />
    </div>
  );
}
