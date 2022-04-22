import styled from "styled-components";

export const Text = styled.div`
  font-size: 2vw;
  white-space: nowrap;
  font-weight: 700;
  font-family: "GLD Display";
  color: black;
  cursor: pointer;
  overflow: hidden;
`;

export const HoveredRotatedContainer = styled.div`
  background: yellow;
  height: 40px;
  z-index: 999;
  transform: rotate(-7deg);
  width: 100vw;
`;