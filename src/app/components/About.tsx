import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#3a606c]">
      <div className=" mx-auto flex max-w-7xl flex-col  items-center md:flex-row md:items-start">
        <Image
          src="/AboutImage.jpg"
          width={500}
          height={500}
          alt="image"
          className="my-0 h-96 object-cover object-top sm:mx-5 sm:my-10 lg:h-[30rem]"
        />

        <div className="flex flex-col items-start bg-opacity-75 px-5 py-12 md:px-5">
          <h1 className="pb-8 lg:text-4xl text-2xl text-slate-50 md:mt-0 md:text-5xl text">
            ABOUT MY LIFE JOURNEY
          </h1>
          <p className="pb-8 text-sm leading-relaxed text-slate-50">
            Hello! Its great to meet you. Being a current-year B.Tech CSE
            student from Jalpaiguri Engineering College must offer you a wealth
            of learning experiences. My interest in technology, full-stack
            web development, and competitive coding are impressive! If you have
            any specific questions, need advice, or want information on a
            particular topic, feel free to ask. Whether its about your studies,
            programming, or anything else, I am here to help!
          </p>
          <Link
            href="#"
            className="flex cursor-pointer items-center rounded-md px-3 py-2 text-base ring-1 ring-white  text-sky-500 hover:text-slate-500 group"
          >
            Learn More
            <svg
              className="ml-2 h-4 w-4 group-hover:translate-x-2 transition duration-500 ease-in-out"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          <div className="mt-2 flex w-full py-4 text-center leading-none">
            <span className="mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-slate-50">
              <svg
                className="mr-1 h-4 w-4 group-hover:translate-x-4 transition duration-500 ease-in-out"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="inline-flex items-center text-sm leading-none  text-slate-50">
              <svg
                className="mr-1 h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
