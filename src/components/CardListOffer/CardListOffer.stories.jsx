import React from "react";
import CardListOffer from "./CardListOffer";
import PersonalTraining from "../../assets/PersonalTraining.jpeg";
import Camps from "../../assets/Camps.jpeg";
import Workshops from "../../assets/Workshops.jpeg";
import Movement from "../../assets/Movement.jpeg";

export default {
  title: "Components/CardListOffer",
  component: CardListOffer,
};

const offers = [
  {
    image: PersonalTraining,
    title: "Personal Training",
    subtitle:
      "You and your project here are 100% in focus. For each training session you will receive an individual concept, as well as exercises what to do at home.",
  },
  {
    image: Camps,
    title: "Camps",
    subtitle:
      "Holiday with a difference, this is what I offer at multi-day training camps in Europe's most beautiful places every year. My experience will give you a lot of exercise, a diet tailored to the daily training and the right mindset. Ideal for realigning your focus far away from everyday life and soaking up the sun and positive vibes.",
  },
  {
    image: Workshops,
    title: "Workshops",
    subtitle:
      "In my workshops, I teach small groups and companies as part of events lasting several hours.",
  },
  {
    image: Movement,
    title: "Movement",
    subtitle:
      "Movement takes place in the form of movement courses in Hamburg. In a great, constantly growing team, we are pursuing the goal of a free and flexible body together. Why movement? Because life is movement.",
  },
];

export const Primary = () => <CardListOffer offers={offers} />;
