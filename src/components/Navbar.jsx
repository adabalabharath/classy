import {
  Box,
  Card,
  CardMedia,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import Bag from "../pages/Bag";
const Navbar = () => {

  return (
    <Card>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={1}
      >
        <Grid item>
          <Link to="/">
            <CardMedia
              component={"img"}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulolMn77hUDecdJfS8JqcaalpxSz4QfK1Ww&s"
              sx={{ width: "200px" }}
            />
          </Link>
        </Grid>

        <Grid item>
          <Box position={"relative"} display={"inline-block"}>
            <CardMedia
              component={"img"}
              image="https://th.bing.com/th/id/OIP.oVGJIdgpUmcEg2_vXZSkJwHaGO?w=215&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              sx={{ width: "300px" }}
              height={"60px"}
            />
            <Typography
              fontFamily={"fantasy"}
              sx={{
                position: "absolute",
                top: "30%",
                right: "20%",
                color: "skyblue",
                textAlign: "center",
                fontFamily: "fantasy",
                fontSize: "18px",
              }}
            >
              welcome to classy cases
            </Typography>
          </Box>
        </Grid>

        <Grid item>
          <Grid
            container
            justifyContent={"right"}
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <TextField label="search for products" />
            </Grid>
            <Grid item>
              <Link to="/account">
                <Tooltip title="login/signup">
                  <AccountCircleIcon sx={{ color: "skyblue" }} />
                </Tooltip>
              </Link>
            </Grid>
            <Bag/>
          </Grid>
        </Grid>
      </Grid>
      
    </Card>
  );
};

export default Navbar;
