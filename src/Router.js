import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
        <Route
          exact
          path="/home"
          element={
            localStorage.getItem("token") ? <Home /> : <Navigate to="/" />
          }
        />
        <Route
          exact
          path="/addexc"
          element={
            localStorage.getItem("token") ? <Addexc /> : <Navigate to="/" />
          }
        />
        <Route
          exact
          path="/prices"
          element={
            localStorage.getItem("token") ? <Prices /> : <Navigate to="/" />
          }
        />
        <Route
          exact
          path="/changepass"
          element={
            localStorage.getItem("token") ? <Changepass /> : <Navigate to="/" />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
