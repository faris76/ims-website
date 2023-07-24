import React from "react";
import Hero from "../components/Hero";
import ResearchSection from "../components/ResearchSection";
import EventsSection from "../components/EventsSection";
import Statistics from "../components/Statistics";

const Home = () => {
  return (
    <>
      <Hero />
      <ResearchSection />
      <EventsSection />
      <Statistics />
    </>
  );
};

export default Home;
