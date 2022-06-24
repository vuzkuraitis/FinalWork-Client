import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/exercises`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const resData = await res.json();

    setData(resData);
  };
  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    <div>Loading...</div>;
  }
  if (data) {
    // return <div>{data}</div>;
    console.log(data);
  }
};

export default Home;
