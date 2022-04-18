import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { data } from "../../data";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="mt-52 relative">
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={setIndex}
        interval={5000}
      >
        {data.sliderCarusel.map((item, index) => {
          return (
            <div key={index} className={`flex ${item.bgColor} text-white`}>
              <div className="w-6/12 flex items-center p-28">
                <div>
                  <h2 className="text-5xl font-extrabold w-3/4 leading-tight">
                    {item.Heading}
                  </h2>
                  <p className="my-12 leading-normal">{item.Content}</p>
                  <button className="bg-[#313A5A] py-6 px-24 rounded-full my-14 transition-all delay-100 duration-700 text-xl   hover:text-white hover:bg-black">
                    View Project
                  </button>
                </div>
              </div>
              <div className="w-6/12 flex justify-center object-contain items-center">
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
      <div className="absolute left-2/4 top-[90%]">
        {data.sliderCarusel.map((item, i) => {
          return (
            <span key={i}
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
