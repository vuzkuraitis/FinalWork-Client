import React from "react";
import Table from "./Table";

export default {
  title: "Components/Table",
  component: Table,
};

const options = [{ weight: 20, sets: 10, reps: 5, timestamp: "tiririri" }];

export const Primary = () => <Table options={options} />;
