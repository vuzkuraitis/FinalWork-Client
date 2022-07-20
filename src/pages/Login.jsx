import React, { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import Notification from "../components/Notification/Notification";
import { useNavigate } from "react-router-dom";
import Section from "../components/Section/Section";
import HeroSmall from "../components/HeroSmall/HeroSmall";
import CardListPrice from "../components/CardListPrice/CardListPrice";
import Hero from "../components/Hero/Hero";
import BackVideo from "../assets/bg.mp4";
import Card0 from "../assets/Card0.jpg";
import Card1 from "../assets/Card1.jpeg";
import Card2 from "../assets/Card2.jpeg";
import PersonalTraining from "../assets/PersonalTraining.jpeg";
import Camps from "../assets/Camps.jpeg";
import Workshops from "../assets/Workshops.jpeg";
import Movement from "../assets/Movement.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import CardListOffer from "../components/CardListOffer/CardListOffer";
import CardPrice from "../components/CardPrice/CardPrice";

const Login = () => {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const heroSubtitle = `"Hello, I'm Egi, I'm the main person and the face of "Hamburg Athletics".
  I teach my clients boxing, Brazilian Jui Jutsu (BJJ), self-defense, athletics training and movement. I have more than 20 years of professional experience in individual and group training and I can say proudly: I have been called for this!
  My mission is your potential through movement and i want you to overcome your previous capacities and open new ones.
  Whether in personal training, at camps or in my workshops, my training concepts are 100% individually acknowledged to everyone.
  I look forward to every opportunity that presents itself to give people a better quality of life."`;

  const subtitle =
    "I make sure that people are able to fully exploit their extraordinary potential. We were born not to be limited by mental or physical limitations. We are here to achieve excellence.";

  const photos = [Card0, Card1, Card2];

  const products = [
    {
      title: "Hit & Run",
      subtitle:
        "A quality what you get is priceless. The effectivenes of Trainings are in the Highest Level.",
      text: "1 Training",
      price: "150€",
    },
    {
      title: "1 Month subscription",
      subtitle:
        "During this amount of time you will learn a completely new lifestyle, which will help you to clear you mind and soul from a dauly routine.",
      text: "8 Trainings",
      price: "1100€",
    },
    {
      title: "3 Month subscription",
      subtitle:
        "Not only you will set your mind and soul free, but also you will be invited into special Training Camps all over the world.",
      text: "24 Trainings",
      price: "3000€",
    },
  ];
  const offers = [
    {
      image: PersonalTraining,
      title: "Personal Training",
      subtitle:
        "You and your project here are 100% in focus. For each training session you will receive an individual concept, as well as exercises what to do at home.",
    },
    {
      image: Camps,
      title: "Camps",
      subtitle:
        "Holiday with a difference, this is what I offer at multi-day training camps in Europe's most beautiful places every year. My experience will give you a lot of exercise, a diet tailored to the daily training and the right mindset. Ideal for realigning your focus far away from everyday life and soaking up the sun and positive vibes.",
    },
    {
      image: Workshops,
      title: "Workshops",
      subtitle:
        "In my workshops, I teach small groups and companies as part of events lasting several hours.",
    },
    {
      image: Movement,
      title: "Movement",
      subtitle:
        "Movement takes place in the form of movement courses in Hamburg. In a great, constantly growing team, we are pursuing the goal of a free and flexible body together. Why movement? Because life is movement.",
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
        <div className="homeSectionContainer">
          {error && (
            <Notification handleClick={() => setError(null)}>
              {error}
            </Notification>
          )}
        </div>
      </Section>
      <Section>
        <div className="sectioneOneLogin">
          <div className="imgContainer">
            <video
              width="100%"
              loop
              autoPlay
              playsInline
              muted
              className="under-video"
              src={BackVideo}
              type="video/mp4"
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
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            navigation
            effect
            speed={600}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={0}
            // scrollbar={{ draggable: true }}
            loop={true}
            breakpoints={{
              1201: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            className="myswiper"
          >
            {photos.map((photo) => (
              <SwiperSlide className="swiperslide" key={photo}>
                <img src={photo} alt="Egi" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="priceBottom">
          <Hero subtitle={subtitle}></Hero>
        </div>
        <div className="priceSectionContainer">
          <Hero title="Prices for Personal Training"></Hero>
          <Swiper
            modules={[Navigation, Pagination, EffectFade]}
            navigation
            effect
            loop
            pagination={{ clickable: true }}
            speed={800}
            slidesPerView={1}
            className="myswiper"
          >
            {products.map((product) => (
              <SwiperSlide className="swiperslide" key={product.title}>
                <CardPrice
                  title={product.title}
                  subtitle={product.subtitle}
                  text={product.text}
                  price={product.price}
                ></CardPrice>
              </SwiperSlide>
            ))}
          </Swiper>
          <CardListPrice products={products}></CardListPrice>
        </div>
        <div className="offer">
          <Hero title="What I Offer To You"></Hero>
          <CardListOffer offers={offers}></CardListOffer>
        </div>
      </Section>
    </>
  );
};

export default Login;
