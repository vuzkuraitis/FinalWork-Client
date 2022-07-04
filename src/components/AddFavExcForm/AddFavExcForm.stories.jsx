import React from "react";
import AddFavExcForm from "./AddFavExcForm";

export default {
  title: "Views/AddFavExcForm",
  component: AddFavExcForm,
};

export const Primary = () => (
  <AddFavExcForm handleSubmit={(values) => console.log(values)} />
);
