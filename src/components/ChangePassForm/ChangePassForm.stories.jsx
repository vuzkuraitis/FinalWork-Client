import React from "react";
import ChangePassForm from "./ChangePassForm";

export default {
  title: "Views/ChangePassForm",
  component: ChangePassForm,
};

export const Primary = () => (
  <ChangePassForm handleSubmit={(values) => console.log(values)} />
);
