import React from "react";
import { TalkExpertBox } from "./OurServiceStyles";
import { HeadingTitle } from "../../styles/GlobalComponents";
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiFirebase } from "react-icons/si";
import { AiFillGitlab } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
const OurService = () => {
  return (
    <div className="mt-52">
      <HeadingTitle TextCenter="center"> Our Service</HeadingTitle>
      <div className="flex text-center text-gray-500 font-extrabold justify-between py-20">
        <div className="cursor-pointer transition-all delay-300 dark:hover:text-white hover:text-black ">
          <FaReact className="text-8xl" />
          <br />
          <span>React</span>
        </div>
        <div className="cursor-pointer transition-all delay-300 dark:hover:text-white hover:text-black ">
          <FaAngular className="text-8xl" /> <br />
          <span>Angular</span>
        </div>
        <div className="cursor-pointer transition-all delay-300 dark:hover:text-white hover:text-black ">
          <FaNodeJs className="text-8xl" /> <br />
          <span>Node</span>
        </div>
        <div className="cursor-pointer transition-all delay-300 dark:hover:text-white hover:text-black ">
          <GrGraphQl className="text-8xl" /> <br />
          <span>GraphQL</span>
        </div>
        <div className="cursor-pointer transition-all delay-300 dark:hover:text-white hover:text-black ">
          <SiFirebase className="text-8xl" /> <br />
          <span>Firebase</span>
        </div>
        <div className="cursor-pointer transition-all delay-300 dark:hover:text-white hover:text-black ">
          <AiFillGitlab className="text-8xl" /> <br />
          <span>GIT</span>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <div
          className="dark:text-white text-black border-black dark:border-white border-2 flex justify-around rounded-full p-2 w-80 cursor-pointer delay-75 duration-700 
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
        >
          <button className="font-extrabold">All Services</button>
          <BsArrowRight className="text-5xl" />
        </div>
      </div>
      <TalkExpertBox className="flex justify-center my-48 dark:text-black text-white rounded-3xl ">
        <div className="p-16">
          <h5 className="leading-relaxed">Let's Discuss Your Project</h5>
          <p className="font-extrabold text-4xl leading-normal">
            Get free consultation and let us know your project idea to turn it
            into an amazing digital product.
          </p>
        </div>
        <div
          className="flex dark:text-white text-black w-1/4 rounded-full m-24 dark:bg-black bg-white  cursor-pointer delay-75 justify-center duration-700 
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
        >
          <button className="font-extrabold">Talk to our Experts</button>
        </div>
      </TalkExpertBox>
    </div>
  );
};

export default OurService;
