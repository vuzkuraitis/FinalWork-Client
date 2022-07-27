import React from "react";
import PropTypes from "prop-types";
import * as S from "./SelectInput.styles";

const SelectInput = ({
  label,
  name,
  type,
  options,
  id,
  title,
  handleChange,
}) => {
  return (
    <S.SelectInput>
      <div className="field">
        <label htmlFor={name} className="label">
          {label}
        </label>
        <select
          title={title}
          name={name}
          type={type}
          option={options}
          id={name}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option>Please select {title}</option>
          {options &&
            options.map((option) => (
              <option option={option.name} value={option.id} key={option.id}>
                {option.name}
                {option.event}
              </option>
            ))}
        </select>
      </div>
    </S.SelectInput>
  );
};

SelectInput.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  handleChange: PropTypes.func,
};

SelectInput.defaultProps = {
  type: "text",
};

export default SelectInput;
