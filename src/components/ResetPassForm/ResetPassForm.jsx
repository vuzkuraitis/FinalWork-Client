import React, { useState } from "react";
import * as S from "./ResetPassForm.styles";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";

const ResetPassForm = ({ handleSubmit }) => {
  const [resetPassValues, updateResetPassValues] = useState();

  return (
    <S.ResetPassForm>
      <Hero title="Password Reset" />
      <Section>
        <div className="formSection">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();

              handleSubmit(resetPassValues);
            }}
          >
            <TextInput
              type="email"
              label="Email"
              placeholder="email@email.com"
              handleChange={(emailValue) =>
                updateResetPassValues({ ...resetPassValues, email: emailValue })
              }
            />
            <Button type="submit">Password Reset</Button>
          </form>
        </div>
      </Section>
    </S.ResetPassForm>
  );
};

ResetPassForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ResetPassForm;
