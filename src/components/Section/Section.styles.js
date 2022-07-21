import styled from "styled-components";

export const Section = styled.div`
  /*Login*/
  font-family: "Roboto", sans-serif;
  .sectioneOneLogin {
    background: #000000;
    display: flex;
    flex-wrap: wrap;
    font-family: "Roboto", sans-serif;
    justify-content: space-between;
    margin-bottom: 3rem;
    margin: auto;
    width: 100%;
    z-index: 1;
  }
  .imgContainer {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    video {
      display: block;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .under-video {
    height: auto;
    width: 100%;
  }
  .loginContainer {
    height: auto;
    width: 100%;
  }
  .sectionThreeLogin {
    width: 100%;
    margin: 3rem auto;
    .myswiper {
      width: 100%;
      .swiperslide {
          display: flex;
          justify-content: center;
          transform: translateZ(0);
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .swiper-button-prev,
        .swiper-button-next {
          display: none;
        }
    }
  }
  .offer {
    width: 100%;
  }
  .feedback {
    width: 100%;
    .myswiper {
      width: 100%;
      .swiperslide {
        p{
          margin: 0 auto;
          width: 50%;
        }
      }
      .swiper-button-prev,
        .swiper-button-next {
          display: none;
        }
    }
  }
  /* Register */
  .sectionOneRegister {
    background: #000000;
    display: flex;
    flex-wrap: wrap;
    font-family: "Roboto", sans-serif;
    justify-content: space-between;
    position: relative
    width: 100%;
    z-index: 1;
  }
  .registerWrapper {
    color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    justify-content: space-between;
    width: 100%;
  }
  .imgRegContainer {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .registerContainer {
    height: auto;
    width: 100%;
  }
  .registrationBenefits {
    width: 100%;
    height: auto;
    ul {
      margin-right: 1rem;
    }
  }
  /* Home */
  .homeSectionContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 6.4rem auto;
    margin-bottom: 0;
    width: 100%;
  }
  .homeSectionContainerData {
      width:100%;
    }
  .homeSectionContainerAdd {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
  }
  .addExercise {
    width: 100%;
  }
  .homeTable {
    margin: 3rem auto;
    width: 90%;
  }
  .homeTable > .nodata {
    color: #787a91;
    padding: 1rem;
  }
  .favExercises > .nodata {
    color: #787a91;
    padding: 1rem;
  }
  .addWrapper {
      display:flex;
      flex-wrap: wrap;
      width: 100%;
    }
    .homeswiper {
      width: 100%;
      .myswiper {
        width:100%;
        .swiperslide {
          img {
            width: 100%;
            object-fit: cover;
          }
        }
        .swiper-button-prev,
        .swiper-button-next {
          display: none;
        }
      }
    }
  /* Price */
  .priceBottom {
    margin-bottom: 3rem;
  }
  /* ChangePass */
  .changePassContainer {
    width: 100%;
  }
  /* Password reset */
  .resetContainer {
    height: auto;
    width: 100%;
  }
  .newPasswordContainer {
    height: auto;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    .homeSectionContainerData > .homeSectionContainerAdd > .imgContainer {
    background-position: center;
    background-repeat: no-repeat;
    height: 50vh;
    position: relative;
    width: 100%;
    video {
      display: block;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
    .sectionTwoLogin {
      margin: 0 auto;
      width: 90%;
    }
    .sectioneOneLogin {
      position: relative
      border: 0.25rem solid #242f9b;
      border-radius: 1rem;
      margin-bottom: 4rem;
      width: 100%;
    }
    .sectionThreeLogin {
      width: 90%;
      .myswiper {
        width: 100%;
        height: 60vh;
        .swiperslide {
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .feedback {
      margin: 0 auto;
      width: 90%;
      .myswiper {
        width: 100%;
        .swiperslide {
          p{
          width: 100%;
        }
        }
      }
    }
    .imgContainer {
      position:relative;
      width: 100%;
    }
    .loginContainer {
      background: rgba(0,0,0,0.5);
      border-radius: 0.25rem;
    }
    .imgRegContainer {
      position:relative;
      width: 100%;
    }
    .overlay {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
  }
    .sectionOneRegister {
      width: 100%;
    }
    .loginContainer, .registerContainer, .resetContainer, .newPasswordContainer {
      position: absolute;
      top: 20%;
      right: 7%;
      width: 25%;
      .hero {
        background: transparent;
      }
    }
    .registerWrapper {
      position: absolute;
      top: 20%;
      left: 8%;
      width: 50%;
    }
    .registrationBenefits {
      width: 100%;
    }
    .registerWrapper > .registrationBenefits > .hero {
      background: transparent;
    }
    .registrationBenefits > .hero > .hero-body > h1 {
      font-size: 1.25rem;
    }
    .registrationBenefits > ul > li {
      font-size: 0.75rem;
    }
    .registrationBenefits > ul > li:hover {
      color: #646fd4;
    }
    .priceSectionContainer {
      margin: 0 auto;
      width: 90%;
      .myswiper {
        display: none;
      }
    }
    .addWrapper {
      align-items: center;
      justify-content: space-between;
      margin: 3rem auto;
      width: 90%;
    }
    .addExercise {
      width: 35%;
    }
    .homeSectionContainerAdd > .addExercise {
      position: absolute;
      top: 20%;
      right: 8%;
      width: 25%;
    }
    .addExercise > .hero {
      background: transparent;
    }
    .homeswiper {
      width: 45%;
      .myswiper {
        width:100%
        height: 50%;
        .swiperslide {
          img {
            width: 100%;
            height: 80%;
            object-fit: cover;
          }
        }
      }
    }
    .homeSectionContainerAdd {
      position: relative;
      justify-content: space-between;
    }
    .homeBottom{
      width: 90%;
      margin: 0 auto;
    }
    .priceBottom {
      margin: 0 auto;
      width: 90%;
    }
    .homeSectionData {
      margin: 0 auto;
      width: 90%;
    }
    .homeTable > .nodata {
      color: #787a91;
      margin: 1rem 0;
    }
    .homeTable {
      margin: 3rem auto;
      width: 100%;
    }
    .changePassSectionContainer {
      display: flex;
      justify-content: space-between;
      margin: 3rem auto;
    }
    .changePassSectionContainer > .imgContainer {
      width: 60%;
    }
    .changePassContainer {
      position: absolute;
      top: 20%;
      left: 8%;
      width: 25%;
    }
    .changePassContainer > .hero {
      background: transparent;
    }
    .favExercises {
      width: 90%;
      margin: 0 auto;
    }
    .favExercises > .nodata {
      color: #787a91;
      margin: 1rem 0;
    }
    .offer {
      margin: 0 auto;
      width:90%;    
  }
  }

  @media screen and (min-width: 1201px) {
    .registrationBenefits > .hero > .hero-body > h1 {
      font-size: 2rem;
    }
    .registrationBenefits > ul > li {
      font-size: 1rem;
    }
    .feedback {
      .myswiper {
        .swiperslide {
          width: 30%;
        }
      }
    }
    .favExercises {
      margin-left: 5%;
      float: left;
      width: 45%;
    }
  }
`;
