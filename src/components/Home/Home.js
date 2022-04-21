import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import OurService from "../components/OurService/OurService";
import GitHubSection from "../components/GitHubSection/GitHubSection";
import Carousel from "../components/Carousel/Carousel";
import BusinessModel from "../components/Business Model/BusinessModel";
import TwoSection from "../components/TwoSection/TwoSection";
import Clients from "../components/Clients/Clients";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
const Home = () => {
  return (
    <>
      {" "}
      <Hero />
      <AboutUs />
      <OurService />
      <GitHubSection />
      <Carousel />
      <BusinessModel />
      <TwoSection />
      <Clients />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
