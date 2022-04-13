import React, { useState } from "react";
import { NavSlider, NavSliderItem } from "./NavSliderBarStyles";
const imgdata = {
  0: {
    imgsrc:
      "https://startupsmagazine.co.uk/sites/default/files/2019-04/plan.jpg",
  },
  1: {
    imgsrc:
      "https://blog.tivity.one/wp-content/uploads/sites/2/2017/08/preview-1030x1030.jpg",
  },
  2: {
    imgsrc:
      "https://www.opensourceforu.com/wp-content/uploads/2022/03/Open-Source-Business-Model.jpg",
  },
};
const NavSlideBar = () => {
  const [navstate, setNavState] = useState(0);

  return (
    <div className="p-10">
      <div>
        <NavSlider>
          <NavSliderItem
            activelink={navstate === 0 ? true : false}
            onClick={() => setNavState(0)}
          >
            Time wise model
          </NavSliderItem>
          <NavSliderItem
            activelink={navstate === 1 ? true : false}
            onClick={() => setNavState(1)}
          >
            Fix scope model
          </NavSliderItem>
          <NavSliderItem
            activelink={navstate === 2 ? true : false}
            onClick={() => setNavState(2)}
          >
            Hire team
          </NavSliderItem>
        </NavSlider>
      </div>
      <div className="flex">
        <div style={{ width: "324.08px", height: "241px", padding: "50px" }}>
          <img src={imgdata[navstate].imgsrc} />
        </div>
      </div>
      <div>
        <h2>Time wise model</h2>
      </div>
    </div>
  );
};

export default NavSlideBar;
