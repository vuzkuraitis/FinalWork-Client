import React from "react";
import HeroSmall from "./HeroSmall";

export default {
  title: "Components/HeroSmall",
  component: HeroSmall,
};

export const Primary = () => (
  <HeroSmall title="Title" subtitle="Your subtitle is here" />
);
