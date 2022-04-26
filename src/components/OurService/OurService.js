import React, { useEffect, useRef } from "react";
import { TalkExpertBox, Section } from "./OurServiceStyles";
import { HeadingTitle } from "../../styles/GlobalComponents";
import { gsap } from "gsap";
import { BsArrowRight } from "react-icons/bs";
import { data } from "../../data";
const OurService = () => {
  const ref = useRef(null);
  const Main_head = useRef(null);
  const Services_sec = useRef(null);
  const Service_btn = useRef(null);
  const TalkBox = useRef(null);
  useEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "bottom 90%",
        scrub: true,
      },
    });
    t1.from(Main_head.current, { x: 100, opacity: 0, duration: 0.5 })
      .from(".Services_div", {
        x: 100,
        duration: 1,
        autoAlpha: 0,
        stagger: 0.1,
      })
      .from(Service_btn.current, {
        autoAlpha: 0,
        duration: 1,
      })
      .from(TalkBox.current, {
        autoAlpha: 0,
        duration: 1,
      });
  }, []);
  return (
    <div className="container mx-auto">
      <div className="xl:mt-52 mt-20 xl:p-0 px-5" ref={ref}>
        <HeadingTitle TextCenter="center" ref={Main_head}>
          {" "}
          Our Service
        </HeadingTitle>
        <Section
          ref={Services_sec}
          className="flex  text-center overflow-x-scroll  text-gray-500 font-extrabold justify-between py-20"
        >
          {data.services.map((item, index) => {
            return (
              <div
                key={index}
                className="xl:mx-20  mx-8 cursor-pointer transition-all delay-300 dark:hover:text-white hover:text-black Services_div"
              >
                {item.icon}
                <br />
                <span>{item.serviceName}</span>
              </div>
            );
          })}
        </Section>
        <div className="mt-10 flex justify-center">
          <div
            ref={Service_btn}
            className="dark:text-white text-black border-black dark:border-white border-2 flex justify-around rounded-full p-2 w-80 cursor-pointer delay-75 duration-700 
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          >
            <button className="font-extrabold">All Services</button>
            <BsArrowRight className="text-5xl" />
          </div>
        </div>
        <TalkExpertBox
          ref={TalkBox}
          className="xl:flex md:flex-none md:mx-5 xl:mx-0  justify-center xl:mt-32 my-20 dark:text-black text-white rounded-3xl "
        >
          <div className="xl:p-16 p-10">
            <h5 className="leading-relaxed">Let's Discuss Your Project</h5>
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
    </div>
  );
};

export default OurService;
