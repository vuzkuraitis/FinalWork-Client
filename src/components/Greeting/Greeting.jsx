import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as S from "./Greeting.styles";

const Greeting = ({ name, className }) => {
  const [dt, setDt] = useState(new Date().toLocaleTimeString("en-GB"));

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleTimeString("en-GB"));
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);
  return (
    <S.Greeting className={className}>
      <h2>Local time: {dt}</h2>
      <h2>
        Hello <span key={name}>{name}</span>
      </h2>
    </S.Greeting>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.node,
};

export default Greeting;
