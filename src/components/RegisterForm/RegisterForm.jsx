import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";

const RegisterForm = ({ handleSubmit }) => {
  const [registerValues, updateRegisterValues] = useState();
  return (
    <>
      <Hero title="Register" />
      <Section>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            handleSubmit(registerValues);
          }}
        >
          <TextInput
            type="text"
            label="Name"
            placeholder="Name"
            handleChange={(nameValue) =>
              updateRegisterValues({ ...registerValues, name: nameValue })
            }
          />
          <TextInput
            type="email"
            label="Email"
            placeholder="email@email.com"
            handleChange={(emailValue) =>
              updateRegisterValues({ ...registerValues, email: emailValue })
            }
          />
          <TextInput
            type="password"
            label="Password"
            placeholder="Password"
            handleChange={(passwordValue) =>
              updateRegisterValues({
                ...registerValues,
                password: passwordValue,
              })
            }
          />
          <Button type="submit">Register</Button>
        </form>
      </Section>
    </>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
