import React, { Fragment, useEffect, useState } from "react";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loading from "./../../components/Loader/Loading";
import TwoSection from "../../components/TwoSection/TwoSection";

const index = () => {
  const [loading, SetLoading] = useState(true);
  const [theme, SetTheme] = useState(true);
  

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
        <div className="container">
          <div className="xl:px-20">
            <Header SelectedTheme={(e) => SetTheme(e)} />
          </div>
          <FAQ theme={theme}/>
          <TwoSection />
          <Footer />
        </div>
      )}
    </Fragment>
  );
};

export default index;
