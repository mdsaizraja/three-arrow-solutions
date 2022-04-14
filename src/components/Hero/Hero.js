import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../animation/38834-service-animation.json";
import {
  HeadingSection,
  LeftSection,
  RightSection,
  SubHeadingSection,
  MaininputBox,
  InputBox,
  ButtonBox,
  MainSection,
} from "./HeroStyles";

const Hero = () => (
  <MainSection>
    <LeftSection>
      <HeadingSection>
        Let's Build Something amazing with three arrow thechnologies
      </HeadingSection>
      <SubHeadingSection>
        We design a road map towards the success of your Business in this
        Digital World.
      </SubHeadingSection>
      <MaininputBox>
        <InputBox
          className="p-8"
          type="text"
          placeholder="Your Email Address"
        ></InputBox>
        <ButtonBox>Get Started</ButtonBox>
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
        animationData={lottieJson}
        play
        style={{ width: "457px", height: "457px" }}
      />
    </RightSection>
  </MainSection>
);

export default Hero;
