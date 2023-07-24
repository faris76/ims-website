import React from "react";
import BlogCard from "./BlogCard";

const EventsSection = () => {
  return (
    <>
      <section className="pt-10 pb-10 lg:pt-[90px] lg:pb-20 ">
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  Featured Events
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <BlogCard
              date="Jun 25, 2023"
              CardTitle="Farewell Party 2023"
              CardDescription="The farewell party for the last semester students was held on 21st June 2023"
              image={require("../assets/farewell_party.jpg")}
            />
            <BlogCard
              date="Jun 23, 2023"
              CardTitle="US Consulate"
              CardDescription="Consul General of the US Consulate in Peshawar Visits Center for Water Informatics & Climate Resilience (CWC) and Lincoln Corner at IMSciences."
              image={require("../assets/us_consulate.jpg")}
            />
            <BlogCard
              date="Jun 20, 2023"
              CardTitle="Green Youth Movement (GYM)"
              CardDescription="Green Youth Movement (GYM) Club Takes a Stand for Ecotourism: Ayubia National Park Receives a Visit from 50 Enthusiastic Participants."
              image={require("../assets/green_youth_movement.jpg")}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsSection;
