import React from "react";
import CardListPrice from "./CardListPrice";

export default {
  title: "Components/CardListPrice",
  component: CardListPrice,
};

const products = [
  {
    title: "Monthly subscription",
    subtitle:
      "A quality what you get is priceless. The effectivenes of Trainings are in the Highest Level.",
    text: "8 Trainings",
    price: "400€",
  },
  {
    title: "3 Month subscription",
    subtitle:
      "During this amount of time you will learn a completely new lifestyle, which will help you to clear you mind and soul from a dauly routine.",
    text: "24 Trainings",
    price: "1100€",
  },
  {
    title: "6 Month subscription",
    subtitle:
      "Not only you will set your mind and soul free, but also you will be invited into special Training Camps all over the world.",
    text: "48 Trainings",
    price: "2200€",
  },
];

export const Primary = () => <CardListPrice products={products} />;
