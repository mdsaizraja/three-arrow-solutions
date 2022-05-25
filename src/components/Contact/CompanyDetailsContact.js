import React, {useState, useEffect} from "react";
import SwipeableViews from "react-swipeable-views";
import {autoPlay} from "react-swipeable-views-utils";
import ContactForm from './ContactForm'

const CompanyDetailsContact = () => {

    const transferFeatures = [
        {
            id: 1,
            name: 'Competitive exchange rates',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',

        },
        {
            id: 2,
            name: 'No hidden fees',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',

        },
        {
            id: 3,
            name: 'Transfers are instant',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',

        },
    ]

    return (
        <div className="w-full mt-12 lg:mt-24 lg:flex lg:grid-cols-2 lg:gap-20 ">
            <div className="lg:w-3/5 relative">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    Transfer funds world-wide
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro
                    maiores
                    officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis
                    facere.
                    Totam, velit.
                </p>

                <dl className="mt-10 space-y-10">
                    {transferFeatures.map((item) => (
                        <div key={item.id} className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white">
                                    {/*<item.icon className="h-6 w-6" aria-hidden="true" />*/}
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div className="lg:w-2/5 mt-10 -mx-4 lg:mt-0" aria-hidden="true">
                <ContactForm/>
            </div>
        </div>

    );
};

export default CompanyDetailsContact;
