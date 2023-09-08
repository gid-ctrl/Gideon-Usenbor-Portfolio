import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import about from "./components/about";
import AboutMe from "./components/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto py-4 px-12">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AboutMe />
      </div>
    </main>
  );
}
