import React, { useRef, useEffect, useState } from "react";
import { HeadingSection, Span, Title, Res } from "./FAQStyles";
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
        <Res className=" flex flex-row justify-between ">
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
          <div className="w-[80%] ml-32 accordion" id="accordionExample">
            {data.FAQ[FAQType].map((item, index) => {
              return (
                <div key={index}>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header mb-0"
                      id={`heading-${item.question}`}
                    >
                      <button
                        className="accordion-button relative flex
                        items-center
                        w-full
                        py-4
                        px-5
                         text-4xl dark:text-white text-black leading-normal 
                     text-left
                        border-0
                        rounded-none
                        transition
                        focus:outline-none font-bold "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${item.question}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${item.question}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse-${item.question}`}
                      className="accordion-collapse collapse show"
                      aria-labelledby={`heading-${item.question}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className=" accordion-body font-sans py-4 px-5 text-justify text-black dark:text-white  text-xl">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Res>
        <div>
          <TwoSection />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
