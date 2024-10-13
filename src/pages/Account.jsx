import {
  Button,
  Divider,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const Account = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [post, setPost] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const siteKey = "6Ld2IFoqAAAAAKI0ZNbnBKLdgVPlOb6be8f-4xv5";

  const onCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true); // If reCAPTCHA is solved
    } else {
      setCaptchaVerified(false); // If reCAPTCHA fails or is reset
    }
  };

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async () => {
    try {
      if (captchaVerified && login.email && login.password) {
        let post = await axios.post("http://localhost:7777/login", login);
        setPost(post.data);
        console.log(post.data);
      } else {
        alert("captcha is not verified");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleClickRegister = async () => {
    try {
      if (
        captchaVerified &&
        register.email &&
        register.password &&
        register.name
      ) {
        let post = await axios.post("http://localhost:7777/signup", register);
        console.log(post.data);
      } else {
        alert("captcha is not verified");
      }
    } catch (err) {
      console.log(err.message);
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
            <TextField
              label="Username or Email Address"
              fullWidth
              value={login.email}
              name="email"
              onChange={handleLogin}
            />
          </Grid>
          <Grid item>
            <TextField
              label="password"
              fullWidth
              value={login.password}
              name="password"
              onChange={handleLogin}
            />
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
            <Button variant="contained" color="error" onClick={handleClick}>
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
            <TextField
              label="Username"
              fullWidth
              value={register.name}
              name="name"
              onChange={handleRegister}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email Address"
              fullWidth
              value={register.email}
              name="email"
              onChange={handleRegister}
            />
          </Grid>
          <Grid item>
            <TextField
              label="password"
              fullWidth
              value={register.password}
              name="password"
              onChange={handleRegister}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">Captcha</Typography>
            <ReCAPTCHA sitekey={siteKey} onChange={onCaptchaChange} />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="error"
              disabled={post.status === "logged in successfully"}
              onClick={handleClickRegister}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Account;
