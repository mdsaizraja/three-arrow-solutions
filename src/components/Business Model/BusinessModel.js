import React from "react";
import NavSlideBar from "./NavSlideBar";
import { HeadingTitle } from "../../styles/GlobalComponents";
const BusinessModel = () => {
  return (
    <div className="container mx-auto">
      <div className="xl:mt-52 mt-20 md:mx-5 mx-0 xl:p-0 px-5">
        <HeadingTitle TextCenter="center">BusinessModel</HeadingTitle>
        <div className="xl:flex justify-between xl:mt-28 mt-10">
          <NavSlideBar />
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;
