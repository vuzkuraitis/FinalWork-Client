import styled from "styled-components";

export const SectionTwo = styled.div`
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

  .sectionTwo-container {
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    .sectionTwo-container {
      width: 90%;
    }
  }
`;
