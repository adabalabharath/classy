import {
  Button,
  Divider,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const Account = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const siteKey = "6Ld2IFoqAAAAAKI0ZNbnBKLdgVPlOb6be8f-4xv5";

  const onCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true); // If reCAPTCHA is solved
    } else {
      setCaptchaVerified(false); // If reCAPTCHA fails or is reset
    }
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid
        item
        xs={12}
        textAlign={"center"}
        sx={{ backgroundColor: "aliceblue" }}
        p={2}
      >
        <Typography
          variant="subtitle1"
          fontSize={"20px"}
          fontFamily={"fantasy"}
        >
          My Account
        </Typography>
      </Grid>

      <Grid item xs={5} p={4}>
        <Grid container direction="column" spacing={2}>
          <Typography variant="h6" fontWeight={"bold"}>
            Login
          </Typography>
          <Grid item>
            <TextField label="Username or Email Address" fullWidth />
          </Grid>
          <Grid item>
            <TextField label="password" fullWidth />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">Captcha</Typography>
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={(value) =>
                value ? setCaptchaVerified(true) : setCaptchaVerified(false)
              }
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="error">
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Divider
        orientation="vertical"
        sx={{ mx: 2, height: "400px", borderWidth: "2px", m: 1 }}
      />
      <Grid item xs={5} p={4}>
        <Grid container direction="column" spacing={2}>
          <Typography variant="h6" fontWeight={"bold"}>
            Register
          </Typography>
          <Grid item>
            <TextField label="Username" fullWidth />
          </Grid>
          <Grid item>
            <TextField label="Email Address" fullWidth />
          </Grid>
          <Grid item>
            <TextField label="password" fullWidth />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">Captcha</Typography>
            <ReCAPTCHA sitekey={siteKey} onChange={onCaptchaChange} />
          </Grid>
          <Grid item>
            <Button variant="contained" color="error">
              Register
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Account;
