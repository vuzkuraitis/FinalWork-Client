import React from "react";
import SelectInput from "./SelectInput";

export default {
  title: "Components/SelectInput",
  component: SelectInput,
};

const options = [
  { name: "chocolate", id: 1 },
  { name: "strawberry", id: 5 },
  { name: "vanilla", id: 7 },
];

export const Primary = () => (
  <SelectInput type="text" label="Exercises" options={options} />
);
