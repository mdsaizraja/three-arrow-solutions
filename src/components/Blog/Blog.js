import { data } from "../../data";
import React from "react";
import { HeadingSection } from "./BlogStyles";

const Blog = () => {
  return (
    <div className="mt-52">
      <HeadingSection className="font-extrabold text-8xl leading-tight tracking-wide w-3/5">
        A lot is happening, We are blogging about it.
      </HeadingSection>
      <div className="grid grid-rows-1 mt-40 text-white  grid-flow-col gap-24 w-full">
        <div className="row-span-2 col-span-3  bg-[#042C54] text-white">
          <div className="max-w-fit flex flex-col">
            <img alt={data.blogs[0].imgsrc} src={data.blogs[0].imgsrc} />
            <div className="relative h-96 p-10">
              <div className="absolute px-10 leading-normal">
                <h5 className="text-2xl">{data.blogs[0].date}</h5>
                <p className="font-extrabold text-5xl">
                  {data.blogs[0].Heading}
                </p>
                <div className="text-2xl relative top-28">
                  Read Full Article
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 row-span-2 gap-y-32  flex justify-around flex-wrap ">
          {data.blogs.map((item, index) => {
            if (index !== 0)
              return (
                <div key={index} className="w-2/5  bg-[#042C54]">
                  <div className="max-w-fit flex flex-col">
                    <img alt={item.imgsrc} src={item.imgsrc} />
                    <div className="relative ">
                      <div className="absolute p-7">
                        <h5 className="text-xl">{item.date}</h5>
                        <p className="font-extrabold text-3xl">
                          {item.Heading}
                        </p>
                        <div className="relative top-16 text-xl">
                          Read Full Article
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
