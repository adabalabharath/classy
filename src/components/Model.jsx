import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import EmptyData from "./EmptyData";

const Model = () => {
  const [models, setModels] = useState([]);
  const data = useSelector((store) => store?.data);

  const params = useParams();
  const type = params.type.split("-")[0] + " Case";
  const getModels = params.model;

  // const model = (data) => {
  //   let mod = data
  //     ?.filter((x) => x.type === type)
  //     .filter((y) => Object.keys(y.availableIn).includes(params.model))
  //     .reduce((a, b) => a.concat(b.availableIn[getModels]), []);
  //   setModels(mod);
  // };

  

  useEffect(() => {
    const mod = data?.filter((x) => x.brand === getModels); // Filter by brand
    if (mod?.length > 0) {
      setModels(mod[0].models); 
    }
  }, [data]);

   if(!data){
       return <EmptyData/>
    }

  return (
    <Grid container direction={"row"} m={3} spacing={3}>
      {models?.map((x) => {
        return (
          <>
            <Grid item xs={4}>
              <Link
                to={`/product-category/${params.type}/${params.model}/${
                  x.split(" ").join("_") + "-" + type.split(" ").join("-")
                }`}
              >
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

export default Model;
