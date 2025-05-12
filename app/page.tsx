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
          <Image
            // src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
            src={"/demo.png"}
            alt="Hero Image"
            fill
            className="object-cover brightness-50"
            priority
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
