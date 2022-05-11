import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Text, HoveredRotatedContainer } from "./HoveredRotatedTextStyles";

const HoveredRotatedText = ({ marqueeTexts, direction }) => {
  const marqueeElements = useRef([]);
  const marqueeTween = useRef();

  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );

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
      x: `${direction}=${screenWidth * 1.5} `,
      ease: "none",
      repeat: -1,
      duration: 40,
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
        return screenWidth * 1;
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

  const ReturnInfiniteText = (e) => {
    return <Text className="md:text-[25px]">{e}</Text>;
  };

  const renderMarqueeElements = () => {
    if (marqueeTexts.length === 1) {
      marqueeTexts[2] = marqueeTexts[1] = marqueeTexts[0];
    }
    if (marqueeTexts.length === 2) {
      marqueeTexts[2] = marqueeTexts[0];
    }

    return (
      <div>
        {marqueeTexts.map((e, i) => (
          <p
            key={`marquee-${i}`}
            ref={(el) => marqueeElementsRefHandler(el, i)}
          >
            <span className="md:w-5 md:h-5 w-2 h-2  bg-white absolute -left-6 rounded-full top-5  overflow-hidden" />

            {ReturnInfiniteText(e)}
          </p>
        ))}
      </div>
    );
  };
  ``;
  return (
    <div>
      <HoveredRotatedContainer className="relative xl:mt-8 md:h-[40px] h-[10px] md:left-[-8px] py-4   flex  overflow-hidden items-center">
        {renderMarqueeElements()}
      </HoveredRotatedContainer>
    </div>
  );
};

export default HoveredRotatedText;
