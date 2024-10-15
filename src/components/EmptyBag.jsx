import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EmptyBag = () => {
  const bag = useSelector((store) => store.bagReducer.user.user);
  const token = localStorage.getItem("token");
  return (
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
      <Grid
        item
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
      >
        <Typography variant="subtitle2">
          you dont have any items in ur bag
        </Typography>
        {!token && (
          <Link to="/account">
            <Button variant="contained">Login to add items</Button>
          </Link>
        )}
        {bag?.bag.length == 0 && (
          <Link to="/product-category/Glass-cases/Apple/iPhone_14-Glass-Case">
            <Button variant="contained">add items</Button>
          </Link>
        )}
      </Grid>
    </Grid>
  );
};

export default EmptyBag;
