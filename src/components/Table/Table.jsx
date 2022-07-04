import React from "react";
import PropTypes from "prop-types";
import * as S from "./Table.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Table = ({ options, handleSubmit, type, handleChange }) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>Exercises</th>
          <th>Weight Kg</th>
          <th>Reps</th>
          <th>Sets</th>
          <th>Date</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {options &&
          options.map((option) => (
            <tr
              option={options}
              key={option.timestamp}
              id={option.id}
              type={type}
              value={option.id}
            >
              <td option={option.name}>{option.name}</td>
              <td option={option.weight}>{option.weight}</td>
              <td option={option.reps}>{option.reps}</td>
              <td option={option.sets}>{option.sets}</td>
              <td option={option.timestamp}>
                {option.timestamp.slice(0, -14)}
              </td>
              <td>
                <button
                  className="delete"
                  type="submit"
                  onClick={handleSubmit}
                  value={option.id}
                  id={option.id}
                >
                  <FontAwesomeIcon icon={faTrashCan} className="deleteIcon" />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </S.Table>
  );
};

Table.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
  handleSubmit: PropTypes.func,
};

Table.defaultProps = {
  type: "number",
};
export default Table;
