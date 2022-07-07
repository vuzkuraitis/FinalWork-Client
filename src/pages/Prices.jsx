import React, { useState, useEffect } from "react";
import Greeting from "../components/Greeting/Greeting";
import Section from "../components/Section/Section";
import Notification from "../components/Notification/Notification";
import HeroTransparent from "../components/HeroTransparent/HeroTransparent";
import Hero from "../components/Hero/Hero";
import CardListPrice from "../components/CardListPrice/CardListPrice";

const Home = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();

  const [dt, setDt] = useState(new Date().toLocaleString("en-GB"));

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString("en-GB"));
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  const products = [
    {
      title: "Monthly subscription",
      subtitle:
        "A quality what you get is priceless. The effectivenes of Trainings are in the Highest Level.",
      text: "8 Trainings",
      price: "400€",
    },
    {
      title: "3 Month subscription",
      subtitle:
        "During this amount of time you will learn a completely new lifestyle, which will help you to clear you mind and soul from a dauly routine.",
      text: "24 Trainings",
      price: "1100€",
    },
    {
      title: "6 Month subscription",
      subtitle:
        "Not only you will set your mind and soul free, but also you will be invited into special Training Camps all over the world.",
      text: "48 Trainings",
      price: "2200€",
    },
  ];

  const subtitle = `"Hello, I'm Egi, I'm the main person and the face of "Hamburg Athletics".
    I teach my clients boxing, Brazilian Jui Jutsu (BJJ), self-defense, athletics training and movement. I have more than 20 years of professional experience in individual and group training and I can say proudly: I have been called for this!
    My mission is your potential through movement and i want you to overcome your previous capacities and open new ones.
    Whether in personal training, at camps or in my workshops, my training concepts are 100% individually acknowledged to everyone.
    I look forward to every opportunity that presents itself to give people a better quality of life."`;

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
        <div className="priceSectionContainerData">
          <HeroTransparent>
            <h1>Local time: {dt}</h1>
          </HeroTransparent>
          <div className="priceSectionContainer">
            <CardListPrice products={products}></CardListPrice>
          </div>
          <div className="priceBottom">
            <Hero subtitle={subtitle}></Hero>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
