import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";

const ChangePassForm = ({ handleSubmit, exercises }) => {
  const [changepassValues, updateChangepassValues] = useState();
  return (
    <>
      <Hero title="Change Password" />
      <Section>
        <div className="formSection">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();

              handleSubmit(changepassValues);
            }}
          >
            <TextInput
              type="password"
              label="Old Password"
              placeholder="Old Password"
              handleChange={(passwordValue) =>
                updateChangepassValues({
                  ...changepassValues,
                  oldPassword: passwordValue,
                })
              }
            />
            <TextInput
              type="password"
              label="New Password"
              placeholder="New Password"
              handleChange={(passwordValue) =>
                updateChangepassValues({
                  ...changepassValues,
                  newPassword: passwordValue,
                })
              }
            />
            <Button type="submit">Change Password</Button>
          </form>
        </div>
      </Section>
    </>
  );
};

ChangePassForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ChangePassForm;
