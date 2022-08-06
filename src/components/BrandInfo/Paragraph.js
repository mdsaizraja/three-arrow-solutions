import React from "react";
import { TalkExpertBox } from "../OurService/OurServiceStyles";

const Paragraph = () => {
  return (
    <div className="mt-20">
      <h3 className="text-3xl font-semibold text-black dark:text-white sm:text-6xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque
        commodo ex, vel tempor orci dignissim nec. Fusce mi orci, placerat vitae
        sapien sed, condimentum semper orci.
      </h3>
      <p className="mt-20 text-3xl leading-relaxed  text-black dark:text-white">
        Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies
        odio non mattis feugiat. Nulla semper neque eget dui consectetur, nec
        pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat, sit
        amet imperdiet velit auctor. Etiam elementum pharetra nisi nec
        convallis. Mauris eu pulvinar ante. Mauris bibendum elit eu nulla
        luctus, vel aliquam elit facilisis. Vivamus tincidunt posuere velit a
        imperdiet. Sed sollicitudin non tortor ornare pellentesque. Mauris
        faucibus nibh enim, ac dictum augue molestie vel. Praesent at tortor non
        purus scelerisque interdum. Suspendisse laoreet ut mauris eget commodo.
        Ut commodo sagittis pulvinar.. Nam nunc odio, semper ut sem non, mattis
        congue ligula. Ut ultricies odio non mattis feugiat. Nulla semper neque
        eget dui consectetur, nec pulvinar lectus mollis. Cras efficitur eros
        sed ipsum consequat, sit amet imperdiet velit auctor. Etiam elementum
        pharetra nisi nec convallis. Mauris eu pulvinar ante.
      </p>
      <div className="mt-10 flex items-center justify-center">
        <TalkExpertBox className="w-11/12 xl:flex md:flex-none md:mx-5 xl:mx-0 justify-center xl:mt-32 my-20 dark:text-black text-white rounded-3xl ">
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
      <div className="mt-20">
        <h3 className="text-3xl font-semibold text-black dark:text-white sm:text-6xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          pellentesque commodo ex.
        </h3>
        <p className="mt-16 text-3xl leading-relaxed  text-black dark:text-white">
          Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies
          odio non mattis feugiat. Nulla semper neque eget dui consectetur, nec
          pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat,
        </p>
      </div>
    </div>
  );
};

export default Paragraph;
