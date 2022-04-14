import styled from "styled-components";

export const ServiceBox = styled.div`
  width: 100%;
  display: flex;
  padding: 50px;
  justify-content: space-around;
  text-align: center;
  color: gray;
  font-weight: bolder;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const TalkExpertBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 173px;
  margin-top: 100px;
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10.7236px;
  color: black;
`;

export const IconDiv = styled.div`
  cursor: pointer;
  transition: all 1s;
  &:hover {
    color: white;
  }
`;

export const Heading = styled.h1`
  background: linear-gradient(80.22deg, #ae67fa 30.86%, #f49867 80.55%), #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-weight: 800;
  font-size: 34px;
  line-height: 45px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonContent = styled.div`
  color: white;
  border: 2px solid white;
  display: flex;
  width: 20%;
  justify-content: center;
  border-radius: 60px;
  padding: 5px;
`;

export const TalkButton = styled.div`
  color: white;
  display: flex;
  width: 20%;
  justify-content: center;
  border-radius: 40px;
  padding: 15px;
  background: black;
  margin: 50px;
}
`;
export const Para = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 45px;
`;

export const MainContent = styled.div`
  margin-top: 100px;
`;
