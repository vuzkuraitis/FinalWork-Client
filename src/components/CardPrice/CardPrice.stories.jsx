import React from "react";
import CardPrice from "./CardPrice";

export default {
  title: "Components/CardPrice",
  component: CardPrice,
};

export const Primary = () => (
  <CardPrice
    title="Monthly subscription"
    subtitle="A quality what you get is priceless. The effectivenes of Trainings are in the Highest Level."
    text="8 Trainings"
    price="400€"
  />
);
