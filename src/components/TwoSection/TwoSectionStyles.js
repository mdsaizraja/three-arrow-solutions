import styled from "styled-components";

export const FirstSec = styled.div`
  background: #313a5a;
  width: 50%;
  height: 196px;
`;
export const SecondSec = styled.div`
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  width: 50%;
  height: 196px;
`;
export const SectionText = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;
  color: white;

  padding: 60px 0px 40px 50px;
`;
export const ButtonBox = styled.button`
  border: 1px solid white;
  height: 46px;
  width: 172.36px;
  border-radius: 60px;
  margin: 0px 60px;
  color: ${(props) => props.TextColor};
  background: ${(props) => (props.BackGround ? "white" : "transparent")};
`;
