import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Allroutes from "./components/Allroutes";
import Thanks from "./components/Thanks";
import News from "./components/News";
import { Box, Grid } from "@mui/material";
import About from "./components/About";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData);
  }, []);
  return (
    <>
      <Navbar />
      <Allroutes />
      <News />       
      <Thanks />
      <About />
    </>
  );
}

export default App;
