import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalCss = createGlobalStyle`
.abc{
    font-family: 'Manrope';
font-style: normal;
font-weight: 800;
font-size: 62px;

/* identical to box height, or 121% */



background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
@media only screen and (max-width:480px){
    font-size:32px
   
}

}
.cards{
    display:flex;
    justify-content:space-around;
    
   
}
.smallSc{

@media only screen and (max-width:480px){
    justify-content:space-around;
    font-size:8px

}

`;

const CompanyProgressCard = () => {
  return (
    <div className="cards  ">
      <GlobalCss />
      <div className="Pcard">
        <h1 className="abc">200+</h1>
        <p className=" smallSc  text-4xl dark:text-[#fff] text-black leading-normal">Professionals</p>
      </div>
      <div className="Pcard">
        <h1 className="abc">5+</h1>
        <p className=" smallSc text-4xl dark:text-[#fff] text-black leading-normal">Years of Average Experience</p>
      </div>
      <div className="Pcard">
        <h1 className="abc">500M+</h1>
        <p className=" smallSc text-4xl dark:text-[#fff] text-black leading-normal">Investment Received Clients</p>
      </div>
    </div>
  );
};
export default CompanyProgressCard;
