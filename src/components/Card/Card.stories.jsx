import React from "react";
import Card from "./Card";
import Card1 from "../../assets/Card1.jpeg";

export default {
  title: "Components/Card",
  component: Card,
};

export const Primary = () => (
  <Card image={Card1} subtitle="Lorem ipsum, ipsum Lorem..." />
);
