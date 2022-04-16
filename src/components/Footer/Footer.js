import React from "react";

import { HeadingSection } from "./FooterStyles";
import { SiAirchina } from "react-icons/si";
const Footer = () => {
  return (
    <div className="mt-52 bg-[#031B34] text-white">
      <div className="px-96 py-10">
        <HeadingSection className=" font-extrabold text-7xl text-center leading-tight tracking-wide ">
          We are just few steps away to help you grow in this digital world.
        </HeadingSection>
      </div>
      <div className="flex justify-center">
        <button className="border-2 p-8 transition-all delay-100 duration-700    hover:text-black hover:bg-white">
          Request Early Accesss
        </button>
      </div>
      <div>
        <div className="flex py-28">
          <div className="flex items-center font-bold w-2/5 pl-52">
            <SiAirchina size="50px" />
            <span className="ml-2 mt-2">Tech stagers</span>
          </div>
          <div className="w-1/5">
            <ul className="leading-relaxed">
              <li className="my-6">
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
          <div className="w-1/5">
            <ul className="leading-relaxed">
              <li className="my-6">
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
          <div className="w-1/5">
            <ul className="leading-relaxed">
              <li className="my-6">
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
        <div className="border-t-2 text-center p-10">
          © 2021 All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
