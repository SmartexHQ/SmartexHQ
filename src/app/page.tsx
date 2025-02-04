import BuildFuture from "@/components/Views/buildFuture";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ContactComponent from "@/components/Views/contact";
import MeetOurTeam from "@/components/Views/meetOurTeam";
import HeroSection from "@/components/Views/Hero";
import Partners from "@/components/Views/Partners";
import ValueOne from "@/components/Views/ValueOne";
import ValueTwo from "@/components/Views/ValueTwo";
import Product from "@/components/Views/Product";
import Services from "@/components/Views/Services";
import AboutUs from "@/components/Views/about";
// import TextReveal from "@/components/_core/Paragraph";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="app-width mx-auto">
        <HeroSection />
        <Partners />

        {/* <TextReveal /> */}
        <ValueOne />
        <ValueTwo />
        <Product />
        <Services />
        <AboutUs />
        <MeetOurTeam />
        <BuildFuture />
        <ContactComponent />
        <Footer />
      </div>
    </div>
  );
}
