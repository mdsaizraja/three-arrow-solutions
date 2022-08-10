import React from "react";
import { HeadingSection } from "./FooterStyles";
import { SiAirchina } from "react-icons/si";
import Link from "next/dist/client/link";

const Footer = () => {
  return (
    <div className="xl:mt-52 mt-20 bg-[#031B34] sm:overflow-hidden md:px-10 xl:px-0 px-0 text-white">
      <div className="container mx-auto">
        <div className="xl:hidden items-center font-bold flex justify-center pt-8 List_item">
          <span className="ml-2 mt-2">Tech stagers</span>
        </div>
        <div className="xl:px-96 xl:py-10 px-5">
          <HeadingSection className=" font-extrabold xl:text-7xl text-6xl xl:text-center text-left leading-tight tracking-wide py-3 Footer_head">
            We are just few steps away to help you grow in this digital world.
          </HeadingSection>
        </div>
        <div className="flex justify-center">
          <button className="border-2 px-20 py-6 transition-all delay-100 duration-700  rounded-full  hover:text-black hover:bg-white">
            Let's discuss
          </button>
        </div>
        <div>
          <div className="flex py-28 flex-wrap gap-y-10 mx-auto px-5">
            <div className="xl:flex items-center font-bold w-2/5 pl-52 hidden ">
              <span className="ml-2 mt-2">Tech stagers</span>
            </div>
            <div className="xl:w-1/5 w-1/2">
              <ul className="leading-relaxed">
                <li className="my-6 List_item font-extrabold mb-10">
                  <a href="#">Links</a>
                </li>
                <li className="my-6 List_item">
                  <a href="#">Overons</a>
                </li>
                <li className="my-6 List_item">
                  <a href="#">Social Media</a>
                </li>
                <li className="my-6 List_item">
                  <a href="#">Counters</a>
                </li>
              </ul>
            </div>
            <div className="xl:w-1/5 w-1/2">
              <ul className="leading-relaxed">
                <li className="my-6 List_item font-extrabold mb-10">
                  <a href="#">Company</a>
                </li>
                <li className="my-6 List_item">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="my-6 List_item">
                  <a href="#">Privacy Policy</a>
                </li>

                <li className="my-6 List_item">
                  <Link href="/work">Work</Link>
                </li>
                <li className="my-6 List_item">
                  <Link href="/faq">FAQ</Link>
                </li>
                <li className="my-6 List_item">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="my-6 List_item">
                  <Link href="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="xl:w-1/5 w-1/2">
              <ul className="leading-relaxed">
                <li className="my-6 List_item font-extrabold mb-10">
                  <a href="#">Get in touch</a>
                </li>
                <li className="my-6 List_item mb-10">
                  <a href="#">
                    6 ff, EF tower, Shreeji Gold, nr. C.K prajapati school,
                    Laxmipura Rd, opp. Sona and Bandhan party plot, Subhanpura,
                    Vadodara, Gujarat 390003, India
                  </a>
                </li>
                <li className="my-6 List_item mb-10">
                  <div className="cursor-pointer flex mb-5">
                    <img src="/images/IN.png" alt="" className="w-10" /> +91
                    9913781537{" "}
                  </div>
                  <div className="cursor-pointer flex">
                    <img src="/images/us-flag.png" alt="" className="w-10" /> +1
                    321-613-8080{" "}
                  </div>
                </li>
                <li className="my-6 List_item">
                  <a href="#">contact@threearrow.in</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 text-center p-10 border-[#BCC0CF] xl:text-2xl text-sm">
        © 2021 All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
