import React from "react";
import { SecondSec } from "./TwoSectionStyles";
const TwoSection = () => {
  return (
    <div className="flex justify-center mt-52 text-white">
      <div className="w-3/6 bg-[#313a5a] px-28 py-20">
        <h1 className="text-4xl">Can't find a service you are looking for?</h1>
        <button
          className="py-5 px-10 font-black text-xl rounded-full border-white border-2 transition-all delay-100 duration-700 hover:text-black hover:bg-white"
          TextColor="white"
        >
          Explore all Services
        </button>
      </div>
      <SecondSec className="w-3/6 px-28 py-20">
        <h1 className="text-4xl">Want to hire a resource to work with you?</h1>
        <button
          className="py-5 px-10 bg-white font-black transition-all delay-100 duration-700 text-xl rounded-full text-black hover:text-white hover:bg-black "
          TextColor="black"
          BackGround={true}
        >
          Let's us discuss
        </button>
      </SecondSec>
    </div>
  );
};

export default TwoSection;
