import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import data from "./dbData.json";
import { BsArrowRight } from "react-icons/bs";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Carousel = () => {
  const [index, setIndex] = useState(0);
  return (
    <div
      className="container mx-auto p-8  "
      style={{ background: "rgba(0, 0, 0, 0.79)" }}
    >
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={setIndex}
        interval={5000}
      >
        {data.Carousel.map((item, index) => {
          return (
            <div key={index} className={`text-white xl:pb-0 pb-24`}>
              <div className="text-xl py-4">{item.date}</div>
              <div className="text-4xl leading-[40px]">{item.title}</div>
              <div className="text-lg flex items-center gap-2 hover:underline hover:gap-3 transition-all duration-300 cursor-pointer ">
                read more <BsArrowRight className="text-3xl" />
              </div>
            </div>
          );
        })}
      </AutoPlaySwipeableViews>
      <div className="absolute md:left-[45%] left-[38%] bottom-5">
        {data.Carousel.map((item, i) => {
          return (
            <span
              key={i}
              className={` rounded-full h-4 w-4 inline-block mx-1 cursor-pointer ${
                index === i ? "bg-white" : "bg-slate-400"
              }`}
              onClick={() => setIndex(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
