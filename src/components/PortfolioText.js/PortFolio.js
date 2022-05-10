import React, {useRef, useEffect, useState} from "react";
import {gsap} from "gsap";
import {Text} from "./PortfolioStyles";
import {MouseHoverText} from "./MouseHoverText";

const Portfolio = ({marqueeTexts, direction, theme}) => {
    const marqueeElements = useRef([]);
    const marqueeTween = useRef();
    const [isMouseHover, setIsMouseHover] = useState(false);

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
        gsap.set(marqueeElements.current, {clearProps: "all"});
        setScreenWidth(window.innerWidth);
    };

    const marqueeElementsRefHandler = (e, i) => {
        marqueeElements.current[i] = e;
    };

    const OnMouseEnter = () => {
        marqueeTween.current.pause();

        marqueeTween.current = gsap.to(marqueeElements.current, {
            color: theme === "dark" ? "white" : "#B6B6B6",
        });
        setIsMouseHover(true);
    };

    const OnMouseLeave = () => {
        marqueeTween.current.play();

        marqueeTween.current = gsap.to(marqueeElements.current, {
            color: "black",
        });
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
                className={`${"text-black "} MarqueeText transition-all `}
            >
                <Text> {e}</Text>
            </p>
        ));
    };

    return (
        <div
            onMouseEnter={OnMouseEnter}
            onMouseLeave={OnMouseLeave}
            className=" relative mt-8 py-4 flex overflow-hidden items-center "
        >
            <MouseHoverText marqueeTexts={marqueeTexts} isMouseHover={isMouseHover}/>
            {renderMarqueeElements()}
        </div>
    );
};

export default Portfolio;
