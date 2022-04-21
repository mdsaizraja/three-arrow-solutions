import React, { useRef, useEffect } from "react";
import { IoIosCall } from "react-icons/io";
import { Icondiv, Buttondiv } from "./ContactStyle";
import { gsap } from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import GoogleMapReact from "google-map-react";
import { AiTwotoneMinusCircle } from "react-icons/ai";
const Contact = () => {
  const Maplog = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  const BoxText = useRef();
  const Cursor = useRef();
  const MapLocator = useRef();
  const sentence = [
    " Remember why you started.",
    "I am developer",
    "Let us talk?",
  ];
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to(MapLocator.current, {
      boxShadow: "0px 0px 10px 0px blue",
      ease: "power2.inOut",
      repeat: -1,
    });
    gsap.to(Cursor.current, { opacity: 1, ease: "power2.inOut", repeat: -1 });
    let masterTl = gsap.timeline({ repeat: -1 });
    sentence.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(BoxText.current, {
        duration: 2,
        text: word,
      });
      masterTl.add(tl);
    });
  }, []);
  return (
    <div>
      <div className="text-center pb-[20%] text-white">
        <h1 className="text-8xl">
          {" "}
          <span className="md:text-8xl text-5xl" ref={BoxText}></span>
          <span className="md:text-[100px] " ref={Cursor}>
            |
          </span>
        </h1>
        <h2 className="md:text-6xl text-4xl">Contact Us</h2>
      </div>
      <div className="xl:flex xl:fixed bottom-0 h-[50%] w-full">
        <div className="xl:w-2/4 bg-black">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAAHIaBUEyFri65V9rDjm11wqz9bJ9RmnM",
            }}
            defaultCenter={Maplog.center}
            defaultZoom={Maplog.zoom}
          >
            <span
              ref={MapLocator}
              className="w-10 h-10 bg-blue-800 absolute rounded-full"
            ></span>
          </GoogleMapReact>
        </div>
        <div className="xl:w-2/4 bg-black text-white items-center flex justify-center cursor-pointer transition-all duration-500 hover:bg-slate-900  ">
          <div className="w-[60%] xl:py-0 py-20">
            <h4 className="xl:text-8xl text-7xl mb-5">Meet Us</h4>
            <div className="">
              <div className="flex mb-5">
                <Icondiv>
                  <IoIosCall />{" "}
                </Icondiv>

                <span className="ml-10 text-xl">+91 1234567890</span>
              </div>
              <div className="flex mb-5">
                <Icondiv className="font-bold ">@</Icondiv>
                <span className="ml-10 text-xl">contact@threearrow.in</span>
              </div>
              <div className="flex ">
                <Icondiv>
                  <IoIosCall />
                </Icondiv>
                <span className="ml-10 text-xl w-full leading-relaxed ">
                  6 ff, EF tower, Shreeji Gold, nr. C.K prajapati school,
                  Laxmipura Rd, opp. Sona and Bandhan party plot, Subhanpura,
                  Vadodara, Gujarat 390003, India
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-2/4 bg-white text-black items-center flex justify-center cursor-pointer transition-all duration-500 hover:bg-slate-200   ">
          {" "}
          <div className="w-[60%] xl:py-0 py-20">
            <h4 className="xl:text-8xl text-7xl mb-5">Pitch us</h4>
            <div className="leading-snug">
              <p>
                hello,
                <br />
                my name is <Icondiv>your name</Icondiv> and my e-mail address is
                <Icondiv>your email</Icondiv> and I would like to discuss about
                <Icondiv>this project.</Icondiv>
              </p>
              <Buttondiv className="mt-3 rounded-full py-6 px-14 transition-all duration-700 delay-75">
                send
              </Buttondiv>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
