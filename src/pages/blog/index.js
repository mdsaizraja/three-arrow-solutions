import React from "react";
import Footer from "../../components/Footer/Footer";
import { data } from "../../data";
import Link from "next/dist/client/link";
import Blog from "../../components/Blog/Blog"
import { HeadingSection } from "../../components/Blog/BlogStyles";
import {
  TalkExpertBox,
  Section,

} from "../../components/OurService/OurServiceStyles";
import { Layout } from "../../layout/Layout";
import { SubscribeCard } from "../../components/SubscribeCard/SubscribeCard";

export const index = () => {
  return (
    <div className="h-full w-full dark:bg-[#040C18] bg-white pt-1">
      <Layout>
        <Blog/>
        {/* <div className="container mx-auto">
          <div className="mt-20 md:mx-5 mx-0 xl:p-0 px-5 Main_Bog_div">
            <div className="grid grid-rows-1 xl:mt-40 mt-10 text-white  xl:grid-flow-col grid-flow-row gap-24 w-full">
              <div className="row-span-2 col-span-3 xl:block hidden bg-[#042C54] text-white F_blog">
                <div
                  className="xl:max-w-fit md:w-full h-full flex flex-col "
                  style={{
                    clipPath:
                      "polygon(0% 7%,10% 0%, 100% 0%, 100% 5%, 100% 95%, 95% 100%,5% 100%,0 95%)",
                  }}
                >
                  <img alt={data.blogs[0].imgsrc} src={data.blogs[0].imgsrc} />
                  <div className="xl:px-10 pt-10 leading-normal">
                    <h4 className="xl:text-2xl text-1xl pb-7">
                      {data.blogs[0].date}
                    </h4>
                    <p className="font-extrabold xl:text-5xl text-3xl">
                      {data.blogs[0].Heading}
                    </p>
                    <div className="flex h-full mt-5"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 row-span-2 gap-y-32 flex justify-around flex-wrap ">
                {data.blogs.map((item, index) => {
                  if (index !== 0)
                    return (
                      <div
                        key={index}
                        className="xl:w-2/5 sm:w-full md:w-2/5 xl:mb-0 mb-10 bg-[#042C54] Rest_blog"
                      >
                        <div
                          className="xl:max-w-fit flex flex-col"
                          style={{
                            clipPath:
                              "polygon(0% 5%,10% 0%, 100% 0%, 100% 5%, 100% 100%, 95% 100%,5% 100%,0 100%)",
                          }}
                        >
                          <img alt={item.imgsrc} src={item.imgsrc} />
                          <div className="relative h-72">
                            <div className="absolute p-7">
                              <p className="font-extrabold text-3xl">
                                {item.Heading}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                })}
              </div>
            </div>

            <div className="flex justify-center mt-24"></div>
          </div>
        </div> */}
        <SubscribeCard/>
        <div className="col-span-3 row-span-2 gap-y-28 flex justify-around flex-wrap ">
          {data.blogs.map((item, index) => {
            if (index !== 0)
              return (
                <div
                  key={index}
                  className="xl:w-2/5 sm:w-full md:w-2/5 xl:mb-0 mb-10 bg-[#042C54] Rest_blog"
                >
                  <div
                    className="xl:max-w-fit flex flex-col"
                    style={{
                      clipPath:
                        "polygon(0% 5%,10% 0%, 100% 0%, 100% 5%, 100% 100%, 95% 100%,5% 100%,0 100%)",
                    }}
                  >
                    <img alt={item.imgsrc} src={item.imgsrc} />
                    <div className="relative h-72">
                      <div className="absolute p-7">
                        <p className="font-extrabold text-3xl">
                          {item.Heading}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
        <TalkExpertBox className="xl:flex md:flex-none md:mx-5 xl:mx-0 justify-center xl:mt-32 my-20 dark:text-black text-white rounded-3xl  ">
          <div className="xl:p-16 p-10">
            <h4 className="leading-relaxed">Let's Discuss Your Project</h4>
            <p className="font-extrabold text-4xl  leading-normal">
              Get free consultation and let us know your project idea to turn it
              into an amazing digital product.
            </p>
          </div>
          <div className="flex items-center justify-center  dark:text-white text-black xl:w-1/4 ">
            <button
              className="font-extrabold rounded-full  dark:bg-black bg-white  cursor-pointer delay-75  duration-700
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white xl:px-16 xl:py-7 px-10  xl:m-0 m-6 py-8 xl:text-1xl text-xl"
            >
              Talk to our Experts
            </button>
          </div>
        </TalkExpertBox>
      </Layout>

      <Footer />
    </div>
  );
};
export default index;
