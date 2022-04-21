import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Text } from "./PortfolioStyles";
import { useContext } from "react/cjs/react.production.min";



const Portfolio = ({ marqueeTexts, direction }) => {
  const marqueeElements = useRef([]);
  const marqueeTween = useRef();

  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );


  const [onMouseHover, setOnMouseHover] = useState()

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
      rotation: 0.1,
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
      x: function (index) {
        return (screenWidth / 2) * index - 500;
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
    setOnMouseHover(true)
    
  };

  const OnMouseLeave = () => {
    marqueeTween.current.play();
    setOnMouseHover(false)
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
        onMouseEnter={OnMouseEnter}
        onMouseLeave={OnMouseLeave}
        key={`marquee-${i}`}
        ref={(el) => marqueeElementsRefHandler(el, i)}
      >
        <Text> {e}</Text>
      </p>
    ));
  };
  return (
    <div
      className=" relative mt-8 py-4 flex overflow-hidden items-center"
      style={{ minHeight: "120px" }}
    >
      {renderMarqueeElements()}
    </div>
  );
};

export default Portfolio;