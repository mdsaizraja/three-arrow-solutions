import React from "react";
import { Layout } from "../../layout/Layout";
import Footer from "../../components/Footer/Footer";
import BlowView from "../../components/BlogView";
const index = () => {
  return (
    <>
      <Layout>
        <BlowView />
      </Layout>
      <Footer />
    </>
  );
};

export default index;
