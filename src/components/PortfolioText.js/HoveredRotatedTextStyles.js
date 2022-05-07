import styled from "styled-components";

export const Text = styled.div`
  font-size: 2vw;
  white-space: nowrap;
  font-weight: 700;
  font-family: "Manrope";
  color: black;
  cursor: pointer;
  overflow: hidden;
`;

export const HoveredRotatedContainer = styled.div`
  background: #eeac34;
  height: 40px;
  z-index: 999;
  transform: rotate(-7deg);
  width: 100vw;
  position: absolute;
  left: -8px;
  overflow: hidden;
`;
