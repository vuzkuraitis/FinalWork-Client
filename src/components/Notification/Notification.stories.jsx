import React from "react";
import Notification from "./Notification";

export default {
  title: "Components/Notification",
  component: Notification,
};

export const Primary = () => (
  <Notification handleClick={() => alert("hi")}>Notification</Notification>
);
