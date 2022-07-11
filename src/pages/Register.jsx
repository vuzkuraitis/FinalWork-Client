import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Notification from "../components/Notification/Notification";
import Section from "../components/Section/Section";
import BenefitsList from "../components/BenefitsList/BenefitsList";
import Hero from "../components/Hero/Hero";
import RegistrationPic from "../assets/reg.jpg";

const Register = () => {
  const [error, setError] = useState();

  const registerUser = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/register`,
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
      return setError("Registration Successful");
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
        </div>
      </Section>
      <Section>
        <div className="sectionOneRegister">
          <div className="imgRegContainer">
            <div className="overlay"></div>
            <img
              src={RegistrationPic}
              alt="Hamburg Egi"
              className="under-image"
            />
          </div>
          <div className="registerContainer">
            <RegisterForm handleSubmit={registerUser}></RegisterForm>
          </div>
          <div className="registerWrapper">
            <BenefitsList className="registrationBenefits">
              <Hero title="Why is better to be registered?" />
              <ul>
                <li>Exclusive content to registered members</li>
                <li>
                  Online tranings and workshops, even if you are not able to
                  attend.
                </li>
                <li>Best offers, and discounts to all members</li>
                <li>Keep all your workouts in one place</li>
                <li>Coach can be aware of your physical activity</li>
              </ul>
            </BenefitsList>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Register;
