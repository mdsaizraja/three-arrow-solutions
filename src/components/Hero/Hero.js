import React, { useRef, useEffect } from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../animation/lf20_fjv8qxqn.json";
import { HeadingSection } from "./HeroStyles";
import { gsap } from "gsap";
const Hero = () => {
  const Main_div = useRef(null);
  const Content_sec = useRef(null);
  const Img_sec = useRef(null);

  const startLottieAnim = (anim) => {
    this.lottieAnim = anim;
    if (anim) {
      this.lottieAnim.play();
    }
  };
  useEffect(() => {
    let t1 = gsap.timeline();
    t1.from(Img_sec.current, {
      x: 200,
      autoAlpha: 0,
      duration: 1,
    }).from(Content_sec.current, {
      y: 500,
      autoAlpha: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="container mx-auto">
      <div
        className="flex xl:justify-between justify-center flex-wrap xl:my-20  xl:p-0 px-5
      "
        ref={Main_div}
      >
        <div className="md:w-[80%] xl:w-6/12 " ref={Content_sec}>
          <HeadingSection
            className={`font-extrabold xl:text-8xl  xl:leading-tight tracking-tighter py-4`}
          >
            Let's Build Something amazing with three arrow technologies
          </HeadingSection>
          <div
            className={`xl:text-3xl text-1xl xl:w-9/12 xl:leading-normal dark:text-[#81AFDD] text-black`}
          >
            We design a road map towards the success of your Business in this
            Digital World.
          </div>
          <div className=" flex flex-row justify-center xl:mt-32 mt-16 ">
            <input
              className="p-8 xl:w-9/12 md:w-[40%] w-[70%] max-w-[500px] xl:h-28  rounded-bl-lg rounded-tl-lg dark:bg-[#052d56] bg-[#DDDDDD] focus:outline-none"
              type="text"
              placeholder="Your Email Address"
            />
            <button className="xl:w-3/12 md:w-[20%] w-[30%] max-w-[200px]  text-white rounded-br-lg rounded-tr-lg bg-[#ff8a71]">
              Get Started
            </button>
          </div>
        </div>
        <div
          ref={Img_sec}
          className="md:w-full xl:w-6/12 mt-8 flex md:justify-center xl:justify-end"
        >
          <Lottie
            ref={(c) => startLottieAnim(c)}
            animationData={lottieJson}
            play
            className="xl:w-9/12 max-w-[500px] max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
