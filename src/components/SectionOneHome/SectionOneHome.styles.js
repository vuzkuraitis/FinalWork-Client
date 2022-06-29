import styled from "styled-components";

export const SectionOneHome = styled.div`
  .sectionOne-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 6.5rem auto;
    margin-bottom: 0;
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
