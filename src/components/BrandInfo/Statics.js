import React from "react";
import { InfoSection } from "./StaticsStyles";

const Statics = () => {
  return (
    <div className="bg-transparent">
      <div className="mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-28">
        <dl className="mt-10 sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-3xl leading-6 font-medium text-black dark:text-white">
              Professionals
            </dt>
            <InfoSection>
              <dd className="order-1 text-8xl font-extrabold text-white">
                200+
              </dd>
            </InfoSection>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-3xl leading-6 font-medium text-black dark:text-white">
              Years of Average Experience
            </dt>
            <InfoSection>
              <dd className="order-1 text-8xl font-extrabold text-white">5+</dd>
            </InfoSection>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-3xl leading-6 font-medium text-black dark:text-white">
              Investment Received Clients
            </dt>
            <InfoSection>
              <dd className="order-1 text-8xl font-extrabold text-white">
                100M+
              </dd>
            </InfoSection>
          </div>
        </dl>
      </div>
    </div>
  );
};
export default Statics;
