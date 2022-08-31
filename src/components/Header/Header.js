import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";

import { NavLink, SocialIcons, Span } from "./HeaderStyles";
import { RiMenu4Fill } from "react-icons/ri";
import Nav from "./nav";

const Header = ({ SelectedTheme }) => {
  const { systemTheme, theme, setTheme } = useTheme("undefined");
  const [navWidth, setNavWidth] = useState("hidden");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useRouter();
  const currentTheme = theme === "system" ? systemTheme : theme;

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
    }
  
  };

  useEffect(() => {
    document.body.classList.remove("overflow-hidden");
  }, []);

  const handleModal = (type) => {
    if (type) {
      document.body.classList.add("overflow-hidden");
      setNavWidth("block");
    } else {
      document.body.classList.remove("overflow-hidden");
      setNavWidth("hidden");
    }
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
              <SocialIcons className=" dark:hover:bg-[#212d45] hover:bg-[#fff] ">
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
        <Nav currentTheme={currentTheme} handleModal={(e) => handleModal(e)} />
      )}
    </>
  );
};

export default Header;
