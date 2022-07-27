import React, { useState, useEffect } from "react";
import Greeting from "../components/Greeting/Greeting";
import Section from "../components/Section/Section";
import AddExerciseForm from "../components/AddExerciseForm/AddExerciseForm";
import Notification from "../components/Notification/Notification";
import HeroTransparent from "../components/HeroTransparent/HeroTransparent";
import Hero from "../components/Hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Home1 from "../assets/home1.jpeg";
import Home2 from "../assets/home2.jpeg";
import Home3 from "../assets/home3.jpeg";
import Home4 from "../assets/home4.jpeg";
import SectionOne from "../assets/SectionOne.png";
import CardList from "../components/CardList/CardList";
import EventList from "../components/EventList/EventList";
import Popup from "../components/Popup/Popup";
import RegisterEventForm from "../components/RegisterEventForm/RegisterEventForm";

const Home = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();
  const [selects, setSelects] = useState();
  const [sets, setSets] = useState();
  const [events, setEvents] = useState();
  const [popupOpen, setPopupOpen] = useState(false);

  const subtitle =
    "'The body without pain - the mind without confusion'. Creating this state is the mission of Hamburg Athletics. Everyone knows those moments when we are completely immersed in what we are doing. Moments when the world seems to stand still.";

  const photos = [Home1, Home2, Home3, Home4];

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

  const getEvents = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/users/events`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();

    setEvents(data);
    console.log(data);
  };
  useEffect(() => {
    getEvents();
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

  const addExercise = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/sets/addset`,
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
      getSets();
      return setError("Succesfully added a Workout");
    } catch (err) {
      return setError(err.message);
    }
  };

  const removeExercise = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/sets/${id}`,
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
      getSets();
      return setError("Succesfully removed a Workout");
    } catch (err) {
      return setError(err.message);
    }
  };

  const getSets = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/sets/sets`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();

    setSets(data);
  };
  useEffect(() => {
    getSets();
  }, []);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const registerEvent = async (inputs) => {
    try {
      const res = await fetch(`http://localhost:8080/v1/users/register-event`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (data.err) {
        return setError(data.err);
      }
      getSets();
      return setError("Succesfully registered at Event");
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
        <div className="homeSectionContainerData">
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
          <div className="homeSectionContainerAdd">
            <div className="imgContainer">
              <img src={SectionOne} alt="Hamburg Egi" className="under-image" />
            </div>
            {events && events.length === 0 && (
              <div className="nodata">No Upcoming Events detected...</div>
            )}
            {events && events.length > 0 && (
              <EventList events={events} handleClick={togglePopup}></EventList>
            )}
            {popupOpen && (
              <Popup handleClick={togglePopup}>
                {events &&
                  events.map((event) => (
                    <div className="popup-info">
                      <img src={event.logo} alt="Camp" />
                      <RegisterEventForm
                        events={events}
                        handleSubmit={registerEvent}
                      ></RegisterEventForm>
                    </div>
                  ))}
              </Popup>
            )}
            <div className="addWrapper">
              <div className="addExercise">
                <AddExerciseForm
                  handleSubmit={addExercise}
                  exercises={selects}
                ></AddExerciseForm>
              </div>
              <div className="homeswiper">
                <Swiper
                  modules={[Autoplay, Navigation, EffectFade]}
                  // spaceBetween={50}
                  navigation
                  effect={"fade"}
                  speed={600}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={1}
                  spaceBetween={0}
                  // scrollbar={{ draggable: true }}
                  loop={true}
                  className="myswiper"
                >
                  {photos.map((photo) => (
                    <SwiperSlide className="swiperslide">
                      <img src={photo} alt="Egi" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="homeBottom">
            <Hero subtitle={subtitle}></Hero>
          </div>
        </div>
      </Section>
      <Section>
        <div className="homeSectionData">
          <HeroTransparent>
            <h1>Your previous Workouts</h1>
          </HeroTransparent>
          <div className="homeTable">
            {sets && sets.length === 0 && (
              <div className="nodata">No previous workouts detected...</div>
            )}
            {sets && sets.length > 0 && (
              <CardList
                options={sets}
                handleSubmit={(e) => {
                  removeExercise(Number(e.currentTarget.value));
                  console.log(e.currentTarget.value);
                }}
              ></CardList>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
