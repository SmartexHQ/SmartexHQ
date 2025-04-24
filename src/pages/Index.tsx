import {
  Bot,
  Cpu,
  Zap,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Database,
  Lock,
  Mail,
  Phone,
  Trophy,
  Award,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import ContactForm from "@/components/ContactForm";
import TestimonialCard from "@/components/TestimonialCard";
import HeroSection from "@/components/Views/Hero";
import Partners from "@/components/Views/Partners";
import ValueOne from "@/components/Views/ValueOne";
import Product from "@/components/Views/Product";
import Services from "@/components/Views/Services";
import AboutUs from "@/components/Views/about";
import MeetOurTeam from "@/components/Views/meetOurTeam";
import BuildFuture from "@/components/Views/buildFuture";
import ContactComponent from "@/components/Views/contact";
import Footer from "@/components/footer";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="app-width mx-auto">
        <HeroSection />
        <Partners />
        <ValueOne />
        <Product />
        <Services />
      </div>
      <AboutUs />
      <MeetOurTeam />
      <BuildFuture />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Index;
