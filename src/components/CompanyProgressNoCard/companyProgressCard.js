import React from "react";
import styled from "styled-components";

const SmallPara = styled.div`

@media only screen and (max-width:480px){
    justify-content:space-around;
    font-size:8px

`;
const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px
`;

const BoldH1 = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 62px;
  /* identical to box height, or 121% */
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media only screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const CompanyProgressCard = () => {
  return (
    <Cards>
      <div>
        <BoldH1>200+</BoldH1>
        <SmallPara className="  text-4xl dark:text-[#fff] text-black leading-normal">
          Professionals
        </SmallPara>
      </div>
      <div>
        <BoldH1>5+</BoldH1>
        <SmallPara className="  text-4xl dark:text-[#fff] text-black leading-normal">
          Years of Average Experience
        </SmallPara>
      </div>
      <div>
        <BoldH1>500M+</BoldH1>
        <SmallPara className="  text-4xl dark:text-[#fff] text-black leading-normal">
          Investment Received Clients
        </SmallPara>
      </div>
    </Cards>
  );
};
export default CompanyProgressCard;
