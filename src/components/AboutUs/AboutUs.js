import React from "react";
import { MainContentBox, Title, TextTopBorder } from "./AboutUsStyles";
const AboutUs = () => {
  return (
    <MainContentBox>
      <div style={{ width: "60%" }}>
        <h1 style={{ marginTop: "58px" }}>Who we are</h1>
        <div className="flex justify-between">
          <div style={{ width: "60%", height: "193px", marginTop: "101px" }}>
            <Title>
              <TextTopBorder>Digi</TextTopBorder>
              tal Marketing
            </Title>
            <p
              style={{
                fontSize: "16px",
                marginTop: "26px",
                lineHeight: "30px",
              }}
            >
              We so opinion friends me message as delight. Whole front do of
              plate heard on ouoght.
            </p>
          </div>
        </div>
        <div className="flex">
          <div style={{ width: "334px", height: "193px" }}>
            <Title>
              <TextTopBorder>App</TextTopBorder> development
            </Title>
            <p
              style={{
                fontSize: "16px",
                marginTop: "26px",
                lineHeight: "30px",
              }}
            >
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own appartments b.
            </p>
          </div>
          <div style={{ width: "334px", height: "193px" }}>
            <Title>
              <TextTopBorder>Web</TextTopBorder>site development
            </Title>
            <p
              style={{
                fontSize: "16px",
                marginTop: "26px",
                lineHeight: "30px",
              }}
            >
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own appartments b.
            </p>
          </div>
        </div>
      </div>
      <div style={{ width: "40%" }}>
        <img
          width="390px"
          height="380px"
          src="https://media.istockphoto.com/photos/mobile-phone-top-view-with-white-screen-picture-id1161116588?s=612x612"
        />
      </div>
      <div></div>
    </MainContentBox>
  );
};

export default AboutUs;
