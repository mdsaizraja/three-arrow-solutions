import React, { useEffect } from "react";
import { gsap } from "gsap";
import NavSlideBar from "./NavSlideBar";
import { HeadingTitle } from "../../styles/GlobalComponents";
const BusinessModel = () => {
  useEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Main_model",
        start: "top 80%",
        end: "bottom 90%",
        scrub: true,
      },
    });
    t1.from(".Title_div", { y: -200, opacity: 0, duration: 0.5 }).from(
      ".Nav_div",
      { y: 200, opacity: 0, duration: 0.5 }
    );
  }, []);

  return (
    <div className="container mx-auto">
      <div className="xl:mt-52 mt-20 md:mx-5 mx-0 xl:p-0 px-5 Main_model">
        <HeadingTitle TextCenter="center" className="Title_div">
          BusinessModel
        </HeadingTitle>
        <div className="xl:flex justify-between xl:mt-28 mt-10 Nav_div">
          <NavSlideBar />
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;
