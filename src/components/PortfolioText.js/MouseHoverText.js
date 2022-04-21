import HoveredRotatedText from "./HoveredRotatedText";

export const MouseHoverText = ({ marqueeTexts, isMouseHover }) => {
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
        </div>
      );
    } else if (
      typeof marqueeTexts != undefined &&
      marqueeTexts[0] === "Brown Opticians Brown Opticians Brown Opticians"
    ) {
      return (
        <div>
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
        </div>
      );
    }
  }
  return <div>{MouseHoverText()}</div>;
};
