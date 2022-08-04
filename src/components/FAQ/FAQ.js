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
        <Res className=" flex flex-row justify-between " >
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
                <div  key={index} className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0" id="headingOne">
                      <button
                        className="accordion-button relative flex
                        items-center
                        w-full
                        py-4
                        px-5
                      text-white text-left
                        border-0
                        rounded-none
                        transition
                        focus:outline-none font-bold text-2xl"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample">
                      <div className=" accordion-body font-sans py-4 px-5 text-justify text-black dark:text-white font-thin text-xl">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Res>
        <div >
          <TwoSection />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
