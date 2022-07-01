import React from "react";
// import PropTypes from "prop-types";
import * as S from "./Table.styles";

const Table = ({ options }) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>Exercises</th>
          <th>Weight Kg</th>
          <th>Reps</th>
          <th>Sets</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {options &&
          options.map((option) => (
            <tr option={options} key={option.timestamp}>
              <td option={option.name}>{option.name}</td>
              <td option={option.weight}>{option.weight}</td>
              <td option={option.reps}>{option.reps}</td>
              <td option={option.sets}>{option.sets}</td>
              <td option={option.timestamp}>
                {option.timestamp.slice(0, -14)}
              </td>
            </tr>
          ))}
      </tbody>
    </S.Table>
  );
};

export default Table;
