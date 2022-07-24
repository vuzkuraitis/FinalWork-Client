import React from "react";
import PropTypes from "prop-types";
import * as S from "./EventList.styles";
import Button from "../Button/Button";
import Hero from "../Hero/Hero";

const EventList = ({ events, id, type, handleClick, handleChange }) => {
  return (
    <S.EventList>
      <Hero title="Available Camps, Workshops"></Hero>

      <ul id={id} type={type} value={id}>
        {events &&
          events.map((event) => (
            <li key={event.id} className="eventListItem">
              {event.event}
              <Button
                type="submit"
                handleClick={handleClick}
                id={event.id}
                value={event.id}
              >
                Register
              </Button>
            </li>
          ))}
      </ul>
    </S.EventList>
  );
};

EventList.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
  handleClick: PropTypes.func,
};

EventList.defaultProps = {
  type: "text",
};
export default EventList;
