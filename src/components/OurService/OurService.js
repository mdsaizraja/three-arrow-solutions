import React from "react";
import { Section } from "./OurServiceStyles";
import { HeadingTitle } from "../../styles/GlobalComponents";
import { BsArrowRight } from "react-icons/bs";
import { data } from "../../data";
import TalkExpert from "./TalkExpert";
const OurService = () => {
  return (
    <div className="container mx-auto">
      <div className="xl:mt-52 mt-20 xl:p-0 px-5">
        <HeadingTitle TextCenter="center">Our Service</HeadingTitle>
        <Section className="flex text-center scrollbar-hide overflow-x-scroll text-gray-500 font-extrabold justify-between py-20">
          {data.services.map((item, index) => {
            return (
              <div
                key={index}
                className="xl:mx-20 mx-8 cursor-pointer transition-all delay-300 dark:hover:text-white hover:text-black Services_div"
              >
                {item.icon}
                <br />
                <span>{item.serviceName}</span>
              </div>
            );
          })}
        </Section>
        <div className="mt-10 flex justify-center">
          <div
            className="dark:text-white text-black border-black dark:border-white border-2 flex justify-around rounded-full p-2 w-80 cursor-pointer delay-75 duration-700
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          >
            <button className="font-extrabold">All Services</button>
            <BsArrowRight className="text-5xl" />
          </div>
        </div>
      </div>
      <TalkExpert />
    </div>
  );
};

export default OurService;
