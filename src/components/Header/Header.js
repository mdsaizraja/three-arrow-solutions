import React, { useState } from "react";
import { useTheme } from "next-themes";
import { SiAirchina } from "react-icons/si";
import { GiStripedSun } from "react-icons/gi";
import { RiMenu4Fill, RiSunFill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import Lottie from "react-lottie-player";
import lottieJson from "../../animation/HeaderNavImage.json";
import {
  NavLink,
  SocialIcons,
  Span,
  Wrapper,
  HeaderDiv,
  HeadingSection,
} from "./HeaderStyles";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [navWidth, setNavWidth] = useState("hidden");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <GiStripedSun onClick={() => setTheme("light")} />;
    } else {
      return (
        <img
          src="/images/dark mode.png"
          alt="dark_mode.png"
          width="25px"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <>
      {" "}
      <div
        id="myNav"
        style={{
          background:
            "radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)",
        }}
        className={`h-full w-full overflow-hidden ${navWidth} fixed z-10 top-0 -left-5  overflow-x-hidden translate-x-5`}
      >
        <div className="mx-32 py-8">
          <div className="flex ">
            {" "}
            <NavLink className="flex items-center justify-between w-full font-bold ">
              <div className="flex">
                <SiAirchina
                  size="3rem"
                  className="text-black dark:text-white"
                />
                <Span className="ml-2 mt-2 text-black dark:text-white">
                  Tech stagers
                </Span>
              </div>
              <Span onClick={() => setNavWidth("hidden")}>
                {/* <GrClose /> */}
                <span className="font-light text-5xl">X</span>
              </Span>
            </NavLink>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #E99080 14.5%, #DF9B8E 88.12%)",
            }}
            className="flex mt-10 py-5 px-10 justify-between rounded-xl items-center"
          >
            <div className="w-1/5">
              <h4 className="text-black text-4xl font-extrabold">
                Looking for career opportunity?
              </h4>
            </div>
            <div className="w-1/4  text-black gap-5 leading-loose">
              <div className="flex ">
                <div className="flex items-center font-bold">
                  <AiOutlineMail /> <span>Email:</span>
                </div>
                <span>contact@threearrow.in</span>
              </div>
              <div className="flex  ">
                <span className="flex items-center  font-bold">
                  <FiPhoneCall /> <span>Call:</span>
                </span>
                <span>+91 1234567890</span>
              </div>
            </div>
            <div className="w-1/5 flex justify-center">
              <div
                className="bg-black flex justify-around rounded-full p-2 w-80 cursor-pointer delay-75 duration-700 
         transition-all text-white hover:bg-white hover:text-black"
              >
                <button className="font-extrabold">Explore more</button>
                <BsArrowRight className="text-5xl" />
              </div>
            </div>
          </div>
          <div className="flex items-center mt-5">
            <div className="w-[40%]">
              <Lottie
                ref={(c) => startLottieAnim(c)}
                animationData={lottieJson}
                play
              />
              <HeadingSection className="font-bold p-3">
                Let's build your digital project together
              </HeadingSection>{" "}
            </div>
            <div className="w-[60%] grid grid-cols-3 gap-8 text-white text-xl ">
              <div className="flex flex-col">
                <div>
                  <h5 className="font-bold text-2xl mb-3">
                    Mobile App Development
                  </h5>
                  <ol>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Iphone App Development
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      React Native App Development
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Android Application Development
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Flutter App Development
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Swift App Development
                    </li>
                  </ol>
                </div>
                <div>
                  <h5 className="font-bold text-2xl mb-3 mt-8">
                    Web Development
                  </h5>
                  <ol>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      AngularJS Development
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      ReactJs Development
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Javascript Development
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Node.JS Development
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      PHP Development
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Laravel Development
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Magento Development
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      VueJS Development
                    </li>
                  </ol>
                </div>
              </div>
              <div className="row-span-2">
                <h5 className="font-bold text-2xl mb-3">
                  Enterprise Mobility Solutions
                </h5>
                <ol>
                  <li
                    className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                  >
                    Real Estate App Development
                  </li>
                  <li
                    className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                  >
                    Travel App Development
                  </li>
                  <li
                    className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                  >
                    Sports App Development
                  </li>
                  <li
                    className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                  >
                    Educational App Development
                  </li>
                  <li
                    className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                  >
                    Food Delivery Solutions
                  </li>
                  <li
                    className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                  >
                    E-commerce Solutions
                  </li>
                  <li
                    className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                  >
                    Media & Entertainment App Development
                  </li>
                  <li
                    className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                  >
                    Social Media App Development
                  </li>
                  <li
                    className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                  >
                    Fintech Solutions
                  </li>
                  <li
                    className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                  >
                    Business Application Development
                  </li>
                  <li
                    className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                  >
                    Digital Transformation Development
                  </li>
                  <li
                    className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                  >
                    Statups App Development
                  </li>
                  <li
                    className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                  >
                    Demand App Development
                  </li>
                </ol>
              </div>
              <div className="flex flex-col">
                <div>
                  <h5 className="font-bold text-2xl mb-3">
                    Hire Dedicated Developers
                  </h5>
                  <ol>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Hire iPhone Developer
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Android Developer
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Swift Developer
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      lonic App Developer
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Full stack Developer
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Node.js Developer
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      AngularJs Developer
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      ReactJs Developer
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      PHP Developer
                    </li>
                  </ol>
                </div>

                <div>
                  <h5 className="font-bold text-2xl mb-3 mt-2">About Us</h5>
                  <ol>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Home
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Work
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Blog
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      Contact Us
                    </li>
                    <li
                      className="relative mb-5 cursor-pointer  px-10 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                    >
                      FAQ
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 border-t-2 border-[#BCC0CF] 
        text-white p-4 text-lg
        w-full text-center"
        >
          <span>© 2021 All rights reserved.</span>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between mt-5">
          <NavLink className="flex items-center font-bold ">
            <SiAirchina size="3rem" className="text-black dark:text-white" />
            <Span className="ml-2 mt-2 text-black dark:text-white">
              Tech stagers
            </Span>
          </NavLink>
          <div className="flex">
            <SocialIcons>{renderThemeChanger()}</SocialIcons>
            <SocialIcons>
              <RiMenu4Fill
                className="text-black dark:text-white"
                onClick={() => setNavWidth("block")}
              />
            </SocialIcons>
            <div></div>
            {/*<Link href='https://github.com/Nishant88277'>*/}
            {/*    <SocialIcons><AiFillGithub/></SocialIcons>*/}
            {/*</Link>*/}
            {/*<Link href='https://www.instagram.com/threearrowtech/'>*/}
            {/*    <SocialIcons><AiFillInstagram/></SocialIcons>*/}
            {/*</Link>*/}
            {/*<Link href='https://www.linkedin.com/company/three-arrow-technologies/'>*/}
            {/*    <SocialIcons><AiFillLinkedin/></SocialIcons>*/}
            {/*</Link>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
