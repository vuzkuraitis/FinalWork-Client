import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

import Register from "./pages/Register";
import Settings from "./pages/Settings";
import PasswordReset from "./pages/PasswordReset";
import NewPassword from "./pages/NewPassword";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const Router = () => {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Nav />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/password-reset" element={<PasswordReset />} />
          <Route exact path="/new-password" element={<NewPassword />} />
          <Route
            exact
            path="/home"
            element={{ token } ? <Home /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/settings"
            element={{ token } ? <Settings /> : <Navigate to="/" />}
          />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
