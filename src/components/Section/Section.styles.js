import styled from "styled-components";

export const Section = styled.div`
  /*Login*/
  font-family: "Roboto", sans-serif;
  .sectioneOneLogin {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 6.5rem auto;
    margin-bottom: 3rem;
    font-family: "Roboto", sans-serif;
    width: 100%;
  }
  .imgContainer {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: auto;
    width: 100%;
    img {
      display: block;
    }
  }
  .under-image {
    width: 100%;
    height: auto;
  }
  .loginContainer {
    width: 100%;
    height: auto;
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
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin-top: 6.5rem;
  }
  .registerContainer {
    width: 100%;
    height: auto;
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
    margin: 6.5rem auto;
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
    margin: 3rem 0;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    .sectionTwoLogin {
      width: 90%;
      margin: 0 auto;
    }
    .sectioneOneLogin {
      width: 90%;
      margin: 10rem auto;
      margin-bottom: 4rem;
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
      width: 90%;
      margin: 15rem auto;
    }
    .registrationBenefits,
    .registerContainer {
      width: 45%;
    }
    .homeSectionContainerData {
      width: 90%;
      margin: 0 auto;
    }
    .addExercise {
      width: 25%;
    }
    .homeSectionContainerAdd {
      margin: 3rem 0;
      justify-content: space-between;
    }
    .homeBottom {
      margin-bottom: 3rem;
    }
    .homeSectionData {
      width: 90%;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1201px) {
    .imgContainer {
      width: 60%;
    }
    .addExercise {
      width: 30%;
    }
    .loginContainer {
      width: 35%;
    }
  }
`;
