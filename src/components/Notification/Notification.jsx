import React from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.styles";

const Notification = ({ handleClick, children }) => {
  return (
    <S.Notification>
      {children}
      {handleClick && (
        <button className="delete" onClick={handleClick}>
          X
        </button>
      )}
    </S.Notification>
  );
};

Notification.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Notification;
