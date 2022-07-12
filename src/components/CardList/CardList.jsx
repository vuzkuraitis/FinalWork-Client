import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CardList = ({ options, id, handleSubmit }) => {
  return (
    <S.CardList>
      {options &&
        options.map((option) => (
          <div key={option.timestamp} className="cardlist-inside">
            <S.CardItem
              option={options}
              key={option.id}
              id={option.id}
              value={option.id}
              name={option.name}
              weight={option.weight}
              reps={option.reps}
              sets={option.sets}
              timestamp={option.timestamp.slice(0, -14)}
            />
            <button
              className="delete"
              type="submit"
              onClick={handleSubmit}
              value={option.id}
              id={option.id}
            >
              <FontAwesomeIcon icon={faTrashCan} className="deleteIcon" />
            </button>
          </div>
        ))}
    </S.CardList>
  );
};

CardList.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default CardList;
