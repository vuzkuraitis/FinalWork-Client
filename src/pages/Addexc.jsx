import React, { useState, useEffect } from "react";
import Greeting from "../components/Greeting/Greeting";
import Section from "../components/Section/Section";
import Addexcpic from "../assets/Addexcpic.jpeg";
import AddFavExcForm from "../components/AddFavExcForm/AddFavExcForm";
import Notification from "../components/Notification/Notification";
import HeroTransparent from "../components/HeroTransparent/HeroTransparent";
import Hero from "../components/Hero/Hero";
import List from "../components/List/List";

const Addexc = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();
  const [selects, setSelects] = useState();

  const [dt, setDt] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  const subtitle =
    "'The body without pain - the mind without confusion'. Creating this state is the mission of Hamburg Athletics. Everyone knows those moments when we are completely immersed in what we are doing. Moments when the world seems to stand still.";

  const getData = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/users`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();

    setUsers(data);
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
  };
  useEffect(() => {
    getSelection();
  }, []);

  const removeExercise = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/exercises/${id}`,
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
      if (data.err) {
        return setError(data.err);
      }
      getSelection();
      return setError("Succesfully removed a Workout");
    } catch (err) {
      return setError(err.message);
    }
  };

  const addExercise = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/exercises/add`,
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
      getSelection();
      if (data.err) {
        return setError(data.err);
      }
      return setError("Succesfully added an Exercise");
    } catch (err) {
      return setError(err.message);
    }
  };
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
            <h1>Today is {dt.slice(0, 10)}</h1>
            <h1>Local time: {dt.slice(11)}</h1>
          </HeroTransparent>
          <div className="homeSectionContainerAdd">
            <div className="imgContainer">
              <img
                src={Addexcpic}
                alt="Hamburg Egi"
                className="under-image"
                width="500px"
                height="350px"
              />
            </div>
            <div className="addExercise">
              <AddFavExcForm handleSubmit={addExercise}></AddFavExcForm>
            </div>
          </div>
          <div className="homeBottom">
            <Hero subtitle={subtitle}></Hero>
          </div>
          <div className="favExercises">
            <HeroTransparent>
              <h1>Favourite Exercises</h1>
            </HeroTransparent>
            {selects && selects.length === 0 && (
              <div className="nodata">No Favourite Exercises detected...</div>
            )}
            {selects && selects.length > 0 && (
              <List
                options={selects}
                handleSubmit={(e) => {
                  removeExercise(Number(e.currentTarget.value));
                }}
              ></List>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Addexc;
