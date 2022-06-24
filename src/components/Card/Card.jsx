import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.styles";

const Card = ({ image, subtitle, className }) => {
  return (
    <S.Card className={className}>
      <S.Image src={image}></S.Image>
      <h2>{subtitle}</h2>
    </S.Card>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Card;
