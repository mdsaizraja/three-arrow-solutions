import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { data } from "../../data";
import { HeadingTitle } from "../../styles/GlobalComponents";
import { gsap } from "gsap";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Clients = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Main_Client_div",
        start: "top 50%",
        end: "bottom 90%",
        scrub: true,
      },
    });
    t1.from(".Client_text", { y: -100, autoAlpha: 0, duration: 2 }).fromTo(
      ".Client_box",
      { duration: 1, autoAlpha: 0, xPercent: 10 },
      { autoAlpha: 1, stagger: 0.1, duration: 5, xPercent: 0 }
    );
  }, []);
  return (
    <div className="container mx-auto">
      <div className="xl:mt-52 mt-20 xl:p-0 px-5 Main_Client_div">
        <HeadingTitle TextCenter="center" className="Client_text">
          Clients
        </HeadingTitle>
        <div className="xl:flex hidden flex-wrap  xl:mt-32 mt-0">
          {data.client.map((item, index) => {
            return (
              <div
                key={index}
                className="border-2 border-gray-500 object-contain h-72 w-1/5 flex justify-center items-center Client_box"
              >
                <img
                  alt={item.image}
                  src={item.image}
                  className="w-3/5 xl:h-40 object-contain"
                />
              </div>
            );
          })}
        </div>
        <div className="xl:mt-52 mt-0 relative xl:hidden block ">
          <AutoPlaySwipeableViews
            index={index}
            onChangeIndex={setIndex}
            interval={5000}
          >
            {data.client.map((item, index) => {
              return (
                <div
                  key={index}
                  className="xl:h-40 h-32 flex justify-center items-center"
                >
                  <img
                    alt={item.image}
                    src={item.image}
                    className="w-3/5 xl:h-40 h-32 object-contain"
                  />
                </div>
              );
            })}
          </AutoPlaySwipeableViews>
          <div className="absolute flex justify-center w-full  -bottom-[50%]">
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
    </div>
  );
};

export default Clients;
