import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
