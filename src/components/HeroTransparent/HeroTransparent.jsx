import React from "react";
import PropTypes from "prop-types";
import * as S from "./HeroTransparent.styles";

const HeroTransparent = ({ children }) => {
  return (
    <S.HeroTransparent className="hero">
      <div className="hero-body">{children}</div>
    </S.HeroTransparent>
  );
};

HeroTransparent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default HeroTransparent;
