import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";

import { NavLink, SocialIcons, Span } from "./HeaderStyles";
import { RiMenu4Fill } from "react-icons/ri";
import Nav from "./nav";
import gsap from "gsap";
const Header = ({ SelectedTheme }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [navWidth, setNavWidth] = useState("hidden");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useRouter();
  let menuLayer = useRef(null);

  const [state, setState] = useState({
    initial: false,
    clicked: null,
  });
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setState({ clicked: false });
  }, []);

  const renderThemeChanger = () => {
    const currentTheme1 = theme === "system" ? systemTheme : theme;
    SelectedTheme && SelectedTheme(currentTheme1);
    if (currentTheme1 === "dark") {
      return (
        <img
          src="/images/Vector.png"
          alt="dark_mode.png"
          width="30px"
          onClick={() => setTheme("light")}
        />
      );
    } else if (currentTheme1 === "light") {
      return (
        <img
          src="/images/dark mode.png"
          alt="dark_mode.png"
          width="30px"
          onClick={() => setTheme("dark")}
        />
      );
    } else {
      return (
        <img
          src="/images/Vector.png"
          alt="dark_mode.png"
          width="30px"
          onClick={() => setTheme("light")}
        />
      );
    }
  };

  useEffect(() => {
    setTheme("dark");
    document.body.classList.remove("overflow-hidden");
    
  }, []);

  const handleModal = (type) => {
    if (type) {
      console.log(1111, state.clicked,type);
      document.body.classList.add("overflow-hidden");
      setNavWidth("block");
      setState({
        clicked: !state.clicked,
      });
    } else {
      document.body.classList.remove("overflow-hidden");
      setNavWidth("hidden");
      setState({
        initial: null,
        clicked: !state.clicked,
      });
    }
    console.log(3333);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between mt-5">
          <Link href="/">
            <NavLink className="flex items-center font-bold ">
              <Span className="ml-2 mt-2 text-black dark:text-white">
                Tech stagers
              </Span>
            </NavLink>
          </Link>
          {pathname !== "/404" && (
            <div className="flex">
              <SocialIcons className="dark:hover:bg-[#212d45] hover:bg-[#fff]">
                {renderThemeChanger()}
              </SocialIcons>
              <SocialIcons className="dark:hover:bg-[#212d45] hover:bg-[#fff]">
                <RiMenu4Fill
                  id="MenuOpen"
                  className="text-black dark:text-white"
                  onClick={() => handleModal("open")}
                />
              </SocialIcons>
            </div>
          )}
        </div>
      </div>
      {navWidth === "block" && (
        <Nav
          currentTheme={currentTheme}
          handleModal={(e) => handleModal(e)}
          state={state}
        />
      )}
    </>
  );
};

export default Header;
