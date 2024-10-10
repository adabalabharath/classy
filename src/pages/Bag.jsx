import { Drawer, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import LocalMallIcon from "@mui/icons-material/LocalMall";
const Bag = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Tooltip title="Bag">
        <IconButton onClick={() => setDrawerOpen(true)}>
          <LocalMallIcon sx={{ color: "skyblue" }} />
        </IconButton>
      </Tooltip>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Grid
          container
          direction="column"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqjbYpihRSWBtx__zTExfxCG-ce_d4i5m4g&s"
              width="300px"
              height="300px"
              margin="50px"
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              you dont have any items in ur bag
            </Typography>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default Bag;
