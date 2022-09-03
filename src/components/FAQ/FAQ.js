import React, { useRef, useEffect, useState } from "react";
import { HeadingSection, Span, Title, Res } from "./FAQStyles";
import { data } from "../../data";
import TwoSection from "../../components/TwoSection/TwoSection";
import Accordion from "./Accordian";
import { Container } from "../../layout/LayoutStyles";
const FAQ = ({ theme, multiple = false }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [FAQType, setFAQType] = useState("Development");
  const [active, setActive] = useState("");

  return (
    <Container>
      <div className="container mx-auto">
        <Title className=" font-extrabold xl:text-7xl text-5xl xl:text-center text-left leading-tight tracking-wide py-3 Footer_head mt-20 ">
          Frequently Asked Questions
        </Title>
        <div className="mt-32 ">
          <Res className=" flex flex-col sm:flex-col  lg:flex-row xl:flex-row md:flex-row ">
            <div className="">
              <div className=" xl:mr-6 xl:w-96 lg:w-96 md:w-96 mr-5 ">
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
            <div className="accordion ">
              {data.FAQ[FAQType].map(({ question, answer }, index) => (
                <div>
                  <Accordion
                    key={index}
                    title={question}
                    content={answer}
                    active={active === index}
                    onToggle={(e) =>
                      setActive((a) => (a === index ? "" : index))
                    }
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
