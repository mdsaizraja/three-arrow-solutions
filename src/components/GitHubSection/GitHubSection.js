import React from "react";

import { TextTopBorder, HeadingTitle } from "../../styles/GlobalComponents";
const GitHubSection = () => {
  return (
    <div className="flex mt-52">
      <div className="w-7/12 pr-24">
        <HeadingTitle>Ut id tincidunt libero, ac luctus libero.</HeadingTitle>
        <h2 className="font-black text-8xl leading-snug underline text-[#ff8a71]">
          Dribble
          <br /> Github
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="flex m-10  justify-between">
          <div className="w-1/3 dark:text-white text-black font-black text-3xl leading-normal">
            <TextTopBorder SpacebtText="5px">Ut id</TextTopBorder> tincidunt
            libero tincidunt
          </div>
          <div className="w-2/3 text-2xl dark:text-[#81AFDD] text-black leading-normal px-24">
            Curabitur vulputate dui dui, vel rutrum odio semper et. Cras non
            erat tempus, ornare enim nec, commodo eros. Pellentesque.
          </div>
        </div>
        <div className="flex m-10 justify-between">
          <div className="w-1/3 dark:text-white text-black font-black text-3xl leading-normal">
            <TextTopBorder SpacebtText="5px">Ut id</TextTopBorder> tincidunt
            libero tincidunt
          </div>
          <div className="w-2/3 text-2xl dark:text-[#81AFDD] text-black leading-normal px-24">
            Curabitur vulputate dui dui, vel rutrum odio semper et. Cras non
            erat tempus, ornare enim nec, commodo eros. Pellentesque.
          </div>
        </div>
        <div className="flex m-10 justify-between">
          <div className="w-1/3 dark:text-white text-black font-black text-3xl leading-normal">
            <TextTopBorder SpacebtText="5px">Ut id</TextTopBorder> tincidunt
            libero tincidunt
          </div>
          <div className="w-2/3 text-2xl dark:text-[#81AFDD] text-black leading-normal px-24">
            Curabitur vulputate dui dui, vel rutrum odio semper et. Cras non
            erat tempus, ornare enim nec, commodo eros. Pellentesque.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubSection;
