import React, { useState, useEffect, useRef } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { gsap } from "gsap";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import { MainContentBox } from "./AboutUsStyles";
import { GrClose } from "react-icons/gr";
import { TextTopBorder, HeadingTitle } from "../../styles/GlobalComponents";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const AboutUs = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const Mobile_img = useRef(null);
  const Content_box = useRef(null);
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = React.useState(false);
  useEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        end: "bottom 60%",

        scrub: true,
      },
    });
    t1.from(Mobile_img.current, { x: 100, opacity: 0, duration: 0.5 }).from(
      Content_box.current,
      { y: 200, opacity: 0, duration: 1 }
    );
  }, []);
  return (
    <div className="container mx-auto" ref={ref}>
      <MainContentBox className="xl:p-20  p-5 gs_reveal xl:mt-52 mt-20 xl:mx-0 md:mx-5 xl:flex">
        <div
          className="xl:w-7/12 md:w-full xl:p-0 xl:text-left text-center"
          ref={Content_box}
        >
          <HeadingTitle>Who we are</HeadingTitle>
          <div className="xl:flex mt-28  hidden">
            <div className="w-5/12">
              <h3 className="text-white text-4xl leading-loose">
                <TextTopBorder SpacebtText="10px">Digi</TextTopBorder>
                tal Marketing
              </h3>
              <p className="mt-14 leading-relaxed">
                We so opinion friends me message as delight. Whole front do of
                plate heard on ouoght.
              </p>
            </div>
          </div>
          <div className="xl:flex justify-between  mt-36  hidden">
            <div className="w-5/12">
              <h3 className="text-white text-4xl leading-loose">
                <TextTopBorder SpacebtText="10px">App</TextTopBorder>{" "}
                development
              </h3>
              <p className="mt-14 leading-relaxed">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own appartments b.
              </p>
            </div>
            <div className="w-5/12">
              <h3 className="text-white text-4xl leading-loose">
                <TextTopBorder SpacebtText="10px">Web</TextTopBorder>site
                development
              </h3>
              <p className="mt-14 leading-relaxed">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own appartments b.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-5/12 p-8 md:w-full flex justify-center ">
          <img
            ref={Mobile_img}
            alt="undraw_video_upload_3d4u 1.png"
            src="/images/undraw_video_upload_3d4u 1.png"
            className="cursor-pointer md:max-w-[500px] md:max-h-[400px] "
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="relative md:block xl:hidden pb-12">
          <AutoPlaySwipeableViews
            index={index}
            onChangeIndex={setIndex}
            interval={5000}
          >
            <div>
              <h3 className="text-white text-4xl leading-loose">
                <TextTopBorder SpacebtText="5px">Digi</TextTopBorder>
                tal Marketing
              </h3>
              <p className="mt-5 leading-relaxed">
                We so opinion friends me message as delight. Whole front do of
                plate heard on ouoght.
              </p>
            </div>
            <div>
              <h3 className="text-white text-4xl leading-loose">
                <TextTopBorder SpacebtText="5px">App</TextTopBorder> development
              </h3>
              <p className="mt-5 leading-relaxed">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own appartments b.
              </p>
            </div>
            <div>
              <h3 className="text-white text-4xl leading-loose">
                <TextTopBorder SpacebtText="5px">Web</TextTopBorder>site
                development
              </h3>
              <p className="mt-5 leading-relaxed">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own appartments b.
              </p>
            </div>
          </AutoPlaySwipeableViews>
          <div className="absolute md:left-[45%] left-[40%] -bottom-2 ">
            <span
              className={` rounded-full h-4 w-4 inline-block mx-1 cursor-pointer ${
                index === 0 ? "bg-white" : "bg-slate-400"
              }`}
              onClick={() => setIndex(0)}
            />
            <span
              className={` rounded-full h-4 w-4 inline-block mx-1 cursor-pointer ${
                index === 1 ? "bg-white" : "bg-slate-400"
              }`}
              onClick={() => setIndex(1)}
            />
            <span
              className={` rounded-full h-4 w-4 inline-block mx-1 cursor-pointer ${
                index === 2 ? "bg-white" : "bg-slate-400"
              }`}
              onClick={() => setIndex(2)}
            />
          </div>
        </div>
        <div />
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Vedio</h3>
                    <GrClose
                      onClick={() => setShowModal(false)}
                      className="ml-auto cursor-pointer"
                    />
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      <iframe
                        className="w-full h-96"
                        src="/Vedios/Odisha.mp4"
                        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </p>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        ) : null}
      </MainContentBox>
    </div>
  );
};

export default AboutUs;
