import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../themes/default";
import GlobalStyles from "./globals";
import { useTheme } from "next-themes";
const Theme = ({ children }) => {
  const { themeMode } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles themeMode={themeMode} />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
