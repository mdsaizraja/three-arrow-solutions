import React from "react";
import Hero from "../components/Hero/Hero";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import AboutUs from "../components/AboutUs/AboutUs";
import OurService from "../components/OurService/OurService";
import GitHubSection from "../components/GitHubSection/GitHubSection";
import Carousel from "../components/Carousel/Carousel";
import BusinessModel from "../components/Business Model/BusinessModel";
import TwoSection from "../components/TwoSection/TwoSection";
import Clients from "../components/Clients/Clients";
import Blog from "../components/Blog/Blog";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <AboutUs />
        <OurService />
        <GitHubSection />
        <Carousel />
        <BusinessModel />
        <TwoSection />
        <Clients />
        <Blog />
      </Layout>{" "}
    </>
  );
};

export default Home;
