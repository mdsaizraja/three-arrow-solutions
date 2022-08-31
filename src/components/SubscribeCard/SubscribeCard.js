import React from 'react'
import { Subscribe } from './SubscribeCardStyle'


export const SubscribeCard = () => {
    return (
        <div>
             <Subscribe className="  xl:flex md:flex-none md:mx-20 xl:mx-0 justify-center xl:mt-32 my-20 dark:text-black text-white rounded-3xl  ">
          <div className="xl:p-16 p-10">
            <h4 className="leading-relaxed">Join 5000+ Subscribers</h4>
            <p className="font-extrabold text-4xl  leading-normal">
              Get the latest updates on design, development, and technology
              trends right in your inbox.
            </p>
          </div>
          <div className="flex items-center justify-center  dark:text-white text-black xl:w-1/4 ">
            <button
              className=" font-extrabold rounded-full  dark:bg-black bg-white  cursor-pointer delay-75  duration-700
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white xl:px-16 xl:py-7 px-10  m-6 py-8 xl:text-1xl text-xl"
            >
              Subscribe
            </button>
          </div>
        </Subscribe>
            
        </div>
    )
}
