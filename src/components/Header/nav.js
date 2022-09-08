import React from "react";
import { CareerBox, HeadingSection, List, NavLink, Span } from "./HeaderStyles";
import Link from "next/link";
import { RiCloseFill } from "react-icons/ri";
import { BsArrowRight, BsChatSquareText } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import Lottie from "react-lottie-player";
import lottieJson from "../../animation/HeaderNavImage.json";
import { data } from "../../header_data";
import { Container } from "../../layout/LayoutStyles";

function Nav({ currentTheme, handleModal }) {
  return (
    <>
      <Container>
        <div
          className={`h-full w-full dark:bg-[#040C18] bg-white fixed z-10 top-0 left-0 overflow-y-auto CloseNav`}
        >
          <div className="xl:mx-32 md:mx-36   xl:py-8 py-5 mx-5">
            <div className="flex Header_nav">
              <NavLink className="flex items-center justify-between w-full font-bold ">
                <Link href="/">
                  <div className="flex">
                    <Span className="ml-2 mt-2 text-black dark:text-white">
                      Tech stagers
                    </Span>
                  </div>
                </Link>
                <Span className="CloseNav" onClick={() => handleModal()}>
                  <div>
                    <RiCloseFill
                      className="dark:hover:bg-[#212d45] hover:bg-[#fff]"
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
                  <span className="font-light text-5xl dark:text-white text-black" />
                </Span>
              </NavLink>
            </div>
            <div className="mt-20">
              <CareerBox className="flex md:flex-row flex-col mt-7 py-10 xl:px-10 px-10 justify-between rounded-xl xl:items-center mb-20 Carrer_div">
                <div className="md:w-[20%]">
                  <h4 className="text-black text-4xl leading-normal font-extrabold">
                    Looking for career opportunity?
                  </h4>
                </div>
                <div className="xl:w-[20%] xl:mt-0 mt-3 text-black gap-5 leading-loose">
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
                <div className="md:w-1/5 md:mt-0 mt-3 flex xl:justify-end xl:mt-0 mt-12 items-center">
                  <div
                    className="bg-black flex justify-around rounded-full p-2 w-80 cursor-pointer delay-75 duration-700
                                                    transition-all text-white hover:bg-white hover:text-black"
                  >
                    <button className="font-extrabold">Explore more</button>
                    <BsArrowRight className="text-5xl" />
                  </div>
                </div>
              </CareerBox>
              <div className="flex xl:flex-row flex-col xl:items-center justify-between mt-5">
                <div className="xl:w-[30%] md:flex md:flex-col md:items-center Logo_div">
                  <Lottie
                    animationData={lottieJson}
                    play
                    className="max-w-[450px] max-h-[320px] xl:mt-0 mt-10"
                  />
                  <HeadingSection className="font-bold text-4xl p-3">
                    Let's build your digital project together
                  </HeadingSection>
                </div>
                <div className="xl:w-[67%] xl:mx-0 mx-5 grid xl:mt-5 mt-20 md:grid-cols-3  gap-8 dark:text-white text-black text-lg ">
                  <div className="flex flex-col">
                    <div>
                      <h5 className="font-bold text-3xl xl:mb-5 mb-16">
                        Mobile App Development
                      </h5>
                      <ol className="text-2xl mt-10">
                        {data.mobile_app_development.map((item, index) => {
                          return (
                            <Link
                              key={index}
                              href={`/${item.text.replace(/\s/g, "-")}`}
                            >
                              <List
                                onClick={() => handleModal()}
                                className="relative mb-5 cursor-pointer hover:font-bold duration-100 transition-all px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                              >
                                {item.text}
                              </List>
                            </Link>
                          );
                        })}
                      </ol>
                    </div>
                    <div className="mt-16">
                      <h5 className="font-bold text-3xl xl:mb-5 mb-16 mt-3">
                        Web Development
                      </h5>
                      <ol className="text-2xl mt-10">
                        {data.web_development.map((item, index) => {
                          return (
                            <Link
                              key={index}
                              href={`/${item.text.replace(/\s/g, "-")}`}
                            >
                              <List
                                onClick={() => handleModal()}
                                className="relative mb-5 cursor-pointer hover:font-bold duration-100 transition-all px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                              >
                                {item.text}
                              </List>
                            </Link>
                          );
                        })}
                      </ol>
                    </div>
                  </div>
                  <div className="row-span-2">
                    <h5 className="font-bold text-3xl xl:mb-5 mb-16">
                      Enterprise Mobility Solutions
                    </h5>
                    <ol className="text-2xl mt-10">
                      {data.enterprise_mobility_solutions.map((item, index) => {
                        return (
                          <Link
                            key={index}
                            href={`/${item.text.replace(/\s/g, "-")}`}
                          >
                            <List
                              onClick={() => handleModal()}
                              className="relative mb-5 cursor-pointer hover:font-bold duration-100 transition-all px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                            >
                              {item.text}
                            </List>
                          </Link>
                        );
                      })}
                    </ol>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <h5 className="font-bold text-3xl xl:mb-5 mb-16">
                        Hire Dedicated Developers
                      </h5>
                      <ol className="text-2xl mt-10">
                        {data.dedicated_developers.map((item, index) => {
                          return (
                            <Link
                              key={index}
                              href={`/${item.text.replace(/\s/g, "-")}`}
                            >
                              <List
                                onClick={() => handleModal()}
                                className="relative mb-5 cursor-pointer hover:font-bold duration-100 transition-all px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                              >
                                {item.text}
                              </List>
                            </Link>
                          );
                        })}
                      </ol>
                    </div>

                    <div className="mt-16">
                      <h5 className="font-bold text-3xl xl:mb-3 mb-16 mt-2">
                        About Us
                      </h5>
                      <ol className="text-2xl mt-10">
                        {data.about_us.map((item, index) => {
                          return (
                            <Link key={index} href={item.link}>
                              <List
                                className="relative mb-5 cursor-pointer hover:font-bold duration-100 transition-all px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                              >
                                {item.text}
                              </List>
                            </Link>
                          );
                        })}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 text-center p-10 border-[#BCC0CF] text-black dark:text-white xl:text-2xl text-sm">
            © 2021 All rights reserved.
          </div>

          {/* <div*/}
          {/*    className=" border-t-2 border-[#BCC0CF] xl:fixed bottom-0*/}
          {/*                    dark:text-white text-black p-5 text-lg*/}
          {/*                    w-full text-center dark:bg-black bg-white"*/}
          {/*>*/}
          {/*    <span className='font-bold'>© 2021 All rights reserved.</span>*/}
          {/*</div> */}
        </div>
      </Container>
    </>
  );
}

export default Nav;
