import React, { createContext, ReactNode, useContext } from "react";

export type Theme = {
  primaryBgColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
};

export const theme: Theme = {
  primaryBgColor: "#ffffff",
  primaryTextColor: "#000000",
  secondaryTextColor: "#4f4f4f",
};

const ThemeContext = createContext<Theme>(theme); // Default value is the theme

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => useContext(ThemeContext);
