import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { TextBottomBorder } from "./NavSlideBarStyles";
const NavSlideBar = () => {
  const [index, SetIndex] = useState(0);

  return (
    <>
      {" "}
      <div
        value={index}
        className="text-white flex relative border-b-2 border-gray-500 justify-around text-center cursor-pointer  bg-transparent py-5 "
      >
        <div onClick={() => SetIndex(0)} className={`w-1/3`}>
          Time wise model
        </div>
        <div onClick={() => SetIndex(1)} className="w-1/3">
          Fix scope model
        </div>
        <div onClick={() => SetIndex(2)} className=" w-1/3">
          Hire team
        </div>
        <TextBottomBorder
          className={`border-b-2  absolute w-1/3 transition-all duration-1000  
         left-${
           index === 0 ? "0" : index === 1 ? "1/3" : index === 2 ? "[67%]" : ""
         }  -bottom-1`}
        ></TextBottomBorder>
      </div>
      <SwipeableViews index={index}>
        <div className="flex justify-center object-contain p-10">
          <img src="/images/undraw_booked_re_vtod 1.png" />
        </div>
        <div className="flex justify-center object-contain p-10">
          <img src="/images/undraw_booked_re_vtod 1.png" />
        </div>
        <div className="flex justify-center object-contain p-10">
          <img src="/images/undraw_booked_re_vtod 1.png" />
        </div>
      </SwipeableViews>
    </>
  );
};

export default NavSlideBar;
