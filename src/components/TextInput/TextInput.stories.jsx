import React from "react";
import TextInput from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
};

export const Primary = () => (
  <TextInput type="text" label="Name" placeholder="Name" />
);
