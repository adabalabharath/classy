import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
const About = () => {
  const usefulLinks = [
    "Love from Customers",
    "About Us",
    "Refund Policy",
    "Privacy Policy",
    "Shipping Policy",
    "Terms & Conditions",
    "Bulk Inquiries",
  ];
  const Account = [
    "My Orders",
    "My Account",
    "Track Order",
    "Checkout",
    "Contact Us",
    "Affiliate Area",
  ];

  return (
    <Grid container justifyContent={"space-evenly"} p={2} my={2}>
      <Grid item>
        <Grid container direction={"column"} spacing={2}>
          <Typography variant="subtitle2">Useful Links</Typography>
          <Divider
            sx={{ width: "30px", borderWidth: "2px", borderRadius: 1 }}
          />
          {usefulLinks.map((x,index) => {
            return (
              <Grid item xs={3} key={index}>
                <Typography variant="subtitle2">{x}</Typography>
                <Divider sx={{ width: "300px" }} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item >
        <Grid container direction={"column"} spacing={2}>
          <Typography variant="subtitle2">Account</Typography>
          <Divider
            sx={{ width: "30px", borderWidth: "2px", borderRadius: 1 }}
          />
          {Account.map((x,index) => {
            return (
              <Grid item xs={3} key={index}>
                <Typography variant="subtitle2">{x}</Typography>
                <Divider sx={{ width: "300px" }} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction={"column"} spacing={2}>
          <Typography variant="subtitle2">Help Center</Typography>
          <Divider
            sx={{ width: "30px", borderWidth: "2px", borderRadius: 1 }}
          />
          <Grid item>
            <Typography variant="subtitle2">
              Support time : 09.30 AM to 06.00 PM <br />
              (Monday to Friday)
              <br />
              +91 9949362719
            </Typography>
          </Grid>
          <Grid item>
            <FacebookIcon />
            <InstagramIcon />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">Contact@classy.in</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction={"column"} spacing={2}>
          <Typography variant="subtitle2">Registered Office Address</Typography>
          <Divider
            sx={{ width: "30px", borderWidth: "2px", borderRadius: 1 }}
          />
          <Grid item>
            <Typography variant="subtitle2">
              classy
              <br />
              Shreedhar industrial park
              <br />
              Narol-Gandhinagar Highway
              <br />
              120ft ringroad bypass
              <br />
              Ahmedabad Gujarat-382415
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
