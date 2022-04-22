import styled from "styled-components";

export const Background = styled.div`
  background: rgb(255, 0, 31);
  height: 1614px;
  pointer-events: all;
  width: 100%;
`;

export const Text = styled.span`
  position: relative;
  transform: translateX(43%);
  font-size: 21vw;
  white-space: nowrap;
  line-height: 0.9;
  left: -50%;
  font-weight: 700;
  font-family: "GLD Display";
  color: black;
  z-index: 99;
  cursor: pointer;
`;

export const ImageSize = styled.div`
  width: 300px;
  height: 500px;
  transform-origin: 100% 0%;
`;
