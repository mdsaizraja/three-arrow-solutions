import React from "react";
import { MainContentBox } from "./AboutUsStyles";
import { GrClose } from "react-icons/gr";
import { TextTopBorder, HeadingTitle } from "../../styles/GlobalComponents";
const AboutUs = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <MainContentBox className="p-20 mt-52 flex">
      <div className="w-7/12">
        <HeadingTitle>Who we are</HeadingTitle>
        <div className="flex mt-28">
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
        <div className="flex justify-between  mt-36">
          <div className="w-5/12">
            <h3 className="text-white text-4xl leading-loose">
              <TextTopBorder SpacebtText="10px">App</TextTopBorder> development
            </h3>
            <p className="mt-14 leading-relaxed">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own appartments b.
            </p>
          </div>
          <div className="w-5/12">
            <h3 className="text-white text-4xl leading-loose">
              <TextTopBorder SpacebtText="10px">Web</TextTopBorder>site
              development
            </h3>
            <p className="mt-14 leading-relaxed">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own appartments b.
            </p>
          </div>
        </div>
      </div>
      <div className="w-5/12 p-20">
        <img
          src="/images/undraw_video_upload_3d4u 1.png"
          className="cursor-pointer transition-all duration-700 delay-150 hover:p-5"
          onClick={() => setShowModal(true)}
        />
      </div>
      <div></div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <GrClose />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    <iframe
                      className="w-full h-full"
                      src="/Vedios/Odisha.mp4"
                      allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </p>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </MainContentBox>
  );
};

export default AboutUs;
