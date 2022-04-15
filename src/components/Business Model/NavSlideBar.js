import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";

const NavSlideBar = () => {
  const [index, SetIndex] = useState(0);

  return (
    <>
      <div
        value={index}
        className="text-white flex justify-around text-center cursor-pointer  bg-transparent py-5 border-b-2"
      >
        <div onClick={() => SetIndex(0)} className="w-2/6">
          Time wise model
        </div>
        <div onClick={() => SetIndex(1)} className="w-2/6">
          Fix scope model
        </div>
        <div onClick={() => SetIndex(2)} className="w-2/6">
          Hire team
        </div>
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
