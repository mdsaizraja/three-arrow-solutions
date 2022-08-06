import React from "react";
import { IoIosCall } from "react-icons/io";
import {
  Icondiv,
  Buttondiv,
  IcondivGradient,
} from "../../components/Contact/ContactStyle";
import { ImLocation } from "react-icons/im";

const MeetUs = () => {
  return (
    <div className="xl:w-[50%]  text-white items-center flex justify-center transition-all duration-500 ">
      <div className="w-[70%] xl:py-0 py-20">
        <h4 className="xl:text-7xl text-5xl mb-5 meetus-D dark:text-[#fff] text-black">Meet Us</h4>
        <div className="mt-24">
          <div className="flex mb-9">
            <Icondiv>
              <IoIosCall />
            </Icondiv>
            <span className="ml-10 text-xl dark:text-[#fff] text-black">+91 1234567890</span>
          </div>
          <div className="flex mb-9">
            <IcondivGradient className="font-bold ">@</IcondivGradient>
            <span className="ml-10 text-xl dark:text-[#fff] text-black">contact@threearrow.in</span>
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
