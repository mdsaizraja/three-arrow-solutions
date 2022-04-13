import React from "react";
import { ServiceBox, TalkExpertBox } from "./OurServiceStyles";
const OurService = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontWeight: "800",
          fontSize: "34px",
          lineHeight: "45px",
        }}
      >
        {" "}
        OurService
      </h2>
      <ServiceBox>
        <div>
          <img
            style={{ width: "60.16px", height: "55px" }}
            src="/images/React.png"
          />
          <span>React</span>
        </div>
        <div>
          <img
            src="/images/Angular.png"
            style={{ width: "60.16px", height: "55px" }}
          />
          <span>Angular</span>
        </div>
        <div>
          <img
            src="/images/Node.png"
            style={{ width: "60.16px", height: "55px" }}
          />
          <span>Node</span>
        </div>
        <div>
          <img
            src="/images/Graphql.png"
            style={{ width: "60.16px", height: "55px" }}
          />
          <span>GraphQL</span>
        </div>
        <div>
          <img
            src="/images/firebase.png"
            style={{ width: "60.16px", height: "55px" }}
          />
          <span>Firebase</span>
        </div>
        <div>
          <img
            src="/images/git.png"
            style={{ width: "60.16px", height: "55px" }}
          />
          <span>GIT</span>
        </div>
      </ServiceBox>
      <div className="flex justify-center">
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            border: "2px solid white",
            borderRadius: "60px",
            width: "302.53px",
            height: "50px",
          }}
        >
          {`All Services ->`}
        </button>
      </div>
      <TalkExpertBox>
        <div className="p-20">
          <h5>Let's Discuss Your Project</h5>
          <div
            style={{ fontWeight: "800", fontSize: "24px", lineHeight: "45px" }}
          >
            Get free consultation and let us know your project idea to turn it
            into an amazing digital product.
          </div>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "black",
              color: "white",

              borderRadius: "60px",
              width: "302.53px",
              height: "50px",
            }}
          >
            Talk to our Experts
          </button>
        </div>
      </TalkExpertBox>
    </div>
  );
};

export default OurService;
