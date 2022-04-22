import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { SiAirchina } from "react-icons/si";
import { GiStripedSun } from "react-icons/gi";
import { RiMenu4Fill, RiSunFill, RiCloseFill } from "react-icons/ri";
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
import { BsArrowRight, BsChatSquareText } from "react-icons/bs";
import { gsap, Power2 } from "gsap";

import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [navWidth, setNavWidth] = useState("hidden");
  const navBar = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const currentTheme = theme === "system" ? systemTheme : theme;
  const renderThemeChanger = () => {
    const currentTheme1 = theme === "system" ? systemTheme : theme;

    if (currentTheme1 === "dark") {
      return (
        <img
          src="/images/Vector.png"
          alt="dark_mode.png"
          width="30px"
          onClick={() => setTheme("light")}
        />
      );
    } else if (currentTheme1 === "light") {
      return (
        <img
          src="/images/dark mode.png"
          alt="dark_mode.png"
          width="25px"
          onClick={() => setTheme("dark")}
        />
      );
    } else {
      return (
        <img
          src="/images/Vector.png"
          alt="dark_mode.png"
          width="30px"
          onClick={() => setTheme("light")}
        />
      );
    }
  };

  useEffect(() => {
    setTheme("dark");
    // let tl = gsap.timeline();
    // tl.to(navBar.current, {
    //   ease: Power2.easeIn,
    // });
  }, []);
  return (
    <>
      <div
        className={`h-full w-full  ${navWidth} fixed z-10 top-0 xl:left-[5%] -left-5  xl:overflow-hidden overflow-x-scroll  translate-x-5`}
        onClick={() => setNavWidth("hidden")}
      >
        <div
          ref={navBar}
          style={{
            background:
              currentTheme === "dark" || currentTheme === undefined
                ? "radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 94%) 0%, rgba(4, 12, 24, 94%) 25%)"
                : "white",
          }}
          className="xl:w-[88%]"
        >
          <div className="xl:mx-32 xl:py-8 py-5 mx-5">
            <div className="flex ">
              {" "}
              <NavLink className="flex items-center justify-between w-full font-bold ">
                <Link href="/">
                  <div className="flex">
                    {" "}
                    <SiAirchina
                      size="3rem"
                      className="text-black dark:text-white"
                    />
                    <Span className="ml-2 mt-2 text-black dark:text-white">
                      Tech stagers
                    </Span>
                  </div>
                </Link>
                <Span onClick={() => setNavWidth("hidden")}>
                  <div>
                    {" "}
                    <RiCloseFill
                      color={`${
                        currentTheme === "dark"
                          ? "white"
                          : currentTheme === "light"
                          ? "black"
                          : "white"
                      }`}
                      size="40"
                    />
                  </div>
                  <span className="font-light text-5xl dark:text-white text-black"></span>
                </Span>
              </NavLink>
            </div>
            <div>
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #E99080 14.5%, #DF9B8E 88.12%)",
                }}
                className="flex md:flex-row flex-col mt-7 py-5 xl:px-10 px-5 justify-between rounded-xl xl:items-center"
              >
                <div className="md:w-[20%]">
                  <h4 className="text-black text-4xl leading-normal font-extrabold">
                    Looking for career opportunity?
                  </h4>
                </div>
                <div className="xl:w-[20%] xl:mt-0 mt-3  text-black gap-5 leading-loose">
                  <div className="flex justify-between">
                    <div className="flex  items-center font-bold">
                      <BsChatSquareText /> <span className="ml-2">Email</span>
                    </div>
                    <div className="w-[70%]"> contact@threearrow.in</div>
                  </div>
                  <div className="flex justify-between ">
                    <span className="flex w-[20%] items-center  font-bold">
                      <FiPhoneCall /> <span className="ml-2">Call</span>
                    </span>
                    <div className="w-[70%]">+91 1234567890</div>
                  </div>
                </div>
                <div className="md:w-1/5 md:mt-0 mt-3 flex justify-center items-center  ">
                  <div
                    className="bg-black flex justify-around rounded-full p-2 w-80 cursor-pointer delay-75 duration-700 
         transition-all text-white hover:bg-white hover:text-black"
                  >
                    <button className="font-extrabold">Explore more</button>
                    <BsArrowRight className="text-5xl" />
                  </div>
                </div>
              </div>
              <div className="flex xl:flex-row flex-col xl:items-center mt-5">
                <div className="xl:w-[40%] md:flex md:flex-col md:items-center">
                  <Lottie
                    ref={(c) => startLottieAnim(c)}
                    animationData={lottieJson}
                    play
                    className="max-w-[450px] max-h-[250px] xl:mt-0 mt-10"
                  />
                  <HeadingSection className="font-bold text-4xl p-3">
                    Let's build your digital project together
                  </HeadingSection>{" "}
                </div>
                <div className="xl:w-[60%] xl:mx-0 mx-5 grid xl:mt-5 mt-20 md:grid-cols-3  gap-8 dark:text-white text-black text-lg ">
                  <div className="flex flex-col">
                    <div>
                      <h5 className="font-bold text-2xl xl:mb-5 mb-16">
                        Mobile App Development
                      </h5>
                      <ol>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Iphone App Development
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          React Native App Development
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Android Application Development
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Flutter App Development
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Swift App Development
                        </li>
                      </ol>
                    </div>
                    <div>
                      <h5 className="font-bold text-2xl xl:mb-5 mb-16 mt-3">
                        Web Development
                      </h5>
                      <ol>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-0
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          AngularJS Development
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          ReactJs Development
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Javascript Development
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Node.JS Development
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          PHP Development
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Laravel Development
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Magento Development
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          VueJS Development
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="row-span-2">
                    <h5 className="font-bold text-2xl xl:mb-5 mb-16">
                      Enterprise Mobility Solutions
                    </h5>
                    <ol>
                      <li
                        className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                      >
                        Real Estate App Development
                      </li>
                      <li
                        className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                      >
                        Travel App Development
                      </li>
                      <li
                        className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                      >
                        Sports App Development
                      </li>
                      <li
                        className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                      >
                        Educational App Development
                      </li>
                      <li
                        className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                      >
                        Food Delivery Solutions
                      </li>
                      <li
                        className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                      >
                        E-commerce Solutions
                      </li>
                      <li
                        className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                      >
                        Media & Entertainment App Development
                      </li>
                      <li
                        className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                      >
                        Social Media App Development
                      </li>
                      <li
                        className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                      >
                        Fintech Solutions
                      </li>
                      <li
                        className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                      >
                        Business Application Development
                      </li>
                      <li
                        className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                      >
                        Digital Transformation Development
                      </li>
                      <li
                        className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                      >
                        Statups App Development
                      </li>
                      <li
                        className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                      >
                        Demand App Development
                      </li>
                    </ol>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <h5 className="font-bold text-2xl xl:mb-5 mb-16">
                        Hire Dedicated Developers
                      </h5>
                      <ol>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Hire iPhone Developer
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Android Developer
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Swift Developer
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          lonic App Developer
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Full stack Developer
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Node.js Developer
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          AngularJs Developer
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          ReactJs Developer
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          PHP Developer
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h5 className="font-bold text-2xl xl:mb-3 mb-16 mt-2">
                        About Us
                      </h5>
                      <ol>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Home
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Work
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          Blog
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 hover:before:bg-[#E99080] before:border-[#E99080] before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                        >
                          <Link href="/contact">Contact Us</Link>
                        </li>
                        <li
                          className="relative mb-5 cursor-pointer  px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
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
          </div>
          <div
            className=" border-t-2 border-[#BCC0CF] xl:fixed bottom-0 
        dark:text-white text-black p-2 text-lg
        w-[88%] text-center"
            style={{
              background:
                currentTheme === "dark" || currentTheme === undefined
                  ? "radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 94%) 0%, rgba(4, 12, 24, 94%) 25%)"
                  : "white",
            }}
          >
            <span>© 2021 All rights reserved.</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between mt-5">
          <Link href="/">
            <NavLink className="flex items-center font-bold ">
              <SiAirchina size="3rem" className="text-black dark:text-white" />
              <Span className="ml-2 mt-2 text-black dark:text-white">
                Tech stagers
              </Span>
            </NavLink>
          </Link>
          <div className="flex">
            <SocialIcons className="dark:hover:bg-[#212d45] hover:bg-[#fff]">
              {renderThemeChanger()}
            </SocialIcons>
            <SocialIcons className="dark:hover:bg-[#212d45] hover:bg-[#fff]">
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
