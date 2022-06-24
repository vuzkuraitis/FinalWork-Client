import React from "react";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Nav",
  component: Nav,
};

const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/",
    title: "About",
  },
  {
    url: "/",
    title: "Prices",
  },
  {
    url: "/",
    title: "Contact",
  },
  {
    url: "/",
    title: "Login",
  },
];

export const Primary = () => (
  <BrowserRouter>
    <Nav links={links} />
  </BrowserRouter>
);
