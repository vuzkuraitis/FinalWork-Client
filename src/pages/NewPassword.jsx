import React, { useState } from "react";
import ForgotPassForm from "../components/ForgotPassForm/ForgotPassForm";
import Notification from "../components/Notification/Notification";
import Section from "../components/Section/Section";
import BenefitsList from "../components/BenefitsList/BenefitsList";
import Hero from "../components/Hero/Hero";
import RegistrationPic from "../assets/reg.jpg";

const PasswordReset = () => {
  const [error, setError] = useState();

  const updatePassword = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/new-password`,
        {
          method: "POST",
          headers: {
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
      return setError(data.msg);
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
          <div className="newPasswordContainer">
            <ForgotPassForm handleSubmit={updatePassword}></ForgotPassForm>
          </div>
          <div className="registerWrapper">
            <BenefitsList className="registrationBenefits">
              <Hero title="You are only couple steps away from setting up your new Password" />
              <ul>
                <li>Please, type in your email.</li>
                <li>
                  Copy the code from your email that you have received by
                  submitting reset password.
                </li>
                <li>Set up your New Password</li>
              </ul>
            </BenefitsList>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PasswordReset;
