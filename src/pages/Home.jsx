import { Card, CardMedia, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import "@fontsource/roboto/300.css";
import { Link } from "react-router-dom";
const Home = () => {
  let type = [
    {
      image:
        "https://stayclassy.in/wp-content/uploads/2023/04/SCP-115-gliphone14pro-35-1-300x300.jpg",
      type: "Glass-cases",
    },
    {
      image:
        "https://stayclassy.in/wp-content/uploads/2022/11/27-22-300x300.jpg",
      type: "Clear-cases",
    },
    {
      image:
        "https://stayclassy.in/wp-content/uploads/2023/10/SCP-115-siliconeiphone14pro-22-1-300x300.jpg",
      type: "Silicon-cases",
    },
  ];
  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        rowSpacing={4}
        px={6}
        py={3}
      >
        <Grid item xs={12}>
          <Divider sx={{ fontSize: "20px" }}>Phone cases</Divider>
        </Grid>
        {type.map((x) => {
          return (
            <>
              <Grid item xs={4}>
                <Grid container direction="column" alignItems={"center"}>
                  <Grid item>
                    <Link to={`/product-category/${x.type}`}>
                      <img src={x.image} />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {x.type}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </>
          );
        })}
        <Grid item>
          <Typography sx={{ lineHeight: 2 }} variant="subtitle2">
            At classy, we offer a wide variety of mobile cases and covers for
            over 450+ different mobile devices. Whether you have the latest
            iPhone, Samsung, or any other smartphone brand, we’ve got you
            covered.
            <br />
            Our collection features an extensive range of designs, colors, and
            materials to suit your style and needs. Whether you’re looking for a
            clear case to show off your phone’s design, a wallet case to carry
            your cards and cash, or a rugged case to protect your device from
            bumps and drops, we have something for everyone.
            <br /> We take pride in the quality of our cases, which are made
            from durable materials that provide maximum protection for your
            phone. Our cases are also lightweight and slim, ensuring that your
            device remains easy to use and carry.
            <br /> At classy, we believe that protecting your phone shouldn’t
            have to be boring. That’s why we offer unique and trendy designs
            that will make your device stand out. From cute and colorful
            patterns to minimalist and sleek designs,
            <br /> we have a range of options that will suit your style and
            personality. We understand that choosing the right case for your
            device can be overwhelming, which is why we offer a user-friendly
            website that makes it easy to browse our collection and find the
            perfect case for your phone.
            <br /> With free shipping and easy returns, shopping for phone cases
            has never been easier. So why wait? Shop now and give your phone the
            protection it deserves while expressing your personal style with our
            wide range of mobile cases and covers.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
