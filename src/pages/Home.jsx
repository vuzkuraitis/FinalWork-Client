import React, { useState, useEffect } from "react";
import Greeting from "../components/Greeting/Greeting";
import Section from "../components/Section/Section";
import HomeImageOne from "../assets/HomeImageOne.jpeg";
import AddExerciseForm from "../components/AddExerciseForm/AddExerciseForm";
import Notification from "../components/Notification/Notification";
import HeroTransparent from "../components/HeroTransparent/HeroTransparent";
import Hero from "../components/Hero/Hero";
import Table from "../components/Table/Table";

const Home = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();
  const [selects, setSelects] = useState();
  const [sets, setSets] = useState();

  const subtitle =
    "'The body without pain - the mind without confusion'. Creating this state is the mission of Hamburg Athletics. Everyone knows those moments when we are completely immersed in what we are doing. Moments when the world seems to stand still.";

  const year = new Date().toDateString();

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
      getSets();
      return setError("Succesfully added a Workout");
    } catch (err) {
      return setError(err.message);
    }
  };
  const removeExercise = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/sets/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.err) {
        return setError(data.err);
      }
      getSets();
      return setError("Succesfully removed a Workout");
    } catch (err) {
      return setError(err.message);
    }
  };

  const getSets = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/sets/sets`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();

    setSets(data);
    console.log(data);
  };
  useEffect(() => {
    getSets();
  }, []);

  // if (!data) {
  //   <div>Loading...</div>;
  // }

  return (
    <>
      <Section>
        <div className="homeSectionContainer">
          {error && (
            <Notification handleClick={() => setError(null)}>
              {error}
            </Notification>
          )}
          {users &&
            users.map((user) => (
              <Greeting
                name={user.name}
                key={user.name}
                className="greetingContainer"
              >
                {user.name}
              </Greeting>
            ))}
        </div>
      </Section>
      <Section>
        <div className="homeSectionContainerData">
          <HeroTransparent>
            <h1>Today is {year}</h1>
          </HeroTransparent>
          <div className="homeSectionContainerAdd">
            <div className="imgContainer">
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
          </div>
          <div className="homeBottom">
            <Hero subtitle={subtitle}></Hero>
          </div>
        </div>
      </Section>
      <Section>
        <div className="homeSectionData">
          <HeroTransparent title="Your previous Workouts"></HeroTransparent>
          <div className="homeTable">
            <Table
              options={sets}
              handleSubmit={(e) => {
                removeExercise(Number(e.currentTarget.value));
                console.log(Number(e.currentTarget.value));
              }}
            ></Table>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
