import React from "react";
import { SecondSec } from "./TwoSectionStyles";
const TwoSection = () => {
  return (
    <div className="flex justify-center xl:flex-row flex-col xl:mt-52 mt-20 text-white">
      <div className="xl:w-3/6 bg-[#313a5a] xl:px-28 px-10 py-20">
        <h1 className="xl:text-4xl text-3xl">
          Can't find a service you are looking for?
        </h1>
        <button
          className="xl:py-5 xl:px-10 py-4 px-8 font-black text-xl rounded-full
         border-white border-2 transition-all delay-100
         duration-700 hover:text-black hover:bg-white xl:my-0 my-5"
        >
          Explore all Services
        </button>
      </div>
      <SecondSec className="xl:w-3/6 xl:px-28 px-10 py-20">
        <h1 className="xl:text-4xl text-3xl">
          Want to hire a resource to work with you?
        </h1>
        <button
          className="xl:py-5 xl:px-10 py-4 px-8 bg-white font-black transition-all delay-100 
        duration-700 text-xl rounded-full text-black hover:text-white
         hover:bg-black xl:my-0 my-5"
        >
          Let's us discuss
        </button>
      </SecondSec>
    </div>
  );
};

export default TwoSection;
