import Link from "next/link";
export default function Mypassion() {
  return (
    <div>
      <section className="body-font z-50 text-gray-600">
        <div className="container mx-auto py-5">
          <h1 className="pt-5 text-center text-4xl font-bold md:text-5xl">
            MY PASSION
          </h1>
          <div className="flex flex-wrap">
            <div className="p-2 md:w-full lg:w-1/2 ">
              <div className="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row md:hover:shadow-lg bg-slate-500 text-teal-200">
                <div className="mb-4 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 sm:mb-0 sm:mr-8">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                    Traveling
                  </h2>
                  <p className="text-base leading-relaxed">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <Link href="#" className="group mt-3 inline-flex cursor-pointer items-center hover:text-sky-300">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="ml-2 h-4 w-4 group-hover:translate-x-4 transition duration-500 ease-in-out "
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-full lg:w-1/2">
              <div className="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row md:hover:shadow-lg">
                <div className="mb-4 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 sm:mb-0 sm:mr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bike"
                  >
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="15" cy="5" r="1" />
                    <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                    Motorcycle Riding
                  </h2>
                  <p className="text-base leading-relaxed text-slate-500">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="group mt-3 inline-flex cursor-pointer items-center text-slate-500 hover:text-sky-300">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="ml-2 h-4 w-4 group-hover:translate-x-4 transition duration-500 ease-in-out"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-full lg:w-1/2">
              <div className="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row md:hover:shadow-lg">
                <div className="mb-4 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 sm:mb-0 sm:mr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mountain"
                  >
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                    Hill Trekking
                  </h2>
                  <p className="text-base leading-relaxed  text-slate-500">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="group mt-3 inline-flex cursor-pointer items-center  text-slate-500 hover:text-sky-300 ">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="ml-2 h-4 w-4 group-hover:translate-x-4 transition duration-500 ease-in-out"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-full lg:w-1/2">
              <div className="flex flex-col rounded-lg border-2 border-gray-200 border-opacity-50 p-8 sm:flex-row md:hover:shadow-lg bg-slate-500 text-teal-200">
                <div className="mb-4 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 sm:mb-0 sm:mr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-camera"
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                    Photography
                  </h2>
                  <p className="text-base leading-relaxed">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="group mt-3 inline-flex cursor-pointer items-center hover:text-sky-300">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="ml-2 h-4 w-4 group-hover:translate-x-4 transition duration-500 ease-in-out"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
