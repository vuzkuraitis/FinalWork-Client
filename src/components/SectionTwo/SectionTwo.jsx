import React from "react";
import PropTypes from "prop-types";
import * as S from "./SectionTwo.styles";

const SectionTwo = ({ children }) => {
  return (
    <S.SectionTwo className="section">
      <div className="sectionTwo-container">{children}</div>
    </S.SectionTwo>
  );
};

SectionTwo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTwo;
