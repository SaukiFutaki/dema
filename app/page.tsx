import BlogSection from "@/components/home/blog-section";
import ChairmanMessage from "@/components/home/chairman-message";
import Kajiansection from "@/components/home/kajian-section";
import HeroSection from "@/components/home/title-hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <video
            src={"/video.MOV"}
            autoPlay
            muted
            loop
            className="object-cover brightness-50 w-full h-full"
          />
        </div>
        <HeroSection />
      </div>

      {/* Chairman's Message */}
      <ChairmanMessage />

      {/* News/Blog Section */}
      <BlogSection />

      {/* Studies/Research Section */}
      <Kajiansection />
    </div>
  );
}
