import React from "react";
import HoveredRotatedText from "./HoveredRotatedText";
import { BsArrowUpRight } from "react-icons/bs";

export const MouseHoverText = ({
  marqueeTexts,
  isMouseHover,
  screenX,
  screenY,
}) => {
  console.log(screenX);
  const MouseHover = () => {
    if (typeof isMouseHover != undefined && isMouseHover === true) {
      if (
        typeof marqueeTexts != undefined &&
        marqueeTexts[0] === "Smile Kitchens Smile Kitchens Smile Kitchens"
      ) {
        return (
          <div>
            <HoveredRotatedText
              marqueeTexts={["View Case Study  Web Design"]}
              direction={"-"}
              src={
                "https://likely-story.co.uk/wp-content/uploads/2021/11/SMILE-COVER-%E2%80%93-2-copy-620x768.jpg"
              }
            />

            <div
              style={{
                left: screenX - 200,
                top: 10,
              }}
              className={`absolute z-[999] w-full `}
            >
              <div className="flex  items-center">
                <BsArrowUpRight />
              </div>
              <img
                src="https://likely-story.co.uk/wp-content/uploads/2021/11/SMILE-COVER-%E2%80%93-2-copy-620x768.jpg"
                alt="image"
                className="w-96 h-96"
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
            <div
              style={{
                left: screenX - 200,
                top: 10,
              }}
              className={`absolute z-[9999] w-full `}
            >
              <img
                src="https://likely-story.co.uk/wp-content/uploads/2021/08/Browns-Cover-01-1-620x768.png"
                alt="image"
                className="w-96 h-96"
              />
            </div>
            <HoveredRotatedText
              marqueeTexts={["View Case Study  Web Design"]}
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
              marqueeTexts={["View Case Study  Brand Identity & Web Design"]}
              direction={"-"}
              src={
                "https://likely-story.co.uk/wp-content/uploads/2021/03/Mask-Group-262@2x-620x768.jpg"
              }
            />
            <div
              style={{
                left: screenX - 200,
                top: 10,
              }}
              className={`absolute z-[9999] w-full `}
            >
              <img
                src="https://likely-story.co.uk/wp-content/uploads/2021/03/Mask-Group-262@2x-620x768.jpg"
                alt="image"
                className="w-96 h-96"
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
              marqueeTexts={["View Case Study  Brand Identity & Web Design"]}
              direction={"-"}
              src={
                "https://likely-story.co.uk/wp-content/uploads/2021/04/YT-Cover-01-1-620x768.png"
              }
            />
            <div
              style={{
                left: screenX - 200,
                top: 10,
              }}
              className={`absolute z-[9999] w-full `}
            >
              <img
                src="https://likely-story.co.uk/wp-content/uploads/2021/04/YT-Cover-01-1-620x768.png"
                alt="image"
                className="w-96 h-96"
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
              marqueeTexts={["View Case Study  Characted Design & Web Design"]}
              direction={"-"}
              src={
                "https://likely-story.co.uk/wp-content/uploads/2022/01/ACOW-Cover-01-620x768.png"
              }
            />
            <div
              style={{
                left: screenX - 200,
                top: 10,
              }}
              className={`absolute z-[999] w-full `}
            >
              <img
                src="https://likely-story.co.uk/wp-content/uploads/2022/01/ACOW-Cover-01-620x768.png"
                alt="image"
                className="w-96 h-96"
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
              marqueeTexts={["View Case Study  Brand & Web Design"]}
              direction={"-"}
              src={
                "https://likely-story.co.uk/wp-content/uploads/2021/03/LS-Walker-Lovell-Cover2@2x-620x768.png"
              }
            />
            <div
              style={{
                left: screenX - 200,
                top: 10,
              }}
              className={`absolute z-[999] w-full `}
            >
              <img
                src="https://likely-story.co.uk/wp-content/uploads/2021/03/LS-Walker-Lovell-Cover2@2x-620x768.png"
                alt="image"
                className="w-96 h-96"
              />
            </div>
          </div>
        );
      }
    }
  };
  return <div>{MouseHover()}</div>;
};
