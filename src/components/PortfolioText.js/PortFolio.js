import {  useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Layout } from "./../../layout/Layout";
import { Text, Container } from "./PortfolioStyles";

const PortFolio = () => {
  const horizontal = useRef();
  const horizontalTwo = useRef();
  const horizontalThree = useRef();
  const horizontalFour = useRef();
  const horizontalFive = useRef();
  const [width, setWidth] = useState();

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  });

  const FirstHalf = () => {
    gsap.to(
      [horizontal.current, horizontalThree.current, horizontalFive.current],
      {
        x: -width,
        duration: 8,
        repeat: -1,
        ease: "none",
        left: "100%",
      }
    );
  };
  const FirstHalfPause = () => {
    console.log("Firsthalfpause")
    gsap.to(
      [horizontal.current, horizontalThree.current, horizontalFive.current],
      {
        paused: true,
      }
    );
  };

  const SecondHalf = () => {
    gsap.to([horizontalTwo.current, horizontalFour.current], {
      x: width,
      duration: 8,
      repeat: -1,
      ease: "none",
      left: "100%",
    });
  };

  const SecondHalfPause = () => {
    console.log("Secondhalfpause")
    gsap.to([horizontalTwo.current, horizontalFour.current], {
      paused: true,
    });
  };

  return (
    <Layout>
      <Container>
        <h1 ref={horizontal}>
          <Text onMouseOver={FirstHalfPause} onMouseOut={FirstHalf}>
            Smile Kitchens Smile Kitchens Smile Kitchens
          </Text>
        </h1>
        <h1 ref={horizontalTwo}>
          <Text onMouseOver={SecondHalfPause} onMouseOut={SecondHalf}>
            Brown Opticians Brown Opticians Brown Opticians
          </Text>
        </h1>
        <h1 ref={horizontalThree}>
          <Text onMouseOver={FirstHalfPause} onMouseOut={FirstHalf}>

            Yellow Telescope Yellow Telescope Yellow Telescope
          </Text>
        </h1>
        <h1 ref={horizontalFour}>
          <Text onMouseOver={SecondHalfPause} onMouseOut={SecondHalf}>
            Acowtancy Acowtancy Acowtancy
          </Text>
        </h1>
        <h1 ref={horizontalFive}>
          <Text onMouseOver={FirstHalfPause} onMouseOut={FirstHalf}>
            Walker Lovell Walker Lovell Walker Lovell
          </Text>
        </h1>
      </Container>
    </Layout>
  );
};

export default PortFolio;
