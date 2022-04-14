import React from "react";
import {
  FirstSec,
  SecondSec,
  SectionText,
  ButtonBox,
} from "./TwoSectionStyles";
const TwoSection = () => {
  return (
    <div className="flex justify-center mt-32">
      <FirstSec>
        <SectionText>Can't find a service you are looking for?</SectionText>
        <ButtonBox TextColor="white">Explore all Services</ButtonBox>
      </FirstSec>
      <SecondSec>
        <SectionText>Want to hire a resource to work with you?</SectionText>
        <ButtonBox TextColor="black" BackGround={true}>
          Let's us discuss
        </ButtonBox>
      </SecondSec>
    </div>
  );
};

export default TwoSection;
