import styled from "styled-components";

export const MainContentBox = styled.div`
  width: 100%;
  display: flex;
  padding: 70px;

  margin-top: 50px;
  //background: linear-gradient(-100.22deg, #81afdd -100.86%, #052d56 99.55%),
  background: linear-gradient(
      to bottom,
      #81afdd 0,
      #81afdd -10%,
      #052d56 13%,
      #052d56 66%,
      #81afdd -66%,
      #81afdd 100%
    ),
    #ffffff;
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
  /* identical to box height, or 132% */

  background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
    #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
