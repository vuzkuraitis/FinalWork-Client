import React from "react";
import PropTypes from "prop-types";
import * as S from "./List.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const List = ({ options, id, handleSubmit, type, handleChange }) => {
  return (
    <S.List>
      <ul option={options} id={id} type={type} value={id}>
        {options &&
          options.map((option) => (
            <li option={option.name} key={option.id} className="listItem">
              {option.name}{" "}
              <button
                className="delete"
                type="submit"
                onClick={handleSubmit}
                value={option.id}
                id={option.id}
              >
                <FontAwesomeIcon icon={faTrashCan} className="deleteIcon" />
              </button>
            </li>
          ))}
      </ul>
    </S.List>
  );
};

List.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
  handleSubmit: PropTypes.func,
};

List.defaultProps = {
  type: "text",
};
export default List;
