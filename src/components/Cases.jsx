import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Note from "./Note";
import EmptyData from "./EmptyData";

const Cases = () => {
  const data = useSelector((store) => store?.data);
  const [mode, setMode] = useState([]);
  const params = useParams();
  const type = params.type.split("-").join("_").toLowerCase();
  console.log(type);
  const brand = params.model;
  const modal = params.case.split("-")[0].split("_").join(" ");

  // const caseData=()=>{
  //     let b=data?.filter(x=>x.type===type)
  //     .filter(y=>Object.keys(y.availableIn).includes(brand))
  //     .filter((a)=>a.availableIn[brand].includes(modal.split('_').join(' ')))
  //     setMode(b)
  // }

   

  useEffect(() => {
   
      let branded = data?.filter((x) => x.brand === brand);
        if(branded?.length>0)
        setMode(branded[0][type]);
      
    
  }, [data]);
  if(!data){
       return <EmptyData/>
    }
  return (
    <>
      <Note />
      <Grid container m={1} justifyContent={"center"}>
        {mode?.map((x, index) => (
          <Grid item sx={{ m: 2 }} xs={2}>
            <Card>
              <Grid
                container
                key={index}
                direction="column"
                justifyContent="center"
                alignItems={"center"} // Center content horizontally
                spacing={2}
                p={1}
              >
                <Grid item>
                  <Link
                    to={`/${type}/${brand}/${modal.split(" ").join("")}/${x.name}`}
                  >
                    <CardMedia
                      component={"img"}
                      image={x.imageURL}
                      sx={{ height: "50%" }}
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction={"column"}
                    alignItems={"center"}
                    spacing={1}
                    //border={1}
                  >
                    <Grid item>
                      <Typography variant="button">{x.name}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="buttontext" color="success">
                        Price: {x.price * 10}/-
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">
                        Model Type: {modal}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Button variant="contained" color="error">
                    Add to Bag
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cases;
