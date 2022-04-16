import React from "react";
import {HeadingTitle} from "../../styles/GlobalComponents";

const image = [
    {
        image: "/images/image 14.png"
    },
    {
        image: "/images/image 15.png"
    },
    {
        image: "/images/image 14.png"
    },
    {
        image: "/images/image 15.png"
    },
    {
        image: "/images/image 14.png"
    },
    {
        image: "/images/image 15.png"
    },
    {
        image: "/images/image 14.png"
    },
    {
        image: "/images/image 15.png"
    },
    {
        image: "/images/image 14.png"
    },
    {
        image: "/images/image 15.png"
    }
]

const Clients = () => {
    return (
        <div className="mt-52">
            <HeadingTitle TextCenter="center">Clients</HeadingTitle>
            <div className="flex flex-wrap  mt-32">
                {
                    image.map((item, index) => {
                        return <div key={index}
                                    className="border-2 border-gray-500 object-contain h-72 w-1/5 flex justify-center items-center">
                            <img alt={item.image} src={item.image} className="w-3/5 h-40 object-contain"/>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Clients;
