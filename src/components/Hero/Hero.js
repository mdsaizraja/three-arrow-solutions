import React, { useRef } from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../animation/lf20_fjv8qxqn.json";
import { HeadingSection } from "./HeroStyles";

const Hero = () => {
  const startLottieAnim = (anim) => {
    this.lottieAnim = anim;
    if (anim) {
      this.lottieAnim.play();
    }
  };
  return (
    <div className="flex justify-between my-20">
      <div className="w-6/12">
        <HeadingSection className="font-extrabold text-8xl leading-tight tracking-tighter">
          Let's Build Something amazing with three arrow thechnologies
        </HeadingSection>
        <div className="text-3xl w-9/12 leading-normal">
          We design a road map towards the success of your Business in this
          Digital World.
        </div>
        <div className="flex flex-row mt-32">
          <input
            className="p-8 w-9/12 h-28 rounded-bl-lg rounded-tl-lg bg-[#052d56] focus:outline-none"
            type="text"
            placeholder="Your Email Address"
          />
          <button className="w-3/12 text-white rounded-br-lg rounded-tr-lg bg-[#ff8a71]">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-6/12 flex justify-center">
        <Lottie
          ref={(c) => startLottieAnim(c)}
          animationData={lottieJson}
          play
          className="w-9/12"
        />
      </div>
    </div>
  );
};

export default Hero;
