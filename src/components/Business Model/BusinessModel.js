import React from "react";
import NavSlideBar from "./NavSlideBar";
import { HeadingTitle } from "../../styles/GlobalComponents";
const BusinessModel = () => {
  return (
    <div className="mt-52">
      <HeadingTitle TextCenter="center">Business Model</HeadingTitle>
      <div className="flex  mt-28">
        <div className="w-2/5">
          <NavSlideBar />
        </div>
        <div className="w-3/5 flex justify-center items-center ">
          <div className="w-7/12 text-white">
            <h1 className="text-3xl leading-relaxed font-bold">
              Time wise model
            </h1>
            <p className="text-2xl leading-normal">
              Aenean rutrum erat quis eleifend dignissim. Duis in sollicitudin
              nisi, ac dignissim libero. Phasellus viverra sagittis sapien sed
              interdum. Fusce ex diam, fringilla commodo ante id, aliquet porta
              libero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;
