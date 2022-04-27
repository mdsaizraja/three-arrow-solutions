import React, { useRef, useEffect } from "react";
import { IoIosCall } from "react-icons/io";
import {
  Icondiv,
  Buttondiv,
  SendText,
  TextHello,
  MeetUsText,
  MeetUs,
  PitchUs,
  MeetUsContainer,
} from "./ContactStyle";
import { gsap } from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";

import { AiTwotoneMinusCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import GoogleMapComponentWithMarker from "./GoogleMapComponentWithMarker";
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
    gsap.to(Cursor.current, { opacity: 0, ease: "power2.inOut", repeat: -1 });
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
        <div
          className="xl:w-2/4 bg-black w-full"
          style={{
            height: 400,

            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <div
            className="w-full 
          "
          >
            <GoogleMapComponentWithMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAAHIaBUEyFri65V9rDjm11wqz9bJ9RmnM"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
          {/* <GoogleMapReact
            options={{
              styles: [{ stylers: [{ saturation: -50 }, { gamma: -50 }] }],
            }}
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
          </GoogleMapReact> */}
        </div>
        <div className="xl:w-[40%] bg-black text-white items-center flex justify-center cursor-pointer transition-all duration-500 hover:bg-slate-900  ">
          <MeetUsContainer>
            <MeetUs>Meet Us</MeetUs>
            <MeetUsText>
              <div className="flex mb-5">
                <Icondiv>
                  <IoIosCall />
                </Icondiv>

                <span className="ml-10 text-xl">+91 1234567890</span>
              </div>
              <div className="flex mb-5">
                <Icondiv className="font-bold ">@</Icondiv>
                <span className="ml-10 text-xl">contact@threearrow.in</span>
              </div>
              <div className="flex ">
                <Icondiv>
                  <ImLocation />
                </Icondiv>
                <span className="ml-10 text-xl w-full leading-relaxed ">
                  6 ff, EF tower, Shreeji Gold, nr. C.K prajapati school,
                  Laxmipura Rd, opp. Sona and Bandhan party plot, Subhanpura,
                  Vadodara, Gujarat 390003, India
                </span>
              </div>
            </MeetUsText>
          </MeetUsContainer>
        </div>

        <div className="xl:w-2/4 bg-white text-black items-center flex justify-center cursor-pointer transition-all duration-500 hover:bg-slate-200   ">
          <div className="w-[80%] xl:py-0 py-20">
            <PitchUs>Pitch us</PitchUs>
            <TextHello>
              <p>
                hello,
                <br />
                my name is
                  <input className="bg-transparent text-[#00add8] w-[80px] text-2xl font-light not-italic h-6 focus:outline-none mx-2"
                  onKeyDown={(e)=>{
e.target.style.width=((e.target.value.length+1)*8)+'px'
                    }
                  }   placeholder = " your name " />
                
                 and my e-mail address is
                 <input className="bg-transparent text-[#00add8] w-[80px] text-2xl font-light not-italic h-6 focus:outline-none mx-2"
                  onKeyDown={(e)=>{
e.target.style.width=((e.target.value.length+1)*8)+'px'
                    }
                  }   placeholder = " your email " /> and I would like to discuss about
                 <input className="bg-transparent text-[#00add8] w-[82px] text-2xl font-light not-italic h-6 focus:outline-none mx-2"
                  onKeyDown={(e)=>{
e.target.style.width=((e.target.value.length+1)*8)+'px'
                    }
                  }   placeholder = " this Project " />
              </p>
            </TextHello>
            <Buttondiv>
              <SendText><div onClick={() => window.location = 'mailto:contact@threearrow.in'}>send</div></SendText>
            </Buttondiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
