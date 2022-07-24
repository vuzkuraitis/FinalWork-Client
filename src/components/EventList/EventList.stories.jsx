import React from "react";
import EventList from "./EventList";

export default {
  title: "Components/EventList",
  component: EventList,
};

const events = [{ event: "Bench Press" }, { event: "Kettlebell Swing" }];

export const Primary = () => <EventList options={events} />;
