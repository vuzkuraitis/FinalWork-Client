import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";

const AddFavExcForm = ({ handleSubmit }) => {
  const [exerciseValues, updateExerciseValues] = useState();
  return (
    <>
      <Hero title="Add Exercise" />
      <Section>
        <div className="formSection">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();

              handleSubmit(exerciseValues);
              console.log(exerciseValues);
            }}
          >
            <TextInput
              type="text"
              label="Exercise Name"
              placeholder="Type in your exercise"
              handleChange={(nameValue) =>
                updateExerciseValues({
                  ...exerciseValues,
                  name: nameValue
                    .split()
                    .map(
                      (e) =>
                        e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()
                    )
                    .toString(),
                })
              }
            />
            <Button type="submit">Add Exercise</Button>
          </form>
        </div>
      </Section>
    </>
  );
};

AddFavExcForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddFavExcForm;
