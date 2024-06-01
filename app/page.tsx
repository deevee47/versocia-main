import Image from "next/image";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Navbar from "./components/ui/Navbar";
import How from "./components/How";
import About from "./components/About";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col text-xl sm:text-2xl sm:px-10 px-5 font-[questrial] ">
        <div className="max-w-full sm:px-20 w-full">
          <Navbar />
          <Hero />
          <About />
          <How />
          <Offer />
          <Contact />
        </div>
      </main>
  );
}
