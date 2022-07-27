import React from "react";
import RegisterEventForm from "./RegisterEventForm";

export default {
  title: "Views/RegisterEventForm",
  component: RegisterEventForm,
};

export const Primary = () => (
  <RegisterEventForm handleSubmit={(values) => console.log(values)} />
);
