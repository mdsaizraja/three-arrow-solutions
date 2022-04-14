import React from "react";
import {
  LeftSection,
  RightSection,
  RightSubTitle,
} from "./GitHubSectionStyles";
import { TextTopBorder, HeadingTitle } from "../../styles/GlobalComponents";
const GitHubSection = () => {
  return (
    <div className="flex mt-40">
      <div className="w-7/12 pr-24">
        <HeadingTitle>Ut id tincidunt libero, ac luctus libero.</HeadingTitle>
        <RightSubTitle>
          Dribble
          <br /> Github
        </RightSubTitle>
      </div>
      <div className="flex flex-col">
        <div className="flex m-10 justify-between">
          <LeftSection>
            <TextTopBorder SpacebtText="5px">Ut id</TextTopBorder> tincidunt
            libero tincidunt
          </LeftSection>
          <RightSection>
            Curabitur vulputate dui dui, vel rutrum odio semper et. Cras non
            erat tempus, ornare enim nec, commodo eros. Pellentesque.
          </RightSection>
        </div>
        <div className="flex m-10 justify-between">
          <LeftSection>
            <TextTopBorder SpacebtText="5px">Ut id</TextTopBorder> tincidunt
            libero tincidunt
          </LeftSection>
          <RightSection>
            Curabitur vulputate dui dui, vel rutrum odio semper et. Cras non
            erat tempus, ornare enim nec, commodo eros. Pellentesque.
          </RightSection>
        </div>
        <div className="flex m-10 justify-between">
          <LeftSection>
            <TextTopBorder SpacebtText="5px">Ut id</TextTopBorder> tincidunt
            libero tincidunt
          </LeftSection>
          <RightSection>
            Curabitur vulputate dui dui, vel rutrum odio semper et. Cras non
            erat tempus, ornare enim nec, commodo eros. Pellentesque.
          </RightSection>
        </div>
      </div>
    </div>
  );
};

export default GitHubSection;
