import React from "react";

import { HeadingSection } from "./FooterStyles";
import { SiAirchina } from "react-icons/si";
const Footer = () => {
  return (
    <div className="xl:mt-52 mt-20 bg-[#031B34] overflow-hidden text-white">
      <div className="xl:hidden items-center font-bold flex justify-center pt-8 ">
        <SiAirchina size="50px" />
        <span className="ml-2 mt-2">Tech stagers</span>
      </div>
      <div className="xl:px-96 xl:py-10 px-5">
        <HeadingSection className=" font-extrabold xl:text-7xl text-6xl xl:text-center text-left leading-tight tracking-wide py-3">
          We are just few steps away to help you grow in this digital world.
        </HeadingSection>
      </div>
      <div className="flex justify-center">
        <button className="border-2 px-20 py-6 transition-all delay-100 duration-700  rounded-full  hover:text-black hover:bg-white">
          Let's discuss
        </button>
      </div>
      <div>
        <div className="flex py-28 flex-wrap gap-y-10 mx-auto px-5">
          <div className="xl:flex items-center font-bold w-2/5 pl-52 hidden ">
            <SiAirchina size="50px" />
            <span className="ml-2 mt-2">Tech stagers</span>
          </div>
          <div className="xl:w-1/5 w-1/2">
            <ul className="leading-relaxed">
              <li className="my-6 font-extrabold">
                <a href="#">Links</a>
              </li>
              <li className="my-6">
                <a href="#">Overons</a>
              </li>
              <li className="my-6">
                <a href="#">Social Media</a>
              </li>
              <li className="my-6">
                <a href="#">Counters</a>
              </li>
              <li className="my-6">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="xl:w-1/5 w-1/2">
            <ul className="leading-relaxed">
              <li className="my-6 font-extrabold">
                <a href="#">Company</a>
              </li>
              <li className="my-6">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="my-6">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="my-6">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="xl:w-1/5 w-1/2">
            <ul className="leading-relaxed">
              <li className="my-6 font-extrabold">
                <a href="#">Get in touch</a>
              </li>
              <li className="my-6">
                <a href="#">6667, shashtrikunj society, Vadodra, 390016</a>
              </li>
              <li className="my-6">
                <a href="#">+91 9913781537</a>
              </li>
              <li className="my-6">
                <a href="#">contact@threearrow.in</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 text-center p-10 border-[#BCC0CF]">
          © 2021 All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
