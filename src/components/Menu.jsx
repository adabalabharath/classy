import {
  Autocomplete,
  Badge,
  Drawer,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Bag from "../pages/Bag";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const searched = useSelector((store) => store.reducer.searched);
  const data = useSelector((store) => store.reducer.data);
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
    const formattedValue = newValue?.split(" ").join("_") + "-"; // Format for route if needed

    const filterBrand = searched.filter((x) =>
      x.models.some((model) => model.includes(newValue))
    );

    const locType = loc.pathname?.split("/");

    const og = locType?.filter((x) => x.includes("cases"));

    const type = og?.length > 0 ? og[0] : "Glass-cases";

    const format = formattedValue.concat(type.split("-")[0] + "-Case");
    navigate(`/product-category/${type}/${filterBrand[0].brand}/${format}`);
    setDrawerOpen(false);
  };

  const debouncedHandleChange = debouncing(handleChange, 2000);
  return (
    <>
      <Tooltip title="Menu">
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon sx={{ color: "skyblue" }} />
        </IconButton>
      </Tooltip>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Grid
          container
          alignItems="center"
          justifyContent={"center"}
          spacing={2}
        >
          <Grid item xs={12} m={1}>
            <Autocomplete
              freeSolo
              options={searched.flatMap((x) => x.models) || []} // Flatmap to return array of models
              onInputChange={debouncedHandleChange}
              onChange={handleOptionChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Check ur model availability"
                  variant="outlined"
                />
              )}
              sx={{ width: "90%" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Link
              to="/account"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip title="Login/Signup">
                <AccountCircleIcon sx={{ color: "skyblue", marginRight: 1 }} />{" "}
                {/* Added margin to the icon */}
              </Tooltip>
              <Typography variant="body1" sx={{ color: "skyblue" }}>
                {" "}
                {/* Adjust color if needed */}
                Account
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={1}
          >
            <Bag />
            <Typography variant="body1" sx={{ color: "skyblue" }}>
              Bag
            </Typography>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default Menu;
