import React from "react";
import ForgotPassForm from "./ForgotPassForm";

export default {
  title: "Views/ForgotPassForm",
  component: ForgotPassForm,
};

export const Primary = () => (
  <ForgotPassForm handleSubmit={(values) => console.log(values)} />
);
