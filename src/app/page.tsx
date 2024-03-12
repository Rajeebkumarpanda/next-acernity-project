import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCard from "@/components/TestimonialCard";
import UpComingWebinar from "@/components/UpcomingWebniars";
import WhyChooseUs from "@/components/WhyChooseus";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedSection/>
      <WhyChooseUs/>
      <TestimonialCard/>
      <UpComingWebinar/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
