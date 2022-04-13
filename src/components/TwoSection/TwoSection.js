import React from "react";
import { FirstSec, SecondSec, SectionText } from "./TwoSectionStyles";
const TwoSection = () => {
  return (
    <div className="flex justify-center">
      <FirstSec>
        <SectionText>Can't find a service you are looking for?</SectionText>
        <button
          style={{
            border: "1px solid white",
            height: "46px",
            width: "172.36px",
            borderRadius: "60px",
            margin: "0px 60px",
            color: "white",
          }}
        >
          Explore all Services
        </button>
      </FirstSec>
      <SecondSec>
        <SectionText>Want to hire a resource to work with you?</SectionText>
        <button
          style={{
            border: "1px solid white",
            height: "46px",
            width: "172.36px",
            borderRadius: "60px",
            margin: "0px 60px",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Let's us discuss
        </button>
      </SecondSec>
    </div>
  );
};

export default TwoSection;
