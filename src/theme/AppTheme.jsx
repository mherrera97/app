import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { darkTheme, lightTheme } from "./";
import { useSelector } from "react-redux";

export const AppTheme = ({ children }) => {
  const { modo } = useSelector((state) => state.modo);
  return (
    <ThemeProvider theme={modo == "light" ? lightTheme : darkTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
