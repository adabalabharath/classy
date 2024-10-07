import { Grid, Typography } from "@mui/material";
import React from "react";

const Thanks = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems={"center"}
      spacing={1}
      sx={{ backgroundColor: "#87CEFA" }}
    >
      <Grid item>
        <img
          src="https://stayclassy.in/wp-content/uploads/2022/02/thanks.svg"
          height={"75px"}
        />
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" color="white">
          to our 1.5 Million+ Happy Customers!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Thanks;
