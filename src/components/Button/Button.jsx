import React from "react";
import PropTypes from "prop-types";
import * as S from "./Button.styles";

const Button = ({ id, type, children, handleClick }) => {
  return (
    <S.Button type={type} onClick={handleClick} id={id} value={id}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
};

export default Button;
