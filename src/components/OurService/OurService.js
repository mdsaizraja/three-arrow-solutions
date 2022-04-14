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
  MainContent,
} from "./OurServiceStyles";
import { HeadingTitle } from "../../styles/GlobalComponents";
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiFirebase } from "react-icons/si";
import { AiFillGitlab } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
const OurService = () => {
  return (
    <MainContent>
      <HeadingTitle TextCenter="center"> OurService</HeadingTitle>
      <ServiceBox>
        <IconDiv>
          <FaReact style={{ width: "60.16px", height: "55px" }} />
          <br />
          <span>React</span>
        </IconDiv>
        <IconDiv>
          <FaAngular style={{ width: "60.16px", height: "55px" }} /> <br />
          <span>Angular</span>
        </IconDiv>
        <IconDiv>
          <FaNodeJs style={{ width: "60.16px", height: "55px" }} /> <br />
          <span>Node</span>
        </IconDiv>
        <IconDiv>
          <GrGraphQl style={{ width: "60.16px", height: "55px" }} /> <br />
          <span>GraphQL</span>
        </IconDiv>
        <IconDiv>
          <SiFirebase style={{ width: "60.16px", height: "55px" }} /> <br />
          <span>Firebase</span>
        </IconDiv>
        <IconDiv>
          <AiFillGitlab style={{ width: "60.16px", height: "55px" }} /> <br />
          <span>GIT</span>
        </IconDiv>
      </ServiceBox>
      <ButtonBox className="mt-10">
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
    </MainContent>
  );
};

export default OurService;
