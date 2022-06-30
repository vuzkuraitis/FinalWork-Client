import React, { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import Notification from "../components/Notification/Notification";
import { useNavigate } from "react-router-dom";
import Section from "../components/Section/Section";
import HeroSmall from "../components/HeroSmall/HeroSmall";
import CardList from "../components/CardList/CardList";
import SectionOneImage from "../assets/SectionOne.png";
import Card0 from "../assets/Card0.jpg";
import Card1 from "../assets/Card1.jpeg";
import Card2 from "../assets/Card2.jpeg";

const Login = () => {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const heroSubtitle =
    "I make sure that people are able to fully exploit their extraordinary potential. We were born not to be limited by mental or physical limitations. We are here to achieve excellence.";

  const products = [
    {
      image: Card0,
      subtitle: "Learn to move like you have never dreamed before.",
    },
    {
      image: Card1,
      subtitle: "Build your inner and outter strength.",
    },
    {
      image: Card2,
      subtitle: "Meet new people, share ideas, develop lifestyle.",
    },
  ];

  const loginUser = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );
      const data = await res.json();

      if (data.err) {
        return setError(data.err);
      }

      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (err) {
      return setError(err.message);
    }
  };
  return (
    <>
      <Section>
        {error && (
          <Notification handleClick={() => setError(null)}>
            {error}
          </Notification>
        )}
        <div className="sectioneOneLogin">
          <div className="imgContainer">
            <img
              src={SectionOneImage}
              alt="Hamburg Egi"
              className="under-image"
              width="500px"
              height="350px"
            />
          </div>

          <div className="loginContainer">
            <LoginForm handleSubmit={loginUser}></LoginForm>
          </div>
        </div>
      </Section>
      <Section>
        <div className="sectionTwoLogin">
          <HeroSmall subtitle={heroSubtitle}></HeroSmall>
        </div>
      </Section>
      <Section>
        <div className="sectionThreeLogin">
          <CardList products={products}></CardList>
        </div>
      </Section>
    </>
  );
};

export default Login;
