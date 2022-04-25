import React, { Fragment, useEffect, useState } from "react";
import PortFolio from "../../components/PortfolioText.js/PortFolio";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loading from "./../../components/Loader/Loading";

const index = () => {
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      SetLoading(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      {loading === true ? (
        <Loading />
      ) : (
        <div>
          <div className="xl:px-20">
            <Header />
          </div>
          <div>
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
              marqueeTexts={[
                "Yellow Telescope Yellow Telescope Yellow Telescope",
              ]}
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
        </div>
      )}
    </Fragment>
  );
};

export default index;
