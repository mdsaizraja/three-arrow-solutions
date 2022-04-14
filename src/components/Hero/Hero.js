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
} from "./HeroStyles";

const Hero = () => (
  <div
    className="flex"
    style={{ marginTop: "60px", justifyContent: "space-between" }}
  >
    <LeftSection>
      <HeadingSection>
        Let's Build Something amazing with three arrow thechnologies
      </HeadingSection>
      <SubHeadingSection>
        We design a road map towards the success of your Business in this
        Digital World.
      </SubHeadingSection>
      <MaininputBox>
        <InputBox type="text" placeholder="Your Email Address"></InputBox>
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
        loop
        animationData={lottieJson}
        play
        style={{ width: "457px", height: "457px" }}
      />
    </RightSection>
  </div>
);

export default Hero;
