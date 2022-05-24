import React, { useRef, useEffect, useState } from "react";
import { HeadingSection, Span, Title } from "./FAQStyles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { data } from "../../data";
import TwoSection from "../../components/TwoSection/TwoSection";
const FAQ = ({ theme }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [FAQType, setFAQType] = useState("Development");
  const toogle = (index) => {
    if (activeItemIndex == index) {
      setActiveItemIndex(null);
    } else {
      setActiveItemIndex(index);
    }
  };
  return (
    <div className="px-10">
      <Title className=" font-extrabold xl:text-7xl text-6xl xl:text-center text-left leading-tight tracking-wide py-3 Footer_head mt-20">
        Frequently Asked Questions
      </Title>
      <div className="mt-32">
        <div className=" flex flex-row justify-between ">
          <div className=" px-11">
            {FAQType === "Development" ? (
              <HeadingSection className=" font-extrabold text-4xl leading-tight tracking-wide Footer_head mb-8">
                <div
                  onClick={() => {
                    setFAQType("Development");
                    setActiveItemIndex(null);
                  }}
                >
                  Development
                </div>
              </HeadingSection>
            ) : (
              <Span>
                <div
                  className="text-black dark:text-white font-extrabold text-4xl mb-8"
                  onClick={() => {
                    setFAQType("Development");
                    setActiveItemIndex(null);
                  }}
                >
                  Development
                </div>
              </Span>
            )}

            {FAQType === "Business" ? (
              <HeadingSection className=" font-extrabold text-4xl  leading-tight tracking-wide Footer_head mb-8">
                <div
                  onClick={() => {
                    setFAQType("Business");
                    setActiveItemIndex(null);
                  }}
                >
                  Business
                </div>
              </HeadingSection>
            ) : (
              <Span>
                <div
                  className="text-black dark:text-white font-extrabold text-4xl mb-8"
                  onClick={() => {
                    setFAQType("Business");
                    setActiveItemIndex(null);
                  }}
                >
                  Business
                </div>
              </Span>
            )}
            {FAQType === "Hire" ? (
              <HeadingSection className=" font-extrabold text-4xl  leading-tight tracking-wide Footer_head mb-8">
                <div
                  onClick={() => {
                    setFAQType("Hire");
                    setActiveItemIndex(null);
                  }}
                >
                  Hire
                </div>
              </HeadingSection>
            ) : (
              <Span>
                <div
                  className="text-black dark:text-white font-extrabold text-4xl mb-8 "
                  onClick={() => {
                    setFAQType("Hire");
                    setActiveItemIndex(null);
                  }}
                >
                  Hire
                </div>
              </Span>
            )}
          </div>
          <div className="w-[80%] ml-32">
            {data.FAQ[FAQType].map((item, index) => {
              return (
                <div key={index} onClick={() => toogle(index)}>
                  <div className="flex  justify-between items-start">
                    <div className="text-black dark:text-white font-medium">
                      {item.question}
                    </div>
                    <div className="mb-5 mr-14 flex">
                      <div class="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                        {activeItemIndex == index ? (
                          <IoIosArrowUp
                            id="CloseQuestion"
                            className="text-black"
                          />
                        ) : (
                          <IoIosArrowDown
                            id="OpenQuestion"
                            className=" text-black"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-[80%]">
                    {activeItemIndex == index && (
                      <p className="text-justify text-black dark:text-white font-thin text-xl mb-5">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ml-5">
          <TwoSection />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
