import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const Card = ({ name, weight, reps, sets, key, timestamp, className }) => {
  return (
    <S.Card className={className} key={key}>
      <h4>
        <span>
          <FontAwesomeIcon icon={faDumbbell} />
        </span>
        {name}
      </h4>
      <h4>
        <span>
          <FontAwesomeIcon icon={faWeightHanging} />
        </span>
        {weight} kg
      </h4>
      <h4>
        <span>
          <FontAwesomeIcon icon={faRepeat} />
        </span>
        {reps}
      </h4>
      <h4>
        <span>
          <FontAwesomeIcon icon={faEllipsis} />
        </span>
        {sets}
      </h4>
      <h4>
        <span>
          <FontAwesomeIcon icon={faCalendarCheck} />
        </span>
        {timestamp}
      </h4>
    </S.Card>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
};

export default Card;
