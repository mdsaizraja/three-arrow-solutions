import React from "react";
import Carousel from "./Carousel";
import TalkExpert from "../OurService/TalkExpert";
import Blog from "./Blog";
const index = () => {
  return (
    <div className="mt-">
      <div className="flex max-h-[690px] gap-10">
        <div className="w-1/2 ">
          <img src="./images/Blog1.png" className="h-[690px]" />
          <div className="relative bottom-[200px] mx-8">
            {" "}
            <Carousel />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2 gap-10 overflow-x-auto no-scrollbar">
          <Blog />
        </div>
      </div>
      <TalkExpert />
    </div>
  );
};

export default index;
