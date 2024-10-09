import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "../pages/Account";
import Bag from "../pages/Bag";
import Home from "../pages/Home";
import Brand from "./Brand";
import Model from './Model'
import Cases from "./Cases";
import Product from "./Product";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/product-category/:type" element={<Brand/>}/>
        <Route path="/product-category/:type/:model" element={<Model/>}/>
        <Route path="/product-category/:type/:model/:case" element={<Cases/>}/>
        <Route path='/:type/:brand/:model/:case' element={<Product/>}/>
      </Routes>
    </div>
  );
};

export default Allroutes;
