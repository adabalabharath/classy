import { Button, Card, Divider, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EmptyData from "./EmptyData";
import Note from "./Note";
import Counter from "./Counter";
import { context } from "../context/ContextProvider";
import { addToBag } from "../backRedux/action";

const Product = () => {
  const data = useSelector((store) => store?.reducer?.data);
  const user = useSelector((store) => store?.bagReducer?.user.user);
  const [product, setProduct] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { count } = useContext(context);
  

  const fetchPro = () => {
    let getBrand = data?.filter((x) => x?.brand === params?.brand)[0];
    if (getBrand) {
      let gb = getBrand[params.type].find((y) => y.name === params.case);
      setProduct(gb);
    }
  };

  const addBag = (item) => {
    if (user) {
      dispatch(addToBag(item));
    } else {
      nav("/account");
    }
  };

  const handleBuy = () => {
    if (user) {
      return <h1>good job u got this</h1>;
    } else {
      nav("/account");
    }
  };
  useEffect(() => {
    fetchPro();
  }, [data, params.type, params.brand, params.case]);

  if (!data || !product) {
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
                    ${product?.price * 10 * count}`}
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
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => addBag(product)}
                  >
                    Add to Bag
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="error" onClick={handleBuy}>
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
