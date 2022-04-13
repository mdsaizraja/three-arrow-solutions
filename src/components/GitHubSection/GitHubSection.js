import React from "react";
import { LeftSection, RightSection } from "./GitHubSectionStyles";
const GitHubSection = () => {
  return (
    <div className="flex p-20">
      <div>
        <h1 style={{ fontWeight: "800", fontSize: "34px", lineHeight: "45px" }}>
          Ut id tincidunt libero, ac luctus libero.
        </h1>
        <div
          style={{
            fontWeight: "800",
            fontSize: "62px",
            lineHeight: "100px",
            textDecorationLine: "underline",
            color: "#FF8A71",
          }}
        >
          Dribble Github
        </div>
      </div>
      <div>
        <div className="flex m-20 justify-between">
          <LeftSection>Ut id tincidunt libero tincidunt</LeftSection>
          <RightSection>
            Curabitur vulputate dui dui, vel rutrum odio semper et. Cras non
            erat tempus, ornare enim nec, commodo eros. Pellentesque.
          </RightSection>
        </div>
        <div className="flex m-20 justify-between">
          <LeftSection>Ut id tincidunt libero tincidunt</LeftSection>
          <RightSection>
            Curabitur vulputate dui dui, vel rutrum odio semper et. Cras non
            erat tempus, ornare enim nec, commodo eros. Pellentesque.
          </RightSection>
        </div>
        <div className="flex m-20 justify-between">
          <LeftSection>Ut id tincidunt libero tincidunt</LeftSection>
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
