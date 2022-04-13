import styled from "styled-components";

export const LeftSection = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const HeadingSection = styled.h1`
  width: 614px;
  height: 225px;
  font-family: "Manrope";
  font-style: 62px;
  font-weight: 800;
  font-size: 64px;
  line-height: 75px;
  letter-spacing: -0.04em;
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const SubHeadingSection = styled.h3`
  width: 521px;
  height: 66px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #81afdd;
`;
export const MaininputBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 60px 0px;
`;
