import styled from "styled-components";

export const Hero = styled.div`
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  padding: 1rem;
  h1 {
    font-size: 1.25rem;
  }

  .subtitle {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 1201px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
