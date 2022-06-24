import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardList.styles";

const CardList = ({ products, index }) => {
  return (
    <S.CardList>
      {products &&
        products.map((product, index) => (
          <S.CardItem
            key={index}
            image={product.image}
            subtitle={product.subtitle}
          />
        ))}
    </S.CardList>
  );
};

CardList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardList;
