import { Button, Card, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import EmptyData from "./EmptyData";
import Note from "./Note";
import Counter from "./Counter";

const Product = () => {
  const data = useSelector((store) => store?.data);
  const [product, setProduct] = useState(null);
  const params = useParams();

  const fetchPro = () => {
    let getBrand = data
      ?.filter((x) => x.brand === params.brand)[0]
      [params.type].find((y) => y.name === params.case);
    setProduct(getBrand);
  };
  useEffect(() => {
    fetchPro();
  }, [data]);

  if (!data) {
    return <EmptyData />;
  }
  return (
    <>
      <Note />
      <Grid
        container
        p={2}
        spacing={3}
        justifyContent={"space-evenly"}
        height="100%"
      >
        <Grid item xs={6}>
          <Card sx={{ display: "flex", justifyContent: "center",height:'600px'}}>
            <img src={product?.imageURL} />
          </Card>
        </Grid>
        <Grid item xs={6} height={'600px'}>
          <Typography variant="caption">
            shop /{params.type} /{params.brand}
          </Typography>

          <Grid container direction={"column"} spacing={3}>
            <Grid item>
              <Typography variant="h5" fontWeight={"bold"}>
                {params?.model} {product?.name} pro case
              </Typography>
              <Divider
            sx={{ width: "30px", borderWidth: "2px", borderRadius: 1 }}
          />
            </Grid>
            <Grid item>
              <Grid container spacing={3}>
                <Grid item>
                  <Typography variant="h6" color="success">
                    Price : {`${"\u20B9"}${product?.price * 10}`}/-
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption" color="success">
                    Discount : {product?.discount}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
                <Grid item>
                    <Counter/>
                </Grid>
               <Grid item>
                <Grid container spacing={1}>
                    <Grid item >
                    <Button variant="contained" color='success'>Add to Bag</Button>
                    </Grid>
                    <Grid item >
                    <Button variant='contained' color='error'>Buy now</Button>
                    </Grid>
                    </Grid>
                </Grid>
          <Grid item >
          <img src="https://stayclassy.in/wp-content/uploads/2020/04/Discretion-3-min-1.jpg" style={{height:'300px',width:'100%'}}/>
        </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img src="https://stayclassy.in/wp-content/uploads/2020/04/Discretion-1-min-2.jpg" />
        </Grid>
        
        <Grid item>
          <img src="https://stayclassy.in/wp-content/uploads/2020/04/Glass-Case-Review-2-min-1.jpg" />
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
