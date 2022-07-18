import React, { useState } from "react";
import * as S from "./LoginForm.styles";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";
import { Link } from "react-router-dom";

const LoginForm = ({ handleSubmit }) => {
  const [loginValues, updateLoginValues] = useState();
  return (
    <S.LoginForm>
      <Hero title="Personal Area" />
      <Section>
        <div className="formSection">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();

              handleSubmit(loginValues);
            }}
          >
            <TextInput
              type="email"
              label="Email"
              placeholder="email@email.com"
              handleChange={(emailValue) =>
                updateLoginValues({ ...loginValues, email: emailValue })
              }
            />
            <TextInput
              type="password"
              label="Password"
              placeholder="Password"
              handleChange={(passwordValue) =>
                updateLoginValues({ ...loginValues, password: passwordValue })
              }
            />
            <Button type="submit">Login</Button>
          </form>
          <p>
            Not a member?
            <Link to="/register" title="Register" className="loginLink">
              Register
            </Link>
          </p>
          <p>
            Forgot password?
            <Link
              to="/password-reset"
              title="Forgot Password"
              className="forgotPassLink"
            >
              Click Here
            </Link>
          </p>
        </div>
      </Section>
    </S.LoginForm>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
