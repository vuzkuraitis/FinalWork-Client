import styled from "styled-components";

export const SectionOne = styled.div`
  .sectionOne-container {
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
  .registerContainer {
    width: 100%;
    height: auto;
  }
  .registrationBenefits {
    width: 100%;
    height: auto;
  }
  .registerWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
  }
  @media screen and (min-width: 481px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    .sectionOne-container {
      width: 90%;
      margin: 10rem auto;
      margin-bottom: 4rem;
    }
    .imgContainer {
      width: 70%;
    }
    .loginContainer {
      width: 25%;
    }
    .registerContainer {
      width: 45%;
    }
    .registrationBenefits {
      width: 45%;
    }
    .registerWrapper {
      margin-top: 5rem;
    }
  }
  @media screen and (min-width: 1201px) {
    .imgContainer {
      width: 60%;
    }
    .loginContainer {
      width: 35%;
    }
  }
`;
