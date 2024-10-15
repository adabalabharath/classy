import {
  Button,
  Card,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../backRedux/action";

const LoggedIn = () => {
  const user = useSelector((store) => store?.bagReducer?.user?.user);
  const dispatch = useDispatch();

  const logout = async () => {
    localStorage.removeItem("token");
    dispatch(logoutUser);
  };

  return (
    <Card
      sx={{
        m: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Typography variant="h2" fontWeight={"bold"}>
        welcome, {user?.name}
      </Typography>
      <CardMedia
        component="img"
        image="https://th.bing.com/th/id/OIP.7Uky75VDVHfH1y5gAoDNSwHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        height={"100%"}
      />
      <Typography variant="button">
        ur items in bag : {user?.bag ? user?.bag?.length : 0}
      </Typography>

      <Button variant="contained" onClick={() => logout()}>
        Logout
      </Button>
    </Card>
  );
};

export default LoggedIn;
