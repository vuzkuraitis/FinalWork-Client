import React, { useState, useEffect } from "react";
import Greeting from "../components/Greeting/Greeting";
import Section from "../components/Section/Section";
import Notification from "../components/Notification/Notification";
import HeroTransparent from "../components/HeroTransparent/HeroTransparent";
import ChangePassForm from "../components/ChangePassForm/ChangePassForm";
import ChangePass from "../assets/ChangePass.jpeg";
import HeroSmall from "../components/HeroSmall/HeroSmall";

const Changepass = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();

  const [dt, setDt] = useState(new Date().toLocaleString("en-GB"));

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString("en-GB"));
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  const subtitle = [
    "Whenever you doubt - just do it. Same is with password, if you think you need to change it - do it!",
  ];

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

  const changePassword = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/change-password`,
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

      if (data.err) {
        return setError(data.err);
      }
      return setError("Password was changed Succesfully");
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
        <div className="changeSectionContainerData">
          <HeroTransparent>
            <h1>Local time: {dt}</h1>
          </HeroTransparent>
          <div className="changePassSectionContainer">
            <div className="changePassContainer">
              <ChangePassForm handleSubmit={changePassword}></ChangePassForm>
            </div>

            <div className="imgContainer">
              <img
                src={ChangePass}
                alt="Hamburg Egi"
                className="under-image"
                width="500px"
                height="350px"
              />
            </div>
          </div>
          <div className="homeBottom">
            <HeroSmall>
              <p>{subtitle}</p>
            </HeroSmall>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Changepass;
