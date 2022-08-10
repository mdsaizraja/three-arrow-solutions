import React, { useRef, useEffect, useState } from "react";
import { HeadingSection, Span, Title, Res } from "./FAQStyles";
import { data } from "../../data";
import TwoSection from "../../components/TwoSection/TwoSection";
import Accordion from "./Accordian";
import index from "../../pages/Details";
import { Container } from "../../layout/LayoutStyles";
const FAQ = ({ theme, multiple = false }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [FAQType, setFAQType] = useState("Development");
  const [active, setActive] = useState(0);

  return (
    <Container>
    <div className="px-10">
      <Title className=" font-extrabold xl:text-7xl text-6xl xl:text-center text-left leading-tight tracking-wide py-3 Footer_head mt-20 ">
        Frequently Asked Questions
      </Title>
      <div className="mt-32">
        <Res className=" flex flex-row  ">
          <div className="mr-30">
            <div className=" px-11 mr-6 ">
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
          </div>
          <div className="accordion  ">
            {data.FAQ[FAQType].map(({ question, answer }, index) => (
              <div>
                <Accordion
                  key={index}
                  title={question}
                  content={answer}
                  active={active === index}
                  onToggle={(e) => setActive((a) => (a === index ? "" : index))}
                  multiple={false}
                />
              </div>
            ))}
          </div>
        </Res>
        <div>
          <TwoSection />
        </div>
      </div>
    </div>
    </Container>
  );
};

export default FAQ;
