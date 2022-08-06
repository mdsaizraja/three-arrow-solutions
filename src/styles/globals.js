import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
  background:${({ themeMode }) =>
    themeMode === "dark"
      ? `${(props) => props.theme.colors.background1}`
      : "white"};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
    opacity:1;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  
.DetailTextHeading1{
  color:${(props) => props.theme.fonts.title};
}

`;

export default GlobalStyles;
