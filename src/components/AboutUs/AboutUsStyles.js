import styled from "styled-components";

export const MainContentBox = styled.div`
  width: 100%;
  display: flex;
  padding: 70px;

  margin-top: 50px;
  //background: linear-gradient(-100.22deg, #81afdd -100.86%, #052d56 99.55%),
  background: linear-gradient(
    300deg,
    #1b78de -50%,
    #1b78de -15%,
    #052d56 20%,
    #052d56 56%
  );
`;
export const LeftSection = styled.div`
  width: 60%;
`;

export const RightSection = styled.div`
  width: 40%;
`;
export const Title = styled.h3`
  font-size: 24px;
  line-height: 75px;
  color: #ffffff;
`;
export const TextTopBorder = styled.span`
  width: 250px;
  height: 250px;
  margin: auto;
  background: transparent;

  border-top: 3px solid transparent;

  -moz-border-image: -moz-linear-gradient(top, #f49867 0%, #3a4ed5 10%);
  -webkit-border-image: -webkit-linear-gradient(
    right,
    #f49867 0%,
    #3a4ed5 100%
  );
  padding-top: 20px;
  border-image-slice: 1;
`;

export const HeadingTitle = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 45px;

  background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
    #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Para = styled.p`
  font-size: 16px;
  margin-top: 26px;
  line-height: 30px;
`;
