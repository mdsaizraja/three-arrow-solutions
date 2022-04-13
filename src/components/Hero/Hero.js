import React from "react";
import Lottie from 'react-lottie-player'
import lottieJson from '../../animation/38834-service-animation.json'
import {
  HeadingSection,
  LeftSection,
  RightSection,
  SubHeadingSection,
  MaininputBox,
} from "./HeroStyles";

const Hero = () => (
  <div className="flex">
    <LeftSection>
      <HeadingSection>
        Let's Build Something amazing with three arrow thechnologies
      </HeadingSection>
      <SubHeadingSection>
        We design a road map towards the success of your Business in this
        Digital World.
      </SubHeadingSection>
      <MaininputBox>
        <input
          type="text"
          placeholder="Your Email Address"
          style={{
            width: "456px",
            height: " 73px",
            left: "109px",
            background: "#052d56",
            borderRadius: "5px 0px 0px 5px",
            paddingLeft: "35px",
          }}
        />
        <button
          style={{
            width: "174px",
            height: "73px",
            left: "739px",
            top: "630px",
            background: "#FF8A71",
            borderStartEndRadius: "5px 0px 0px 5px",
          }}
        >
          Get Started
        </button>
      </MaininputBox>
    </LeftSection>
    <RightSection>
      {/*<Lottie*/}
      {/*  src="https://assets5.lottiefiles.com/packages/lf20_y3qfynfr.json"*/}
      {/*  background="transparent"*/}
      {/*  speed="1"*/}
      {/*  autoplay*/}
      {/*/>*/}
        <Lottie
            loop
            animationData={lottieJson}
            play
        />
    </RightSection>
  </div>
);

export default Hero;
