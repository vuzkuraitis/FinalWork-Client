import React from "react";
import LoginForm from "./LoginForm";

export default {
  title: "Views/LoginForm",
  component: LoginForm,
};

export const Primary = () => (
  <LoginForm handleSubmit={(values) => console.log(values)} />
);
