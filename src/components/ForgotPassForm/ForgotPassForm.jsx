import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./ForgotPassForm.styles";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";

const ForgotPassForm = ({ handleSubmit }) => {
  const [changePassValues, updateChangePassValues] = useState();
  return (
    <S.ForgotPassForm>
      <Hero title="New Password" />
      <Section>
        <div className="formSection">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();

              handleSubmit(changePassValues);
            }}
          >
            <TextInput
              type="email"
              label="Email"
              placeholder="email@email.com"
              handleChange={(emailValue) =>
                updateChangePassValues({
                  ...changePassValues,
                  email: emailValue,
                })
              }
            />
            <TextInput
              type="text"
              label="Code"
              placeholder="Code"
              handleChange={(tokenValue) =>
                updateChangePassValues({
                  ...changePassValues,
                  token: tokenValue,
                })
              }
            />
            <TextInput
              type="password"
              label="Password"
              placeholder="Password"
              handleChange={(passwordValue) =>
                updateChangePassValues({
                  ...changePassValues,
                  password: passwordValue,
                })
              }
            />
            <Button type="submit">Change Password</Button>
          </form>
        </div>
      </Section>
    </S.ForgotPassForm>
  );
};

ForgotPassForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ForgotPassForm;
