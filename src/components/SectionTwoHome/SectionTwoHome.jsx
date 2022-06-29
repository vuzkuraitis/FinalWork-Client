import React from "react";
import PropTypes from "prop-types";
import * as S from "./SectionTwoHome.styles";

const SectionTwo = ({ children }) => {
  return <S.SectionTwoHome className="section">{children}</S.SectionTwoHome>;
};

SectionTwo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTwo;
