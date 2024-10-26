import {
  Badge,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";
import EmptyBag from "../components/EmptyBag";
import BagItems from "../components/BagItems";
import { useTheme } from "@emotion/react";

const Bag = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [total, setTotal] = useState();
  const bag = useSelector((store) => store.bagReducer.user?.user);
  const theme = useTheme(); // Access the theme
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <Tooltip title="Bag">
        <IconButton onClick={() => setDrawerOpen(true)} sx={{ padding: 0 }}>
          <Badge
            badgeContent={bag?.bag.reduce((a, b) => a + b.count, 0)}
            sx={{ color: "skyblue" }}
          >
            <LocalMallIcon sx={{ color: "skyblue" }} />
          </Badge>
        </IconButton>
      </Tooltip>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Grid container direction="column" p={2} spacing={2}>
          <Grid
            item
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5" fontWeight="bold">
              Bag/Cart
            </Typography>

            {!isLargeScreen && (
              <Typography
                fontWeight="bold"
                color="info"
                onClick={() => setDrawerOpen(false)}
              >
                Back
              </Typography>
            )}
          </Grid>
          <Divider
            sx={{ width: "10%", borderWidth: "2px", borderRadius: 1, ml: 2 }}
          />
          <Grid item>
            {bag?.bag.length == 0 ? (
              <EmptyBag />
            ) : (
              <BagItems setTot={setTotal} />
            )}
          </Grid>
          <Grid item>
            {!bag?.bag.length == 0 && (
              <Button variant="contained" fullWidth disabled={total == 0}>
                Buy Now
              </Button>
            )}
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default Bag;
