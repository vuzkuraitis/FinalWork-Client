import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Notification from "../components/Notification/Notification";

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
      <RegisterForm handleSubmit={registerUser}></RegisterForm>
    </>
  );
};

export default Register;
