import React, { Fragment, useEffect, useState } from "react";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loading from "./../../components/Loader/Loading";
import { data } from "../../data";
import { HeadingSection, Span } from "../../components/FAQ/FAQStyles";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import TwoSection from "../../components/TwoSection/TwoSection";

const index = () => {
  const [loading, SetLoading] = useState(true);
  const [theme, SetTheme] = useState(true);
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [FAQType, setFAQType] = useState("Development");

  useEffect(() => {
    setInterval(() => {
      SetLoading(false);
    }, 2000);
  }, []);

  const toogle = (index) => {
    if (activeItemIndex == index) {
      setActiveItemIndex(null);
    } else {
      setActiveItemIndex(index);
    }
  };

  return (
    <Fragment>
      {loading === true ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="xl:px-20">
            <Header SelectedTheme={(e) => SetTheme(e)} />
          </div>
          <div className="container px-10">
            <HeadingSection className=" font-extrabold xl:text-7xl text-6xl xl:text-center text-left leading-tight tracking-wide py-3 Footer_head">
              Frequently Asked Questions
            </HeadingSection>
            <div className=" flex flex-row justify-between">
              <div>
            {FAQType === "Development" ? (
                  <HeadingSection className=" font-extrabold text-3xl xl:text-center text-left leading-tight tracking-wide py-3 Footer_head">
                    <button
                      onClick={() => {
                        setFAQType("Development");
                        setActiveItemIndex(null);
                      }}
                    >
                      Development
                    </button>
                  </HeadingSection>
                ) : (
                  <Span className="ml-2 mt-6 text-black dark:text-white xl:text-center text-left">
                    <button
                      onClick={() => {
                        setFAQType("Development");
                        setActiveItemIndex(null);
                      }}
                    >
                      Development
                    </button>
                  </Span>
                )}
              
                {FAQType === "Business" ? (
                  <HeadingSection className=" font-extrabold text-3xl xl:text-center text-left leading-tight tracking-wide py-3 Footer_head">
                    <button
                      onClick={() => {
                        setFAQType("Business");
                        setActiveItemIndex(null);
                      }}
                    >
                      Business
                    </button>
                  </HeadingSection>
                ) : (
                  <Span className="ml-2 mt-6 text-black dark:text-white xl:text-center text-left">
                    <button
                      onClick={() => {
                        setFAQType("Business");
                        setActiveItemIndex(null);
                      }}
                    >
                      Business
                    </button>
                  </Span>
                )}

                {FAQType === "Hire" ? (
                  <HeadingSection className=" font-extrabold text-3xl xl:text-center text-left leading-tight tracking-wide py-3 Footer_head">
                    <button
                      onClick={() => {
                        setFAQType("Hire");
                        setActiveItemIndex(null);
                      }}
                    >
                      Hire
                    </button>
                  </HeadingSection>
                ) : (
                  <Span className="ml-2 mt-6 text-black dark:text-white xl:text-center text-left">
                    <button
                      onClick={() => {
                        setFAQType("Hire");
                        setActiveItemIndex(null);
                      }}
                    >
                      Hire
                    </button>
                  </Span>
                )}
                </div>
                <div className="px-40 py-3">
                {data.FAQ[FAQType].map((item, index) => {
                  return (
                    <div key={index}>
                      <button onClick={() => toogle(index)}>
                        <ol className="flex flex-row px-40 mt-5">
                          <Span className="mx-2 text-black dark:text-white">
                            {item.question}
                          </Span>
                          <div class="p-3 px-3 sm:px-5 rounded-full bg-white">
                            {activeItemIndex == index ? (
                              <AiOutlineArrowUp
                                id="CloseQuestion"
                                className="bg-black text-white"
                              />
                            ) : (
                              <AiOutlineArrowDown
                                id="OpenQuestion"
                                className="bg-black text-white"
                              />
                            )}
                          </div>
                        </ol>
                        <div className="text-justify">
                          {activeItemIndex == index && (
                            <p className="text-justify text-2xl">
                              {item.answer}
                            </p>
                          )}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <TwoSection />
          </div>
          <Footer />
        </div>
      )}
    </Fragment>
  );
};

export default index;
