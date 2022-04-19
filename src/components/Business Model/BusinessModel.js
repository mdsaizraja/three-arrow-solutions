import React from "react";
import NavSlideBar from "./NavSlideBar";
import { HeadingTitle } from "../../styles/GlobalComponents";
const BusinessModel = () => {
  return (
    <div className="xl:mt-52 mt-20">
      <HeadingTitle TextCenter="center">BusinessModel</HeadingTitle>
      <div className="xl:flex justify-between xl:mt-28 mt-10">
        <NavSlideBar />
      </div>
    </div>
  );
};

export default BusinessModel;
