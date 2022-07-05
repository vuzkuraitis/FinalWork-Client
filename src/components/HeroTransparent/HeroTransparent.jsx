import React from "react";
import * as S from "./HeroTransparent.styles";

const HeroTransparent = ({ children }) => {
  return (
    <S.HeroTransparent className="hero">
      <div className="hero-body">{children}</div>
    </S.HeroTransparent>
  );
};

export default HeroTransparent;
