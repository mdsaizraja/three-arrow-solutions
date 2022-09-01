import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Layout } from "../../layout/Layout";
import Blog from "../../components/Blog/Blog";
import FAQ from "../../components/FAQ/FAQ";
import TwoSection from "../../components/TwoSection/TwoSection";
import EnquiryForm from "../../components/ Enquiry form/ enquiryForm";
import MeetUs from "../../components/MeetUs/meetUs";
import DetailsText from "../../components/DetailsText.js/detailsText";
import TalkExpertCard from "../../components/TalkExpertCard/talkExpertCard";
import CompanyProgressCard from "../../components/CompanyProgressNoCard/companyProgressCard";
import TextBulletopt from "../../components/TextBulletOpt/textBulletOpt";
import DetailHero from "../../components/DetailHero/detailHero";
import styled from "styled-components";
import { Container } from "../../layout/LayoutStyles";

const index = () => {
  return (
    <>
      <div className="h-full w-full dark:bg-[#040C18] bg-white ">
        <DetailHero />

        <Container>
          <div className="flex justify-center xl:flex-row flex-col xl:mt-0 md:mx-0 mt-0  xl:p-0 px-0">
            <TextBulletopt />
            <EnquiryForm />
          </div>
          <CompanyProgressCard />
          <TalkExpertCard />
          <DetailsText />
          <FAQ />
          <Blog />
          <div className="flex justify-center xl:flex-row flex-col xl:mt-0 mb-5 md:mx-5 mx-0 mt-0  xl:p-0 px-5">
            <MeetUs />
            <EnquiryForm />
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default index;
