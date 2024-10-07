import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Brand = () => {
  const [data, setData] = useState([]);
  const [brands, setBrands] = useState([]);
  const params = useParams();
  const type = params.type.split("-")[0] + " Case";
  console.log(type);
  const fetchBrands = async () => {
    try {
      let response = await axios.get(
        `http://localhost:3000/PhoneCases?type=${type}`
      );
      console.log(response.data);
      setData(response?.data);
      brandNames(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const brandNames = (data) => {
    let arr = data
      ?.map((x) => Object.keys(x.availableIn))
      .reduce((a, b) => a.concat(b), [])
      .reduce((i, k) => {
        if (!i.includes(k)) {
          i.push(k);
        }
        return i;
      }, []);
    console.log(arr);
    setBrands(arr);
  };

  useEffect(() => {
    fetchBrands();
  }, [params]);

  return (
    <Grid container direction={"row"} m={3} spacing={3}>
      {brands.map((x) => {
        return (
          <>
            <Grid item xs={4}>
              <Button
                variant="contained"
                sx={{ width: "300px", height: "100px" }}
              >
                {x}
              </Button>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};

export default Brand;
