import React from "react";
import CardListFeedback from "./CardListFeedback";
import Nicole from "../../assets/Nicole.webp";
import Jan from "../../assets/Jan.webp";
import Susanne from "../../assets/Susanne.webp";
import Marc from "../../assets/Marc.webp";
import Bernd from "../../assets/Bernd.webp";

export default {
  title: "Components/CardListFeedback",
  component: CardListFeedback,
};

const feedbacks = [
  {
    image: Nicole,
    name: "Personal Training",
    text: "You and your project here are 100% in focus. For each training session you will receive an individual concept, as well as exercises what to do at home.",
  },
  {
    image: Jan,
    name: "Camps",
    text: "Holiday with a difference, this is what I offer at multi-day training camps in Europe's most beautiful places every year. My experience will give you a lot of exercise, a diet tailored to the daily training and the right mindset. Ideal for realigning your focus far away from everyday life and soaking up the sun and positive vibes.",
  },
  {
    image: Susanne,
    name: "Workshops",
    text: "In my workshops, I teach small groups and companies as part of events lasting several hours.",
  },
  {
    image: Marc,
    name: "Movement",
    text: "Movement takes place in the form of movement courses in Hamburg. In a great, constantly growing team, we are pursuing the goal of a free and flexible body together. Why movement? Because life is movement.",
  },
  {
    image: Bernd,
    name: "Movement",
    text: "Movement takes place in the form of movement courses in Hamburg. In a great, constantly growing team, we are pursuing the goal of a free and flexible body together. Why movement? Because life is movement.",
  },
];

export const Primary = () => <CardListFeedback feedbacks={feedbacks} />;
