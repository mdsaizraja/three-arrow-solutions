import React, { Fragment } from "react";
import PortFolio from "../../components/PortfolioText.js/PortFolio";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const index = () => {
  return (
    <Fragment>
      <div className="xl:px-20">
        <Header />
      </div>
      <div className="bg-[#ff001f]">
        <PortFolio
          marqueeTexts={["Smile Kitchens Smile Kitchens Smile Kitchens"]}
          direction={"-"}
        />
        <PortFolio
          marqueeTexts={["Brown Opticians Brown Opticians Brown Opticians"]}
          direction={"+"}
        />
        <PortFolio marqueeTexts={["Novo Novo Novo"]} direction={"-"} />
        <PortFolio
          marqueeTexts={["Yellow Telescope Yellow Telescope Yellow Telescope"]}
          direction={"+"}
        />
        <PortFolio
          marqueeTexts={["Acowtancy Acowtancy Acowtancy"]}
          direction={"-"}
        />
        <PortFolio
          marqueeTexts={["Walker Lovell Walker Lovell Walker Lovell"]}
          direction={"+"}
        />
      </div>
      <Footer />
    </Fragment>
  );
};

export default index;
