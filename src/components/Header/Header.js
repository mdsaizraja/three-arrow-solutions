import React from "react";
import { useTheme } from "next-themes";
import { SiAirchina } from "react-icons/si";
import { GiStripedSun } from "react-icons/gi";
import { RiMenu4Fill, RiSunFill } from "react-icons/ri";

import { NavLink, SocialIcons, Span } from "./HeaderStyles";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <GiStripedSun onClick={() => setTheme("light")} />;
    } else {
      return (
        <img
          src="/images/dark mode.png"
          alt="dark_mode.png"
          width="25px"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between mt-5">
        <NavLink className="flex items-center font-bold ">
          <SiAirchina size="3rem" className="text-black dark:text-white" />
          <Span className="ml-2 mt-2 text-black dark:text-white">
            Tech stagers
          </Span>
        </NavLink>
        <div className="flex">
          <SocialIcons>{renderThemeChanger()}</SocialIcons>
          <SocialIcons>
            <RiMenu4Fill className="text-black dark:text-white" />
          </SocialIcons>
          {/*<Link href='https://github.com/Nishant88277'>*/}
          {/*    <SocialIcons><AiFillGithub/></SocialIcons>*/}
          {/*</Link>*/}
          {/*<Link href='https://www.instagram.com/threearrowtech/'>*/}
          {/*    <SocialIcons><AiFillInstagram/></SocialIcons>*/}
          {/*</Link>*/}
          {/*<Link href='https://www.linkedin.com/company/three-arrow-technologies/'>*/}
          {/*    <SocialIcons><AiFillLinkedin/></SocialIcons>*/}
          {/*</Link>*/}
        </div>
      </div>
    </div>
  );
};

export default Header;
