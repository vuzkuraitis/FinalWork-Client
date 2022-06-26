import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Notification from "../components/Notification/Notification";
import SectionOne from "../components/SectionOne/SectionOne";
import BenefitsList from "../components/BenefitsList/BenefitsList";
import Hero from "../components/Hero/Hero";

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
      return setError("Registration Succesful");
    } catch (err) {
      return setError(err.message);
    }
  };
  return (
    <>
      {error && <Notification>{error}</Notification>}
      <SectionOne>
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
            </ul>
          </BenefitsList>
          <div className="registerContainer">
            <RegisterForm handleSubmit={registerUser}></RegisterForm>
          </div>
        </div>
      </SectionOne>
    </>
  );
};

export default Register;
