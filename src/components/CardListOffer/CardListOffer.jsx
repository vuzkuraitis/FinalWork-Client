import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardListOffer.styles";

const CardListOffer = ({ offers }) => {
  return (
    <S.CardListOffer>
      {offers &&
        offers.map((offer, index) => (
          <S.CardOfferItem
            key={index}
            image={offer.image}
            title={offer.title}
            subtitle={offer.subtitle}
            className="cardListOffer"
          />
        ))}
    </S.CardListOffer>
  );
};

CardListOffer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.node,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ),
};

export default CardListOffer;
