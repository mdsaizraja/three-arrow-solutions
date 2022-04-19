import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { data } from "../../data";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="xl:mt-52 mt-20 relative ">
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={setIndex}
        interval={5000}
      >
        {data.sliderCarusel.map((item, index) => {
          return (
            <div
              key={index}
              className={`xl:flex ${item.bgColor} text-white xl:py-0 py-20`}
            >
              <div className="xl:w-6/12 flex items-center xl:p-28 p-10">
                <div>
                  <h2 className="text-5xl font-extrabold xl:w-3/4 leading-tight">
                    {item.Heading}
                  </h2>
                  <p className="my-12 leading-normal">{item.Content}</p>
                  <button className="bg-[#313A5A] py-6 px-24 rounded-full my-14 xl:mx-0 mx-[15%] transition-all delay-100 duration-700 text-xl   hover:text-white hover:bg-black">
                    View Project
                  </button>
                </div>
              </div>
              <div className="xl:w-6/12 flex justify-center object-contain items-center">
                <img
                  src={item.imgsrc}
                  alt="desktop portfolio.png"
                  className="w-6/12 h-2/4"
                />
              </div>
            </div>
          );
        })}
      </AutoPlaySwipeableViews>
      <div className="absolute xl:left-2/4 left-[40%] xl:top-[90%] bottom-5">
        {data.sliderCarusel.map((item, i) => {
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
