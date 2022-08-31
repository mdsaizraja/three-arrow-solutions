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
        <div className="">
        <SubscribeCard/>
        <div className="col-span-3 row-span-2 gap-y-28  gap-x-28 flex justify-center flex-wrap  ">
          {data.blogs.map((item, index) => {
            if (index !== 0)
              return (
                <div
                  key={index}
                  className="xl:w-2/5  sm:w-full m-5 md:w-2/5 xl:mb-0 mb-10 bg-[#042C54] Rest_blog "
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
        </div>
      </Layout>

      <Footer />
    </div>
  );
};
export default index;
