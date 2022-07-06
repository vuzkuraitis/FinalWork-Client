import styled from "styled-components";

export const Section = styled.div`
  /*Login*/
  font-family: "Roboto", sans-serif;
  .sectioneOneLogin {
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
    height: auto;
    position: relative;
    width: 100%;
    img {
      display: block;
    }
  }
  .under-image {
    height: auto;
    width: 100%;
  }
  .loginContainer {
    height: auto;
    width: 100%;
  }
  .formSection {
    margin: 0 auto;
    padding: 1rem;
  }
  .sectionThreeLogin {
    margin: 3rem auto;
  }

  /* Register */
  .registerWrapper {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    justify-content: space-between;
    width: 100%;
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
  /* Price */
  .priceBottom {
    margin-bottom: 3rem;
  }
  /* ChangePass */
  .changePassSectionContainer {
    display: flex;
    flex-wrap: wrap;
  }
  .changePassContainer {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    .sectionTwoLogin {
      margin: 0 auto;
      width: 90%;
    }
    .sectioneOneLogin {
      margin-bottom: 4rem;
      margin: 3rem auto;
      width: 90%;
    }
    .sectionThreeLogin {
      width: 90%;
    }
    .imgContainer {
      width: 70%;
    }
    .loginContainer {
      width: 25%;
    }
    .registerWrapper {
      margin: 15rem auto;
      width: 90%;
    }
    .registrationBenefits,
    .registerContainer {
      width: 45%;
    }
    .homeSectionContainerData,
    .priceSectionContainerData,
    .changeSectionContainerData {
      margin: 0 auto;
      width: 90%;
    }
    .addExercise {
      width: 25%;
    }
    .homeSectionContainerAdd {
      justify-content: space-between;
      margin: 3rem 0;
    }
    .homeBottom,
    .priceBottom {
      margin-bottom: 3rem;
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
      width: 30%;
    }
    .favExercises > .nodata {
      color: #787a91;
      margin: 1rem 0;
    }
  }
  @media screen and (min-width: 1201px) {
    margin: 0 auto;
    width: 70%;
    .imgContainer {
      width: 60%;
    }
    .addExercise {
      width: 35%;
    }
    .addExercise > .section {
      margin: 0;
      width: 100%;
    }
    .changePassContainer > .section {
      margin: 0;
      width: 100%;
    }
    .loginContainer > .section {
      margin: 0;
      width: 100%;
    }
    .registerContainer > .section {
      margin: 0;
      width: 100%;
    }
    .loginContainer {
      width: 35%;
    }
  }
`;
