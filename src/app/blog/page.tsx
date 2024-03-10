import Image from "next/image";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
export default function blog() {
  return (
    <>
    <Navbar/>
    <h1 className="text-center text-orange-700">This is blog Page</h1>
    <Footer/>
    </>
  );
}
