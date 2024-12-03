

import React from "react";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const MyComponent = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <ThemeProvider theme={theme}>
      <div>
        {isSmallScreen && <p>Small Screen</p>}
        {isLargeScreen && <p>Large Screen</p>}
        {!isSmallScreen && !isLargeScreen && <p>Medium Screen</p>}
      </div>
    </ThemeProvider>
  );
};

export default MyComponent;
