import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./RegisterEventForm.styles";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Hero from "../Hero/Hero";
import SelectInput from "../SelectInput/SelectInput";

const RegisterEventForm = ({ handleSubmit, events }) => {
  const [eventRegisterValues, updateEventRegisterValues] = useState();
  return (
    <S.RegisterEventForm>
      <Hero title="Event Registration" />
      <div className="formSection">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();

            handleSubmit(eventRegisterValues);
            console.log(eventRegisterValues);
          }}
        >
          <SelectInput
            title="Event"
            options={events}
            label="Event"
            type="text"
            name="event"
            handleChange={(event_idValue) =>
              updateEventRegisterValues({
                ...eventRegisterValues,
                event_id: event_idValue,
              })
            }
          />
          <TextInput
            type="text"
            label="Full Name"
            name="name"
            placeholder="Full Name"
            handleChange={(nameValue) =>
              updateEventRegisterValues({
                ...eventRegisterValues,
                name: nameValue,
              })
            }
          />
          <TextInput
            type="email"
            label="Email"
            name="email"
            placeholder="email@email.com"
            handleChange={(emailValue) =>
              updateEventRegisterValues({
                ...eventRegisterValues,
                email: emailValue,
              })
            }
          />
          <Button type="submit">Register</Button>
        </form>
      </div>
    </S.RegisterEventForm>
  );
};

RegisterEventForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default RegisterEventForm;
