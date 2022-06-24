import React from "react";
import RegisterForm from "./RegisterForm";

export default {
  title: "Views/RegisterForm",
  component: RegisterForm,
};

export const Primary = () => (
  <RegisterForm handleSubmit={(values) => console.log(values)} />
);
