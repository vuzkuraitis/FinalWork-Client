import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardOffer.styles";

const CardOffer = ({ title, subtitle, image, className }) => {
  return (
    <S.CardOffer className={className}>
      <img alt="Offer" src={image} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </S.CardOffer>
  );
};

CardOffer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default CardOffer;
