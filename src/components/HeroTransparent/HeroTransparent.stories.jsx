import React from "react";
import HeroTransparent from "./HeroTransparent";

export default {
  title: "Components/HeroTransparent",
  component: HeroTransparent,
};

export const Primary = () => (
  <HeroTransparent title="Title" subtitle="Your subtitle is here" />
);
