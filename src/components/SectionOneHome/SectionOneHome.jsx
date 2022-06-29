import React from "react";
import PropTypes from "prop-types";
import * as S from "./SectionOneHome.styles";

const SectionOneHome = ({ children }) => {
  return <S.SectionOneHome className="section">{children}</S.SectionOneHome>;
};

SectionOneHome.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionOneHome;
