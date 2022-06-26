import React from "react";
import PropTypes from "prop-types";
import * as S from "./BenefitsList.styles";

const BenefitsList = ({ className, children }) => {
  return <S.BenefitsList className={className}>{children}</S.BenefitsList>;
};

BenefitsList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BenefitsList;
