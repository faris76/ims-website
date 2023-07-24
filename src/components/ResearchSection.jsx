import React from "react";
import BlogCard from "./BlogCard";

const ResearchSection = () => {
  return (
    <>
      <section className="pt-10 pb-10 lg:pt-[90px] lg:pb-20 bg-[#EEF2F3] ">
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  Research & Projects
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Islamic Moral Economy (IME)"
              CardDescription="This book explores and analyses economic development within Islamic Moral Economy (IME)."
              image={require("../assets/islamic_moral_economy.jpg")}
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Center of Excellence on Countering Violent Extremism"
              CardDescription="This MOU is intended to train officers shortlisted by the Khyber Pakhtunkhwa Center of Excellence on Countering Violent Extremism ."
              image={require("../assets/center_of_excellence.jpeg")}
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Center for Water Informatics and Climate Resilience"
              CardDescription="The Center for Water Informatics and Climate Resilience (CWC) at IMSciences is responsible for facilitating policy development processes and dialogues."
              image={require("../assets/center_of_water.jpg")}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchSection;
