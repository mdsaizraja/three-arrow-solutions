import styled from "styled-components";

export const MainSection = styled.div`
  margin-top: 60px;
  justify-content: space-between;
  display: flex;
`;
export const LeftSection = styled.div`
  width: 50%;
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
  widht: 50%;
  align-self: center;
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
  font-family: "Manrope";
  font-weight: 800;
  font-size: 62px;
  line-height: 78px;
  letter-spacing: -0.04em;
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const SubHeadingSection = styled.h3`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  padding-right: 40px;
  color: #81afdd;
`;
export const MaininputBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 60px 0px;
`;

export const InputBox = styled.input`
  width: 70%;
  height: 73px;
  left: 109px;
  background: #052d56;
  border-radius: 5px 0px 0px 5px;

  &:focus {
    outline: none;
  }
`;
export const ButtonBox = styled.button`
  width: 30%;
  height: 73px;
  left: 739px;
  top: 630px;
  background: #ff8a71;
  color: white;
  border-radius: 0px 5px 5px 0px;
`;
