import React from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.styles";

const Notification = ({ children, handleClick }) => {
  return (
    <S.Notification className="notification">
      {children}
      <S.RemoveButton className="delete" onClick={handleClick}>
        X
      </S.RemoveButton>
    </S.Notification>
  );
};

Notification.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Notification;
