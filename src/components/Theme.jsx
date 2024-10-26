import { createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960, // Make sure this is set to 960
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
