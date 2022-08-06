import React from 'react'
import { TalkExpertBox } from '../OurService/OurServiceStyles'

 const TalkExpertCard = () => {
  return (
    <div>
            <TalkExpertBox
                    className="xl:flex md:flex-none md:mx-5 xl:mx-0 justify-center xl:mt-32 my-20 dark:text-black text-white rounded-3xl "
                >
                    <div className="xl:p-16 p-10">
                        <h4 className="leading-relaxed">Let's Discuss Your Project</h4>
                        <p className="font-extrabold text-4xl  leading-normal">
                            Get free consultation and let us know your project idea to turn it
                            into an amazing digital product.
                        </p>
                    </div>
                    <div className="flex items-center justify-center  dark:text-white text-black xl:w-1/4 ">
                        <button
                            className="font-extrabold rounded-full  dark:bg-black bg-white  cursor-pointer delay-75  duration-700
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white xl:px-16 xl:py-7 px-10  xl:m-0 m-6 py-8 xl:text-1xl text-xl"
                        >
                            Talk to our Experts
                        </button>
                    </div>
                </TalkExpertBox>
    </div>
  )
}
export default TalkExpertCard;
