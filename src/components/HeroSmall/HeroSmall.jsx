import React from "react";
import PropTypes from "prop-types";
import * as S from "./HeroSmall.styles";

const HeroSmall = ({ title, subtitle, children }) => {
  return (
    <S.HeroSmall className="hero">
      <div className="hero-body">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
      {children}
    </S.HeroSmall>
  );
};

HeroSmall.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default HeroSmall;
