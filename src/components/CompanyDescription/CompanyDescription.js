import React, {useState, useEffect} from "react";
import SwipeableViews from "react-swipeable-views";
import {autoPlay} from "react-swipeable-views-utils";

const CompanyDescription = () => {

    return (
        <div className="container mx-auto">
            <div className="xl:mt-36 mt-20 relative mx-0 xl:p-0 px-5">
                <h4 className="text-black font-light dark:text-white text-7xl">Mern stack development</h4>
                <h3 className="mt-5 font-bold text-5xl text-black dark:text-white">COMPANY</h3>
                <p className="mt-16 leading-10 text-3xl text-black dark:text-white">A combination of technologies that
                    are used to develop web applications is known as a stack. MERN
                    stack demand is increasing day by day because it is an open-source combination of technologies. This
                    tech stack uses one language across all tiers. MERN comprises Mongo DB, Express JS, React JS, and
                    Node JS. MERN has gained immense popularity over the years for delivering flexible,
                    high-performance, and single-page applications (SPA).
                </p>
                <div className="flex items-center py-36 dark:text-white text-black">
                <button
                    className="font-extrabold rounded-full  dark:bg-black bg-white  cursor-pointer delay-75  duration-700
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white xl:px-16 xl:py-7 px-10  xl:m-0 py-8 xl:text-1xl text-xl"
                >
                    Talk to our Experts
                </button>
                </div>
            </div>
        </div>
    );
};

export default CompanyDescription;
