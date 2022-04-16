import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import Pagination from "./PaginationDot.js";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="mt-52 relative">
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={setIndex}
        interval={5000}
      >
        <div className="flex bg-[#7563FD] text-white">
          <div className="w-6/12 flex items-center p-28">
            <div>
              <h2 className="text-5xl font-extrabold w-3/4 leading-tight">
                Working as one single team with our clients.
              </h2>
              <p className="my-12 leading-normal">
                Aenean rutrum erat quis eleifend dignissim. Duis in sollicitudin
                nisi, ac dignissim libero. Phasellus viverra sagittis sapien sed
                interdum. Fusce ex diam, fringilla commodo ante id, aliquet
                porta libero.
              </p>
              <button className="bg-[#313A5A] py-6 px-24 rounded-full my-14 transition-all delay-100 duration-700 text-xl   hover:text-white hover:bg-black">
                View Project
              </button>
            </div>
          </div>
          <div className="w-6/12 flex justify-center object-contain items-center">
            <img
              src="/images/desktop portfolio.png"
              alt="desktop portfolio.png"
              className="w-6/12 h-2/4"
            />
          </div>
        </div>
        <div className="flex bg-yellow-500 text-white">
          <div className="w-6/12 flex items-center p-28">
            <div>
              <h2 className="text-5xl font-extrabold w-3/4 leading-tight">
                Working as one single team with our clients.
              </h2>
              <p className="my-12 leading-normal">
                Aenean rutrum erat quis eleifend dignissim. Duis in sollicitudin
                nisi, ac dignissim libero. Phasellus viverra sagittis sapien sed
                interdum. Fusce ex diam, fringilla commodo ante id, aliquet
                porta libero.
              </p>
              <button className="bg-[#313A5A] py-6 px-24 rounded-full my-14 transition-all delay-100 duration-700 text-xl   hover:text-white hover:bg-black">
                View Project
              </button>
            </div>
          </div>
          <div className="w-6/12 flex justify-center object-contain items-center">
            <img
              src="/images/desktop portfolio.png"
              alt="desktop portfolio.png"
              className="w-6/12 h-2/4"
            />
          </div>
        </div>
        <div className="flex bg-lime-500 text-white">
          <div className="w-6/12 flex items-center p-28">
            <div>
              <h2 className="text-5xl font-extrabold w-3/4 leading-tight">
                Working as one single team with our clients.
              </h2>
              <p className="my-12 leading-normal">
                Aenean rutrum erat quis eleifend dignissim. Duis in sollicitudin
                nisi, ac dignissim libero. Phasellus viverra sagittis sapien sed
                interdum. Fusce ex diam, fringilla commodo ante id, aliquet
                porta libero.
              </p>
              <button className="bg-[#313A5A] py-6 px-24 rounded-full my-14 transition-all delay-100 duration-700 text-xl   hover:text-white hover:bg-black">
                View Project
              </button>
            </div>
          </div>
          <div className="w-6/12 flex justify-center object-contain items-center">
            <img
              src="/images/desktop portfolio.png"
              alt="desktop portfolio.png"
              className="w-6/12 h-2/4"
            />
          </div>
        </div>
      </AutoPlaySwipeableViews>
      <div className="absolute left-2/4 top-[90%]">
        <span
          className={` rounded-full h-5 w-5 inline-block mx-1 cursor-pointer ${
            index === 0 ? "bg-white" : "bg-slate-400"
          }`}
          onClick={() => setIndex(0)}
        ></span>
        <span
          className={` rounded-full h-5 w-5 inline-block mx-1 cursor-pointer ${
            index === 1 ? "bg-white" : "bg-slate-400"
          }`}
          onClick={() => setIndex(1)}
        ></span>
        <span
          className={` rounded-full h-5 w-5 inline-block mx-1 cursor-pointer ${
            index === 2 ? "bg-white" : "bg-slate-400"
          }`}
          onClick={() => setIndex(2)}
        ></span>
      </div>
    </div>
  );
};

export default Carousel;
