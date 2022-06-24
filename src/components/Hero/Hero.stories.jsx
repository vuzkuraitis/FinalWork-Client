import React from "react";
import Hero from "./Hero";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const Primary = () => (
  <Hero title="Title" subtitle="Your subtitle is here" />
);
