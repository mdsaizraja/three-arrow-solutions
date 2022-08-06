import React from "react";
import { data } from "../../data";
import { List } from "../Header/HeaderStyles";

const TextBulletopt = () => {
  return (
    <div className="xl:w-[80%] ">
      <h1 className="Git_text  dark:text-white text-black font-black text-6xl leading-normal ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <p className="Git_text xl: text-4xl dark:text-[#fff] text-black leading-normal ">
        Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies
        odio non mattis feugiat. Nulla semper neque eget dui consectetur, nec
        pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat, sit
        amet imperdiet velit auctor. Etiam elementum pharetra nisi nec
        convallis. Mauris eu pulvinar ante.
      </p>
      <p className="Git_text xl: text-4xl dark:text-[#fff] text-black leading-normal mt-3 ">
        Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies
        odio non mattis feugiat. Nulla semper neque eget dui consectetur, nec
        pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat,
      </p>
      <ol className="text-2xl mt-10">
        {data.btData.map((item, index) => {
          return (
            <List
              className="relative mb-5 cursor-pointer hover:font-bold duration-100 transition-all px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 before:border-solid before:rounded-full before:contents:(' ') before:w-9
                    before:h-9 Git_text xl: text-4xl dark:text-[#fff] text-black leading-normal mt-3 "
              key={index}
            >
              {item.text}
            </List>
          );
        })}
      </ol>
    </div>
  );
};
export default TextBulletopt;
