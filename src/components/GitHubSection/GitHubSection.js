import React from "react";
import {TextTopBorder, HeadingTitle, SocialLink} from "../../styles/GlobalComponents";

const GitHubSection = () => {
    return (
        <div className="container mx-auto">
            <div className="xl:flex xl:mt-52 mt-20 md:mx-5 xl:p-0 px-5">
                <div className="xl:w-7/12 xl:pr-24 Git_text">
                    <HeadingTitle>Ut id tincidunt libero, ac luctus libero.</HeadingTitle>
                    <SocialLink
                        className=" flex xl:flex-col flex-row xl:w-full md:w-1/2 w-full justify-between font-black xl:text-8xl text-5xl xl:leading-[80px] underline">
                        <h2>Dribble</h2>
                        <h2> Github</h2>
                    </SocialLink>
                </div>
                <div className="flex flex-col mt-8">
                    <div className="xl:flex xl:m-10 my-10 justify-between">
                        <div
                            className="Git_text xl:w-1/3 dark:text-white text-black font-black text-3xl leading-normal">
                            <TextTopBorder SpacebtText="5px">Ut id</TextTopBorder> tincidunt
                            libero tincidunt
                        </div>
                        <div
                            className="Git_text xl:w-2/3 text-2xl dark:text-[#81AFDD] text-black leading-normal xl:px-24">
                            Curabitur vulputate dui dui, vel rutrum odio semper et. Cras non
                            erat tempus, ornare enim nec, commodo eros. Pellentesque.
                        </div>
                    </div>
                    <div className="Git_text xl:flex xl:m-10 my-10 justify-between">
                        <div className="xl:w-1/3 dark:text-white text-black font-black text-3xl leading-normal">
                            <TextTopBorder SpacebtText="5px">Ut id</TextTopBorder> tincidunt
                            libero tincidunt
                        </div>
                        <div
                            className="Git_text xl:w-2/3 text-2xl dark:text-[#81AFDD] text-black leading-normal xl:px-24">
                            Curabitur vulputate dui dui, vel rutrum odio semper et. Cras non
                            erat tempus, ornare enim nec, commodo eros. Pellentesque.
                        </div>
                    </div>
                    <div className="Git_text xl:flex xl:m-10 my-10 justify-between">
                        <div className="xl:w-1/3 dark:text-white text-black font-black text-3xl leading-normal">
                            <TextTopBorder SpacebtText="5px">Ut id</TextTopBorder> tincidunt
                            libero tincidunt
                        </div>
                        <div
                            className="Git_text xl:w-2/3 text-2xl dark:text-[#81AFDD] text-black leading-normal xl:px-24">
                            Curabitur vulputate dui dui, vel rutrum odio semper et. Cras non
                            erat tempus, ornare enim nec, commodo eros. Pellentesque.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitHubSection;
