import HeroSection from "./components/HeroSection";
import BackgroundColor from "./components/BackgroundColor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects"
import Avatar from "./components/Avatar"
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Navbar />
      <BackgroundColor/>
      <main className="flex flex-col items-center px-4">
        <div id="1" className="flex flex-col justify-center pt-40 text-center">
          <HeroSection />
        </div>
        <div className="flex justify-center items-center space-x-4 pt-10">
          <Avatar/>
          <Button color="primary" variant="ghost">
            Download CV
          </Button>
        </div>
        <SectionDivider />
        <div id="2" className="flex flex-col justify-center pt-20 text-center">
          <AboutSection />
        </div>
        <SectionDivider />
        <div id="3" className="pt-20 pb-20">
          <Projects/>
        </div>
        <Footer />
      </main>
      </>
  );
}
