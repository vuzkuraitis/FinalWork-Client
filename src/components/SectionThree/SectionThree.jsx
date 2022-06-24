import React from "react";
import PropTypes from "prop-types";
import * as S from "./SectionThree.styles";

const SectionThree = ({ children }) => {
  return (
    <S.SectionThree className="section">
      <div className="sectionThree-container">{children}</div>
    </S.SectionThree>
  );
};

SectionThree.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionThree;
