import React from "react";
import AddExerciseForm from "./AddExerciseForm";

export default {
  title: "Views/AddExerciseForm",
  component: AddExerciseForm,
};

export const Primary = () => (
  <AddExerciseForm handleSubmit={(values) => console.log(values)} />
);
