import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardFeedback.styles";

const CardFeedback = ({ name, text, image, className }) => {
  return (
    <S.CardFeedback className={className}>
      <img alt="Offer" src={image} />
      <h3>{name}</h3>
      <p>{text}</p>
    </S.CardFeedback>
  );
};

CardFeedback.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
};

export default CardFeedback;
