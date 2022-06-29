import React from "react";
import PropTypes from "prop-types";
import * as S from "./HeroTransparent.styles";

const HeroTransparent = ({ title, subtitle, children }) => {
  return (
    <S.HeroTransparent className="hero">
      <div className="hero-body">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
      {children}
    </S.HeroTransparent>
  );
};

HeroTransparent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default HeroTransparent;
