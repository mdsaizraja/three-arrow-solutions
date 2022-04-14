import React from "react";
import {
  ServiceBox,
  TalkExpertBox,
  IconDiv,
  Heading,
  ButtonBox,
  ButtonContent,
  TalkButton,
  Para,
} from "./OurServiceStyles";
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiFirebase } from "react-icons/si";
import { AiFillGitlab } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
const OurService = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Heading> OurService</Heading>
      <ServiceBox>
        <IconDiv>
          <FaReact style={{ width: "60.16px", height: "55px" }} />
          <span>React</span>
        </IconDiv>
        <IconDiv>
          <FaAngular style={{ width: "60.16px", height: "55px" }} />
          <span>Angular</span>
        </IconDiv>
        <IconDiv>
          <FaNodeJs style={{ width: "60.16px", height: "55px" }} />
          <span>Node</span>
        </IconDiv>
        <IconDiv>
          <GrGraphQl style={{ width: "60.16px", height: "55px" }} />
          <span>GraphQL</span>
        </IconDiv>
        <IconDiv>
          <SiFirebase style={{ width: "60.16px", height: "55px" }} />
          <span>Firebase</span>
        </IconDiv>
        <IconDiv>
          <AiFillGitlab style={{ width: "60.16px", height: "55px" }} />
          <span>GIT</span>
        </IconDiv>
      </ServiceBox>
      <ButtonBox>
        <ButtonContent>
          <button>All Services</button>
          <BsArrowRight style={{ fontSize: "35px", marginLeft: "10px" }} />
        </ButtonContent>
      </ButtonBox>
      <TalkExpertBox>
        <div className="p-20">
          <h5>Let's Discuss Your Project</h5>
          <Para>
            Get free consultation and let us know your project idea to turn it
            into an amazing digital product.
          </Para>
        </div>
        <TalkButton>
          <button>Talk to our Experts</button>
        </TalkButton>
      </TalkExpertBox>
    </div>
  );
};

export default OurService;
