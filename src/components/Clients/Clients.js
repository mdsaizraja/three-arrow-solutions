import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { data } from "../../data";
import { HeadingTitle } from "../../styles/GlobalComponents";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Clients = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="xl:mt-52 mt-20">
      <HeadingTitle TextCenter="center">Clients</HeadingTitle>
      <div className="xl:flex hidden flex-wrap  mt-32">
        {data.client.map((item, index) => {
          return (
            <div
              key={index}
              className="border-2 border-gray-500 object-contain h-72 w-1/5 flex justify-center items-center"
            >
              <img
                alt={item.image}
                src={item.image}
                className="w-3/5 h-40 object-contain"
              />
            </div>
          );
        })}
      </div>
      <div className="xl:mt-52 mt-20 relative xl:hidden block">
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={setIndex}
          interval={5000}
        >
          {data.client.map((item, index) => {
            return (
              <div
                key={index}
                className=" h-72 flex justify-center items-center"
              >
                <img
                  alt={item.image}
                  src={item.image}
                  className="w-3/5 h-40 object-contain"
                />
              </div>
            );
          })}
        </AutoPlaySwipeableViews>
        <div className="absolute xl:left-2/4 md:left-[40%] left-[30%] xl:top-[90%] bottom-5">
          {data.client.map((item, i) => {
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

export default Clients;
