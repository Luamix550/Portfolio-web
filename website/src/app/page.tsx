import HeroSection from "./components/HeroSection";
import BackgroundColor from "./components/BackgroundColor";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="min-h-screen">
        <BackgroundColor />
        <div className="flex-col justify-center pt-40 text-center">
          <HeroSection />
        </div>
        <div className="flex-col justify-center pl-20 pt-10 text-center">
          <button className="rounded-lg px-5 py-3 mr-20 bg-black hover:bg-slate-800 text-white border border-white"> 
            Download CV
          </button>
        </div>
      </main>
    </div>
  );
}

