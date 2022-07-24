import React from "react";
import PropTypes from "prop-types";
import * as S from "./PopupInfo.styles";

const PopupInfo = ({ events, id, className }) => {
  return (
    <S.PopupInfo className={className} events={events}>
      <img src={events.logo} alt="Camp"></img>
    </S.PopupInfo>
  );
};

PopupInfo.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
};

export default PopupInfo;
