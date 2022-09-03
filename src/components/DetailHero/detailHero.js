import React from "react";
import styled from "styled-components";
import { Container } from "../../layout/LayoutStyles";
import Header from "../Header/Header";

export const Wrap = styled.div`
width-100%;
background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);


`;

const DetaiHero = ({detailsData}) => {
  
  return (
    <Wrap className="pt-1 pb-[6%]">
      <div className=" xl:px-20 text-white dark:text-white">
        <Header />
      </div>
      <div className="container mx-auto " >
     
        <h1 className="Git_text text-white mx-5  xl:text-8xl leading-normal mb-0  py-0  ">
          {detailsData[0].text}
        </h1>
        <h2 className="Git_text text-white mx-5 font-black xl:text-5xl mt-5  leading-normal ">
          COMPANY
        </h2>

        <p className="Git_text mx-5 mt-5 xl:mt-20 text-[#fff] xl:text-3xl leading-normal  mt-20  ">
          A combination of technologies that are used to develop web
          applications is known as a stack. MERN stack demand is increasing day
          by day because it is an open-source combination of technologies. This
          tech stack uses one language across all tiers. MERN comprises Mongo
          DB, Express JS, React JS, and Node JS. MERN has gained immense
          popularity over the years for delivering flexible, high-performance,
          and single-page applications (SPA).
        </p>
        <div className="flex items-center mt-16 dark:text-white text-black  ">
          <button
            className="font-extrabold rounded-full  dark:bg-black bg-white  cursor-pointer delay-75  duration-700
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white xl:px-16 xl:py-7 px-10  xl:m-0 m-6 py-1 xl:text-1xl text-xl xl:mx-5 px-10 py-7 mt-3"
          >
            Talk to our Experts
          </button>
        </div>
        </div>
     
    </Wrap>
  );
};
export default DetaiHero;
