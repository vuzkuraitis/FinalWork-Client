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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

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
            {/* <img
              src={SectionOneImage}
              alt="Hamburg Egi"
              className="under-image"
            /> */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                          <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          class="under-video"
                          src=${BackVideo}
                          type="video/mp4"
                        />
            `,
              }}
            ></div>
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
            // spaceBetween={50}
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
              <SwiperSlide className="swiperslide">
                <img src={photo} alt="Egi" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="priceBottom">
          <Hero subtitle={subtitle}></Hero>
        </div>
        <div className="priceSectionContainer">
          <CardListPrice products={products}></CardListPrice>
        </div>
      </Section>
    </>
  );
};

export default Login;
