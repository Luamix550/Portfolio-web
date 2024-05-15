import HeroSection from "./components/HeroSection";
import BackgroundColor from "./components/BackgroundColor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";
import AboutSection from "./components/AboutSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center px-4">
        <BackgroundColor />
        <div className="flex flex-col justify-center pt-40 text-center">
          <HeroSection />
        </div>
        <div className="flex flex-col justify-center pt-10 text-center">
          <button className="rounded-lg px-4 py-2 mx-auto bg-black hover:bg-slate-800 text-white border border-white"> 
            Download CV
          </button>
        </div>
        <div className="">
          <SectionDivider />
        </div>
        <div>
          <AboutSection/>
        </div>
        <Footer />
      </main>
    </>
  );
}
