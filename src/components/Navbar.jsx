import {
  AppBar,
  Autocomplete,
  Box,
  Card,
  CardMedia,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Bag from "../pages/Bag";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((state) => state?.data);
  const searched = useSelector((store) => store?.searched);
  const dispatch = useDispatch();
  const loc = useLocation();
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.value !== "") {
      let arr = data?.filter((x) =>
        x.models.some((y) => y.toLowerCase().includes(e.target.value))
      );
      dispatch({ type: "SEARCH_SUCCESS", payload: arr });
    }
  };

  const debouncing = (func) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, 2000);
    };
  };

  const handleOptionChange = (event, newValue) => {
    if (newValue) {
      // Navigate to the desired route when an option is selected

      const formattedValue = newValue.split(" ").join("_") + "-"; // Format for route if needed

      const filterBrand = searched.filter((x) =>
        x.models.some((model) => model.includes(newValue))
      );

      const locType = loc?.pathname?.split("/");

      const og = locType.filter((x) => x.includes("cases"));

      const type = og.length > 0 ? og[0] : "Glass-cases";

      const format = formattedValue.concat(type.split("-")[0] + "-Case");
      navigate(`/product-category/${type}/${filterBrand[0].brand}/${format}`);
    }
  };
  //console.log(loc.pathname)
  const debouncedHandleChange = debouncing(handleChange, 2000);

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
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Autocomplete
                freeSolo
                options={searched?.flatMap((x) => x.models) || []} // Flatmap to return array of models
                onInputChange={debouncedHandleChange}
                onChange={handleOptionChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Check ur model availability"
                    variant="outlined"
                  />
                )}
                sx={{ width: "250px" }}
              />
            </Grid>
            <Grid item>
              <Link to="/account">
                <Tooltip title="login/signup">
                  <AccountCircleIcon sx={{ color: "skyblue" }} />
                </Tooltip>
              </Link>
            </Grid>
            <Grid item>
              <Bag />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Navbar;
