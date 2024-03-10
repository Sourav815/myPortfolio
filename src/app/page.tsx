import Image from "next/image";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Passion from "./components/Passion"
import About from "./components/About"
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <Passion/>
    <About/>
    <Footer/>
    </>
  );
}
