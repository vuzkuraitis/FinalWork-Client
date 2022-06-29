import styled from "styled-components";

export const SectionTwoHome = styled.div`
  .homeSectionContainerData {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
  }
  .imgContainerHome {
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
  .addExercise {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 90%;
  }
  @media screen and (min-width: 1024px) {
    .homeSectionContainerData {
      margin: 3rem 0;
      justify-content: space-between;
    }
    .imgContainerHome {
      width: 50%;
    }
    .addExercise {
      width: 40%;
    }
    .homeBottom {
      margin-bottom: 3rem;
    }
  }
`;
