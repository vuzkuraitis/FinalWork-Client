import React, { useState, useEffect } from "react";
import Greeting from "../components/Greeting/Greeting";
import SectionOneHome from "../components/SectionOneHome/SectionOneHome";
import SectionTwo from "../components/SectionTwo/SectionTwo";
import HomeImageOne from "../assets/HomeImageOne.jpeg";
import AddExerciseForm from "../components/AddExerciseForm/AddExerciseForm";
import Notification from "../components/Notification/Notification";

const Home = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();
  const [selects, setSelects] = useState();

  const getData = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/users`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();

    setUsers(data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const getSelection = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/exercises`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();

    setSelects(data);
    console.log(data);
  };
  useEffect(() => {
    getSelection();
  }, []);

  const addExercise = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/sets/addset`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.err) {
        return setError(data.err);
      }
      return setError("Succesfully added an Exercise");
    } catch (err) {
      return setError(err.message);
    }
  };

  // if (!data) {
  //   <div>Loading...</div>;
  // }
  return (
    <>
      <SectionOneHome>
        {error && <Notification>{error}</Notification>}
        {users &&
          users.map((user) => (
            <Greeting name={user.name} className="greetingContainer">
              {user.name}
            </Greeting>
          ))}
      </SectionOneHome>
      <SectionTwo>
        <div className="imgContainerHome">
          <img
            src={HomeImageOne}
            alt="Hamburg Egi"
            className="under-image"
            width="500px"
            height="350px"
          />
        </div>
        <div className="addExercise">
          <AddExerciseForm
            handleSubmit={addExercise}
            exercises={selects}
          ></AddExerciseForm>
        </div>
      </SectionTwo>
    </>
  );
};

export default Home;
