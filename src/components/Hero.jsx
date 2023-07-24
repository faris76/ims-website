import React from "react";
import InforationTabs from "./InforationTabs";

const Hero = () => {
  return (
    <>
      {/* Section: Design Block */}
      <section className="relative">
        {/* Jumbotron */}
        <div className="bg-[#D4E1E8] py-24 px-6 text-center dark:bg-neutral-900">
          <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            Welcome to <br />
            <span className="text-primary">IMSciences University</span>
          </h1>
          <a
            className="bg-[#5F96B4] rounded-full mb-2 inline-block bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            data-te-ripple-init=""
            data-te-ripple-color="light"
            href="https://faris76.github.io/IMsciences_virtual_tour/"
            role="button"
          >
            Virtual Tour
          </a>
          <a
            className="outline outline-1 outline-[#5F96B4] text-[#5F96B4]  inline-block rounded-full px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out  hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
            data-te-ripple-init=""
            data-te-ripple-color="light"
            href="#!"
            role="button"
          >
            Learn more
          </a>
          <iframe
            class="w-[50%] relative aspect-video top-[65%] left-[50%] translate-x-[-50%] mt-10"
            src="https://www.youtube.com/embed/OkxfVuGDJYs"
          ></iframe>
        </div>
        {/* Jumbotron */}
        <InforationTabs />
      </section>
    </>
  );
};

export default Hero;
