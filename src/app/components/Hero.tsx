import Link from "next/link";
import Image from "next/image";
import DownloadIcon from "@mui/icons-material/Download";
export default function Home() {
  const BIO = "Programmer's Page";
  const ResumeLink =
    "https://drive.google.com/file/d/1h5xalav_-z9MCKcIOjRMTIsBgfKJdZwy/view?usp=sharing";
  return (
    <>
      <div className=" z-20 m-auto flex h-fit flex-col items-center justify-center bg-transparent text-white w-full">
        <video
          src="Hero.mp4"
          autoPlay
          loop
          muted
          className="h-screen w-full object-cover opacity-90 bg-slate-500 relative"
        />
        <div className="absolute flex flex-col justify-center">
          <Image
            src="/HeroImage-V3.png"
            width={200}
            height={200}
            alt="Picture of the author"
            className="h-64 w-64 rounded-full object-cover border-2 -translate-y-[8em] lg:-translate-y-4"
          />
          <h1 className="pt-5 text-3xl font-semibold md:text-5xl text-center">
            Welcome To
          </h1>
          <h3 className="text-lg md:text-2xl mb-14 lg:mb-4 text-center">
            {BIO}
          </h3>
          <button className="bg-teal-400 text-slate-700 hover:text-teal-400 hover:bg-slate-700 text-lg group relative inline-block overflow-hidden rounded border border-gray-100  px-8 py-2 font-medium focus:outline-none focus:ring active:bg-indigo-600 active:text-white bg-gradient-to-r from-slate-400 to-indigo-600 bg-clip-text text-transparent">
            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-amber-400 transition-all duration-500 group-hover:w-full"></span>
            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-amber-400 transition-all duration-500 group-hover:h-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-amber-400 transition-all duration-500 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-amber-400 transition-all duration-500 group-hover:h-full"></span>
            <Link href={ResumeLink}>
              Resume <DownloadIcon />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
