import React from "react";
import List from "./List";

export default {
  title: "Components/List",
  component: List,
};

const options = [{ name: "Bench Press" }, { name: "Kettlebell Swing" }];

export const Primary = () => <List options={options} />;
