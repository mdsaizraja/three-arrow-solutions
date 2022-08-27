import React from "react";
import { IoIosCall } from "react-icons/io";
import styled from "styled-components";
import {
  Icondiv,
  Buttondiv,
  IcondivGradient,
} from "../../components/Contact/ContactStyle";
import { ImLocation } from "react-icons/im";

const MeetUsStyle = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  /* identical to box height, or 121% */

  letter-spacing: -0.04em;

  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const MeetUs = () => {
  return (
    <div className="xl:w-[50%]  text-white items-center flex justify-center transition-all duration-500 ">
      <div className="w-[70%] xl:py-0 py-20">
        <MeetUsStyle className="xl:text-7xl text-5xl mb-5 dark:text-[#fff] text-black">
          Meet Us
        </MeetUsStyle>
        <div className="mt-24">
          <div className="flex mb-9">
            <Icondiv>
              <IoIosCall />
            </Icondiv>
            <span className="ml-10 text-xl dark:text-[#fff] text-black">
              +91 1234567890
            </span>
          </div>
          <div className="flex mb-9">
            <IcondivGradient className="font-bold ">@</IcondivGradient>
            <span className="ml-10 text-xl dark:text-[#fff] text-black">
              contact@threearrow.in
            </span>
          </div>
          <div className="flex">
            <Icondiv>
              <ImLocation />
            </Icondiv>
            <span className="ml-10 text-xl w-full leading-relaxed dark:text-[#fff] text-black">
              6 ff, EF tower, Shreeji Gold, nr. C.K prajapati school, Laxmipura
              Rd, opp. Sona and Bandhan party plot, Subhanpura, Vadodara,
              Gujarat 390003, India
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MeetUs;
