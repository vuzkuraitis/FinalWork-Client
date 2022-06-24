import React from "react";
import PropTypes from "prop-types";
import * as S from "./SectionOne.styles";

const SectionOne = ({ children }) => {
  return (
    <S.SectionOne className="section">
      <div className="sectionOne-container">{children}</div>
    </S.SectionOne>
  );
};

SectionOne.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionOne;
