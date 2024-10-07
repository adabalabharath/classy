import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "../pages/Account";
import Bag from "../pages/Bag";
import Home from "../pages/Home";
import Brand from "./Brand";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/product-category/:type" element={<Brand/>}/>
      </Routes>
    </div>
  );
};

export default Allroutes;
