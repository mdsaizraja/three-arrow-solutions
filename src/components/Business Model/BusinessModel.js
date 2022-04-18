import React from "react";
import NavSlideBar from "./NavSlideBar";
import { HeadingTitle } from "../../styles/GlobalComponents";
const BusinessModel = () => {
  return (
    <div className="mt-52">
      <HeadingTitle TextCenter="center">BusinessModel</HeadingTitle>
      <div className="flex justify-between mt-28">
        <NavSlideBar />
      </div>
    </div>
  );
};

export default BusinessModel;
