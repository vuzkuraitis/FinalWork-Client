import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardPrice.styles";

const CardPrice = ({ title, subtitle, text, price, className }) => {
  return (
    <S.CardPrice className={className}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <h3>{text}</h3>
      <h3>{price}</h3>
    </S.CardPrice>
  );
};

CardPrice.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CardPrice;
