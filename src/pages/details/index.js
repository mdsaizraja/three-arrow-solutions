import React from "react";
import Hero from "../../components/Hero/Hero";
import { Layout } from "../../layout/Layout";
import AboutUs from "../../components/AboutUs/AboutUs";
import CompanyDescription from "../../components/CompanyDescription/CompanyDescription";
import OurService from "../../components/OurService/OurService";
import GitHubSection from "../../components/GitHubSection/GitHubSection";
import Carousel from "../../components/Carousel/Carousel";
import BusinessModel from "../../components/Business Model/BusinessModel";
import TwoSection from "../../components/TwoSection/TwoSection";
import Clients from "../../components/Client_animated/client"
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import CompanyDetailsContact from "../../components/Contact/CompanyDetailsContact";

export const Wrap = styled.div`
  background: linear-gradient(-89.97deg, var(--gradient-one) 1.84%, var(--gradient-two) 102.67%);
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

const index = () => {
    return (
        <>
            <Wrap
                className="pt-1 "
            >
                <Layout>
                    <CompanyDescription/>
                </Layout>



                {/*<Contact/>*/}
            </Wrap>
            <Container>
                <CompanyDetailsContact/>
            </Container>
            {/*<Layout>*/}
            {/*    <Wrap>*/}
            {/*        <Hero />*/}
            {/*        <AboutUs />*/}
            {/*    </Wrap>*/}

                <OurService />
                <GitHubSection />
                <Carousel />
                <BusinessModel />
                <TwoSection />
                <Clients />
                <Blog />
            {/*</Layout>*/}
            <Footer />
        </>
    );
};

export default index;
