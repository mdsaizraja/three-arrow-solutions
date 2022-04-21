import React from "react";
import PortFolio from "../../components/PortfolioText.js/PortFolio";
import { Layout } from "./../../layout/Layout";

const index = () => {

  return (
    <Layout>
     
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

    </Layout>
  );
};

export default index;
