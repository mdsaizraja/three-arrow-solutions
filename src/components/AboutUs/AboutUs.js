import React from "react";
import {
  MainContentBox,
  Title,
  RightSection,
  LeftSection,
  Para,
} from "./AboutUsStyles";
import { TextTopBorder, HeadingTitle } from "../../styles/GlobalComponents";
const AboutUs = () => {
  return (
    <MainContentBox className="p-16 mt-14">
      <LeftSection>
        <HeadingTitle>Who we are</HeadingTitle>
        <div className="flex" style={{ marginTop: "100px" }}>
          <div className="w-96">
            <Title>
              <TextTopBorder SpacebtText="30px">Digi</TextTopBorder>
              tal Marketing
            </Title>
            <Para>
              We so opinion friends me message as delight. Whole front do of
              plate heard on ouoght.
            </Para>
          </div>
        </div>
        <div className="flex justify-between  mt-24">
          <div className="w-5/12">
            <Title>
              <TextTopBorder SpacebtText="30px">App</TextTopBorder> development
            </Title>
            <Para>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own appartments b.
            </Para>
          </div>
          <div className="w-5/12">
            <Title>
              <TextTopBorder SpacebtText="30px">Web</TextTopBorder>site
              development
            </Title>
            <Para>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own appartments b.
            </Para>
          </div>
        </div>
      </LeftSection>
      <RightSection>
        <img src="/images/undraw_video_upload_3d4u 1.png" />
      </RightSection>
      <div></div>
    </MainContentBox>
  );
};

export default AboutUs;
