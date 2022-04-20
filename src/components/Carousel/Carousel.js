import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { data } from "../../data";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="container mx-auto">
      <div className="xl:mt-52 mt-20 relative md:mx-5 mx-0 xl:p-0 px-2">
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={setIndex}
          interval={5000}
        >
          {data.sliderCarusel.map((item, index) => {
            return (
              <div
                key={index}
                className={`xl:flex ${item.bgColor} text-white xl:pb-0 pb-24`}
              >
                <div className="xl:w-6/12 flex items-center xl:p-28 p-10">
                  <div>
                    <h2 className="xl:text-5xl text-4xl font-extrabold xl:w-3/4 leading-tight">
                      {item.Heading}
                    </h2>
                    <p className="xl:my-12 my-1 leading-normal">
                      {item.Content}
                    </p>
                    <div className=" flex justify-center xl:justify-start">
                      <button
                        className="bg-[#313A5A] xl:py-6 xl:px-24 py-5 px-16 rounded-full 
                    my-14 xl:mx-0 mx-[15%] 
                  transition-all delay-100 duration-700 text-xl 
                   hover:text-white hover:bg-black"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
                <div className="xl:w-6/12 flex justify-center object-contain items-center">
                  <img
                    src={item.imgsrc}
                    alt="desktop portfolio.png"
                    className="w-6/12 h-2/4 max-h-[250px] max-w-[350px]"
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
    </div>
  );
};

export default Carousel;
