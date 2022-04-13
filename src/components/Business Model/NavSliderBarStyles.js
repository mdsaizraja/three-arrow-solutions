import styled from "styled-components";

export const NavSlider = styled.span`
  width: 30%;
  display: flex;
  justify-content: space-between;
  padding: 20px 5px;
  border-bottom: 1px solid white;
  cursor: pointer;
`;

export const NavSliderItem = styled.span`
  display: block;
  border-bottom: none;
  font-weight: 800;
  font-size: 16px;
  font-weight: 800;
  color: white;
  position: relative;
  &:after {
    content: "";
    top: 38px;
    background: ${({ activelink }) =>
      activelink
        ? `-webkit-linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%); #FFFFFF;`
        : "white"};
    display: block;
    height: ${({ activelink }) => (activelink ? `2px` : `0px`)};
    width: 100%;
    position: absolute;
  }
`;
