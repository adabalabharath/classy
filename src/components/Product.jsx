import { Button, Card, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
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
          <Card
            sx={{ display: "flex", justifyContent: "center", height: "600px" }}
          >
            <img src={product?.imageURL} />
          </Card>
        </Grid>
        <Grid item xs={6} height={"600px"}>
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
              <Grid container spacing={1} alignItems={"center"}>
                <Grid item>
                  <Grid container spacing={1} alignItems={"center"}>
                    <Grid item>
                      <Typography
                        variant="h6"
                        sx={{
                          textDecoration: "line-through",
                          color: "lightgray",
                        }}
                      >
                        {`${"\u20B9"}
                    ${product?.price * 40}`}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" color="success">
                        {`${"\u20B9"}
                    ${product?.price * 10}`}
                        .00
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="caption" color="success">
                    + Free Shipping
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Counter />
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <Button variant="contained" color="success">
                    Add to Bag
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="error">
                    Buy now
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={3}>
                <Grid item display={"flex"} direction={"row"}>
                  <BookmarkIcon />
                  <Typography>
                    ₹50 Instant Credit in Classy Wallet- New User Sign-Up
                  </Typography>
                </Grid>
                <Grid item display={"flex"} direction={"row"}>
                  <BookmarkIcon />
                  <Typography>Advance COD Available @ 15% Extra</Typography>
                </Grid>
                <Grid item display={"flex"} direction={"row"}>
                  <BookmarkIcon />
                  <Typography>Buy2 Get1 Free- 3 Designs 3 Models</Typography>
                </Grid>
                <Grid item display={"flex"} direction={"row"}>
                  <BookmarkIcon />
                  <Typography>
                    ₹20 Instant Discount on Online Payment on ₹499 and above
                  </Typography>
                </Grid>
                <Grid item display={"flex"} direction={"row"}>
                  <BookmarkIcon />
                  <Typography>Free Shipping on all orders</Typography>
                </Grid>
                <Grid item display={"flex"} direction={"row"}>
                  <BookmarkIcon />
                  <Typography>4% Instant OFF on UPI</Typography>
                </Grid>
                <Grid item display={"flex"} direction={"row"}>
                  <BookmarkIcon />
                  <Typography>4% OFF on SBI cards</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img src="https://stayclassy.in/wp-content/uploads/2020/04/Discretion-1-min-2.jpg" />
        </Grid>
        <Grid item>
          <img src="https://stayclassy.in/wp-content/uploads/2020/04/Discretion-3-min-1.jpg" />
        </Grid>
        <Grid item>
          <img src="https://stayclassy.in/wp-content/uploads/2020/04/Glass-Case-Review-2-min-1.jpg" />
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
