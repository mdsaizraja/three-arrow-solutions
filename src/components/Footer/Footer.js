import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  HeadingSection,
} from "./FooterStyles";
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
            <ul>
              <li>Links</li>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-1/5">
            <ul>
              <li>Company</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-1/5">
            <ul>
              <li>Get in touch</li>
              <li>6667, shashtrikunj society, Vadodra, 390016</li>
              <li>+91 9913781537</li>
              <li>contact@threearrow.in</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
