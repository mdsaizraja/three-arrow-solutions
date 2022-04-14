import React, { useState } from "react";
import { NavSlider, NavSliderItem } from "./NavSliderBarStyles";
const imgdata = {
  0: {
    imgsrc: "/images/undraw_booked_re_vtod 1.png",
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
    <div className="flex">
      <div className="p-10 w-5/12">
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
        <div className="flex justify-center">
          <div style={{ width: "324.08px", height: "241px", padding: "50px" }}>
            <img src={imgdata[navstate].imgsrc} />
          </div>
        </div>
      </div>
      <div className=" w-8/12 self-center flex text-white p-36">
        <div>
          <h2 className="text-3xl mb-12 ">Time wise model</h2>
          <p
            className="
          leading-8"
          >
            Aenean rutrum erat quis eleifend dignissim. Duis in sollicitudin
            nisi, ac dignissim libero. Phasellus viverra sagittis sapien sed
            interdum. Fusce ex diam, fringilla commodo ante id, aliquet porta
            libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavSlideBar;
