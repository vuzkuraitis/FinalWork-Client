import React from "react";
import PropTypes from "prop-types";
import * as S from "./TextInput.styles";

const TextInput = ({ type, label, placeholder, value, handleChange }) => {
  return (
    <S.TextInput>
      <div className="field">
        <label className="label" htmlFor={label}>
          {label}
        </label>
        <input
          className="input"
          id={label}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </S.TextInput>
  );
};

TextInput.propTypes = {
  type: PropTypes.oneOf(["text", "number", "email", "password"]),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

TextInput.defaultProps = {
  type: "text",
};

export default TextInput;
