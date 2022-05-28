import React from "react";
import { Layout } from "../../layout/Layout";
import CompanyDescription from "../../components/CompanyDescription/CompanyDescription";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import CompanyDetailsContact from "../../components/Contact/CompanyDetailsContact";
import Statics from "../../components/BrandInfo/Statics";
import Paragraph from "../../components/BrandInfo/Paragraph";
import FeaturesList from "../../components/BrandInfo/FeaturesList";
import TwoSection from "../../components/TwoSection/TwoSection";

export const Wrap = styled.div`
  background: linear-gradient(
    -89.97deg,
    var(--gradient-one) 1.84%,
    var(--gradient-two) 102.67%
  );
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

const index = () => {
  return (
    <>
      <Wrap className="pt-1 ">
        <Layout>
          <CompanyDescription />
        </Layout>
      </Wrap>
      <Container>
        <CompanyDetailsContact />
        <Statics />
        <Paragraph />
        <FeaturesList />
        <TwoSection />
        <Blog />
      </Container>
      <Footer />
    </>
  );
};

export default index;
