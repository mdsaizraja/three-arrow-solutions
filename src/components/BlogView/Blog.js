import React from "react";
import data from "./dbData.json";
const Blog = () => {
  return data.BlogData.map((ele, indx) => {
    return (
      <>
        {" "}
        <div
          className={`w-[280px] text-white ${
            indx % 2 === 0 && indx != 0 && indx != 6 ? "mt-[-80px]" : ""
          }`}
          key={indx}
        >
          <img src={ele.imgsrc} />
          <p className="text-lg leading-6 py-4">{ele.title}</p>
        </div>
        {indx === 5 ? (
          <div className="w-[95%] xl:flex md:flex-none px-10 mx-5  bg-gradient-to-r from-[#02C897] to-[#00ADD8] justify-center  dark:text-black text-white rounded-3xl ">
            <div className="xl:py-16 p-10 w-[80%]">
              <h4 className="leading-relaxed">Let's Discuss Your Project</h4>
              <p className="font-extrabold text-2xl  leading-normal">
                Get free consultation and let us know your project idea to turn
                it into an amazing digital product.
              </p>
            </div>
            <div className="flex items-center justify-center  dark:text-white text-black xl:w-1/4 ">
              <button
                className="font-extrabold rounded-full  dark:bg-black bg-white  cursor-pointer delay-75  duration-700
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white xl:px-16 xl:py-7 px-10  xl:m-0 m-6 py-8 xl:text-1xl text-xl"
              >
                Subscribe
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  });
};

export default Blog;
