import React from "react";
import * as S from "./Loading.styles";

const Loading = () => {
  return (
    <S.Loading className="loader">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </S.Loading>
  );
};

export default Loading;
