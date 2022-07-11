import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardListPrice.styles";

const CardListPrice = ({ products, index, title, subtitle, text }) => {
  return (
    <S.CardListPrice>
      {products &&
        products.map((product, index) => (
          <S.CardItem
            key={index}
            title={product.title}
            subtitle={product.subtitle}
            text={product.text}
            price={product.price}
            className="cardlistItem"
          />
        ))}
    </S.CardListPrice>
  );
};

CardListPrice.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ),
};

export default CardListPrice;
