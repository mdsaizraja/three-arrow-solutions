import React from "react";
import Hero from "../components/Hero/Hero";
import { Layout } from "../layout/Layout";
import AboutUs from "../components/AboutUs/AboutUs";
import OurService from "../components/OurService/OurService";
import GitHubSection from "../components/GitHubSection/GitHubSection";
import Carousel from "../components/Carousel/Carousel";
import BusinessModel from "../components/Business Model/BusinessModel";
import TwoSection from "../components/TwoSection/TwoSection";
import Clients from "../components/Client_animated/client";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="h-full w-full dark:bg-[#040C18] bg-white pt-1">
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
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
