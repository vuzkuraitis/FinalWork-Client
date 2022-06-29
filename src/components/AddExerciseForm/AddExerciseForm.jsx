import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";
import SelectInput from "../SelectInput/SelectInput";

const AddExerciseForm = ({ handleSubmit, exercises }) => {
  const [exerciseValues, updateExerciseValues] = useState();
  return (
    <>
      <Hero title="Add Workout" />
      <Section>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            handleSubmit(exerciseValues);
            console.log(exerciseValues);
          }}
        >
          <SelectInput
            options={exercises}
            label="Exercise"
            type="number"
            name="exc"
            handleChange={(exercise_idValue) =>
              updateExerciseValues({
                ...exerciseValues,
                exercise_id: exercise_idValue,
              })
            }
          />

          <TextInput
            type="number"
            label="Weight"
            placeholder="Weight"
            handleChange={(weightValue) =>
              updateExerciseValues({ ...exerciseValues, weight: weightValue })
            }
          />
          <TextInput
            type="number"
            label="Reps"
            placeholder="Reps"
            handleChange={(repsValue) =>
              updateExerciseValues({
                ...exerciseValues,
                reps: repsValue,
              })
            }
          />
          <TextInput
            type="number"
            label="Sets"
            placeholder="Sets"
            handleChange={(setsValue) =>
              updateExerciseValues({
                ...exerciseValues,
                sets: setsValue,
              })
            }
          />
          <Button type="submit">Add Exercise</Button>
        </form>
      </Section>
    </>
  );
};

AddExerciseForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddExerciseForm;
