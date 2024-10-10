import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import EmptyData from "./EmptyData";

const Brand = () => {
  const data = useSelector((store) => store?.data);
  const [brands, setBrands] = useState([]);
  const params = useParams();
  const type = params.type.split("-")[0] + " Case";

  // const brandNames = () => {
  //   let arr = branded
  //     ?.map((x) => Object.keys(x.availableIn))
  //     .reduce((a, b) => a.concat(b), [])
  //     .reduce((i, k) => {
  //       if (!i.includes(k)) {
  //         i.push(k);
  //       }
  //       return i;
  //     }, []);
  //   console.log(arr);
  //   setBrands(arr);
  // };

  useEffect(() => {
    let branded = data?.map((x) => x.brand);
    setBrands(branded);
  }, [data]);
   
   if(!data){
       return <EmptyData/>
    }

  return (
    <Grid container direction={"row"} m={3} spacing={3}>
      {brands?.map((x,index) => {
        return (
          <>
            <Grid item xs={4} key={index}>
              <Link to={`/product-category/${params.type}/${x}`}>
                <Button
                  variant="contained"
                  sx={{ width: "300px", height: "100px" }}
                >
                  {x}
                </Button>
              </Link>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};

export default Brand;
