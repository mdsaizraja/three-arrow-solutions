import {data} from "../../data";
import React from "react";
import {HeadingSection} from "./BlogStyles";
import Link from "next/dist/client/link";

const Blog = () => {
    return (
        <div className="container mx-auto">
            <div className="mt-20 md:mx-5 mx-0 xl:p-0 px-5 Main_Bog_div">
                <HeadingSection
                    className="font-extrabold xl:text-8xl md:text-7xl text-5xl leading-tight tracking-wide xl:w-3/5 pb-3 Blog_text">
                    A lot is happening, We are blogging about it.
                </HeadingSection>
                <div
                    className="grid grid-rows-1 xl:mt-40 mt-10 text-white  xl:grid-flow-col grid-flow-row gap-24 w-full">
                    <div className="row-span-2 col-span-3 xl:block hidden bg-[#042C54] text-white F_blog">
                        <div
                            className="xl:max-w-fit md:w-full h-full flex flex-col "
                            style={{
                                clipPath:
                                    "polygon(0% 7%,10% 0%, 100% 0%, 100% 5%, 100% 95%, 95% 100%,5% 100%,0 95%)",
                            }}
                        >
                            <img alt={data.blogs[0].imgsrc} src={data.blogs[0].imgsrc}/>
                            <div className="xl:px-10 pt-10 leading-normal">
                                <h4 className="xl:text-2xl text-1xl pb-7">{data.blogs[0].date}</h4>
                                <p className="font-extrabold xl:text-5xl text-3xl">
                                    {data.blogs[0].Heading}
                                </p>
                                <div className='flex h-full mt-5'>
                                    <p
                                        className="xl:text-2xl text-1x mt-auto transition-all duration-500 delay-75 cursor-pointer hover:text-[17px] ">
                                        Read Full Article
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 row-span-2 gap-y-32 flex justify-around flex-wrap ">
                        {data.blogs.map((item, index) => {
                            if (index !== 0)
                                return (
                                    <div key={index} className="xl:w-2/5 sm:w-full md:w-2/5 xl:mb-0 mb-10 bg-[#042C54] Rest_blog">
                                        <div
                                            className="xl:max-w-fit flex flex-col"
                                            style={{
                                                clipPath:
                                                    "polygon(0% 5%,10% 0%, 100% 0%, 100% 5%, 100% 100%, 95% 100%,5% 100%,0 100%)",
                                            }}
                                        >
                                            <img alt={item.imgsrc} src={item.imgsrc}/>
                                            <div className="relative h-72">
                                                <div className="absolute p-7">
                                                    <h5 className="text-xl">{item.date}</h5>
                                                    <p className="font-extrabold text-3xl">
                                                        {item.Heading}
                                                    </p>
                                                    <div
                                                        className="relative top-16 text-xl transition-all duration-500 delay-75 cursor-pointer hover:text-[14px]">
                                                        Read Full Article
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                        })}
                    </div>
                </div>

                <div className="flex justify-center mt-24">
                <Link href="/blog">
                    <button
                        className="py-5 px-10 font-black text-xl rounded-full dark:border-white border-black border-2 dark:text-white text-black transition-all delay-100 duration-700 dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black">
                        View all blogs
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
