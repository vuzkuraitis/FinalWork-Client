import React from "react";
import ResetPassForm from "./ResetPassForm";

export default {
  title: "Views/ResetPassForm",
  component: ResetPassForm,
};

export const Primary = () => (
  <ResetPassForm handleSubmit={(values) => console.log(values)} />
);
