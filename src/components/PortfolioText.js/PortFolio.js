import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Text } from "./PortfolioStyles";
import { MouseHoverText } from "./MouseHoverText";

const Portfolio = ({ marqueeTexts, direction }) => {
  const marqueeElements = useRef([]);
  const marqueeTween = useRef();
  const [isMouseHover, setIsMouseHover] = useState(false);

  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );
  const [imageStyle, setImageStyle] = useState({
    screenX: 0,
  });

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    marqueeInitialSet();

    marqueeTween.current && marqueeTween.current.pause().kill();
    marqueeTween.current = gsap.to(marqueeElements.current, {
      x: `${direction}=${screenWidth * 1.5}`,
      ease: "none",
      repeat: -1,
      duration: 50,
      rotation: 0.01,
      modifiers: {
        x: (x) => {
          return (parseFloat(x) % (screenWidth * 1.5)) + "px";
        },
      },
    });
  }, [screenWidth]);

  const marqueeInitialSet = () => {
    gsap.set(marqueeElements.current, {
      xPercent: -100,
      x: function () {
        return screenWidth * 1.5;
      },
    });
  };

  const resizeHandler = () => {
    gsap.set(marqueeElements.current, { clearProps: "all" });
    setScreenWidth(window.innerWidth);
  };

  const marqueeElementsRefHandler = (e, i) => {
    marqueeElements.current[i] = e;
  };

  const OnMouseEnter = () => {
    marqueeTween.current.pause();
    setIsMouseHover(true);
  };

  const OnMouseLeave = () => {
    marqueeTween.current.play();
    setIsMouseHover(false);
  };

  const renderMarqueeElements = () => {
    if (marqueeTexts.length === 1) {
      marqueeTexts[2] = marqueeTexts[1] = marqueeTexts[0];
    }
    if (marqueeTexts.length === 2) {
      marqueeTexts[2] = marqueeTexts[0];
    }
    return marqueeTexts.map((e, i) => (
      <p
        key={`marquee-${i}`}
        ref={(el) => marqueeElementsRefHandler(el, i)}
        className={isMouseHover?"text-[#FFFF]":"text-black "}
      >
        <Text> {e}</Text>
      </p>
    ));
  };

  return (
    <div
      onMouseEnter={OnMouseEnter}
      onMouseLeave={OnMouseLeave}
      onMouseMove={(e) => {
        setImageStyle({ screenX: e.screenX });
      }}
      className=" relative w-screen mt-8 py-4 flex overflow-hidden items-center "
    >
      <MouseHoverText
        screenX={imageStyle.screenX}
        marqueeTexts={marqueeTexts}
        isMouseHover={isMouseHover}
      />
      {renderMarqueeElements()}
    </div>
  );
};

export default Portfolio;
