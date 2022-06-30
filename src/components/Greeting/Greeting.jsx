import React from "react";
import PropTypes from "prop-types";
import * as S from "./Greeting.styles";

const Greeting = ({ name, className }) => {
  return (
    <S.Greeting className={className}>
      <h2>
        Hello <span key={name}>{name}</span>,
      </h2>
    </S.Greeting>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.node,
};

export default Greeting;
