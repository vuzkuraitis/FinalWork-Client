import React, { useState } from "react";
import ResetPassForm from "../components/ResetPassForm/ResetPassForm";
import Notification from "../components/Notification/Notification";
import Section from "../components/Section/Section";
import BenefitsList from "../components/BenefitsList/BenefitsList";
import Hero from "../components/Hero/Hero";
import RegistrationPic from "../assets/reg.jpg";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const resetPassword = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/reset-password`,
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
      navigate("/new-password");
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
          <div className="resetContainer">
            <ResetPassForm handleSubmit={resetPassword}></ResetPassForm>
          </div>
          <div className="registerWrapper">
            <BenefitsList className="registrationBenefits">
              <Hero title="Please follow these steps for Password Reset" />
              <ul>
                <li>
                  If you have forgotten your password, please type in your
                  email.
                </li>
                <li>
                  If your email is in our database, you will receive a unique
                  reset Code
                </li>
                <li>
                  Once you will receive an email you can proceed to the next
                  step.
                </li>
              </ul>
            </BenefitsList>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PasswordReset;
