import React from "react";
import styled from "styled-components";
import { Container } from "../../layout/LayoutStyles";
import Header from "../Header/Header";

export const Wrap = styled.div`
width-100%;
background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
`;

const DetaiHero = () => {
  return (
    <Wrap className="pt-1 pb-[10%] ">
      <Header />
      <Container>
        <h1 className="Git_text text-white  font-thin text-8xl leading-normal mb-0">
          Mern stack development{" "}
        </h1>
        <h2 className="Git_text text-white  font-black text-5xl leading-normal mt-0">
          COMPANY
        </h2>
        <p className="Git_text   text-[#fff] text-3xl leading-normal mt-20 ">
          A combination of technologies that are used to develop web
          applications is known as a stack. MERN stack demand is increasing day
          by day because it is an open-source combination of technologies. This
          tech stack uses one language across all tiers. MERN comprises Mongo
          DB, Express JS, React JS, and Node JS. MERN has gained immense
          popularity over the years for delivering flexible, high-performance,
          and single-page applications (SPA).
        </p>
      </Container>
    </Wrap>
  );
};
export default DetaiHero;
