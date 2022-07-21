import React from "react";
import CardFeedback from "./CardFeedback";
import PersonalTraining from "../../assets/PersonalTraining.jpeg";

export default {
  title: "Components/CardFeedback",
  component: CardFeedback,
};

export const Primary = () => (
  <CardFeedback
    image={PersonalTraining}
    name="Marc"
    text="A quality what you get is priceless. The effectivenes of Trainings are in the Highest Level."
  />
);
