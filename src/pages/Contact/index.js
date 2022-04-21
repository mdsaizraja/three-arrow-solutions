import React from "react";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import { Layout } from "../../layout/Layout";
const index = () => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(89.97deg, #02C897 1.84%, #00ADD8 102.67%)",
        }}
        className="pt-1 "
      >
        <div className="px-20">
          <Header />
        </div>
        <Contact />
      </div>
    </>
  );
};

export default index;
