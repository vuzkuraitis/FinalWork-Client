import React from "react";
import CardOffer from "./CardOffer";
import PersonalTraining from "../../assets/PersonalTraining.jpeg";

export default {
  title: "Components/CardOffer",
  component: CardOffer,
};

export const Primary = () => (
  <CardOffer
    image={PersonalTraining}
    title="Personal Training"
    subtitle="A quality what you get is priceless. The effectivenes of Trainings are in the Highest Level."
  />
);
