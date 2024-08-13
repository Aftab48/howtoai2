import React from "react";

import Review from "./sections/reviews";
import Navbar from "./sections/Navbar";
import Stats from "./sections/Stats";
import Graph from "./sections/Graph";
import Cards from "./sections/Cards";
import FramerGraphs from "./sections/FramerGraphs";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Graph />
      <Cards />
      <FramerGraphs />
      <Pricing />
      <Review />
      <FAQ />
      <Footer />
    </div>
  );
};

export default page;
