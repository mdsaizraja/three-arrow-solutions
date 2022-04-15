import React from "react";
import { MainContentBox } from "./AboutUsStyles";
import { TextTopBorder, HeadingTitle } from "../../styles/GlobalComponents";
const AboutUs = () => {
  return (
    <MainContentBox className="p-20 mt-48 flex">
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
      <div className="w-5/12">
        <img src="/images/undraw_video_upload_3d4u 1.png" />
      </div>
      <div></div>
    </MainContentBox>
  );
};

export default AboutUs;
