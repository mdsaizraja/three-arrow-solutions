import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { TextBottomBorder } from "./NavSlideBarStyles";
import { data } from "../../data";
const NavSlideBar = () => {
  const [index, SetIndex] = useState(0);
  let count = 0;
  return (
    <>
      <div className="xl:w-2/5">
        <div
          className="dark:text-white text-black flex relative border-b-2 
        border-gray-500 justify-around text-center cursor-pointer
          bg-transparent py-5  w-full "
        >
          {data.buisnessModelSlider.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => SetIndex(index)}
                className={`xl:w-3/12 `}
              >
                {item.Heading}
                <span style={{ display: "none" }}>{count++}</span>
              </div>
            );
          })}

          <TextBottomBorder
            className={`border-b-2  absolute w-1/3 ${
              index === 0
                ? "left-0"
                : index === 1
                ? "md:left-1/3 left-[42%]"
                : "left-2/3"
            } -bottom-1 transition-all delay-75 ease-linear duration-200`}
          />
        </div>
        <SwipeableViews index={index}>
          {data.buisnessModelSlider.map((item, index) => {
            return (
              <div
                key={index}
                className=" xl:flex hidden justify-center object-contain p-10"
              >
                <img alt={item.imgsrc} src={item.imgsrc} />
              </div>
            );
          })}
        </SwipeableViews>
      </div>
      <div className="xl:w-2/4 flex items-center">
        {" "}
        <SwipeableViews index={index}>
          {data.buisnessModelSlider.map((item, index) => {
            return (
              <div key={index} className=" dark:text-white text-black">
                <h1 className="text-3xl leading-relaxed font-bold">
                  {item.Heading}
                </h1>
                <p className="text-2xl leading-normal">{item.Content}</p>
              </div>
            );
          })}
        </SwipeableViews>
      </div>
    </>
  );
};

export default NavSlideBar;
