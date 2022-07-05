import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Addexc from "./pages/Addexc";
import Prices from "./pages/Prices";
import Changepass from "./pages/Changepass";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/addexc" element={<Addexc />} />
        <Route exact path="/prices" element={<Prices />} />
        <Route exact path="/changepass" element={<Changepass />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
