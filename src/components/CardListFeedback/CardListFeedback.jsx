import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardListFeedback.styles";

const CardListFeedback = ({ feedbacks }) => {
  return (
    <S.CardListFeedback>
      {feedbacks &&
        feedbacks.map((feedback, index) => (
          <S.CardFeedbackItem
            key={index}
            image={feedback.image}
            name={feedback.name}
            text={feedback.text}
            className="cardListFeedback"
          />
        ))}
    </S.CardListFeedback>
  );
};

CardListFeedback.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.node,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default CardListFeedback;
