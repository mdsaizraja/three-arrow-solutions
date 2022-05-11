import React from "react";
import HoveredRotatedText from "./HoveredRotatedText";
import { BsArrowUpRight } from "react-icons/bs";
import { ImageSize } from "./PortfolioStyles";

export const MouseHoverText = ({ marqueeTexts, isMouseHover }) => {
  const MouseHover = () => {
    if (typeof isMouseHover != undefined && isMouseHover === true) {
      if (
        typeof marqueeTexts != undefined &&
        marqueeTexts[0] === "Smile Kitchens Smile Kitchens Smile Kitchens"
      ) {
        return (
          <div>
            <HoveredRotatedText
              marqueeTexts={["View Case Study Web Design "]}
              direction={"-"}
              src={
                "https://likely-story.co.uk/wp-content/uploads/2021/11/SMILE-COVER-%E2%80%93-2-copy-620x768.jpg"
              }
            />

            <div className={`absolute z-[999] w-full flex  justify-center `}>
              <div
                className={`relative xl:left-[10%] xl:top-[-120px] md:top-[-80px] md:left-[18%] top-[-40px] left-[65px]  md:w-20 md:h-20 w-10 h-5 bg-black md:p-10 p-5 rounded-full shadow-xl`}
              >
                {" "}
                <BsArrowUpRight className="text-white relative md:-top-5 md:-left-6 top-[-8px] left-[-8px] md:text-5xl" />
              </div>

              <img
                src="https://likely-story.co.uk/wp-content/uploads/2021/11/SMILE-COVER-%E2%80%93-2-copy-620x768.jpg"
                alt="image"
                className="md:w-96 xl:h-96 md:h-[180px] w-[100px] h-[80px]  relative z-[-1] xl:top-[-100px] md:top-[-70px] top-[-35px]"
              />
            </div>
          </div>
        );
      } else if (
        typeof marqueeTexts != undefined &&
        marqueeTexts[0] === "Brown Opticians Brown Opticians Brown Opticians"
      ) {
        return (
          <div>
            <div className={`absolute z-[9999] w-full   flex justify-center`}>
              <div
                className={`relative xl:left-[10%] xl:top-[-120px] md:top-[-80px] md:left-[18%] top-[-40px] left-[65px]  md:w-20 md:h-20 w-10 h-5 bg-black md:p-10 p-5 rounded-full shadow-xl`}
              >
                {" "}
                <BsArrowUpRight className="text-white relative md:-top-5 md:-left-6 top-[-8px] left-[-8px] md:text-5xl" />
              </div>
              <img
                src="https://likely-story.co.uk/wp-content/uploads/2021/08/Browns-Cover-01-1-620x768.png"
                alt="image"
                className="md:w-96 xl:h-96 md:h-[180px] w-[100px] h-[80px]  relative z-[-1] xl:top-[-100px] md:top-[-70px] top-[-35px]"
              />
            </div>
            <HoveredRotatedText
              marqueeTexts={["View Case Study Web Design"]}
              direction={"-"}
              src={
                "https://likely-story.co.uk/wp-content/uploads/2021/08/Browns-Cover-01-1-620x768.png"
              }
            />
          </div>
        );
      } else if (
        typeof marqueeTexts != undefined &&
        marqueeTexts[0] === "Novo Novo Novo"
      ) {
        return (
          <div>
            <HoveredRotatedText
              marqueeTexts={[
                "View Case Study Brand Identity & Web Design View Case Study Brand Identity & Web Design View Case Study Brand Identity & Web Design",
              ]}
              direction={"-"}
              src={
                "https://likely-story.co.uk/wp-content/uploads/2021/03/Mask-Group-262@2x-620x768.jpg"
              }
            />
            <div className={`absolute z-[9999] w-full  flex justify-center`}>
              <div
                className={`relative xl:left-[10%] xl:top-[-120px] md:top-[-80px] md:left-[18%] top-[-40px] left-[65px]  md:w-20 md:h-20 w-10 h-5 bg-black md:p-10 p-5 rounded-full shadow-xl`}
              >
                {" "}
                <BsArrowUpRight className="text-white relative md:-top-5 md:-left-6 top-[-8px] left-[-8px] md:text-5xl" />
              </div>
              <img
                src="https://likely-story.co.uk/wp-content/uploads/2021/03/Mask-Group-262@2x-620x768.jpg"
                alt="image"
                className="md:w-96 xl:h-96 md:h-[180px] w-[100px] h-[80px]  relative z-[-1] xl:top-[-100px] md:top-[-70px] top-[-35px]"
              />
            </div>
          </div>
        );
      } else if (
        typeof marqueeTexts != undefined &&
        marqueeTexts[0] === "Yellow Telescope Yellow Telescope Yellow Telescope"
      ) {
        return (
          <div>
            <HoveredRotatedText
              marqueeTexts={["View Case Study Brand Identity & Web Design "]}
              direction={"-"}
              src={
                "https://likely-story.co.uk/wp-content/uploads/2021/04/YT-Cover-01-1-620x768.png"
              }
            />
            <div className={`absolute z-[9999] w-full  flex justify-center`}>
              <div
                className={`relative xl:left-[10%] xl:top-[-120px] md:top-[-80px] md:left-[18%] top-[-40px] left-[65px]  md:w-20 md:h-20 w-10 h-5 bg-black md:p-10 p-5 rounded-full shadow-xl`}
              >
                {" "}
                <BsArrowUpRight className="text-white relative md:-top-5 md:-left-6 top-[-8px] left-[-8px] md:text-5xl" />
              </div>
              <img
                src="https://likely-story.co.uk/wp-content/uploads/2021/04/YT-Cover-01-1-620x768.png"
                alt="image"
                className="md:w-96 xl:h-96 md:h-[180px] w-[100px] h-[80px]  relative z-[-1] xl:top-[-100px] md:top-[-70px] top-[-35px]"
              />
            </div>
          </div>
        );
      } else if (
        typeof marqueeTexts != undefined &&
        marqueeTexts[0] === "Acowtancy Acowtancy Acowtancy"
      ) {
        return (
          <div>
            <HoveredRotatedText
              marqueeTexts={["View Case Study Characted Design & Web Design "]}
              direction={"-"}
              src={
                "https://likely-story.co.uk/wp-content/uploads/2022/01/ACOW-Cover-01-620x768.png"
              }
            />
            <div className={`absolute z-[999] w-full  flex justify-center`}>
              <div
                className={`relative xl:left-[10%] xl:top-[-120px] md:top-[-80px] md:left-[18%] top-[-40px] left-[65px]  md:w-20 md:h-20 w-10 h-5 bg-black md:p-10 p-5 rounded-full shadow-xl`}
              >
                {" "}
                <BsArrowUpRight className="text-white relative md:-top-5 md:-left-6 top-[-8px] left-[-8px] md:text-5xl" />
              </div>
              <img
                src="https://likely-story.co.uk/wp-content/uploads/2022/01/ACOW-Cover-01-620x768.png"
                alt="image"
                className="md:w-96 xl:h-96 md:h-[180px] w-[100px] h-[80px]  relative z-[-1] xl:top-[-100px] md:top-[-70px] top-[-35px]"
              />
            </div>
          </div>
        );
      } else if (
        typeof marqueeTexts != undefined &&
        marqueeTexts[0] === "Walker Lovell Walker Lovell Walker Lovell"
      ) {
        return (
          <div>
            <HoveredRotatedText
              marqueeTexts={["View Case Study Brand & Web Design "]}
              direction={"-"}
              src={
                "https://likely-story.co.uk/wp-content/uploads/2021/03/LS-Walker-Lovell-Cover2@2x-620x768.png"
              }
            />
            <div className={`absolute z-[999] w-full  flex justify-center`}>
              <div
                className={`relative xl:left-[10%] xl:top-[-120px] md:top-[-80px] md:left-[18%] top-[-40px] left-[65px]  md:w-20 md:h-20 w-10 h-5 bg-black md:p-10 p-5 rounded-full shadow-xl`}
              >
                {" "}
                <BsArrowUpRight className="text-white relative md:-top-5 md:-left-6 top-[-8px] left-[-8px] md:text-5xl" />
              </div>
              <img
                src="https://likely-story.co.uk/wp-content/uploads/2021/03/LS-Walker-Lovell-Cover2@2x-620x768.png"
                alt="image"
                className="md:w-96 xl:h-96 md:h-[180px] w-[100px] h-[80px]  relative z-[-1] xl:top-[-100px] md:top-[-70px] top-[-35px]"
              />
            </div>
          </div>
        );
      }
    }
  };
  return <div>{MouseHover()}</div>;
};
